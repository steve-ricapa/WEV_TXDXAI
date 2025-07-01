import React, { useEffect, useState } from 'react';

const Settings: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState<boolean>(false);
  const [autoUpdate, setAutoUpdate] = useState<boolean>(false);
  const [privacyConfigured, setPrivacyConfigured] = useState<boolean>(false);

  useEffect(() => {
    const storedDarkMode = localStorage.getItem('darkMode');
    if (storedDarkMode === 'true') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  };

  const toggleNotifications = () => setNotificationsEnabled(!notificationsEnabled);
  const toggleAutoUpdate = () => setAutoUpdate(!autoUpdate);
  const togglePrivacy = () => setPrivacyConfigured(!privacyConfigured);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white flex items-center justify-center">
      <div className="w-full max-w-3xl bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl">
        <h1 className="text-3xl font-bold text-center mb-2">Configuración</h1>
        <p className="text-center mb-8 text-gray-500 dark:text-gray-400">
          Ajusta las preferencias de la aplicación según tus necesidades.
        </p>

        {/* Modo oscuro */}
        <div className="flex items-center justify-between py-4 border-b border-gray-300 dark:border-gray-700">
          <div>
            <h2 className="font-semibold">Modo oscuro</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Activa el modo oscuro para una experiencia visual más cómoda.
            </p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={darkMode}
              onChange={toggleDarkMode}
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 rounded-full peer dark:bg-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
          </label>
        </div>

        {/* Notificaciones */}
        <div className="flex items-center justify-between py-4 border-b border-gray-300 dark:border-gray-700">
          <div>
            <h2 className="font-semibold">Notificaciones</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Recibe alertas por nuevas actualizaciones y eventos.
            </p>
          </div>
          <button
            onClick={toggleNotifications}
            className={`px-4 py-2 rounded text-white font-medium transition ${
              notificationsEnabled ? 'bg-gray-500' : 'bg-blue-600 hover:bg-blue-700'
            }`}
          >
            {notificationsEnabled ? 'Desactivar' : 'Activar'}
          </button>
        </div>

        {/* Actualizaciones automáticas */}
        <div className="flex items-center justify-between py-4 border-b border-gray-300 dark:border-gray-700">
          <div>
            <h2 className="font-semibold">Actualizaciones automáticas</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Mantén tu aplicación siempre actualizada automáticamente.
            </p>
          </div>
          <button
            onClick={toggleAutoUpdate}
            className={`px-4 py-2 rounded text-white font-medium transition ${
              autoUpdate ? 'bg-gray-500' : 'bg-green-600 hover:bg-green-700'
            }`}
          >
            {autoUpdate ? 'Deshabilitar' : 'Habilitar'}
          </button>
        </div>

        {/* Privacidad */}
        <div className="flex items-center justify-between py-4">
          <div>
            <h2 className="font-semibold">Privacidad</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Administra tus datos y preferencias de privacidad.
            </p>
          </div>
          <button
            onClick={togglePrivacy}
            className={`px-4 py-2 rounded text-white font-medium transition ${
              privacyConfigured ? 'bg-gray-500' : 'bg-purple-600 hover:bg-purple-700'
            }`}
          >
            {privacyConfigured ? 'Revisado' : 'Configurar'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;