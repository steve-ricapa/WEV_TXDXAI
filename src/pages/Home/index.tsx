import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white">
      {/* Navbar */}  
      <header className="flex items-center justify-between max-w-7xl mx-auto px-6 py-6">
        <div className="text-2xl font-bold tracking-tight">XOC</div>
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          <span className="text-white opacity-70 cursor-default">Product</span>
          <span className="text-white opacity-70 cursor-default">Features</span>
          <span className="text-white opacity-70 cursor-default">Marketplace</span>
          <span className="text-white opacity-70 cursor-default">Company</span>
        </nav>
        <div>
          {isAuthenticated ? (
            <button
              onClick={logout}
              className="text-sm font-medium text-white hover:text-red-400 transition"
            >
              Cerrar sesión
            </button>
          ) : (
            <a
              href="/login"
              className="text-sm font-medium text-white hover:text-blue-400 transition"
            >
              Log in →
            </a>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-24">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 max-w-3xl">
          Data to enrich your <br className="hidden md:block" /> online business
        </h1>
        <p className="text-lg md:text-xl text-slate-300 max-w-xl mb-10">
          Descubre el poder de la inteligencia artificial con nuestra innovadora aplicación, diseñada para hacer tu vida más fácil, inteligente y eficiente.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => navigate('/register')}
            className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white font-medium rounded-lg shadow"
          >
            Get started
          </button>
          <a
            href="https://www.txdxsecure.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-white hover:bg-white hover:text-indigo-900 transition text-white font-medium rounded-lg text-center"
          >
            Learn more →
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;