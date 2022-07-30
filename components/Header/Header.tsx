import * as React from "react";

import HeaderLink from "./HeaderLink";
import HeaderIconButton from "./HeaderIconButton";
import { MoonIcon, SunIcon } from "@primer/octicons-react";

import { useTheme } from "next-themes";
import { animated, useSpring } from "@react-spring/web";

import { logo, link1, link2, link3, themeButton } from "./.anim";

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [border, setBorder] = React.useState<any | string>("");
  const [currentTheme, setCurrentTheme] = React.useState<any | null>(null);

  const logoProps = useSpring(logo);
  const link1Props = useSpring(link1);
  const link2Props = useSpring(link2);
  const link3Props = useSpring(link3);
  const themeButtonProps = useSpring(themeButton);

  React.useEffect(() => {
    if (typeof theme != undefined) {
      setCurrentTheme(theme);
    }
  }, [theme]);

  try {
    document!.getElementById("body")!.onscroll = () => {
      if (document!.getElementById("body")!.scrollTop > 5) {
        setBorder("border-b");
      } else {
        setBorder("");
      }
    };
  } catch {}

  return (
    <div className="fixed w-full z-50 select-none">
      <div
        className={`flex justify-center flex-shrink dark:bg-[rgba(0,0,0,0.5)] bg-[rgba(255,255,255,0.5)] backdrop-blur-[6px] duration-100 ${border} dark:border-[rgba(255,255,255,0.05)] border-[rgba(0,0,0,0.05)]`}
      >
        <header className="w-[1200px] h-[64px] duration-100">
          <div className="flex pl-4 items-center h-[64px] pr-4">
            <animated.div
              className="text-2xl font-black tracking-wide"
              style={logoProps}
            >
              QED
            </animated.div>
            <div className="grow flex justify-center items-center gap-8 invisible xs:visible">
              <HeaderLink style={link1Props} text="Projects" href="#" />
              <HeaderLink style={link2Props} text="Blog" href="#" />
              <HeaderLink style={link3Props} text="Contact" href="#" />
            </div>
            <div className="flex gap-5">
              {currentTheme == "light" ? (
                <HeaderIconButton
                  text={<SunIcon size={16} />}
                  onClick={() => setTheme("dark")}
                  style={themeButtonProps}
                />
              ) : (
                <HeaderIconButton
                  text={<MoonIcon size={16} />}
                  onClick={() => setTheme("light")}
                  style={themeButtonProps}
                />
              )}
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}
