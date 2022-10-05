import * as React from "react";

import HeaderLink from "./HeaderLink";
import HeaderIconButton from "./HeaderIconButton";
import {
  MoonIcon,
  SunIcon,
  CircleSlashIcon,
  GearIcon,
  HomeIcon,
  RepoIcon,
  DeviceMobileIcon,
  PersonIcon,
  SignOutIcon,
} from "@primer/octicons-react";

import { useTheme } from "next-themes";
import { useRouter } from "next/router";

import "@firebase/firebase";
import { getAuth, signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
const auth = getAuth();

import { Avatar, Drawer, Divider } from "@geist-ui/core";

import { useWindowWidth } from "@react-hook/window-size";

export default function Header(props: any) {
  const { theme, setTheme } = useTheme();
  const [border, setBorder] = React.useState<any | string>("");
  const [currentTheme, setCurrentTheme] = React.useState<any | null>(null);
  const [user, loading, error] = useAuthState(auth);
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const width = useWindowWidth();
  const router = useRouter();

  React.useEffect(() => {
    if (typeof theme != undefined) {
      setCurrentTheme(theme);
    }
  }, [theme, user]);

  try {
    document!.getElementById("body")!.onscroll = () => {
      if (document!.getElementById("body")!.scrollTop > 5) {
        setBorder("border-b");
      } else {
        setBorder("");
      }
    };
  } catch {}
  if (user) {
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
              <button>
                <Avatar
                  // @ts-ignore
                  src={user.photoURL}
                  scale={1.5}
                  className="m-4 right-[0px] fixed"
                  onClick={() => setDrawerOpen(true)}
                />
              </button>
              <Drawer
                visible={drawerOpen}
                onClose={() => setDrawerOpen(false)}
                placement={width < 500 ? "bottom" : "right"}
                style={{
                  borderRadius: width < 500 ? "auto" : "0px",
                  width: width < 500 ? "100%" : "300px",
                  backgroundColor: theme == "dark" ? "black" : "white",
                  color: theme == "light" ? "black" : "white",
                }}
              >
                <Drawer.Content>
                  <div className="w-full flex items-center">
                    <span className="font-semibold tracking-tighter text-xl flex items-center gap-3">
                      <Avatar
                        // @ts-ignore
                        src={user.photoURL}
                        scale={1.5}
                        className="m-4 right-[0px] fixed"
                        onClick={() => setDrawerOpen(true)}
                      />{" "}
                      {user.displayName}
                    </span>
                    <div className="grow"></div>
                    <div className="flex gap-5">
                      {props.disabledIcon ? (
                        <HeaderIconButton
                          text={<CircleSlashIcon size={16} />}
                          noanim
                        />
                      ) : currentTheme == "light" ? (
                        <HeaderIconButton
                          text={<SunIcon size={16} />}
                          onClick={() => {
                            setTheme("dark");
                          }}
                          noanim
                        />
                      ) : (
                        <HeaderIconButton
                          text={<MoonIcon size={16} />}
                          onClick={() => {
                            setTheme("light");
                          }}
                          noanim
                        />
                      )}
                    </div>
                  </div>
                </Drawer.Content>
                <div className="flex flex-col mt-5">
                  <button
                    className="w-full p-2 flex dark:hover:bg-neutral-900 hover:bg-black-200 duration-200 rounded-md text-sm items-center"
                    onClick={() => router.push("/")}
                  >
                    <HomeIcon />
                    <div className="grow"></div>
                    <div className="text-black-500">Home</div>
                  </button>
                  <button
                    className="w-full p-2 flex dark:hover:bg-neutral-900 hover:bg-black-200 duration-200 rounded-md text-sm items-center"
                    onClick={() => router.push("/docs/")}
                  >
                    <RepoIcon />
                    <div className="grow"></div>
                    <div className="text-black-500">Docs</div>
                  </button>
                  <button
                    className="w-full p-2 flex dark:hover:bg-neutral-900 hover:bg-black-200 duration-200 rounded-md text-sm items-center"
                    onClick={() => router.push("/contact/")}
                  >
                    <DeviceMobileIcon />
                    <div className="grow"></div>
                    <div className="text-black-500">Contact</div>
                  </button>
                  <div
                    className="w-full h-[1px] mt-2 mb-2"
                    style={{
                      backgroundColor: theme == "dark" ? "#222222" : "#EAEAEA",
                    }}
                  />
                  <button
                    className="w-full p-2 flex dark:hover:bg-neutral-900 hover:bg-black-200 duration-200 rounded-md text-sm items-center"
                    onClick={() => router.push("/tools/profile/")}
                  >
                    <PersonIcon />
                    <div className="grow"></div>
                    <div className="text-black-500">Profile</div>
                  </button>
                  <div
                    className="w-full h-[1px] mt-2 mb-2"
                    style={{
                      backgroundColor: theme == "dark" ? "#222222" : "#EAEAEA",
                    }}
                  />
                  <button
                    className="text-red-500 w-full p-2 flex bg-[rgba(255,0,0,0.05)] hover:bg-red-100 dark:hover:bg-[rgba(255,0,0,0.1)] duration-200 rounded-md text-sm items-center"
                    onClick={async () => {
                      await signOut(auth);
                      router.pathname == "/tools/home"
                        ? router.push("/tools")
                        : console.log();
                    }}
                  >
                    <SignOutIcon />
                    <div className="grow"></div>
                    <div className="text-red-500">Log Out</div>
                  </button>
                </div>
              </Drawer>
            </div>
          </header>
        </div>
      </div>
    );
  } else {
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
                {props.disabledIcon ? (
                  <HeaderIconButton
                    text={<CircleSlashIcon size={16} />}
                    onClick={() => setTheme("dark")}
                    noanim
                  />
                ) : currentTheme == "light" ? (
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
}
