import * as React from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import { animated, useSpring } from "@react-spring/web";

import Button from "@components/Button/Button";
import { mainTitle } from "./.anim";

import { useRouter } from "next/router";

export default function Landing() {
  const mainTitleProps = useSpring(mainTitle);
  const router = useRouter();

  const learnMore = () => {
    router.push("/docs");
  };

  const pushContact = () => {
    router.push("/contact");
  }
  return (
    <ParallaxLayer
      offset={0}
      speed={1}
      style={{
        display: "flex",
        zIndex: 200,
        width: "fit-content",
      }}
    >
      <div className="xs:pl-8 pl-5 pr-5 xs:pr-8 md:pl-15 xl:pl-20 mt-[150px] xs:mt-[200px] md:mt-[200px] lg:mt-[200px] xl:mt-[250px] max-w-[800px]">
        <animated.div
          className="sm:text-5xl md:text-6xl lg:text-7xl xs:text-5xl text-4xl xs:font-black font-bold tracking-tight select-none pl-5s pr-6 w-full"
          style={mainTitleProps}
        >
          For those who love{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-success-400 to-pink-500">
            the truth.
          </span>
        </animated.div>
        <div className="mt-10 md:mt-20 flex gap-5 justify-center xs:justify-start flex-wrap w-full">
          <Button delay={400} onClick={learnMore}>
            Learn More
          </Button>
          <Button type="secondary" delay={500} onClick={pushContact}>
            Contact us
          </Button>
        </div>
      </div>
    </ParallaxLayer>
  );
}
