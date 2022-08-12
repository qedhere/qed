export default function Section(props: any) {
  return (
    <div className="pl-[14px] mb-3 font-extrabold mt-8 text-lg flex items-center gap-2">
      {props.children}
    </div>
  );
}
