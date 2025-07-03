import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

const Layout: React.FC = () => {
  return (
    <div className="flex flex-col h-screen">
      {/* Navbar arriba */}
      <header className="bg-gray-800 text-white">
        <Navbar />
      </header>

      {/* Contenido principal debajo */}
      <main className="flex-1 bg-gray-100 p-6 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
