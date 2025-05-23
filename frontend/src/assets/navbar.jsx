import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="flex justify-between items-center p-4 bg-black shadow-lg z-50">
    <h1 className="text-2xl font-bold text-cyan-400">Digital Health+</h1>
    <div className="space-x-6">
      <Link to="/" className="text-white hover:text-cyan-300">Home</Link>
      <Link to="/dashboard" className="text-white hover:text-cyan-300">Dashboard</Link>
      <Link to="/login" className="text-white hover:text-cyan-300">Login</Link>
    </div>
  </nav>
);
export default Navbar;
