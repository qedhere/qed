import Button from "@components/Button/Button";
import Twemoji from "@components/Twemoji/Twemoji";
import Input from "@components/Input/Input";

export default function Advert() {
  return (
    <div className="h-[260px] w-full dark:bg-white dark:text-black-900 bg-black-900 text-white pt-[48px] pb-20">
      <div className="flex-col xs:flex items-center xs:pl-8 pl-5 pr-5 xs:pr-8 md:pl-15 xl:pl-20 md:pr-15 xl:pr-20 w-full h-full">
        <div className="md:flex flex-col">
          <div className="md:text-5xl text-4xl font-extrabold tracking-tight">
            <Twemoji emoji="✉️" />
            &nbsp;&nbsp;Join the newsletter!
          </div>
          <div className="text-black-500 dark:text-black-400 md:text-2xl text-xl font-semibold mt-5"></div>
        </div>
        <div className="grow"></div>
        <div className="flex gap-5">
          <Input placeholder="example@gmail.com" />
        </div>
      </div>
    </div>
  );
}
