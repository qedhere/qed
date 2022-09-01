import Link from "next/link";
import Image from "next/image";

export default function Chapter(props: any) {
  return (
    <div className="w-full flex flex-col w-[200px] h-[300px] grow rounded-xl">
      <Link href={props.href} passHref>
        <button className="relative flex justify-center mb-10 rounded-xl bg-white">
          <div className="w-[50%] select-none">
            <Image
              src={props.icon}
              layout={props.layout}
              alt={props.alt}
              width="200px"
              height="200px"
            />
          </div>
          <div className="absolute fixed bg-black-900 opacity-[0.05] rounded-xl w-full h-full top-0"></div>
        </button>
      </Link>
      <div className="font-bold text-black-500 text-sm">{props.section}</div>
      <div className="font-bold text-2xl mt-1 tracking-tight">
        {props.title}
      </div>
    </div>
  );
}
