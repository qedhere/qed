import { animated, useSpring, config } from "@react-spring/web";

export default function Button(props: any) {
  const buttonProps = useSpring({
    to: {
      opacity: 1,
    },
    from: {
      opacity: 0,
    },
    delay: props.delay,
    config: config.wobbly,
  });

  if (props.type == "secondary") {
    if (props.invert) {
      return (
        <animated.button
          style={buttonProps}
          onClick={props.onClick}
          className="grow max-w-[400px] xs:max-w-[200px] xs:w-fit w-full duration-200 border dark:border-black-900 border-white hover:bg-black-900 hover:text-white bg-white hover:dark:bg-black-50 dark:bg-black-900 dark:hover:text-black-900 dark:text-white text-black-900 w-fit pl-10 pr-10 pt-3 pb-3 rounded-md hover:shadow-[0_0px_60px_-15px_rgba(0,0,0,0.4)] dark:hover:shadow-[0_0px_60px_-15px_rgba(255,255,255,0.2)]"
        >
          {props.children}
        </animated.button>
      );
    } else {
      return (
        <animated.button
          style={buttonProps}
          onClick={props.onClick}
          className="grow max-w-[400px] xs:max-w-[200px] xs:w-fit w-full duration-200 text-black-400 dark:text-black-500 border border-black-200 dark:border-black-700 bg-black-50 dark:bg-black-900 hover:border-black-800 hover:text-black-900 dark:hover:border-white dark:hover:text-white w-fit pl-10 pr-10 pt-3 pb-3 rounded-md hover:shadow-[0_0px_60px_-15px_rgba(0,0,0,0.4)] dark:hover:shadow-[0_0px_60px_-15px_rgba(255,255,255,0.2)]"
        >
          {props.children}
        </animated.button>
      );
    }
  } else {
    return (
      <animated.button
        style={buttonProps}
        onClick={props.onClick}
        className="grow max-w-[400px] xs:max-w-[200px] xs:w-fit w-full duration-200 dark:bg-black-50 bg-black-800 text-white dark:text-black-900 hover:bg-white dark:hover:bg-black-900 dark:hover:text-black-50 hover:text-black-900 border hover:border-black-900 dark:hover:border-white w-fit pl-10 pr-10 pt-3 pb-3 rounded-md hover:shadow-[0_0px_60px_-15px_rgba(0,0,0,0.4)] dark:hover:shadow-[0_0px_60px_-15px_rgba(255,255,255,0.2)]"
      >
        {props.children}
      </animated.button>
    );
  }
}
