import { animated } from "@react-spring/web";

export default function HeaderIconButton(props: any) {
  return (
    <animated.div style={props.style}>
      <button
        className="text-sm dark:text-black-400 dark:hover:text-black-200 duration-100 duration-100 text-black-400 hover:text-black-700"
        onClick={props.onClick}
      >
        {props.text}
      </button>
    </animated.div>
  );
}
