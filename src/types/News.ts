// src/types/News.ts
export interface News {
  id: string;
  title: string;
  summary: string;
  date: string; // ISO 8601
  image?: string; // Imagen opcional para mostrar en la interfaz
}