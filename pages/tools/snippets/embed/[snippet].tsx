import * as React from "react";
import { useTheme } from "next-themes";

import "@firebase/firebase";
import {
  getFirestore,
  getDoc,
  updateDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";
import { useRouter } from "next/router";
const db = getFirestore();

import { Loading, Avatar } from "@geist-ui/core";

import { HeartIcon, EyeIcon, HeartFillIcon, MoonIcon, SunIcon } from "@primer/octicons-react";

var units = {
  year: 24 * 60 * 60 * 1000 * 365,
  month: (24 * 60 * 60 * 1000 * 365) / 12,
  day: 24 * 60 * 60 * 1000,
  hour: 60 * 60 * 1000,
  minute: 60 * 1000,
  second: 1000,
};

var rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });
// @ts-ignore
var getRelativeTime = (d1, d2 = new Date()) => {
  // @ts-ignore
  var elapsed = d1 - d2;

  // "Math.abs" accounts for both "past" & "future" scenarios
  for (var u in units)
    // @ts-ignore
    if (Math.abs(elapsed) > units[u] || u == "second")
      // @ts-ignore
      return rtf.format(Math.round(elapsed / units[u]), u);
};

import ReactMarkdown from "react-markdown";

import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import remarkGfm from "remark-gfm";

export default function Snippet() {
  const router = useRouter();
  const [snippetData, setSnippetData] = React.useState();
  const [snippetStats, setSnippetStats] = React.useState();
  const [isLoading, setIsLoading] = React.useState(true);
  const [hasLiked, setHasLiked] = React.useState(false);
  const [currentTheme, setCurrentTheme] = React.useState<any | null>(null);
  const { theme, setTheme } = useTheme();

  React.useEffect(() => {
    const fetchData = async () => {
      if (router.query != undefined) {
        if (JSON.stringify(router.query) != "{}") {
          // @ts-ignore
          const docRef = doc(db, "public_snippets", router.query.snippet);
          const docSnap = await getDoc(docRef);

          setIsLoading(false);
          if (docSnap.data() == undefined) {
            router.push("/404");
          } else {
            // @ts-ignore
            setSnippetData(docSnap.data());
          }

          // @ts-ignore
          const docStatsRef = doc(db, "snippet_stats", router.query.snippet);
          const docStatsSnap = await getDoc(docStatsRef);

          if (docStatsSnap.data() == undefined) {
            router.push("/404");
          } else {
            // @ts-ignore
            setSnippetStats(docStatsSnap.data());
          }
        }
      }
    };

    fetchData();

    const checkLocalStorage = async () => {
      if (router.query != undefined) {
        if (JSON.stringify(router.query) != "{}") {
          // @ts-ignore
          const docRef = doc(db, "snippet_stats", router.query.snippet);
          const docSnap = await getDoc(docRef);
          const docSnapData = docSnap.data();

          console.log(docSnapData);

          if (localStorage.getItem("has_viewed_" + router.query.snippet)) {
          } else {
            // @ts-ignore
            await updateDoc(doc(db, "snippet_stats", router.query.snippet), {
              // @ts-ignore
              views: parseInt(parseInt(docSnapData.views) + 1),
            });

            localStorage.setItem("has_viewed_" + router.query.snippet, "true");
          }

          if (
            localStorage.getItem("has_liked_" + router.query.snippet) != null
          ) {
            if (
              localStorage.getItem("has_liked_" + router.query.snippet) ==
              "true"
            ) {
              setHasLiked(true);
            }
          }
        }
      }
    };

    checkLocalStorage();

    const subscribeData = async () => {
      if (router.query != undefined) {
        if (JSON.stringify(router.query) != "{}") {
          // @ts-ignore
          const unsub = onSnapshot(
            // @ts-ignore
            doc(db, "snippet_stats", router.query.snippet),
            (doc) => {
              // @ts-ignore
              setSnippetStats(doc.data());
            }
          );
        }
      }
    };

    if (typeof theme != undefined) {
      setCurrentTheme(theme);
    }

    subscribeData();
    // @ts-ignore
  }, [router]);

  const likeSnippet = async () => {
    if (hasLiked == false) {
      setHasLiked(true);
      localStorage.setItem("has_liked_" + router.query.snippet, "true");
      // @ts-ignore
      await updateDoc(doc(db, "snippet_stats", router.query.snippet), {
        // @ts-ignore
        likes: parseInt(parseInt(snippetStats.likes) + 1),
      });
    } else {
      setHasLiked(false);
      localStorage.setItem("has_liked_" + router.query.snippet, "false");
      // @ts-ignore
      await updateDoc(doc(db, "snippet_stats", router.query.snippet), {
        // @ts-ignore
        likes: parseInt(parseInt(snippetStats.likes) - 1),
      });
    }
  };

  if (isLoading) {
    return (
      <div>
        <div className="md:h-[400px] h-[200px] w-full"></div>
        <Loading scale={2} />
      </div>
    );
  } else {
    return (
      <div>
        <div className="md:h-[128px] h-[64px] w-full"></div>
        <div className="flex justify-center pl-4 pr-4">
          <div className="max-w-[700px] w-full">
            {/* @ts-ignore */}
            <div className="flex items-center h-fit">
              <div>
                <div className="sm:text-4xl text-3xl tracking-tighter font-bold">
                  {/* @ts-ignore */}
                  {snippetData.title}
                </div>
                {/* @ts-ignore */}
                <div className="font-mono text-sm text-black-300 mt-2">
                  {router.query.snippet}
                </div>
              </div>
              <div className="grow"></div>
              {
              currentTheme == "light" ? (
                <button
                  onClick={() => {
                    setTheme("dark"); setCurrentTheme("dark")
                  }}
                  className="text-black-300 hover:text-black-500 duration-200"
                >
                  <SunIcon size={24} />
                </button>
              ) : (
                <button
                  onClick={() => {
                    setTheme("light"); setCurrentTheme("light")
                  }}
                  className="text-black-500 hover:text-black-300 duration-200"
                >
                  <MoonIcon size={24} />
                </button>
              )
              }
            </div>
            <div className="w-full flex justify-center mt-8 mb-8">
              <div className="max-w-[700px] h-[1px] bg-neutral-200 dark:bg-neutral-800 w-full p-0"></div>
            </div>
            {/* @ts-ignore */}
            <div className="max-w-[700px] prose lg:prose-lg prose-black dark:prose-invert grow">
              <ReactMarkdown
                remarkPlugins={[remarkGfm, remarkMath]}
                rehypePlugins={[rehypeKatex]}
              >
                {/* @ts-ignore */}
                {snippetData.content}
              </ReactMarkdown>
            </div>
            <div className="w-full mt-8 mb-8"></div>
            <div className="flex items-center gap-2">
              {/* @ts-ignore */}
              <Avatar src={"https://github.com/manuanish.png"} scale={1.1} />

              {/* @ts-ignore */}
              <span className="text-black-300 text-sm invisible w-[0px] xs:visible xs:w-fit">
                {" "}
                {/* @ts-ignore */}
                {snippetData.displayName} &bull; {/* @ts-ignore */}
                {getRelativeTime(snippetData.timestamp, Date.now())}
              </span>
              <div className="grow"></div>
              <div className="flex items-center gap-10 text-sm">
                {hasLiked ? (
                  <div className="flex items-center gap-2 group text-pink-500">
                    <button
                      className="hover:bg-[rgba(236,72,153,0.1)] rounded-full w-[32px] h-[32px] flex items-center justify-center duration-200"
                      onClick={likeSnippet}
                    >
                      <HeartFillIcon size={18} />
                    </button>{" "}
                    {/* @ts-ignore */}
                    {snippetStats ? snippetStats.likes : 0}
                  </div>
                ) : (
                  <div className="flex items-center gap-2 text-gray-500 group hover:text-pink-400 duration-200">
                    <button
                      className="hover:bg-[rgba(236,72,153,0.1)] rounded-full w-[32px] h-[32px] flex items-center justify-center duration-200"
                      onClick={likeSnippet}
                    >
                      <HeartIcon size={18} />
                    </button>{" "}
                    {/* @ts-ignore */}
                    {snippetStats ? snippetStats.likes : 0}
                  </div>
                )}
                <div className="flex items-center gap-2 text-gray-500">
                  <div className="flex justify-center items-center w-[32px] h-[32px]">
                    <EyeIcon size={18} />
                  </div>{" "}
                  {/* @ts-ignore */}
                  {snippetStats ? snippetStats.views : 0}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:h-[128px] h-[64px] w-full"></div>
        <div className="w-full flex justify-center text-neutral-300 dark:text-black-600 text-xl gap-1 items-center text-2xl tracking-tight font-semibold">
          <button className="font-black tracking-tight dark:hover:text-black-500 duration-200 hover:text-neutral-400"><a href="https://qed.vercel.app" target="_blank" rel="noopener noreferrer">QED</a></button>
        </div>
        <div className="md:h-[128px] h-[64px] w-full"></div>
      </div>
    );
  }
}
