import { Banner } from "@/components/banner";
import { Feed } from "@/components/feed";

export default function Page() {
  return (
    <>
      <Banner />

      <section className="mt-6 border-t border-t-zinc-500 px-2 py-4">
        <Feed />
      </section>
    </>
  );
}
