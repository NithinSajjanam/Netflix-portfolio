// queries/getCertifications.ts
import getDatoCMSClient from './datoCMSClient';
import { Certification } from '../types';

const GET_CERTIFICATIONS = `
  query {
    allCertifications {
      title
      issuer
      issuedDate
      link
      iconName
    }
  }
`;

export async function getCertifications(): Promise<Certification[]> {
  const client = await getDatoCMSClient();
  const data = await client.request<{ allCertifications: Certification[] }>(GET_CERTIFICATIONS);
  return data.allCertifications;
}
