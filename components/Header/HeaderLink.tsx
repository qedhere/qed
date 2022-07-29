import Link from "next/link";
import { animated } from "@react-spring/web";

export default function HeaderLink(props: any) {
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
