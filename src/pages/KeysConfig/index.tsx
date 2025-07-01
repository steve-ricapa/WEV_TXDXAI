import React from 'react';

const KeysConfig: React.FC = () => (
  <div className="min-h-screen bg-blue-100 py-12 px-4 flex justify-center items-center">
    <div className="max-w-5xl w-full bg-white shadow-lg rounded-2xl p-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Gestión de APIs</h1>
      <p className="text-gray-600 mb-10 text-center">
        Configuración de credenciales para servicios como Meraki, Wazuh y Splunk.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Meraki Card */}
        <div className="bg-white border border-gray-200 rounded-lg shadow hover:shadow-md p-6 transition text-center">
          <h2 className="text-xl font-semibold text-blue-700 mb-2">API Meraki</h2>
          <p className="text-gray-600 text-sm">Gestión de redes y dispositivos desde Cisco Meraki.</p>
          <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Configurar</button>
        </div>

        {/* Wazuh Card */}
        <div className="bg-white border border-gray-200 rounded-lg shadow hover:shadow-md p-6 transition text-center">
          <h2 className="text-xl font-semibold text-green-700 mb-2">API Wazuh</h2>
          <p className="text-gray-600 text-sm">Monitoreo de seguridad y análisis de logs.</p>
          <button className="mt-4 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">Configurar</button>
        </div>

        {/* Splunk Card */}
        <div className="bg-white border border-gray-200 rounded-lg shadow hover:shadow-md p-6 transition text-center">
          <h2 className="text-xl font-semibold text-yellow-700 mb-2">API Splunk</h2>
          <p className="text-gray-600 text-sm">Análisis de datos de máquina y dashboards en tiempo real.</p>
          <button className="mt-4 w-full bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600">Configurar</button>
        </div>
      </div>
    </div>
  </div>
);

export default KeysConfig;
