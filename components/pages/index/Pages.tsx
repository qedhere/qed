import * as React from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import { animated, useSpring } from "@react-spring/web";
import { QuestionIcon } from "@primer/octicons-react";

export default function Pages() {
  return (
    <ParallaxLayer
      offset={0.9}
      speed={1.5}
      style={{
        display: "flex",
        zIndex: 200,
        width: "100%",
      }}
    >
      <div className="w-full mt-[200px]">
        <animated.div className="w-full flex justify-center tracking-tight items-center">
          <div className="w-[25px] h-[1px] bg-gradient-to-l dark:from-black-600 dark:to-black-800 from-black-300 to-white"></div>
          <div className="w-[100px] h-[1px] dark:bg-black-600 bg-black-300"></div>
          <div className="w-[50px] h-[1px] bg-gradient-to-r dark:from-black-600 dark:to-black-800 from-black-300 to-white"></div>
          <div className="pl-4 pr-4">
            <QuestionIcon size={24} />
          </div>
          <div className="w-[50px] h-[1px] bg-gradient-to-l dark:from-black-600 dark:to-black-800 from-black-300 to-white"></div>
          <div className="w-[100px] h-[1px] dark:bg-black-600 bg-black-300"></div>
          <div className="w-[25px] h-[1px] bg-gradient-to-r dark:from-black-600 dark:to-black-800 from-black-300 to-white"></div>
        </animated.div>
      </div>
    </ParallaxLayer>
  );
}
