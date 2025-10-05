// queries/getWorkPermit.ts
import getDatoCMSClient from './datoCMSClient';
import { WorkPermit } from '../types';

const GET_WORK_PERMIT = `
  query {
    workPermit {
      visaStatus
      expiryDate
      summary
      additionalInfo
    }
  }
`;

export async function getWorkPermit(): Promise<WorkPermit> {
  const client = await getDatoCMSClient();
  const data = await client.request<{ workPermit: WorkPermit }>(GET_WORK_PERMIT);
  return data.workPermit;
}
