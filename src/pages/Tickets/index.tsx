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
    return <p>Cargando tickets...</p>;
  }
  if (error) {
    return <p className="text-red-600">Error: {error}</p>;
  }
  if (!Array.isArray(tickets)) {
    return <p>No hay tickets disponibles o el formato de datos es inválido.</p>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Tickets</h1>
      <ul className="space-y-2">
        {tickets.map((t) => (
          <li key={t.id} className="bg-white rounded shadow p-3">
            <p className="font-semibold">{t.subject}</p>
            <p className="text-sm text-gray-600">Estado: {t.status}</p>
            <p className="text-xs text-gray-500">Creado: {new Date(t.createdAt).toLocaleString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tickets;
