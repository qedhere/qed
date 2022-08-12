import * as React from "react";
import { useRouter } from "next/router";

export default function Avatar() {
  const [contributors, setContributors] = React.useState([]);
  const router = useRouter();

  React.useEffect(() => {
    fetch(`/api/docs/meta/${router.pathname.substring(5)}`)
      .then((res) => res.json())
      .then((data) => {
        setContributors(data.contributors);
      });
  }, []);
  return (
    <div className="flex gap-2 flex-wrap">
      {contributors ? (
        contributors.map((acc) => (
          <a
            href={`https://github.com/${acc}`}
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline"
          >
            <img
              src={`https://github.com/${acc}.png`}
              width="40px"
              style={{ borderRadius: "100%" }}
              className="border border-black-300 dark:border-black-700"
            />
          </a>
        ))
      ) : (
        <div></div>
      )}
    </div>
  );
}
