
// Rent Ready Renovations - Starter React + Tailwind Website (Multi-page)

import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

function Home() {
  return (
    <div className="bg-gray-100 text-gray-900">
      <section className="bg-white py-20 shadow-md">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4 text-blue-800">Rent Ready Renovations</h1>
          <p className="text-xl text-gray-600">Property Renovation & Restoration Specialists in the Portland Metro Area</p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <Link to="/services" className="inline-block bg-blue-700 text-white px-6 py-3 rounded hover:bg-blue-600 transition">View Our Services</Link>
        </div>
      </section>
    </div>
  );
}

function Services() {
  const services = [
    {
      title: 'Kitchen & Bathroom Remodels',
      desc: 'Complete renovations to improve functionality, aesthetics, and property value with modern materials and craftsmanship.'
    },
    {
      title: 'Interior Renovations',
      desc: 'Updates for flooring, drywall, paint, lighting, and more — tailored for tenant turnover or property refreshes.'
    },
    {
      title: 'Property Maintenance & Repairs',
      desc: 'Responsive, reliable repair services for landlords, property managers, and investment properties.'
    },
    {
      title: 'Restoration & Remediation',
      desc: 'Odor removal, water damage cleanup, and post-tenant remediation using commercial-grade equipment.'
    },
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-blue-800 mb-12 text-center">Our Services</h2>
        <div className="grid md:grid-cols-2 gap-10">
          {services.map((s, i) => (
            <div key={i} className="bg-gray-50 p-6 rounded-lg shadow">
              <h3 className="text-2xl text-blue-700 font-semibold mb-3">{s.title}</h3>
              <p className="text-gray-700 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <nav className="bg-blue-900 text-white py-4 px-6 flex justify-between items-center">
        <Link to="/" className="text-lg font-semibold">Rent Ready Renovations</Link>
        <div className="space-x-6">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/services" className="hover:underline">Services</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
      </Routes>

      <footer className="bg-blue-900 text-white text-center py-6 mt-10">
        <p>&copy; {new Date().getFullYear()} Rent Ready Renovations | Serving the Portland Metro Area</p>
      </footer>
    </Router>
  );
}

export default App;
