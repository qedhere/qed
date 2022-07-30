import * as React from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import { animated, useSpring } from "@react-spring/web";
import { useTheme } from "next-themes";

import { mainTitle } from "./.anim";

export default function Landing() {
  const { theme } = useTheme();
  const [currentTheme, setCurrentTheme] = React.useState<any | null>(null);

  const mainTitleProps = useSpring(mainTitle);

  React.useEffect(() => {
    if (typeof theme != undefined) {
      setCurrentTheme(theme);
    }
  }, [theme]);
  return (
    <div>
      <ParallaxLayer
        offset={0}
        speed={1}
        style={{
          display: "flex",
          zIndex: 40,
        }}
      >
        <div className="xs:pl-8 pl-5 md:pl-15 xl:pl-20 mt-[200px] xs:mt-[200px] md:mt-[200px] lg:mt-[200px] xl:mt-[250px] max-w-[800px]">
          <animated.div className="sm:text-5xl md:text-6xl lg:text-7xl xs:text-4xl text-4xl sm:font-black font-bold tracking-tight select-none pl-5s pr-5 w-full" style={mainTitleProps}>
            No one is more hated than he who <span className="bg-clip-text text-transparent bg-gradient-to-r from-success-400 to-pink-500">speaks the truth.</span>
          </animated.div>
        </div>
      </ParallaxLayer>
      <ParallaxLayer
        offset={0}
        speed={1.5}
        style={{
          display: "flex",
          justifyContent: "center",
          zIndex: 0,
        }}
      >
        <div className="flex-col w-full h-full">
          <div className="w-full h-[128px] bg-gradient-to-b mt-[64px] dark:from-black-900 from-white to-transparent fixed"></div>
          {currentTheme == "dark" ? (
            <div className="backgroundDark w-full h-full"></div>
          ) : (
            <div className="backgroundLight w-full h-full"></div>
          )}
          <div className="w-full h-[128px] bg-gradient-to-t mt-[64px] dark:from-black-900 from-white to-transparent fixed bottom-0"></div>
        </div>
      </ParallaxLayer>
    </div>
  );
}
