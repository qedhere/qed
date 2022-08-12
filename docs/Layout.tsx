import * as React from "react";
import { NextPage } from "next";

import Header from "@components/Header/Header";
import Sidebar from "@docs/Sidebar/Sidebar";
import { useRouter } from "next/router";

interface Meta {
  title: string;
}

const Layout: NextPage = (props: any) => {
  const [meta, setMeta] = React.useState<Meta>();
  const router = useRouter();

  const fetchData = async () => {
    await fetch(`/api/docs/meta${router.pathname.substring(5)}`)
      .then((res) => res.json())
      .then((data) => {
        setMeta(data);
      });
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Header noanim />
      <div className="">
        <div className="md:pt-[256px] pb-[256px] pt-[180px] w-full flex justify-center pl-4 pr-4 md:pl-[340px] md:pr-10">
          <article className="max-w-[900px] prose lg:prose-lg prose-black dark:prose-invert grow">
            <h1 className="tracking-tight" style={{ padding: 0, margin: 0 }}>
              {meta ? meta.title : <div></div>}
            </h1>
            <hr />
            {props.children}
          </article>
        </div>
      </div>
      <Sidebar />
    </div>
  );
};

export default Layout;
