import api from './api';
import type { CredentialRequest } from '../types/Credential';

export function createCredential(data: CredentialRequest) {
  return api.post('/admin/credentials', data);
}
