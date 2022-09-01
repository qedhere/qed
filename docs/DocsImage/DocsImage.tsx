import Image from "next/image";

export default function DocsImage(props: any) {
  return (
    <div className="relative flex justify-center mb-10 rounded-xl bg-white">
      <div className="w-[50%] select-none">
        <Image
          src={props.src}
          layout={props.layout}
          alt={props.alt}
          width={props.width}
          height={props.height}
          priority={props.priority}
        />
      </div>
      <div className="absolute fixed bg-black-900 opacity-[0.05] rounded-xl w-full h-full top-0"></div>
    </div>
  );
}
