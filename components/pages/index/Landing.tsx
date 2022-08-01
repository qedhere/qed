import * as React from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import { animated, useSpring } from "@react-spring/web";

import Button from "@components/Button/Button";
import { mainTitle } from "./.anim";

export default function Landing() {
  const mainTitleProps = useSpring(mainTitle);

  return (
    <ParallaxLayer
      offset={0}
      speed={1}
      style={{
        display: "flex",
        zIndex: 200,
      }}
    >
      <div className="xs:pl-8 pl-5 md:pl-15 xl:pl-20 mt-[200px] xs:mt-[200px] md:mt-[200px] lg:mt-[200px] xl:mt-[250px] max-w-[800px]">
        <animated.div
          className="sm:text-5xl md:text-6xl lg:text-7xl xs:text-5xl text-4xl xs:font-black font-bold tracking-tight select-none pl-5s pr-5 w-full"
          style={mainTitleProps}
        >
          For those who love{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-success-400 to-pink-500">
            the truth.
          </span>
        </animated.div>
        <div className="mt-10 md:mt-20">
          
        </div>
      </div>
    </ParallaxLayer>
  );
}
