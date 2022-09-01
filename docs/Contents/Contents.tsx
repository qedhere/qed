import Link from "next/link";

import { LinkExternalIcon, PlusIcon } from "@primer/octicons-react";

export default function Contents(props: any) {
  return (
    <div className="w-full flex gap-5">
      {props.title.map((item: any) => {
        return (
          <Link
            key={item}
            href={props.baseURL + props.href[props.title.indexOf(item)]}
            passHref
          >
            <a
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <button className="flex p-2 pl-4 pr-4 bg-black-200 dark:bg-black-700 rounded-md items-center hover:bg-neutral-300 dark:hover:bg-black-600 duration-200">
                <div className="font-bold text-sm">{item}</div>
                <div className="grow w-[20px]"></div>
                <div className="">
                  <LinkExternalIcon size={18} />
                </div>
              </button>
            </a>
          </Link>
        );
      })}
      <button className="border-dashed flex p-2 pl-4 pr-4 border-2 border-black-200 dark:border-black-700 text-black-400 hover:bg-black-200 hover:text-black-500 dark:hover:bg-black-700 dark:hover:text-black-300 rounded-md items-center duration-200">
        <a
          href="https://github.com/qedhere/qed/issues/new?assignees=&labels=&template=article-request.md&title="
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div className="font-bold text-sm">
            <PlusIcon />
          </div>
        </a>
      </button>
    </div>
  );
}
