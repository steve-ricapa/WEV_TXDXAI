import React, { useEffect, useState } from 'react';
import { fetchTickets } from '../../services/tickets';
import type { Ticket } from '../../types/Ticket';

const Tickets: React.FC = () => {
  const [tickets, setTickets] = useState<Ticket[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      try {
        const data = await fetchTickets();
        setTickets(data);
      } catch (e: unknown) {
        setError(e instanceof Error ? e.message : String(e));
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  if (loading) {
    return <p className="ml-4 mt-4 text-sm">Cargando tickets...</p>;
  }

  if (error) {
    return <p className="text-red-600 ml-4 mt-4 text-sm">Error: {error}</p>;
  }

  if (!Array.isArray(tickets)) {
    return (
      <p className="ml-4 mt-4 text-sm">
        No hay tickets disponibles o el formato de datos es inválido.
      </p>
    );
  }

  return (
    <div className="relative min-h-screen bg-white">
      {/* Fondo superior blanco */}
      <div className="absolute top-0 left-0 w-full h-[20vh] bg-white z-0" />

      {/* Contenido pegado arriba a la izquierda */}
      <div className="relative z-10 pt-4 pl-4">
        <div className="w-[750px] bg-white p-4 rounded-xl shadow-xl">
          <h1 className="text-2xl font-bold mb-3">Tickets</h1>
          <ul className="space-y-3">
            {tickets.map((t) => (
              <li
                key={t.id}
                className="bg-white border border-gray-200 rounded-lg shadow-sm p-3"
              >
                <p className="font-semibold text-sm">{t.subject}</p>
                <p className="text-gray-600 text-xs">Estado: {t.status}</p>
                <p className="text-gray-500 text-xs">
                  Creado:{' '}
                  {t.createdAt && !isNaN(new Date(t.createdAt).getTime())
                    ? new Date(t.createdAt).toLocaleString()
                    : 'Fecha inválida'}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Tickets;