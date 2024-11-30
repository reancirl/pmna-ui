import Image from "next/image";

export const metadata = {
  title: "PMNA | Street x Culture",
  description:
    "Pamana – Where Streetwear Meets Cultural Heritage. Stay in the Loop and Subscribe Now for Exclusive Updates and Street x Culture Offers.",
};

export default async function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center">
        <Image
          className="dark:invert"
          src="/pmna_black.svg"
          alt="Pamana logo"
          width={350}
          height={38}
          priority
        />
        <h1 className="text-xl text-center sm:text-left font-[family-name:var(--font-geist-mono)] italic">
          Crafting the Streets, Honoring the Culture – Coming Soon.
        </h1>
        <h2 className="text-sm text-center sm:text-left">
          Stay in the Loop – Subscribe Now for Exclusive Updates and Street x Culture Offers.
        </h2>
        <div className="text-center inline-flex">
          <form>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              defaultValue=""
              required
              className="px-4 py-2 text-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
            />
            <button
              type="submit"
              className="px-4 py-2 text-lg font-semibold text-white bg-black hover:bg-gray-800 transition-all"
            >
              Subscribe
            </button>
          </form>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.facebook.com/alibataclothingph"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/facebook.svg"
            alt="facebook icon"
            width={20}
            height={20}
          />
          Facebook
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.facebook.com/alibataclothingph"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/instagram.svg"
            alt="instagram icon"
            width={20}
            height={20}
          />
          Instagram
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="mailto:pmna@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="instagram icon"
            width={20}
            height={20}
          />
          pmna@gmail.com
        </a>
      </footer>
    </div>
  );
}
