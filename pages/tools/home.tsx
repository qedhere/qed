import * as React from "react";

import Header from "@components/Header/Header";
import Button from "@components/Button/Button";
import { useRouter } from "next/router";

import "@firebase/firebase";

import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

import {
  getFirestore,
  getDoc,
  setDoc,
  doc,
  getDocs,
  collection,
} from "firebase/firestore";

const db = getFirestore();
const auth = getAuth();

import { Loading } from "@geist-ui/core";
import { EyeIcon, PlusIcon, HeartFillIcon } from "@primer/octicons-react";

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

export default function ToolsHome() {
  const router = useRouter();
  const [user, loading, error] = useAuthState(auth);
  const [snippets, setSnippets] = React.useState<any>(undefined);

  React.useEffect(() => {
    const fetchData = async () => {
      if (!loading) {
        if (!user) {
          router.push("/tools");
        } else {
          const userDataRef = doc(db, "snippets", user.uid);
          const userDataSnap = await getDoc(userDataRef);

          if (!userDataSnap.exists()) {
            await setDoc(doc(db, "snippets", user.uid), {
              name: user.displayName,
              photoURL: user.photoURL,
            });
          }

          const querySnapshot = await getDocs(
            collection(db, "snippets", user.uid, "snippets")
          );
          if (querySnapshot.size != 0) {
            setSnippets([]);
            querySnapshot.forEach(async (snapDoc) => {
              const pubSnipRef = doc(db, "public_snippets", snapDoc.id);
              const snipStatsRef = doc(db, "snippet_stats", snapDoc.id);
              const pubSnipRefSnap = await getDoc(pubSnipRef);
              const snipStatsSnap = await getDoc(snipStatsRef);
              const snipObj = {
                id: snapDoc.id,
                data: pubSnipRefSnap.data(),
                stats: snipStatsSnap.data(),
              };
              try {
                if (snippets.length < querySnapshot.size){
                  // @ts-ignore
                  setSnippets((oldArray) => [snipObj, ...oldArray]);
                }
              } catch {
                // @ts-ignore
                setSnippets((oldArray) => [snipObj, ...oldArray]);
              }


            });
          } else {
            setSnippets(undefined);
          }
        }
      }
    };

    fetchData();
  }, [loading, router, user]);

  return (
    <div>
      <Header />
      <div className="pt-[128px] md:pt-[200px] w-full flex justify-center pl-4 pr-4">
        <div className="max-w-[900px] prose lg:prose-lg prose-black dark:prose-invert grow">
          <div className="text-3xl font-semibold tracking-tighter">
            My snippets
          </div>
          <div className="text-sm text-gray-500 pt-2">
            <EyeIcon /> Your snippets are public
          </div>
          {snippets != undefined ? (
            <div className="mt-5 flex flex-wrap gap-5">
              <button
                className="border-2 border-dashed rounded-xl w-[128px] h-[128px] dark:border-neutral-700 flex items-center justify-center dark:hover:bg-neutral-800 hover:bg-neutral-100 text-black-300 duration-200"
                onClick={() => router.push("/tools/snippets/new")}
              >
                <PlusIcon size={24} />
              </button>
              {snippets.map((snip: any) => {
                return (
                  <button
                    className="duration-200 flex flex-col justify-start align-start p-4 rounded-xl bg-neutral-800 max-w-[300px] hover:bg-black-700"
                    onClick={() => router.push("/tools/snippets/" + snip.id)}
                    key={snip.id}
                  >
                    <div className="text-xl tracking-tighter font-semibold">
                      {snip.data.title}
                    </div>
                    <div className="grow"></div>
                    <div className="text-neutral-500 flex items-center gap-5 text-sm">
                      <div className="flex items-center gap-2">
                        {snip.stats.views} <EyeIcon />{" "}
                      </div>
                      <div className="flex items-center gap-2">
                        {snip.stats.likes} <HeartFillIcon />{" "}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          ) : (
            <div className="mt-5">
              <button
                className="border-2 border-dashed rounded-xl w-[128px] h-[128px] dark:border-neutral-700 flex items-center justify-center dark:hover:bg-neutral-800 hover:bg-neutral-100 text-black-300 duration-200"
                onClick={() => router.push("/tools/snippets/new")}
              >
                <PlusIcon size={24} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
