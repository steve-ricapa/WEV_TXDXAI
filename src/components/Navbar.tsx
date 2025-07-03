import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Settings } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';

const Navbar: React.FC = () => {
  const { isAuthenticated, logout } = useAuth();
  const [agentsOpen, setAgentsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto flex items-center justify-between py-3 px-6">
        {/* Logo o Título */}
        <div className="text-xl font-bold">TxDx Secure</div>

        {/* Enlaces de navegación */}
        <ul className="flex items-center space-x-4">
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `inline-flex items-center px-3 py-1 rounded ${
                  isActive ? 'bg-gray-700' : 'hover:bg-gray-700'
                }`
              }
            >
              Dashboard
            </NavLink>
          </li>
          <li className="relative">
            <button
              onClick={() => setAgentsOpen(o => !o)}
              className="inline-flex items-center px-3 py-1 rounded hover:bg-gray-700"
            >
              Agents
            </button>
            {agentsOpen && (
              <ul className="absolute top-full mt-1 bg-gray-800 rounded shadow-lg">
                <li>
                  <NavLink
                    to="/agents/sophia"
                    className="block px-4 py-2 hover:bg-gray-700"
                  >
                    Sophia
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/agents/victoria"
                    className="block px-4 py-2 hover:bg-gray-700"
                  >
                    Victoria
                  </NavLink>
                </li>
              </ul>
            )}
          </li>
          <li>
            <NavLink
              to="/tickets"
              className={({ isActive }) =>
                `inline-flex items-center px-3 py-1 rounded ${
                  isActive ? 'bg-gray-700' : 'hover:bg-gray-700'
                }`
              }
            >
              Tickets
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/keysconfig"
              className={({ isActive }) =>
                `inline-flex items-center px-3 py-1 rounded ${
                  isActive ? 'bg-gray-700' : 'hover:bg-gray-700'
                }`
              }
            >
              KeysConfig
            </NavLink>
          </li>
        </ul>

        {/* Ajustes y Cerrar Sesión */}
        {isAuthenticated && (
          <div className="flex items-center space-x-4">
            <NavLink
              to="/settings"
              className="inline-flex items-center hover:text-gray-200"
            >
              <Settings size={20} />
            </NavLink>
            <button
              onClick={logout}
              className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded"
            >
              Cerrar sesión
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
