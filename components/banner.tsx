import Image from "next/image";

export function Banner() {
  return (
    <div className="mt-6 flex items-center justify-center rounded-md border border-slate-400 p-2">
      <Image
        src="/banner.webp"
        width={1200}
        height={250}
        alt="banner"
        title="banner"
        className="rounded-md"
      />
    </div>
  );
}
