import Link from "next/link";
import { animated } from "@react-spring/web";
import { useRouter } from "next/router";

export default function HeaderLink(props: any) {
  const router = useRouter();

  if (props.noanim) {
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
  } else {
    if (router.pathname == props.href) {
      return (
        <animated.div
          style={props.style}
          className="text-sm dark:text-black-200 duration-100 text-black-700 tracking-wide"
        >
          {props.text}
        </animated.div>
      );
    } else {
      return (
        <animated.div
          style={props.style}
          className="text-sm dark:text-black-400 dark:hover:text-black-200 duration-100 text-black-400 hover:text-black-700 tracking-wide"
        >
          <Link href={props.href} target="_blank" passHref>
            {props.text}
          </Link>
        </animated.div>
      );
    }
  }
}
