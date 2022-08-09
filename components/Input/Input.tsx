export default function Input(props: any) {
  return (
    <input
      className="dark:placeholder:text-black-300 placeholder:text-black-400 w-full outline-none bg-transparent pl-4 pr-4 pt-2 pb-2 dark:focus:ring-black-900 ring-1 dark:ring-black-200 ring-black-700 focus:ring-black-50 duration-200 rounded-md"
      placeholder={props.placeholder}
    />
  );
}
