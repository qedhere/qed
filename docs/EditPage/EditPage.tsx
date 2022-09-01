import * as React from "react";

import { MarkGithubIcon } from "@primer/octicons-react";
import Avatar from "@docs/Avatar/Avatar";

export default function EditPage(props: any) {
  return (
    <div className="">
      <div className="flex w-full items-center border-t border-black-200 dark:border-black-700 pt-10">
        <div className="mt-0">
          <Avatar contributors={props.contributors} />
        </div>
        <div className="grow"></div>
        <div className="text-sm">
          {props.link ? (
            <a
              href={
                "https://github.com/qedhere/qed/edit/main/pages/docs/" +
                props.link
              }
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline"
            >
              <span className="p-[6px] pl-[8px] pr-[8px] rounded-lg text-success-300 hover:bg-[rgba(0,112,243,0.1)] duration-200">
                <MarkGithubIcon />
                &nbsp;&nbsp;Edit this page
              </span>
            </a>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
}
