import Link from "next/link";
import { useRouter } from "next/router";
import { Badge } from "@geist-ui/core";

export default function HeaderLink(props: any) {
  const router = useRouter();


    if (props.badge) {
      if (router.pathname == props.href) {
        return (
          <Badge.Anchor>
            <Badge scale={0.5} type="success">
              NEW
            </Badge>
            <div className="text-sm dark:text-black-200 duration-100 text-black-700 tracking-wide">
              {props.text}
            </div>
          </Badge.Anchor>
        );
      } else {
        return (
          <Badge.Anchor>
            <Badge scale={0.5} type="success">
              NEW
            </Badge>
            <div className="text-sm dark:text-black-400 dark:hover:text-black-200 duration-100 text-black-400 hover:text-black-700 tracking-wide">
              <Link href={props.href} target="_blank" passHref>
                {props.text}
              </Link>
            </div>
          </Badge.Anchor>
        );
      }
    } else {
      if (router.pathname == props.href) {
        return (
          <div className="text-sm dark:text-black-200 duration-100 text-black-700 tracking-wide">
            {props.text}
          </div>
        );
      } else {
        return (
          <div className="text-sm dark:text-black-400 dark:hover:text-black-200 duration-100 text-black-400 hover:text-black-700 tracking-wide">
            <Link href={props.href} target="_blank" passHref>
              {props.text}
            </Link>
          </div>
        );
      }
    }

}
