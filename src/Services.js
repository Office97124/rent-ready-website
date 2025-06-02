import React from 'react';

const services = [
  {
    id: 'kitchen',
    title: 'Kitchen & Bathroom Remodels',
    desc: 'Complete renovations to improve functionality, aesthetics, and property value with modern materials and craftsmanship.'
  },
  {
    id: 'interior',
    title: 'Interior Renovations',
    desc: 'Updates for flooring, drywall, paint, lighting, and more — tailored for tenant turnover or property refreshes.'
  },
  {
    id: 'maintenance',
    title: 'Property Maintenance & Repairs',
    desc: 'Responsive, reliable repair services for landlords, property managers, and investment properties.'
  },
  {
    id: 'restoration',
    title: 'Restoration & Remediation',
    desc: 'Odor removal, water damage cleanup, and post-tenant remediation using commercial-grade equipment.'
  },
];

function Services() {
  return (
    <main className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-blue-800 mb-12 text-center">Our Services</h2>
        <div className="grid md:grid-cols-2 gap-10">
          {services.map((s) => (
            <div key={s.id} className="bg-gray-50 p-6 rounded-lg shadow">
              <h3 className="text-2xl text-blue-700 font-semibold mb-3">{s.title}</h3>
              <p className="text-gray-700 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Services;
