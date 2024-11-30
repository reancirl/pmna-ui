import Head from 'next/head';
import Image from 'next/image';
import SubscribeForm from '@/app/components/SubscribeForm';

export const metadata = {
  title: "PMNA | Street x Culture",
  description:
    "PMNA – Where Streetwear Meets Cultural Heritage. Stay in the Loop and Subscribe Now for Exclusive Updates and Street x Culture Offers.",
  openGraph: {
    title: "PMNA | Street x Culture",
    description:
      "PMNA – Where Streetwear Meets Cultural Heritage. Stay in the Loop and Subscribe Now for Exclusive Updates and Street x Culture Offers.",
    url: "https://pmna.iligan.dev/",
    images: [
      {
        url: "https://pmna.iligan.dev/PAMANA_JPG.jpg",
        width: 1200,
        height: 630,
        alt: "Pamana Street x Culture",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PMNA | Street x Culture",
    description:
      "PMNA – Where Streetwear Meets Cultural Heritage. Stay in the Loop and Subscribe Now for Exclusive Updates and Street x Culture Offers.",
    images: ["https://pmna.iligan.dev/PAMANA_JPG.jpg"],
  },
};

export default function Home() {
  return (
    <>
      <Head>
        <title>PMNA | Street x Culture</title>
        <meta
          name="description"
          content="PMNA – Where Streetwear Meets Cultural Heritage. Stay in the Loop and Subscribe Now for Exclusive Updates and Street x Culture Offers."
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="PMNA | Street x Culture" />
        <meta
          property="og:description"
          content="PMNA – Where Streetwear Meets Cultural Heritage. Stay in the Loop and Subscribe Now for Exclusive Updates and Street x Culture Offers."
        />
        <meta property="og:image" content="https://pmna.iligan.dev/PAMANA_JPG.jpg" />
        <meta property="og:url" content="https://pmna.iligan.dev/" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="PMNA | Street x Culture" />
        <meta
          name="twitter:description"
          content="PMNA – Where Streetwear Meets Cultural Heritage. Stay in the Loop and Subscribe Now for Exclusive Updates and Street x Culture Offers."
        />
        <meta name="twitter:image" content="https://pmna.iligan.dev/PAMANA_JPG.jpg" />
      </Head>

      <div className="p-10 font-[family-name:var(--font-geist-sans)]">
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
          <h3 className="text-sm text-center sm:text-left">
            Stay in the Loop – Subscribe Now for Exclusive Updates and Street x Culture Offers.
          </h3>
          <SubscribeForm />
        </main>
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center pt-10">
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-black dark:text-white"
            href="https://www.facebook.com/alibataclothingph"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              width="20px"
              height="20px"
              className="fill-current"
            >
              <path d="M 25 3 C 12.861562 3 3 12.861562 3 25 C 3 36.019135 11.127533 45.138355 21.712891 46.728516 L 22.861328 46.902344 L 22.861328 29.566406 L 17.664062 29.566406 L 17.664062 26.046875 L 22.861328 26.046875 L 22.861328 21.373047 C 22.861328 18.494965 23.551973 16.599417 24.695312 15.410156 C 25.838652 14.220896 27.528004 13.621094 29.878906 13.621094 C 31.758714 13.621094 32.490022 13.734993 33.185547 13.820312 L 33.185547 16.701172 L 30.738281 16.701172 C 29.349697 16.701172 28.210449 17.475903 27.619141 18.507812 C 27.027832 19.539724 26.84375 20.771816 26.84375 22.027344 L 26.84375 26.044922 L 32.966797 26.044922 L 32.421875 29.564453 L 26.84375 29.564453 L 26.84375 46.929688 L 27.978516 46.775391 C 38.71434 45.319366 47 36.126845 47 25 C 47 12.861562 37.138438 3 25 3 z M 25 5 C 36.057562 5 45 13.942438 45 25 C 45 34.729791 38.035799 42.731796 28.84375 44.533203 L 28.84375 31.564453 L 34.136719 31.564453 L 35.298828 24.044922 L 28.84375 24.044922 L 28.84375 22.027344 C 28.84375 20.989871 29.033574 20.060293 29.353516 19.501953 C 29.673457 18.943614 29.981865 18.701172 30.738281 18.701172 L 35.185547 18.701172 L 35.185547 12.009766 L 34.318359 11.892578 C 33.718567 11.811418 32.349197 11.621094 29.878906 11.621094 C 27.175808 11.621094 24.855567 12.357448 23.253906 14.023438 C 21.652246 15.689426 20.861328 18.170128 20.861328 21.373047 L 20.861328 24.046875 L 15.664062 24.046875 L 15.664062 31.566406 L 20.861328 31.566406 L 20.861328 44.470703 C 11.816995 42.554813 5 34.624447 5 25 C 5 13.942438 13.942438 5 25 5 z" />
            </svg>
            Facebook
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-black dark:text-white"
            href="https://www.instagram.com/alibataclothingph"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              width="20px"
              height="20px"
              className="fill-current"
            >
              <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z" />
            </svg>
            Instagram
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-black dark:text-white"
            href="mailto:hello@pmna.store"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              width="20px"
              height="20px"
              className="fill-current"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                d="M 4 12 C 2.895 12 2 12.895 2 14 L 2 36 C 2 37.105 2.895 38 4 38 L 46 38 C 47.105 38 48 37.105 48 36 L 48 14 C 48 12.895 47.105 12 46 12 L 4 12 z M 4 14 L 25 28 L 46 14"
              />
            </svg>
            hello@pmna.store
          </a>

        </footer>

      </div>
    </>
  );
}
