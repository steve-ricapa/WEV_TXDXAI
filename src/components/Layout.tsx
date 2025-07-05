import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

const Layout: React.FC = () => {
  return (
    <div className="bg-[#eea538] min-h-screen">
      {/* Navbar encima del fondo naranja */}
      <header className="z-20 relative">
        <Navbar />
      </header>

      {/* Contenido principal */}
      <main className="relative z-10 mt-[-20px]">
        <div className="max-w-[92rem] mx-auto bg-white shadow-xl rounded-2xl p-8 mt-10">
          <Outlet />
        </div>
      </main>
    </div>
  );
};
export default Layout;