// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';

export default function App() {
  return (
    <Router>
      <header className="bg-blue-900 text-white py-4 px-6 flex justify-between items-center">
        <NavLink to="/" className="text-lg font-semibold">Rent Ready Renovations</NavLink>
        <nav className="space-x-6">
          <NavLink to="/" className={({ isActive }) => isActive ? 'underline' : ''}>
            Home
          </NavLink>
          {/* Future nav items can be added here */}
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Future routes like Services and Contact pages go here */}
        </Routes>
      </main>

      <footer className="bg-blue-900 text-white text-center py-6 mt-10">
        <p>&copy; {new Date().getFullYear()} Rent Ready Renovations | Serving the Portland Metro Area</p>
      </footer>
    </Router>
  );
}
