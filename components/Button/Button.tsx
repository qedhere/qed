export default function Button(props: any) {
  return (
    <button className=" duration-200 dark:bg-success-300 bg-success-200 text-white hover:bg-success-300 dark:hover:bg-success-400 dark:hover:border-success-400 w-fit pl-10 pr-10 pt-3 pb-3 rounded-md">
      {props.children}
    </button>
  );
}
