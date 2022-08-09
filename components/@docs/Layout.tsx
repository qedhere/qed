import * as React from "react";

import Header from "@components/Header/Header";

export default function Layout(props: any) {
  return (
    <div>
      <Header noanim />
      <div className="flex w-full justify-center">
        <div className="pt-[256px] max-w-[1000px] w-full pr-4 pl-4 flex">
          <article className="prose prose-sm md:prose-md lg:prose-lg prose-black dark:prose-invert justify-center grow">
            <h1 className="tracking-tight" style={{ padding: 0, margin: 0 }}>
              {props.meta.title}
            </h1>
            <hr />
            {props.children}
          </article>
        </div>
      </div>
    </div>
  );
}
