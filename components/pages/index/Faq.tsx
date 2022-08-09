import * as React from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import Collapse from "@components/Collapse/Collapse";
import Link from "next/link";

export default function Explore() {
  return (
    <ParallaxLayer
      offset={1.5}
      speed={0.5}
      style={{
        display: "flex",
        zIndex: 200,
        width: "100%",
        alignItems: "start",
      }}
      factor={0.1}
    >
      <div className="xs:pl-8 pl-5 pr-5 xs:pr-8 md:pl-15 xl:pl-20 w-full mt-5 z-50 w-full">
        <div className="flex justify-center w-full">
          <div className="flex-col w-full">
            <Collapse title="What is QED?">
              QED is a group of voulenteers dedicated to sharing the beauty of
              mathematics among all ages.
            </Collapse>
            <Collapse title="What does QED mean?">
              QED is derived from the initialism of the Latin phrase{" "}
              <i>quod erat demonstrandum</i>, meaning{" "}
              <i>&quot;which was to be demonstrated&quot;</i>. Traditionally,
              the abbreviation is placed at the end of mathematical proofs and
              philosophical arguments in print publications, to indicate that
              the proof or the argument is complete.
            </Collapse>
            <Collapse title="I have more questions!" border>
              Thank you for your interest in QED! If you wish to ask us anything
              please{" "}
              <Link href="/contact" className="">
                <span className="dark:text-success-300 text-success-400 hover:underline">
                  contact
                </span>
              </Link>{" "}
              us.
            </Collapse>
          </div>
        </div>
      </div>
    </ParallaxLayer>
  );
}
