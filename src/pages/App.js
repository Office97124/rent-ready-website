import React from 'react';
import '../../tailwind.css';

export default function App() {
  return (
    <div className="bg-gray-100 text-gray-900">
      <section className="bg-white py-20 shadow-md">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4 text-blue-800">Rent Ready Renovations</h1>
          <p className="text-xl text-gray-600">Property Renovation & Restoration Specialists in the Portland Metro Area</p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center text-blue-700 mb-12">Our Services</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Kitchen & Bathroom Remodels',
                desc: 'Modern, functional, and stylish renovations for the most important spaces in your home or rental.'
              },
              {
                title: 'Interior Renovations',
                desc: 'From drywall to flooring, we transform interiors with quality craftsmanship and attention to detail.'
              },
              {
                title: 'Property Maintenance & Repairs',
                desc: 'Reliable upkeep and repair services to keep your property rent-ready at all times.'
              },
              {
                title: 'Restoration & Remediation',
                desc: 'Odor removal, mold cleanup, and post-tenant restoration services done right with professional equipment.'
              },
            ].map((service, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow">
                <h3 className="text-xl font-semibold text-blue-800 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-blue-700 mb-6">About Us</h2>
          <p className="text-gray-700 leading-relaxed">
            Rent Ready Renovations is a locally-owned renovation company focused on helping property managers and real estate professionals turn around units quickly and professionally. With experience in everything from quick turn maintenance to full-scale remodels, our team is committed to delivering high-quality, fast, and cost-effective solutions.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-blue-700 mb-6 text-center">Request a Quote</h2>
          <form action="#" method="POST" className="bg-white p-8 rounded-lg shadow-md">
            <div className="grid grid-cols-1 gap-6">
              <input className="border border-gray-300 p-3 rounded" placeholder="Full Name" required />
              <input className="border border-gray-300 p-3 rounded" placeholder="Email" type="email" required />
              <input className="border border-gray-300 p-3 rounded" placeholder="Phone Number" required />
              <textarea className="border border-gray-300 p-3 rounded" placeholder="Tell us about your project..." rows="5" required></textarea>
              <button className="bg-blue-800 text-white py-3 rounded hover:bg-blue-700 transition">Send Request</button>
            </div>
          </form>
        </div>
      </section>

      <footer className="bg-blue-900 text-white text-center py-6">
        <p>&copy; {new Date().getFullYear()} Rent Ready Renovations | Serving the Portland Metro Area</p>
      </footer>
    </div>
  );
}
