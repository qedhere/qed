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
          className={`grow max-w-[400px] xs:max-w-[200px] xs:w-fit w-full duration-200 border dark:border-black-900 border-white hover:bg-black-900 hover:text-white bg-white hover:dark:bg-black-50 dark:bg-black-900 dark:hover:text-black-900 dark:text-white text-black-900 w-fit pl-10 pr-10 pt-3 pb-3 rounded-md hover:shadow-[0_0px_60px_-15px_rgba(0,0,0,0.4)] dark:hover:shadow-[0_0px_60px_-15px_rgba(255,255,255,0.2)] ${props.style}`}
        >
          {props.children}
        </animated.button>
      );
    } else {
      return (
        <animated.button
          style={buttonProps}
          onClick={props.onClick}
          className={`grow max-w-[400px] xs:max-w-[200px] xs:w-fit w-full duration-200 text-black-400 dark:text-black-500 border border-black-200 dark:border-black-700 bg-black-50 dark:bg-black-900 hover:border-black-800 hover:text-black-900 dark:hover:border-white dark:hover:text-white w-fit pl-10 pr-10 pt-3 pb-3 rounded-md hover:shadow-[0_0px_60px_-15px_rgba(0,0,0,0.4)] dark:hover:shadow-[0_0px_60px_-15px_rgba(255,255,255,0.2)] ${props.style}`}
        >
          {props.children}
        </animated.button>
      );
    }
  } else if (props.type == "gradient") {
    return (
      <animated.button
        style={buttonProps}
        onClick={props.onClick}
        className={`grow max-w-[400px] xs:max-w-[200px] xs:w-fit w-full duration-200 text-white text-white p-[1px] bg-gradient-to-tr from-success-400 to-pink-500 hover:border-black-800 dark:hover:border-white dark:hover:text-white w-fit rounded-md shadow-[0_0px_60px_-15px_rgba(118,89,241)] ${props.style}`}
      >
        <div className="w-full h-full dark:bg-black-800 bg-white text-black-900 flex items-center text-black-900 dark:text-white justify-center rounded-md hover:bg-transparent dark:hover:bg-transparent hover:text-white dark:hover:text-white duration-200">
          {props.children}
        </div>
      </animated.button>
    );
  } else {
    return (
      <animated.button
        style={buttonProps}
        onClick={props.onClick}
        className={`grow max-w-[400px] xs:max-w-[200px] xs:w-fit w-full duration-200 dark:bg-black-50 bg-black-800 text-white dark:text-black-900 hover:bg-white dark:hover:bg-black-900 dark:hover:text-black-50 hover:text-black-900 border hover:border-black-900 dark:hover:border-white w-fit pl-10 pr-10 pt-3 pb-3 rounded-md hover:shadow-[0_0px_60px_-15px_rgba(0,0,0,0.4)] dark:hover:shadow-[0_0px_60px_-15px_rgba(255,255,255,0.2)] ${props.style}`}
      >
        {props.children}
      </animated.button>
    );
  }
}
