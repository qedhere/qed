import Header from "@components/Header/Header";

export default function Tools() {
  return (
    <div>
      <Header noanim />
      <div className="pt-[200px] text-center sm:text-5xl text-4xl font-semibold tracking-tighter">
        Tools for the modern mathematician
      </div>
      <div className="pt-10 text-center sm:text-4xl text-3xl font-semibold tracking-tighter dark:text-black-500">
        Free. Forever.
      </div>
    </div>
  );
}
