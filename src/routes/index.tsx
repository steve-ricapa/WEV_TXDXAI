import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { routes } from './routeConfig';

const AppRoutes: React.FC = () => (
  <BrowserRouter>
    <Routes>
      {/* Redirige la raíz a /home */}
      <Route path="/" element={<Navigate to="/home" replace />} />

      {/* Página pública Home sin navbar */}
      <Route path="/home" element={routes.find(r => r.path === '/home')?.element} />

      {/* Rutas públicas de autenticación */}
      <Route path="/login" element={routes.find(r => r.path === '/login')?.element} />
      <Route path="/register" element={routes.find(r => r.path === '/register')?.element} />

      {/* Rutas protegidas (Layout + Navbar) */}
      <Route element={<Layout />}>
        {routes
          .filter(r => !['/home', '/login', '/register'].includes(r.path))
          .map(r => (
            <Route key={r.path} path={r.path} element={r.element} />
          ))}
        {/* Cualquier otra ruta redirige a /home */}
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
