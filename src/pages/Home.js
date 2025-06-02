import React from 'react';
import { Link } from 'react-router-dom';
import { services } from '../data/services';
import { faqs } from '../data/faqs';

export default function Home() {
  return (
    <main className="bg-gray-100 text-gray-900">
      <header className="bg-white py-20 shadow-md">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4 text-blue-800">Rent Ready Renovations</h1>
          <p className="text-xl text-gray-600">Property Renovation & Restoration Specialists in the Portland Metro Area</p>
        </div>
      </header>

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-blue-800 mb-10">Our Services</h2>
          <div className="grid md:grid-cols-2 gap-10">
            {services.map((s) => (
              <Link to={`/services/${s.key}`} key={s.key} className="bg-white p-6 rounded-lg shadow hover:shadow-md hover:bg-gray-100 transition block">
                <h3 className="text-2xl text-blue-700 font-semibold mb-3">{s.title}</h3>
                <p className="text-gray-700 leading-relaxed">Learn more &rarr;</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-blue-800 text-center mb-10">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.key} className="border-b pb-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{faq.q}</h3>
                <p className="text-gray-700">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-blue-800 text-center mb-10">Contact Us</h2>
          <div className="text-center space-y-4">
            <p className="text-gray-700">Phone: <a href="tel:5033002505" className="text-blue-700 underline">503-300-2505</a></p>
            <p className="text-gray-700">Email: <a href="mailto:office@pdxrentready.com" className="text-blue-700 underline">office@pdxrentready.com</a></p>
            <p className="text-gray-700">Text us any time or use the contact form on our future booking page.</p>
          </div>
        </div>
      </section>
    </main>
  );
}