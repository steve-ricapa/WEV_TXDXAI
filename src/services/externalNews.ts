// src/services/externalNews.ts
import axios from 'axios';
import type { ExternalArticle } from '../types/ExternalArticle';

// .env → VITE_GNEWS_API_KEY=tu_clave_gnews
const API_KEY = import.meta.env.VITE_GNEWS_API_KEY as string;
const BASE_URL = 'https://gnews.io/api/v4';

export async function fetchExternalNews(): Promise<ExternalArticle[]> {
  const { data } = await axios.get(`${BASE_URL}/search`, {
    params: {
      q: 'ciberseguridad',  // búsqueda en español
      lang: 'es',            // idioma español
      max: 20,
      token: API_KEY,
    },
  });
  return data.articles as ExternalArticle[];
}
