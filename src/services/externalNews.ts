import axios from 'axios';
import type { ExternalArticle } from '../types/ExternalArticle';

const NEWS_API_URL = 'https://newsapi.org/v2/top-headlines';

export async function fetchExternalNews(): Promise<ExternalArticle[]> {
  const apiKey = import.meta.env.VITE_NEWS_API_KEY;
  const response = await axios.get(NEWS_API_URL, {
    params: {
      category: 'technology',
      q: 'cybersecurity',
      pageSize: 5,
      apiKey,
    },
  });
  return response.data.articles;
}
