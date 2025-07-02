import { useState } from 'react';
import type { CredentialRequest } from '../types/Credential';
import { createCredential } from '../services/credentials';
import axios, { AxiosError } from 'axios';

export function useCredentials() {
  const [loading, setLoading] = useState(false);
  const [error, setError]     = useState<string | null>(null);

  const submit = async (payload: CredentialRequest) => {
    setLoading(true);
    setError(null);
    try {
      await createCredential(payload);
    } catch (err: unknown) {
      let msg: string;
      if (axios.isAxiosError(err)) {
        msg = err.response?.data?.message ?? err.message;
      } else if (err instanceof Error) {
        msg = err.message;
      } else {
        msg = String(err);
      }
      setError(msg);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { submit, loading, error };
}
