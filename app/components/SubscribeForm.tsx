"use client";

import { useState } from 'react';

export default function SubscribeForm() {
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
      {message && <p className="pt-4 text-center">{message}</p>}
    </div>
  );
}
