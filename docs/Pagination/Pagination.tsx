import * as React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Pagination() {
  const router = useRouter();
  const [nextPage, setNextPage] = React.useState<any>(undefined);
  const [previousPage, setPreviousPage] = React.useState<any>(undefined);

  React.useEffect(() => {
    fetch("/api/docs/sidebar")
      .then((res) => res.json())
      .then((data) => {
        var currentPageIndex = null;
        var currentData = data;
        var currentRoute = router.pathname;

        for (let i in currentData) {
          if (currentData[i].component == "Section") {
            currentData.splice(i, 1);
          }
        }

        for (let i in currentData) {
          if (currentData[i].key == currentRoute) {
            currentPageIndex = i;
            break;
          }
        }

        // @ts-ignore
        if (parseInt(currentPageIndex) == 0) {
          setPreviousPage("none");
          // @ts-ignore
          setNextPage(currentData[parseInt(currentPageIndex) + 1]);
          // @ts-ignore
          console.log(currentData[parseInt(currentPageIndex) + 1].name);
          // @ts-ignore
        } else if (parseInt(currentPageIndex) == currentData.length - 1) {
          // @ts-ignore
          setPreviousPage(currentData[parseInt(currentPageIndex) - 1]);
          setNextPage("none");
        } else {
          // @ts-ignore
          setPreviousPage(currentData[parseInt(currentPageIndex) - 1]);
          // @ts-ignore
          setNextPage(currentData[parseInt(currentPageIndex) + 1]);
        }
      });
  }, []);
  if (nextPage && previousPage) {
    return (
      <div className="flex pb-10 text-success-300 dark:text-success-400">
        <div>
          {previousPage == "none" ? (
            <div></div>
          ) : (
            <Link href={previousPage.key}>
              <span className="text-sm font-semibold p-[6px] pl-[8px] pr-[8px] rounded-lg text-success-300 hover:bg-[rgba(0,112,243,0.1)] duration-200">
                &larr; {previousPage.name}
              </span>
            </Link>
          )}
        </div>
        <div className="grow"></div>
        <div>
          {nextPage == "none" ? (
            <div></div>
          ) : (
            <Link href={nextPage.key}>
              <span className="text-sm font-semibold p-[6px] pl-[8px] pr-[8px] rounded-lg text-success-300 hover:bg-[rgba(0,112,243,0.1)] duration-200">
                {nextPage.name} &rarr;
              </span>
            </Link>
          )}
        </div>
      </div>
    );
  } else {
    return <div className="flex"></div>;
  }
}
