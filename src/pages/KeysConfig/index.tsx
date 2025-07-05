import React, { useState } from 'react';
import { useCredentials } from '../../hooks/useCredentials';
import type { CredentialType } from '../../types/Credential';
import { useAuth } from '../../hooks/useAuth';

const credentialOptions: { type: CredentialType; label: string; description: string }[] = [
  { type: 'MERAKI', label: 'API Meraki', description: 'Gestión de redes y dispositivos desde Cisco Meraki.' },
  { type: 'WAZUH', label: 'API Wazuh', description: 'Monitoreo de seguridad y análisis de logs.' },
  { type: 'SPLUNK', label: 'API Splunk', description: 'Análisis de datos de máquina y dashboards en tiempo real.' },
];

const KeysConfig: React.FC = () => {
  const { submit, loading, error } = useCredentials();
  const { isAuthenticated } = useAuth();
  const [activeType, setActiveType] = useState<CredentialType | null>(null);
  const [apiKey, setApiKey] = useState('');
  const [managerIp, setManagerIp] = useState('');
  const [apiPort, setApiPort] = useState('');
  const [apiUser, setApiUser] = useState('');
  const [apiPassword, setApiPassword] = useState('');

  if (!isAuthenticated) {
    return <p className="p-4 text-center">Acceso denegado. Por favor, inicia sesión.</p>;
  }

  const handleSave = async () => {
    if (!activeType) return;
    const payload: Record<string, any> = { type: activeType };
    if (activeType === 'MERAKI' || activeType === 'SPLUNK') {
      payload.apiKey = apiKey;
    }
    if (activeType === 'WAZUH') {
      payload.managerIp = managerIp;
      payload.apiPort = apiPort;
      payload.apiUser = apiUser;
      payload.apiPassword = apiPassword;
    }
    try {
      await submit(payload as any);
      setActiveType(null);
      setApiKey('');
      setManagerIp('');
      setApiPort('');
      setApiUser('');
      setApiPassword('');
    } catch {
      // manejar error
    }
  };

  return (
    <div className="relative min-h-screen bg-white">
      {/* Fondo superior azul */}
      <div className="absolute top-0 left-0 w-full h-48 bg-[#eea538] z-0" />

      {/* Contenido principal */}
      <div className="relative z-10 pt-20 px-4 flex justify-center items-start">
        <div className="max-w-5xl w-full bg-white shadow-lg rounded-2xl p-10">
          <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Gestión de APIs</h1>
          <p className="text-gray-600 mb-10 text-center">
            Configuración de credenciales para servicios como Meraki, Wazuh y Splunk.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {credentialOptions.map(option => (
              <div key={option.type} className="bg-white border border-gray-200 rounded-lg shadow hover:shadow-md p-6 transition text-center">
                <h2
                  className="text-xl font-semibold mb-2"
                  style={{
                    color:
                      option.type === 'MERAKI'
                        ? '#1E40AF'
                        : option.type === 'WAZUH'
                        ? '#047857'
                        : '#B45309',
                  }}
                >
                  {option.label}
                </h2>
                <p className="text-gray-600 text-sm">{option.description}</p>
                <button
                  onClick={() => setActiveType(option.type)}
                  className={`mt-4 w-full py-2 rounded text-white ${
                    option.type === 'MERAKI'
                      ? 'bg-blue-600 hover:bg-blue-700'
                      : option.type === 'WAZUH'
                      ? 'bg-green-600 hover:bg-green-700'
                      : 'bg-yellow-500 hover:bg-yellow-600'
                  }`}
                >
                  Configurar
                </button>
              </div>
            ))}
          </div>

          {activeType && (
            <div className="mt-8 bg-gray-50 p-6 rounded-lg max-w-md mx-auto">
              <h3 className="text-xl font-semibold mb-4">Configurar {activeType}</h3>

              {activeType === 'MERAKI' && (
                <>
                  <label className="block text-sm font-medium mb-2">API Key:</label>
                  <input
                    type="text"
                    value={apiKey}
                    onChange={e => setApiKey(e.target.value)}
                    className="w-full border border-gray-300 px-3 py-2 rounded mb-4"
                  />
                </>
              )}

              {activeType === 'WAZUH' && (
                <>
                  <label className="block text-sm font-medium mb-2">Manager IP:</label>
                  <input
                    type="text"
                    value={managerIp}
                    onChange={e => setManagerIp(e.target.value)}
                    className="w-full border border-gray-300 px-3 py-2 rounded mb-4"
                  />
                  <label className="block text-sm font-medium mb-2">API Port:</label>
                  <input
                    type="text"
                    value={apiPort}
                    onChange={e => setApiPort(e.target.value)}
                    className="w-full border border-gray-300 px-3 py-2 rounded mb-4"
                  />
                  <label className="block text-sm font-medium mb-2">API User:</label>
                  <input
                    type="text"
                    value={apiUser}
                    onChange={e => setApiUser(e.target.value)}
                    className="w-full border border-gray-300 px-3 py-2 rounded mb-4"
                  />
                  <label className="block text-sm font-medium mb-2">API Password:</label>
                  <input
                    type="password"
                    value={apiPassword}
                    onChange={e => setApiPassword(e.target.value)}
                    className="w-full border border-gray-300 px-3 py-2 rounded mb-4"
                  />
                </>
              )}

              {activeType === 'SPLUNK' && (
                <>
                  <label className="block text-sm font-medium mb-2">API Key:</label>
                  <input
                    type="text"
                    value={apiKey}
                    onChange={e => setApiKey(e.target.value)}
                    className="w-full border border-gray-300 px-3 py-2 rounded mb-4"
                  />
                </>
              )}

              {error && <p className="text-red-500 mb-4">{error}</p>}
              <div className="flex justify-end space-x-4">
                <button
                  onClick={() => setActiveType(null)}
                  className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
                >
                  Cancelar
                </button>
                <button
                  onClick={handleSave}
                  disabled={loading}
                  className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 disabled:opacity-50"
                >
                  {loading ? 'Guardando...' : 'Guardar'}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default KeysConfig;