"use client";

import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setMessage('Subscription successful!');
      } else {
        setMessage('Subscription failed. Please try again.');
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <>
      <Head>
        <title>PMNA | Street x Culture</title>
        <meta
          name="description"
          content="Pamana – Where Streetwear Meets Cultural Heritage. Stay in the Loop and Subscribe Now for Exclusive Updates and Street x Culture Offers."
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="PMNA | Street x Culture" />
        <meta
          property="og:description"
          content="Pamana – Where Streetwear Meets Culture. Stay in the Loop and Subscribe Now for Exclusive Updates and Street x Culture Offers."
        />
        <meta property="og:image" content="https://pmna.iligan.dev/PAMANA_JPG.jpg" />
        <meta property="og:url" content="https://pmna.iligan.dev/" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="PMNA | Street x Culture" />
        <meta
          name="twitter:description"
          content="Pamana – Where Streetwear Meets Cultural Heritage. Stay in the Loop and Subscribe Now for Exclusive Updates and Street x Culture Offers."
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
          <div className="text-center inline-flex">
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
          {message && <p className="pt-4 text-center">{message}</p>}
        </main>
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center pt-10">
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
              alt="email icon"
              width={20}
              height={20}
            />
            pmna@gmail.com
          </a>
        </footer>
      </div>
    </>
  );
}
