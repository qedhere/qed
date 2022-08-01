import * as React from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import { useTheme } from "next-themes";

import { animated, useSpring } from "@react-spring/web";

import { background } from "./.anim";

export default function Landing() {
  const { theme } = useTheme();
  const [currentTheme, setCurrentTheme] = React.useState<any | null>(null);

  const backgroundProps = useSpring(background);

  React.useEffect(() => {
    if (typeof theme != undefined) {
      setCurrentTheme(theme);
    }
  }, [theme]);
  return (
    <ParallaxLayer
      offset={0}
      speed={1.5}
      style={{
        display: "flex",
        justifyContent: "center",
        zIndex: 0,
      }}
    >
      <animated.div className="flex-col w-full h-full" style={backgroundProps}>
        <div className="w-full h-[128px] bg-gradient-to-b mt-[53px] dark:from-black-900 from-white to-transparent fixed"></div>
        {currentTheme == "dark" ? (
          <div className="backgroundDark w-full h-full"></div>
        ) : (
          <div className="backgroundLight w-full h-full"></div>
        )}
        <div className="w-full h-[128px] bg-gradient-to-t mt-[53px] dark:from-black-900 from-white to-transparent fixed bottom-0"></div>
      </animated.div>
    </ParallaxLayer>
  );
}
