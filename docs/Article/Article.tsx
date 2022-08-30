import Link from "next/link";
import * as React from "react";

interface Props {
  href: "string";
}

export default function Article(props: Props) {
  const [meta, setMeta] = React.useState<any>();

  React.useEffect(() => {
    fetch(`/api/docs/meta${props.href.substring(5)}`)
      .then((res) => res.json())
      .then((data) => {
        setMeta(data);
      });
  }, []);
  try {
    return (
      <Link href={props.href}>
        <div className="flex-col mt-3 p-4 border rounded-lg dark:border-black-700 border-black-200 hover:border-black-300 duration-200 dark:hover:border-black-600">
          <div className="text-2xl font-bold">{meta.title}</div>
          <div className="text-black-300 mt-1">{meta.description}</div>
        </div>
      </Link>
    );
  } catch {
    return (
      <Link href={props.href}>
        <div className="flex-col p-4 border rounded-lg dark:border-black-700 border-black-200"></div>
      </Link>
    );
  }
}
