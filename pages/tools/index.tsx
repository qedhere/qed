import * as React from "react";

import Header from "@components/Header/Header";
import { MarkGithubIcon } from "@primer/octicons-react";

import styles from "@styles/Tools.module.css";

import { FaGoogle, FaMicrosoft } from "react-icons/fa";
import { useTheme } from "next-themes";

import "@firebase/firebase";
import { useRouter } from "next/router";

import { getAuth } from "firebase/auth";
import {
  useAuthState,
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";

const auth = getAuth();

export default function Tools() {
  const { theme, setTheme } = useTheme();
  const [user, loading, error] = useAuthState(auth);
  const [signInWithGithub, gitUser, gitLoading, gitError] =
    useSignInWithGithub(auth);
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const router = useRouter();

  React.useEffect(() => {
    setTheme("dark");
    if (user) {
      router.push("/tools/home");
    }
  });

  const githubLogIn = () => {
    signInWithGithub();
  };

  const googleLogIn = () => {
    signInWithGoogle();
  };

  return (
    <div className="bg-black-900">
      <div className={styles.Background}>
        <div className="h-full bg-[rgba(17,17,17,0.5)]">
          <Header noanim disabledIcon dark />
          <div className="pt-[200px] text-center sm:text-5xl text-4xl font-semibold tracking-tighter pl-4 pr-4">
            Tools for the modern mathematician
          </div>
          <div className="pt-10 text-center sm:text-4xl text-3xl font-semibold tracking-tighter dark:text-black-300">
            Free. Forever.
          </div>
          <div className="fixed bottom-[50px] md:bottom-[150px] lg:bottom-[250px] w-full">
            <div className="w-full flex justify-center gap-5">
              <button
                className="p-4 bg-[rgba(24,24,24,0.4)] backdrop-blur hover:bg-[rgba(24,24,24,0.6)] rounded-xl duration-200"
                onClick={githubLogIn}
              >
                <MarkGithubIcon size={60} className="text-" />
              </button>
              <button
                className="p-4 bg-[rgba(24,24,24,0.4)] backdrop-blur hover:bg-[rgba(24,24,24,0.6)] rounded-xl duration-200"
                onClick={googleLogIn}
              >
                <FaGoogle size={60} className="text-" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
