import * as React from "react";
import { NextPage } from "next";
import Head from 'next/head'


import Header from "@components/Header/Header";
import EditPage from "@docs/EditPage/EditPage";
import Breadcrumbs from "@docs/Breadcrumbs/Breadcrumbs";

interface Meta {
  title: string;
  link: string;
  contributors: any;
}

const Layout: NextPage = (props: any) => {
  const meta: Meta = props.meta;

  if (meta) {
    return (
      <div>
        <Head>
          <title>{'QED | ' + meta.title}</title>
        </Head>
        <Header noanim />
        <div className="">
          <div className="md:pt-[128px] pb-[256px] pt-[100px] w-full flex justify-center pl-4 pr-4">
            <article className="max-w-[900px] prose lg:prose-lg prose-black dark:prose-invert grow">
              {
                // @ts-ignore
                meta ? <Breadcrumbs crumbs={meta.crumbs} /> : <div></div>
              }
              <h1
                className="tracking-tighter"
                style={{ padding: 0, margin: 0 }}
              >
                {meta ? meta.title : <div></div>}
              </h1>
              {meta ? (
                <div className="mt-5 text-xl text-black-400 dark:text-black-500">
                  {
                    // @ts-ignore
                    meta.description
                  }
                </div>
              ) : (
                <div></div>
              )}
              <hr />
              {props.children}
              <div className="mt-[200px]"></div>
              <EditPage link={meta.link} contributors={meta.contributors} />
            </article>
          </div>
        </div>
      </div>
    );
  } else if (meta == undefined) {
    return <div></div>;
  } else {
    return <div></div>;
  }
};

export default Layout;
