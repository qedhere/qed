import * as React from "react";
import Header from "@components/Header/Header";

import "@firebase/firebase";
import { getFirestore, getDoc, doc } from "firebase/firestore";
import { useRouter } from "next/router";
const db = getFirestore();

import { Loading, Avatar } from "@geist-ui/core";

import { HeartIcon, EyeIcon, HeartFillIcon } from "@primer/octicons-react";

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

export default function Snippet() {
  const router = useRouter();
  const [snippetData, setSnippetData] = React.useState();
  const [isLoading, setIsLoading] = React.useState(true);
  const [hasLiked, setHasLiked] = React.useState(true);

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
        }
      }
    };

    fetchData();
  });
  if (isLoading) {
    return (
      <div>
        <Header />
        <div className="md:h-[400px] h-[200px] w-full"></div>
        <Loading scale={2} />
      </div>
    );
  } else {
    return (
      <div>
        <Header />
        <div className="md:h-[256px] h-[128px] w-full"></div>
        <div className="flex justify-center pl-4 pr-4">
          <div className="max-w-[700px] w-full">
            {/* @ts-ignore */}
            <div className="sm:text-4xl text-3xl tracking-tighter font-bold">
              {/* @ts-ignore */}
              {snippetData.title}
            </div>
            {/* @ts-ignore */}
            <div className="font-mono text-sm text-black-300 mt-2">
              {router.query.snippet}
            </div>
            <div className="w-full flex justify-center mt-8 mb-8">
              <div className="max-w-[700px] h-[1px] bg-neutral-200 dark:bg-neutral-800 w-full p-0"></div>
            </div>
            {/* @ts-ignore */}
            <div className="max-w-[700px] prose lg:prose-lg prose-black dark:prose-invert grow">
              {/* @ts-ignore */}
              {snippetData.content}
            </div>
            <div className="w-full mt-8 mb-8"></div>
            <div className="flex items-center gap-2">
              {/* @ts-ignore */}
              <Avatar src={snippetData.photoURL} scale={1.1} />

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
                    <button className="hover:bg-[rgba(236,72,153,0.1)] rounded-full w-[32px] h-[32px] flex items-center justify-center duration-200">
                      <HeartFillIcon size={18} />
                    </button>{" "}
                    0
                  </div>
                ) : (
                  <div className="flex items-center gap-2 text-gray-500 group hover:text-pink-400 duration-200">
                    <button className="hover:bg-[rgba(236,72,153,0.1)] rounded-full w-[32px] h-[32px] flex items-center justify-center duration-200">
                      <HeartIcon size={18} />
                    </button>{" "}
                    0
                  </div>
                )}
                <div className="flex items-center gap-2 text-gray-500">
                  <div className="flex justify-center items-center w-[32px] h-[32px]">
                    <EyeIcon size={18} />
                  </div>{" "}
                  0
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
