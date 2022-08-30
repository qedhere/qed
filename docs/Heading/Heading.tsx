import { LinkIcon } from "@primer/octicons-react";
import { useRouter } from "next/router";

interface Props {
  h2: any;
  h3: any;
  children: string;
  h4: any;
  icon: any;
}

export default function Heading(props: Props) {
  const router = useRouter();
  console.log(props.children);

  if (props.h2) {
    return (
      <div>
        <div
          className="w-full h-[8px]"
          id={props.children.replace(/\s+/g, "-").toLowerCase()}
        ></div>
        <h2 className="flex items-center gap-3 group">
          {props.icon ? <div className="pb-1">{props.icon}</div> : null}
          <div>{props.children} </div>
          <span
            onClick={() =>
              router.push(
                router.asPath.substring(0, router.asPath.indexOf("#")) +
                  "#" +
                  props.children.replace(/\s+/g, "-").toLowerCase()
              )
            }
            className="flex items-center"
          >
            <LinkIcon
              size={24}
              className="opacity-0 group-hover:opacity-100 duration-200 text-black-300 dark:text-black-400 hover:text-success-300 dark:hover:text-success-400"
            />
          </span>
        </h2>
      </div>
    );
  } else if (props.h3) {
    return (
      <div>
        <div
          className="w-full h-[8px] mb-1"
          id={props.children.replace(/\s+/g, "-").toLowerCase()}
        ></div>
        <h3 className="flex items-center gap-3 group">
          {props.icon ? <div className="pb-1">{props.icon}</div> : null}
          <div>{props.children} </div>
          <span
            onClick={() =>
              router.push(
                router.asPath.substring(0, router.asPath.indexOf("#")) +
                  "#" +
                  props.children.replace(/\s+/g, "-").toLowerCase()
              )
            }
            className="flex items-center"
          >
            <LinkIcon
              size={20}
              className="opacity-0 group-hover:opacity-100 duration-200 text-black-300 dark:text-black-400 hover:text-success-300 dark:hover:text-success-400"
            />
          </span>
        </h3>
      </div>
    );
  } else {
    return <div></div>;
  }
}
