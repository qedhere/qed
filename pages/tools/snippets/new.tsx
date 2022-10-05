import * as React from "react";

import Header from "@components/Header/Header";

import "@firebase/firebase";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, setDoc, doc } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";

const auth = getAuth();
const db = getFirestore();

import ReactMarkdown from "react-markdown";

import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import remarkGfm from "remark-gfm";

import { EyeIcon } from "@primer/octicons-react";
import { Loading } from "@geist-ui/core";

import { uid } from "uid/secure";

export default function NewSnippet() {
  const router = useRouter();
  const [user, loading, error] = useAuthState(auth);
  const [source, setSource] = React.useState("");
  const [snippetTitle, setSnippetTitle] = React.useState("");
  const [snippetUID, setSnippetUID] = React.useState<any>();
  const [buttonDisabled, setButtonDisabled] = React.useState<any>(false);
  const [buttonText, setButtonText] = React.useState<any>("Share!");

  React.useEffect(() => {
    if (!loading) {
      if (!user) {
        router.push("/tools");
      }
    }

    setSnippetUID(uid());
  }, [loading, router, user]);

  const submitForm = async () => {
    setButtonText(<Loading type="success" style={{ width: "48px" }} />);
    setButtonDisabled(true);

    await setDoc(doc(db, "public_snippets", snippetUID), {
      timestamp: Date.now(),
      title: snippetTitle,
      content: source,
      createdBy: user!.uid,
      displayName: user!.displayName,
      photoURL: user!.photoURL,
    });

    await setDoc(doc(db, "snippets", user!.uid, "snippets", snippetUID), {});

    await setDoc(doc(db, "snippet_stats", snippetUID), {
      views: 0,
      likes: 0,
    });

    setButtonText("Share!");
    setButtonDisabled(false);
    router.push("/tools/snippets/" + snippetUID);
  };

  return (
    <div>
      <Header />
      <div className="w-[full] md:h-[200px] h-[64px]"></div>
      <div className="flex justify-center">
        <input
          onChange={(event) => setSnippetTitle(event.target.value)}
          placeholder="Snippet Title"
          className="outline-none max-w-[700px] w-full placeholder:text-neutral-300 bg-transparent dark:placeholder:text-black-700 font-bold placeholder:tracking-tighter tracking-tighter text-4xl"
        ></input>
      </div>
      <div className="w-full flex justify-center mt-2">
        <div className="max-w-[700px] w-full p-0 font-mono text-sm text-black-300">
          {snippetUID}
        </div>
      </div>
      <div className="w-full flex justify-center mt-8 mb-8">
        <div className="max-w-[700px] h-[1px] bg-neutral-200 dark:bg-neutral-800 w-full p-0"></div>
      </div>
      <div className="w-full flex justify-center pl-4 pr-4">
        <div className="max-w-[700px] prose lg:prose-lg prose-black dark:prose-invert grow">
          <ReactMarkdown
            remarkPlugins={[remarkGfm, remarkMath]}
            rehypePlugins={[rehypeKatex]}
          >
            {source}
          </ReactMarkdown>
        </div>
      </div>
      <div className="w-full flex justify-center mt-8 mb-8">
        <div className="max-w-[700px] w-full p-0"></div>
      </div>
      <div className="flex justify-center pl-4 pr-4">
        <textarea
          onChange={(event) => setSource(event.target.value)}
          className="font-mono text-md dark:bg-neutral-900 bg-black-200 rounded-xl grow border-none max-w-[700px] min-h-[200px] h-full p-8"
          style={{ resize: "none" }}
        />
      </div>
      <div className="w-full flex justify-center items-center mt-8 mb-8">
        <div className="max-w-[700px] w-full p-0 flex items-center">
          <div className="flex items-center gap-2 dark:text-black-500 text-black-300">
            <EyeIcon /> This snippet is public
          </div>
          <div className="grow"></div>
          <button
            disabled={buttonDisabled}
            onClick={submitForm}
            className="bg-[rgba(0,112,243,0.1)] hover:bg-[rgba(0,112,243,0.2)] dark:bg-[rgba(0,112,243,0.2)] dark:hover:bg-[rgba(0,112,243,0.3)] duration-200 pl-4 pr-4 pt-2 pb-2 rounded-md text-success-300"
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}
