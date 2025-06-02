import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
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
          <Link to="/services" className="inline-block bg-blue-700 text-white px-6 py-3 rounded hover:bg-blue-600 transition">
            View Our Services
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Home;
