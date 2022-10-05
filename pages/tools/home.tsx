import * as React from "react";

import Header from "@components/Header/Header";
import Button from "@components/Button/Button";
import { useRouter } from "next/router";

import "@firebase/firebase";

import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

import { getFirestore, getDoc, setDoc, doc } from "firebase/firestore";

const db = getFirestore();
const auth = getAuth();

import { Loading } from "@geist-ui/core";
import { EyeIcon, PlusIcon } from "@primer/octicons-react";

export default function ToolsHome() {
  const router = useRouter();
  const [user, loading, error] = useAuthState(auth);
  const [snippets, setSnippets] = React.useState<any>(null);

  React.useEffect(() => {
    const fetchData = async () => {
      if (!loading) {
        if (!user) {
          router.push("/tools");
        } else {
          const snippetListRef = doc(db, "snippets", user.uid);
          const snippetListSnap = await getDoc(snippetListRef);

          if (!snippetListSnap.exists()) {
            await setDoc(doc(db, "snippets", user.uid), {
              name: user.displayName,
              photoURL: user.photoURL,
            });
            setSnippets({});
          } else {
            setSnippets(snippetListSnap.data());
            console.log(snippetListSnap.data());
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
          {snippets ? (
            JSON.stringify(snippets) == "{}" ? (
              <div className="mt-5">
                <button
                  className="border-2 border-dashed rounded-xl w-[128px] h-[128px] border-neutral-700 flex items-center justify-center hover:bg-neutral-800 duration-200"
                  onClick={() => router.push("/tools/snippets/new")}
                >
                  <PlusIcon size={24} />
                </button>
              </div>
            ) : (
              <div className="flex justify-center mt-[100px]">yeah</div>
            )
          ) : (
            <div className="flex justify-center mt-[100px]">
              <Loading scale={2} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
