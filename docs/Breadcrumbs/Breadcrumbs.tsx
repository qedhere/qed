import Link from "next/link";

const Slash = () => {
  return <div className="text-black-300">&#47;</div>;
};

export default function Breadcrumbs(props: any) {
  var defaultURL = "/docs/";

  if (props.crumbs) {
    return (
      <div className="pb-10 pt-5">
        <div className="flex gap-2">
          <Link href="/docs" passHref>
            <button className="no-underline text-black-500 dark:text-black-500 dark:hover:text-success-400 flex gap-2 font-mono hover:text-success-300 duration-200 w-fit">
              docs
              <Slash />
            </button>
          </Link>
          {props.crumbs.map((item: any) => {
            defaultURL += item + "/";

            return (
              <Link key={item} href={defaultURL} passHref>
                <button className="no-underline text-black-500 dark:text-black-500 dark:hover:text-success-400 flex gap-2 font-mono hover:text-success-300 duration-200 w-fit">
                  {item}
                  <Slash />
                </button>
              </Link>
            );
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div className="pb-10 pt-5">
        <Link href={defaultURL} passHref>
          <a className="no-underline text-black-500 dark:text-black-500 dark:hover:text-success-400 flex gap-2 font-mono hover:text-success-300 duration-200 w-fit">
            docs
            <Slash />
          </a>
        </Link>
      </div>
    );
  }
}
