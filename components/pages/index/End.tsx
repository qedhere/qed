import * as React from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import Footer from "@components/Footer/Footer";
import Advert from "@components/Advert/Advert";

export default function End() {
  return (
    <ParallaxLayer
      offset={2}
      speed={1.5}
      style={{
        display: "fixed",
        bottom: 0,
        zIndex: 200,
        width: "100%",
        height: "fit-content",
        alignItems: "end",
      }}
      factor={0.5}
    >
      <div className="w-full h-full flex-col items-end">
        <Advert />
      </div>
    </ParallaxLayer>
  );
}
