import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';

const Navbar: React.FC = () => {
  const { isAuthenticated, logout } = useAuth();
  const [agentsOpen, setAgentsOpen] = useState(false);

  const toggleAgents = () => setAgentsOpen(open => !open);

  return (
    <aside className="w-64 h-full bg-gray-800 text-white p-4">
      <nav>
        <ul>
          <li className="mb-2">
            <NavLink to="/" className={({ isActive }) => `block px-4 py-2 rounded hover:bg-gray-700 ${isActive ? 'bg-gray-700' : ''}`}>
              Home
            </NavLink>
          </li>
          <li className="mb-2">
            <NavLink to="/dashboard" className={({ isActive }) => `block px-4 py-2 rounded hover:bg-gray-700 ${isActive ? 'bg-gray-700' : ''}`}>
              Dashboard
            </NavLink>
          </li>
          <li className="mb-2">
            <NavLink to="/tickets" className={({ isActive }) => `block px-4 py-2 rounded hover:bg-gray-700 ${isActive ? 'bg-gray-700' : ''}`}>
              Tickets
            </NavLink>
          </li>
          <li className="mb-2">
            <button
              onClick={toggleAgents}
              className="w-full flex justify-between items-center px-4 py-2 rounded hover:bg-gray-700 focus:outline-none"
            >
              <span>Agents</span>
              {agentsOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
            {agentsOpen && (
              <ul className="mt-1 ml-4">
                <li className="mb-1">
                  <NavLink to="/agents/sophia" className={({ isActive }) => `block px-3 py-1 rounded hover:bg-gray-700 ${isActive ? 'bg-gray-700' : ''}`}>
                    SophIA
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/agents/victoria" className={({ isActive }) => `block px-3 py-1 rounded hover:bg-gray-700 ${isActive ? 'bg-gray-700' : ''}`}>
                    VictorIA
                  </NavLink>
                </li>
              </ul>
            )}
          </li>
          <li className="mb-2">
            <NavLink to="/settings" className={({ isActive }) => `block px-4 py-2 rounded hover:bg-gray-700 ${isActive ? 'bg-gray-700' : ''}`}>
              Configuración
            </NavLink>
          </li>
          <li>
            <NavLink to="/keysconfig" className={({ isActive }) => `block px-4 py-2 rounded hover:bg-gray-700 ${isActive ? 'bg-gray-700' : ''}`}>
              KeysConfig
            </NavLink>
          </li>
        </ul>

        {isAuthenticated && (
          <div className="mt-4 px-4">
            <button
              onClick={logout}
              className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700"
            >
              Cerrar sesión
            </button>
          </div>
        )}
      </nav>
    </aside>
);

};

export default Navbar;
