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
    } catch (error) {
      console.error('Error occurred while subscribing:', error);
      setMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="text-center inline-flex flex-col items-center gap-4">
      <form onSubmit={handleSubmit} className="flex items-stretch">
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="px-4 py-3 text-lg border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-black"
          style={{ height: '48px' }} // Explicit height to ensure it matches the button
        />
        <button
          type="submit"
          className="px-6 text-lg font-semibold text-white bg-black rounded-r-md border border-transparent hover:bg-gray-800 hover:border-black transition-all dark:bg-gray-300 dark:text-gray-800 dark:hover:bg-black dark:hover:text-white dark:border-gray-300 dark:hover:border-white"
          style={{ height: '48px' }} // Explicit height to ensure it matches the input
        >
          Subscribe
        </button>
      </form>
      {message && <p className="pt-4 text-center">{message}</p>}
    </div>
  );
}
