import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import ServiceDetail from './pages/ServiceDetail';

export default function App() {
  return (
    <Router>
      <header className="bg-blue-900 text-white py-4 px-6 flex justify-between items-center">
        <NavLink to="/" className="text-lg font-semibold">Rent Ready Renovations</NavLink>
        <nav className="space-x-6">
          <NavLink to="/" className={({ isActive }) => isActive ? 'underline' : ''}>
            Home
          </NavLink>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/services/:serviceKey" element={<ServiceDetail />} />
        </Routes>
      </main>

      <footer className="bg-blue-900 text-white text-center py-6 mt-10">
        <p>&copy; {new Date().getFullYear()} Rent Ready Renovations | Serving the Portland Metro Area</p>
      </footer>
    </Router>
  );
}
