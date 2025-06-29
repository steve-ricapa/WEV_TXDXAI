import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { routes } from './routeConfig';

const AppRoutes: React.FC = () => (
  <BrowserRouter>
    <Routes>
      {/* rutas públicas */}
      <Route path="/login"    element={routes.find(r=>r.path==='/login')?.element} />
      <Route path="/register" element={routes.find(r=>r.path==='/register')?.element} />

      {/* rutas protegidas */}
      <Route element={<Layout />}>
        <Route path="/" element={routes.find(r=>r.path==='/')?.element} />
        {routes
          .filter(r => !['/login','/register','/'].includes(r.path))
          .map(r => <Route key={r.path} path={r.path} element={r.element} />)}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
