import * as React from "react";

import HeaderLink from "./HeaderLink";
import HeaderIconButton from "./HeaderIconButton";
import { MoonIcon, SunIcon } from "@primer/octicons-react";

import { useTheme } from "next-themes";

export default function Header(props: any) {
  const { theme, setTheme } = useTheme();
  const [border, setBorder] = React.useState<any | string>("");
  const [currentTheme, setCurrentTheme] = React.useState<any | null>(null);

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
          className={`flex justify-center flex-shrink dark:bg-[rgba(17,17,17,0.5)] bg-[rgba(255,255,255,0.5)] backdrop-blur-[6px] duration-100 ${border} dark:border-[rgba(255,255,255,0.05)] border-[rgba(0,0,0,0.05)]`}
        >
          <header className="w-[1200px] h-[64px] duration-100">
            <div className="flex pl-4 items-center h-[64px] pr-4">
              <div className="text-2xl font-black tracking-wide flex items-center gap-2">
                QED
              </div>
              <div className="grow flex justify-center items-center gap-8 invisible w-[0px] xs:visible">
                <HeaderLink text="Home" href="/" noanim />
                <HeaderLink text="Docs" href="/docs" noanim />
                <HeaderLink text="Contact" href="/contact" noanim />
                <HeaderLink text="Tools" href="/tools" noanim badge />
              </div>
              <div className="flex gap-5">
                {currentTheme == "light" ? (
                  <HeaderIconButton
                    text={<SunIcon size={16} />}
                    onClick={() => setTheme("dark")}
                    noanim
                  />
                ) : (
                  <HeaderIconButton
                    text={<MoonIcon size={16} />}
                    onClick={() => setTheme("light")}
                    noanim
                  />
                )}
              </div>
            </div>
          </header>
        </div>
      </div>
    );
}
