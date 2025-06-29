import React, { useEffect, useState } from 'react';
import { fetchAgents } from '../../services/agents';
import type { Agent } from '../../types/Agent';

const SophIA: React.FC = () => {
  const [agent, setAgent] = useState<Agent | null>(null);

  useEffect(() => {
    fetchAgents()
      .then(list => setAgent(list.find(a => a.name === 'SophIA') || null));
  }, []);

  if (!agent) return <p>Cargando SophIA...</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">SophIA</h1>
      <p>Nombre: {agent.name}</p>
      <p>Email: {agent.email}</p>
    </div>
  );
};

export default SophIA;
