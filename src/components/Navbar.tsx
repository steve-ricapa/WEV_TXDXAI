import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Settings, ChevronDown } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import logo from '../assets/logotxdxAI.png';

const Navbar: React.FC = () => {
  const { isAuthenticated, logout } = useAuth();
  const [agentsOpen, setAgentsOpen] = useState(false);

  return (
    <nav className="bg-[#005B99] text-white h-20 shadow-md">
      <div className="container mx-auto flex items-center justify-between h-full px-6">
        {/* Logo + Texto */}
        <div className="flex items-center gap-3 h-full">
          <img src={logo} alt="Logo" className="h-10 w-auto object-contain" />
          <span className="text-2xl font-bold">TxDxAI</span>
        </div>

        {/* Enlaces de navegación */}
        <ul className="flex items-center space-x-6 text-lg">
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

          {/* Dropdown: Agents con flechita */}
          <li className="relative">
            <button
              onClick={() => setAgentsOpen((prev) => !prev)}
              className="inline-flex items-center px-3 py-1 rounded hover:bg-gray-700 gap-1"
            >
              Agents
              <ChevronDown
                size={18}
                className={`transition-transform duration-300 ${
                  agentsOpen ? 'rotate-180' : 'rotate-0'
                }`}
              />
            </button>

            {/* Menú desplegable con animación */}
            <ul
              className={`absolute top-full mt-1 bg-gray-800 rounded shadow-lg z-50 transition-all duration-300 overflow-hidden ${
                agentsOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <li>
                <NavLink
                  to="/agents/sophia"
                  className="block px-4 py-2 hover:bg-gray-700"
                  onClick={() => setAgentsOpen(false)}
                >
                  SophIA
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/agents/victoria"
                  className="block px-4 py-2 hover:bg-gray-700"
                  onClick={() => setAgentsOpen(false)}
                >
                  VictorIA
                </NavLink>
              </li>
            </ul>
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
              <Settings size={22} />
            </NavLink>
            <button
              onClick={logout}
              className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
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