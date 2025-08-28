'use client';

import { useState } from 'react';

const Contact = () => {
  const [formStatus, setFormStatus] = useState({ success: false, message: '' });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus({ success: false, message: 'Sending message...' });

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setFormStatus({ success: true, message: 'Thank you! Your message has been sent.' });
        // Add a check to ensure e.currentTarget is not null before resetting
        if (e.currentTarget) {
          e.currentTarget.reset();
        }
      } else {
        setFormStatus({ success: false, message: result.message || 'An error occurred. Please try again.' });
      }
    } catch (error) {
      console.error('Submission error:', error);
      setFormStatus({ success: false, message: 'An error occurred. Please try again.' });
    }
  };

  return (
    <section id="contact" className="bg-gray-100 py-20 px-8">
      <div className="container mx-auto text-center">
        {/* Corrected 's here */}
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Let&apos;s Connect</h2>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          Ready to start your English journey? Send a message below and I will get back to you within 24 hours.
        </p>

        <form onSubmit={handleSubmit} className="mx-auto max-w-xl space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 transition-shadow"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 transition-shadow"
          />
          <select
            name="country"
            required
            className="w-full p-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 transition-shadow"
          >
            <option value="">Select your Country</option>
            <option value="China">China</option>
            <option value="Japan">Japan</option>
            <option value="Korea">Korea</option>
            <option value="Other">Other</option>
          </select>
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            required
            className="w-full p-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 transition-shadow"
          ></textarea>
          <button
            type="submit"
            className="w-full px-8 py-4 bg-teal-500 text-white font-semibold rounded-md shadow-md hover:bg-teal-600 transition-transform duration-300 transform hover:scale-105"
          >
            Send Message
          </button>
        </form>

        {formStatus.message && (
          <p className={`mt-4 text-center text-sm ${formStatus.success ? 'text-green-600' : 'text-red-600'}`}>
            {formStatus.message}
          </p>
        )}
      </div>
    </section>
  );
};

export default Contact;