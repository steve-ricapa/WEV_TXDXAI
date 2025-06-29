import api from './api';
import type { Agent } from '../types/Agent';

export async function fetchAgents(): Promise<Agent[]> {
  const response = await api.get<Agent[]>('/api/agents');
  return response.data;
}
