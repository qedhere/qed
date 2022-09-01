import * as React from "react";
import Image from "next/image";

export default function Avatar(props: any) {
  const contributors = Array(props.contributors);

  return (
    <div className="flex gap-2 flex-wrap">
      {contributors ? (
        contributors.map((acc: string) => (
          <a
            href={`https://github.com/${acc}`}
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline"
            key={acc}
          >
            <Image
              alt="Contributors"
              src={`https://github.com/${acc}.png`}
              width="40px"
              height="40px"
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
