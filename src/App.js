import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from './Home';
import Services from './Services';

function App() {
  return (
    <Router>
      <nav className="bg-blue-900 text-white py-4 px-6 flex justify-between items-center">
        <NavLink to="/" className="text-lg font-semibold">Rent Ready Renovations</NavLink>
        <div className="space-x-6">
          <NavLink to="/" className={({ isActive }) => isActive ? "underline" : undefined}>Home</NavLink>
          <NavLink to="/services" className={({ isActive }) => isActive ? "underline" : undefined}>Services</NavLink>
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
