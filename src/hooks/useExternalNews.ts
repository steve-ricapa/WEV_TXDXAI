import { useState, useEffect } from 'react';
import { fetchExternalNews } from '../services/externalNews';
import type { ExternalArticle } from '../types/ExternalArticle';

export function useExternalNews() {
  const [news, setNews] = useState<ExternalArticle[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      try {
        setNews(await fetchExternalNews());
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
