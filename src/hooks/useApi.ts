import { useState, useEffect } from 'react';
import api from '../services/api';
import type { AxiosRequestConfig, AxiosError } from 'axios';

interface UseApiResult<T> {
  data: T | null;
  error: string | null;
  loading: boolean;
  callApi: (config: AxiosRequestConfig) => Promise<void>;
}

export function useApi<T = unknown>(): UseApiResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const callApi = async (config: AxiosRequestConfig) => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.request<T>(config);
      setData(response.data);
    } catch (err) {
      const axiosError = err as AxiosError;
      setError(axiosError.message);
    } finally {
      setLoading(false);
    }
  };

  return { data, error, loading, callApi };
}
