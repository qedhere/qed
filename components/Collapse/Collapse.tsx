import * as React from "react";

import { PlusIcon, DashIcon } from "@primer/octicons-react";

export default function Collapse(props: any) {
  const [active, setActive] = React.useState(false);

  const handleClick = () => {
    active == false ? setActive(true) : setActive(false);
  };

  return (
    <div className="w-full flex justify-center">
      <div
        className={`${
          active == false ? "max-h-[72px]" : "max-h-full"
        } overflow-hidden pb-5 pt-5 min-w-[300px] grow max-w-[800px] border-t dark:border-black-700 border-black-200 flex-col items-center ${
          props.border ? "border-b" : ""
        }`}
        style={{ transition: " height 200ms" }}
      >
        <div className="flex gap-2 group" onClick={handleClick}>
          {active == false ? (
            <PlusIcon
              size={24}
              className="w-fit group-hover:dark:text-black-400 text-black-500 dark:text-black-600 group-hover:text-black-300 group-active:text-black-200 duration-200 group-active:dark:text-black-500"
            />
          ) : (
            <DashIcon
              size={24}
              className="w-fit group-hover:dark:text-black-400 text-black-500 dark:text-black-600 group-hover:text-black-300 group-active:text-black-200 duration-200 group-active:dark:text-black-500"
            />
          )}
          <span className="text-xl font-bold">{props.title}</span>
        </div>
        <br />
        <div className="pl-8 text-black-500 dark:text-black-400">
          {props.children}
        </div>
      </div>
    </div>
  );
}
