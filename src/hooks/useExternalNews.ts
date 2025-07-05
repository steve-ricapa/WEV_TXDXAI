import { useState, useEffect } from 'react';
import { fetchExternalNews } from '../services/externalNews';
import type { ExternalArticle } from '../types/ExternalArticle';
import type { News } from '../types/News';

export function useExternalNews() {
  const [news, setNews] = useState<News[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      try {
        const articles: ExternalArticle[] = await fetchExternalNews();
        const mapped: News[] = articles.map(a => ({
          id: a.url,
          title: a.title,
          summary: a.description ?? '',
          date: a.publishedAt,
          datets: new Date(a.publishedAt).getTime(),
        }));
        setNews(mapped);
      } catch (e: unknown) {
        setError(e instanceof Error ? e.message : String(e));
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  return { news, loading, error };
}
