import React from 'react';
import { BarChart2, Activity, ShieldCheck, AlertTriangle } from 'lucide-react';

const Dashboard: React.FC = () => (
  <div className="relative min-h-screen bg-white">
    {/* Panel de Control alineado arriba a la izquierda */}
    <div className="relative z-10 m-0 p-0">
      <div className="bg-gray-50 rounded-xl shadow-xl p-4 w-[750px] ml-2 mt-2">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Panel de Control</h1>
        <p className="text-gray-600 text-sm mb-4">
          Aquí encontrarás un resumen de métricas, actividad reciente y alertas del sistema.
        </p>

        {/* Métricas */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-3 rounded-md shadow-sm">
            <div className="flex items-center space-x-2">
              <BarChart2 className="text-blue-500 w-5 h-5" />
              <div>
                <p className="text-sm font-semibold text-blue-700">+235</p>
                <p className="text-gray-500 text-xs">Tickets cerrados</p>
              </div>
            </div>
          </div>
          <div className="bg-green-50 border-l-4 border-green-500 p-3 rounded-md shadow-sm">
            <div className="flex items-center space-x-2">
              <ShieldCheck className="text-green-500 w-5 h-5" />
              <div>
                <p className="text-sm font-semibold text-green-700">98%</p>
                <p className="text-gray-500 text-xs">Detecciones exitosas</p>
              </div>
            </div>
          </div>
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-3 rounded-md shadow-sm">
            <div className="flex items-center space-x-2">
              <Activity className="text-yellow-500 w-5 h-5" />
              <div>
                <p className="text-sm font-semibold text-yellow-700">12</p>
                <p className="text-gray-500 text-xs">Eventos en tiempo real</p>
              </div>
            </div>
          </div>
          <div className="bg-red-50 border-l-4 border-red-500 p-3 rounded-md shadow-sm">
            <div className="flex items-center space-x-2">
              <AlertTriangle className="text-red-500 w-5 h-5" />
              <div>
                <p className="text-sm font-semibold text-red-700">5</p>
                <p className="text-gray-500 text-xs">Alertas críticas</p>
              </div>
            </div>
          </div>
        </div>

        {/* Texto inferior */}
        <div className="text-left text-gray-500 text-xs italic">
          Visualizaciones de gráficos próximamente...
        </div>
      </div>
    </div>
  </div>
);

export default Dashboard;