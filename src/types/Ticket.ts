// src/types/Ticket.ts
export interface Ticket {
  id: number;
  company: { id: number; name: string };
  createdBy: { id: number; username: string };
  subject: string;
  description: string;
  status: 'PENDING' | 'CONFIRMED' | 'CANCELLED' | 'DERIVED';
  createdAt: string; // ISO 8601
  executedAt?: string | null;
}
