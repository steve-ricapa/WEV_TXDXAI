// src/services/tickets.ts
import api from './api';
import type { Ticket } from '../types/Ticket';

export async function fetchTickets(): Promise<Ticket[]> {
  const response = await api.get<Ticket[]>('/api/tickets');
  return response.data;
}

export async function createTicket(ticket: Omit<Ticket, 'id' | 'createdAt'>): Promise<Ticket> {
  const response = await api.post<Ticket>('/api/tickets', ticket);
  return response.data;
}

export async function updateTicketStatus(id: number, action: 'confirm' | 'cancel' | 'derive'): Promise<Ticket> {
  const response = await api.put<Ticket>(`/api/tickets/${id}?action=${action}`);
  return response.data;
}

export async function deleteTicket(id: number): Promise<void> {
  await api.delete(`/api/tickets/${id}`);
}
