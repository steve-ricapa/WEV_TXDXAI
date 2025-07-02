import React from 'react';

export default function LandingHome() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-indigo-900 to-purple-900 text-white">
      {/* Navbar */}
      <header className="container mx-auto px-6 py-6 flex justify-between items-center">
        <div className="text-2xl font-bold">MyBrand</div>
        <nav className="space-x-8">
          <a href="#product" className="hover:text-indigo-400">Product</a>
          <a href="#features" className="hover:text-indigo-400">Features</a>
          <a href="#marketplace" className="hover:text-indigo-400">Marketplace</a>
          <a href="#company" className="hover:text-indigo-400">Company</a>
        </nav>
        <a href="/login" className="px-4 py-2 border border-white rounded hover:bg-white hover:text-gray-900 transition">
          Log in &rarr;
        </a>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 mt-24 text-center">
        <h1 className="text-6xl font-extrabold leading-tight">
          Data to enrich your <br /> online business
        </h1>
        <p className="mt-6 text-xl text-gray-300">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
          Elit sunt amet fugiat veniam occaecat.
        </p>
        <div className="mt-12 flex justify-center space-x-6">
          <a
            href="/register"
            className="px-10 py-4 bg-indigo-600 rounded-lg font-semibold text-lg hover:bg-indigo-500 transition"
          >
            Get started
          </a>
          <a
            href="https://www.txdxsecure.com"
            className="px-10 py-4 flex items-center space-x-2 text-lg hover:text-indigo-400 transition"
          >
            <span>Learn more</span>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="container mx-auto px-6 mt-24">
        <div className="rounded-xl shadow-lg overflow-hidden">
          <img
            src="https://img.freepik.com/vector-gratis/panel-usuario-panel-infografia-plantilla_23-2148378206.jpg?semt=ais_hybrid&w=740"
            alt="User Panel Infographic"
            className="w-full object-cover"
          />
        </div>
      </section>
    </div>
  );
}
