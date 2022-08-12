import * as React from "react";

import { MarkGithubIcon } from "@primer/octicons-react";
import Avatar from "@docs/Avatar/Avatar";

import { useRouter } from "next/router";

export default function EditPage() {
  const router = useRouter();
  const [link, setLink] = React.useState<string>();

  React.useEffect(() => {
    fetch(`/api/docs/`)
      .then((res) => res.json())
      .then((data) => {
        const githubLink =
          "https://github.com/qedhere/qed/edit/main/pages/docs";
        var currentLink = "";
        var folderList = [];
        var hasLink = false;

        for (let i in data) {
          if (
            data[i]["route"] == router.pathname &&
            data[i]["type"] == "file"
          ) {
            currentLink = githubLink + "/" + data[i]["path"];
            hasLink = true;
            break;
          }
          if (data[i]["route"] == router.pathname) {
            currentLink = githubLink + "/" + data[i]["path"] + "/index.mdx";
            hasLink = true;
            break;
          }
          if (data[i]["type"] == "folder") {
            folderList.push(data[i]);
          }
        }

        if (hasLink == false) {
          for (let j in folderList) {
            for (let k in folderList[j]["children"]) {
              if (folderList[j]["children"][k]["route"] == router.pathname) {
                currentLink =
                  githubLink +
                  "/" +
                  folderList[j]["children"][k]["route"].substring(6) +
                  ".mdx";
                hasLink = true;
                break;
              }
            }
          }
        }

        setLink(currentLink);
      });
  }, []);

  return (
    <div>
      <div className="mt-[200px]"></div>
      <div className="flex w-full items-center border-t border-black-200 dark:border-black-800">
        <div className="mt-0">
          <Avatar />
        </div>
        <div className="grow"></div>
        <div className="text-sm">
          {link ? (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline"
            >
              <span className="p-[6px] pl-[8px] pr-[8px] rounded-lg text-success-300 hover:bg-[rgba(0,112,243,0.1)] duration-200">
                <MarkGithubIcon />
                &nbsp;&nbsp;Edit this page
              </span>
            </a>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
}
