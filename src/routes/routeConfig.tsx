import React from 'react';
import {
  Home as HomeIcon,
  LayoutDashboard as DashboardIcon,
  Ticket as TicketIcon,
  Users as UsersIcon,
  Settings as SettingsIcon,
  Key as KeyIcon
} from 'lucide-react';

import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';
import Tickets from '../pages/Tickets';
import SophiaChat from '../pages/Agents/SophiaChat';
import VictorIA from '../pages/Agents/VictorIA';
import Settings from '../pages/Settings';
import KeysConfig from '../pages/KeysConfig';
import Login from '../pages/Auth/Login';
import Register from '../pages/Auth/Register';

export interface RouteConfig {
  path: string;
  element: React.ReactNode;
  name: string;
  icon: React.ReactNode | null;
}

export const routes: RouteConfig[] = [
  // públicas
  { path: '/login',    element: <Login />,    name: 'Login',    icon: null },
  { path: '/register', element: <Register />, name: 'Register', icon: null },

  // app
  { path: '/home',         element: <Home />,       name: 'Home',        icon: <HomeIcon size={20}/> },
  { path: '/dashboard',    element: <Dashboard />,  name: 'Dashboard',   icon: <DashboardIcon size={20}/> },
  { path: '/tickets',      element: <Tickets />,    name: 'Tickets',     icon: <TicketIcon size={20}/> },
  { path: '/agents/sophia',element: <SophiaChat />, name: 'SophIA',      icon: <UsersIcon size={20}/> },
  { path: '/agents/victoria',element:<VictorIA/> ,name:'VictorIA',     icon:<UsersIcon size={20}/> },
  { path: '/settings',     element: <Settings />,   name: 'Configuración',icon: <SettingsIcon size={20}/> },
  { path: '/keysconfig',   element: <KeysConfig />, name: 'KeysConfig',  icon: <KeyIcon size={20}/> },
];
