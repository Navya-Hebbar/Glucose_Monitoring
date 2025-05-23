import React from "react";

const DashboardPreview = () => (
  <section className="bg-black text-white py-16 text-center">
    <h2 className="text-3xl text-cyan-400 mb-4">Your Health Dashboard</h2>
    <p className="mb-6 text-gray-400">Securely monitor glucose trends & insights</p>
    <a href="/login" className="inline-block px-6 py-3 bg-cyan-500 rounded-full hover:bg-cyan-400">
      Go to Dashboard →
    </a>
  </section>
);
export default DashboardPreview;
