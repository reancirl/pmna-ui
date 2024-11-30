"use client";

import { useState } from 'react';
import toast from 'react-hot-toast';

export default function SubscribeForm() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const attemptsData = localStorage.getItem('subscriptionAttempts');
    let attempts = attemptsData ? JSON.parse(attemptsData) : [];

    // Filter out attempts older than 5 minutes
    const currentTime = new Date().getTime();
    attempts = attempts.filter((attempt: number) => currentTime - attempt < 5 * 60 * 1000);

    if (attempts.length >= 3) {
      setMessage('You have reached the subscription limit. Please try again in 5 minutes.');
      toast.error('Subscription limit reached. Please try again later.');
      return;
    }

    setIsSubmitting(true);
    setMessage('');

    const googleScriptUrl = 'https://script.google.com/macros/s/AKfycbwjtJjd-W29JWWk43QK_pgmcGbHZUiOCLKOgWIk-7ne7M1wP_dFpIzU7x9nnIWzjJq_/exec';

    try {
      await fetch(googleScriptUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
        mode: 'no-cors', // Bypass CORS restrictions
      });

      setMessage('Subscription successful!');
      setEmail(''); // Clear the email field on success
      toast.success('Subscription successful!');

      // Update the attempts with current time
      attempts.push(currentTime);
      localStorage.setItem('subscriptionAttempts', JSON.stringify(attempts));
    } catch (error) {
      console.error('Error occurred while subscribing:', error);
      setMessage('An error occurred. Please try again later.');
      toast.error('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="text-center inline-flex flex-col items-center gap-4 p-4 sm:p-6">
      <form onSubmit={handleSubmit} className="flex items-stretch w-full max-w-md">
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-1 px-4 py-3 text-lg border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-black dark:border-gray-600 dark:text-black"
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className={`px-6 text-lg font-semibold rounded-r-md border border-transparent transition-all ${
            isSubmitting
              ? 'bg-gray-500 text-gray-300 cursor-not-allowed'
              : 'bg-black text-white hover:bg-gray-800 dark:bg-gray-300 dark:text-gray-800 dark:hover:bg-black dark:hover:text-white dark:border-gray-300 dark:hover:border-white'
          }`}
        >
          {isSubmitting ? 'Subscribing...' : 'Subscribe'}
        </button>
      </form>
      {message && <p className="pt-4 text-center text-sm text-gray-700 dark:text-gray-300">{message}</p>}
    </div>
  );
}
