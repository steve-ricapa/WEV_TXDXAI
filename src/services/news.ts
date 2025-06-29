// src/services/news.ts
import api from './api';
import type { News } from '../types/News';

export async function getLatestNews(): Promise<News[]> {
  const response = await api.get<News[]>('/news/latest');
  return response.data;
}
