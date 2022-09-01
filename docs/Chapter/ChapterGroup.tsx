export default function ChapterGroup(props: any) {
  return (
    <div className="flex justify-center flex-wrap gap-8 pb-20">
      {props.children}
    </div>
  );
}
