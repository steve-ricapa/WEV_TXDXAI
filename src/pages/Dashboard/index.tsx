import React from 'react';
import { BarChart2, Activity, ShieldCheck, AlertTriangle } from 'lucide-react';

const Dashboard: React.FC = () => (
  <div className="min-h-screen bg-blue-100 py-10 px-6">
    <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl p-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Panel de Control</h1>
      <p className="text-gray-600 text-lg mb-8">
        Aquí encontrarás un resumen de métricas, actividad reciente y alertas del sistema.
      </p>

      {/* Métricas destacadas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-lg shadow-md">
          <div className="flex items-center space-x-4">
            <BarChart2 className="text-blue-500 w-6 h-6" />
            <div>
              <p className="text-lg font-semibold text-blue-700">+235</p>
              <p className="text-gray-500 text-sm">Tickets cerrados</p>
            </div>
          </div>
        </div>
        <div className="bg-green-50 border-l-4 border-green-500 p-5 rounded-lg shadow-md">
          <div className="flex items-center space-x-4">
            <ShieldCheck className="text-green-500 w-6 h-6" />
            <div>
              <p className="text-lg font-semibold text-green-700">98%</p>
              <p className="text-gray-500 text-sm">Detecciones exitosas</p>
            </div>
          </div>
        </div>
        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-5 rounded-lg shadow-md">
          <div className="flex items-center space-x-4">
            <Activity className="text-yellow-500 w-6 h-6" />
            <div>
              <p className="text-lg font-semibold text-yellow-700">12</p>
              <p className="text-gray-500 text-sm">Eventos en tiempo real</p>
            </div>
          </div>
        </div>
        <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-lg shadow-md">
          <div className="flex items-center space-x-4">
            <AlertTriangle className="text-red-500 w-6 h-6" />
            <div>
              <p className="text-lg font-semibold text-red-700">5</p>
              <p className="text-gray-500 text-sm">Alertas críticas</p>
            </div>
          </div>
        </div>
      </div>

      {/* Placeholder de visualizaciones futuras */}
      <div className="text-center text-gray-500 text-sm italic">
        Visualizaciones de gráficos próximamente...
      </div>
    </div>
  </div>
);

export default Dashboard;