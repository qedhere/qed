export default function Input(props: any) {
  return (
    <input
      className="dark:placeholder:text-black-300 placeholder:text-black-400 w-full focus:outline-none outline-none bg-transparent pl-4 pr-4 pt-2 pb-2 border dark:border-black-200 focus:ring-black-900 focus:ring-1 border-black-700 focus:border-black-100 duration-200 rounded-md"
      placeholder={props.placeholder}
    />
  );
}
