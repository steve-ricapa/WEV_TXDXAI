export type CredentialType = 'MERAKI' | 'WAZUH' | 'SPLUNK';

export interface CredentialRequest {
  type: CredentialType;
  apiKey?: string;
  managerIp?: string;
  apiPort?: string;
  apiUser?: string;
  apiPassword?: string;
}
