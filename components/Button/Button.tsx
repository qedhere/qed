export default function Button(props: any) {
  if (props.type == "secondary") {
    return (
      <button className="grow max-w-[400px] xs:max-w-[200px] xs:w-fit w-full duration-200 text-black-400 dark:text-black-500 border border-black-200 dark:border-black-700 bg-black-50 dark:bg-black-900 hover:border-black-900 hover:text-black-900 dark:hover:border-white dark:hover:text-white w-fit pl-10 pr-10 pt-3 pb-3 rounded-md hover:shadow-[0_0px_60px_-15px_rgba(0,0,0,0.4)] dark:hover:shadow-[0_0px_60px_-15px_rgba(255,255,255,0.2)]">
        {props.children}
      </button>
    );
  } else {
    return (
      <button className="grow max-w-[400px] xs:max-w-[200px] xs:w-fit w-full duration-200 dark:bg-black-50 bg-black-900 text-white dark:text-black-900 hover:bg-white dark:hover:bg-black-900 dark:hover:text-black-50 hover:text-black-900 border hover:border-black-900 dark:hover:border-white w-fit pl-10 pr-10 pt-3 pb-3 rounded-md hover:shadow-[0_0px_60px_-15px_rgba(0,0,0,0.4)] dark:hover:shadow-[0_0px_60px_-15px_rgba(255,255,255,0.2)]">
        {props.children}
      </button>
    );
  }
}
