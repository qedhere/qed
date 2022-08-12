import Link from "next/link";
import { useRouter } from "next/router";

export default function SidebarLink(props: any) {
  const router = useRouter();

  if (router.pathname == props.href) {
    return (
      <div>
        <div className="rounded-md bg-[rgba(0,112,243,0.1)] flex items-center font-semibold p-2 pl-4 text-success-200 dark:text-success-400">
          {props.children}
        </div>
      </div>
    );
  } else {
    return (
      <Link href={props.href}>
        <div className="rounded-md flex items-center p-2 pl-4 hover:bg-black-100 active:bg-black-200 dark:hover:bg-black-800 dark:active:bg-black-700 text-black-400 dark:text-black-500 duration-200">
          {props.children}
        </div>
      </Link>
    );
  }
}
