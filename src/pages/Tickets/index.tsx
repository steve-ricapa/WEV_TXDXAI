// src/pages/Tickets/index.tsx
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
    return <p className="ml-10 mt-6">Cargando tickets...</p>;
  }

  if (error) {
    return <p className="text-red-600 ml-10 mt-6">Error: {error}</p>;
  }

  if (!Array.isArray(tickets)) {
    return (
      <p className="ml-10 mt-6">
        No hay tickets disponibles o el formato de datos es inválido.
      </p>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-1">
      <div className="max-w-2xl ml-10 mr-auto bg-white p-6 rounded-xl shadow">
        <h1 className="text-2xl font-bold mb-4">Tickets</h1>
        <ul className="space-y-3">
          {tickets.map((t) => (
            <li key={t.id} className="bg-white rounded shadow p-4 border border-gray-100">
              <p className="font-semibold">{t.subject}</p>
              <p className="text-sm text-gray-600">Estado: {t.status}</p>
              <p className="text-xs text-gray-500">
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
  );
};

export default Tickets;