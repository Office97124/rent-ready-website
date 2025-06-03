// src/pages/ServiceDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { services } from '../data/services';

export default function ServiceDetail() {
  const { serviceKey } = useParams();
  const service = services.find((s) => s.key === serviceKey);

  if (!service) {
    return (
      <main className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h1 className="text-3xl font-bold text-red-600">Service not found</h1>
        <p className="mt-4 text-gray-600">Sorry, the service you're looking for doesn't exist.</p>
      </main>
    );
  }

  return (
    <main className="bg-white min-h-screen py-20 px-6 max-w-5xl mx-auto">
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-blue-800 mb-4">{service.title}</h1>
        <p className="text-lg text-gray-700 leading-relaxed">{service.detail}</p>
      </header>

      {service.examples && service.examples.length > 0 && (
        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Examples of this service:</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            {service.examples.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </section>
      )}
    </main>
  );
}
