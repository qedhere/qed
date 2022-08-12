export default function Tags(props: any) {
  return (
    <div className="flex flex-wrap gap-2">
      {props.tags ? (
        props.tags.map((tag: string) => (
          <div
            className="hover:bg-black-200 dark:hover:bg-black-800 duration-200 p-1 mb-5 rounded-md"
            key={tag}
          >
            <div className="text-transparent bg-clip-text bg-gradient-to-r dark:from-success-400 from-success-300 to-violet-200 dark:to-violet-300 text-sm font-semibold font-mono">
              #{tag}
            </div>
          </div>
        ))
      ) : (
        <div></div>
      )}
    </div>
  );
}
