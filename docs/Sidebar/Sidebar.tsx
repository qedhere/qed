import * as React from "react";

import SidebarLink from "@docs/Sidebar/SidebarLink";
import Section from "@docs/Sidebar/Section";

import {
  HomeFillIcon,
  GitCommitIcon,
  CodeOfConductIcon,
  RepoLockedIcon,
  CommentDiscussionIcon,
} from "@primer/octicons-react";

export default function Sidebar() {
  const [children, setChildren] = React.useState<Object>({});
  const [icons, setIcons] = React.useState<Object>({
    "/api": <GitCommitIcon />,
    "/contributing": <CodeOfConductIcon />,
    "/security": <RepoLockedIcon />,
    "/community": <CommentDiscussionIcon />,
  });

  const fetchData = async () => {
    await fetch("/api/docs/sidebar")
      .then((res) => res.json())
      .then((data) => {
        setChildren(data);
      });
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="md:fixed flex justify-center w-full h-full pt-[64px] p-4 overflow-scroll overflow-x-hidden md:top-0 md:w-[300px]">
      <div className="flex-col gap-5 w-full">
        <SidebarLink href="/docs" active>
          <HomeFillIcon />
          &nbsp;&nbsp;Home
        </SidebarLink>
        <div>
          {children ? (
            Object.keys(children).map((child) => {
              // @ts-ignore
              if (children[child].component == "Section") {
                return (
                  // @ts-ignore
                  <Section key={children[child].key}>
                    {icons[children[child].key]}
                    {children[child].text}
                  </Section>
                );
              } else {
                return (
                  // @ts-ignore
                  <SidebarLink
                    href={children[child].key}
                    key={children[child].key}
                  >
                    {children[child].name}
                  </SidebarLink>
                );
              }
            })
          ) : (
            <div></div>
          )}
        </div>
        <br />
      </div>
    </div>
  );
}
