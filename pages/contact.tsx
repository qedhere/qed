import Header from "@components/Header/Header";
import Head from "next/head";
import DocsImage from "@docs/DocsImage/DocsImage";
import {
  LinkExternalIcon,
  MailIcon,
  MarkGithubIcon,
  CommentDiscussionIcon,
} from "@primer/octicons-react";
import { FaTwitter } from "react-icons/fa";
import Link from "next/link";

export default function Contact() {
  return (
    <div>
      <Head>
        <title>{"QED | Contact"}</title>
      </Head>
      <Header noanim />
      <div className="">
        <div className="md:pt-[128px] pb-[256px] pt-[100px] w-full flex justify-center pl-4 pr-4">
          <article className="max-w-[900px] prose lg:prose-lg prose-black dark:prose-invert grow">
            <h1 className="tracking-tighter" style={{ padding: 0, margin: 0 }}>
              Contact
            </h1>
            <div className="mt-5 text-xl text-black-400 dark:text-black-500">
              As a means of communication.
            </div>
            <hr />
            <DocsImage
              src="/images/contact.webp"
              width="100px"
              height="100px"
              layout="responsive"
              alt="Contact"
            />
            <br />
            <h3>Direct Links</h3>A list of links to contact us! Be sure to take
            a look at the{" "}
            <Link href="/docs/community/">community guidelines</Link> before
            creating a discussion!
            <br />
            <br />
            <div className="w-full flex flex-wrap gap-5">
              <a
                href="mailto:qedhere@outlook.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <button className="flex p-2 pl-4 pr-4 bg-black-200 dark:bg-black-700 rounded-md items-center hover:bg-neutral-300 dark:hover:bg-black-600 duration-200">
                  <div className="font-bold text-sm">
                    <MailIcon />
                    &nbsp; Email
                  </div>
                  <div className="grow w-[20px]"></div>
                  <div className="">
                    <LinkExternalIcon size={18} />
                  </div>
                </button>
              </a>
              <a
                href="https://twitter.com/qedhere"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <button className="flex p-2 pl-4 pr-4 bg-black-200 dark:bg-black-700 rounded-md items-center hover:bg-neutral-300 dark:hover:bg-black-600 duration-200">
                  <div className="font-bold text-sm flex items-center">
                    <FaTwitter /> &nbsp;&nbsp;Twitter
                  </div>
                  <div className="grow w-[20px]"></div>
                  <div className="">
                    <LinkExternalIcon size={18} />
                  </div>
                </button>
              </a>
              <a
                href="https://github.com/qedhere"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <button className="flex p-2 pl-4 pr-4 bg-black-200 dark:bg-black-700 rounded-md items-center hover:bg-neutral-300 dark:hover:bg-black-600 duration-200">
                  <div className="font-bold text-sm">
                    <MarkGithubIcon /> &nbsp;Github
                  </div>
                  <div className="grow w-[20px]"></div>
                  <div className="">
                    <LinkExternalIcon size={18} />
                  </div>
                </button>
              </a>
              <a
                href="https://github.com/orgs/qedhere/discussions"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <button className="flex p-2 pl-4 pr-4 bg-black-200 dark:bg-black-700 rounded-md items-center hover:bg-neutral-300 dark:hover:bg-black-600 duration-200">
                  <div className="font-bold text-sm">
                    <CommentDiscussionIcon /> &nbsp;Discussions
                  </div>
                  <div className="grow w-[20px]"></div>
                  <div className="">
                    <LinkExternalIcon size={18} />
                  </div>
                </button>
              </a>
            </div>
            <div className="mt-[200px]"></div>
          </article>
        </div>
      </div>
    </div>
  );
}
