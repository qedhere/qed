import * as React from "react";
import { ParallaxLayer } from "@react-spring/parallax";

export default function Explore() {
  return (
    <ParallaxLayer
      offset={0.99}
      speed={0.5}
      style={{
        display: "flex",
        zIndex: 200,
        width: "100%",
        alignItems: "start",
      }}
    >
      <div className="xs:pl-8 pl-5 pr-5 xs:pr-8 md:pl-15 xl:pl-20 w-full mt-5">
        <div className="text-center w-full tracking-[0.2rem] font-semibold text-sm">
          EXPLORE THE WORLD OF{" "}
          <span className="text-violet-300">MATHEMATICS</span>
        </div>
        <div className="flex justify-center mt-10 w-full">
          <div className="h-[40px] w-[1px] bg-gradient-to-b dark:from-black-900 dark:to-violet-300 from-black-50 to-violet-300"></div>
        </div>
        <div className="flex justify-center w-full">
          <div className="h-[100px] w-[1px] dark:bg-violet-300 bg-violet-300"></div>
        </div>
        <div className="flex justify-center w-full">
          <div className="h-[40px] w-[40px] rounded-full dark:bg-violet-300 bg-gradient-to-r from-violet-300 to-violet-200 flex items-center justify-center text-3xl">
            +
          </div>
        </div>
      </div>
    </ParallaxLayer>
  );
}
