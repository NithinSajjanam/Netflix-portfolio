// queries/getContactMe.ts
import getDatoCMSClient from './datoCMSClient';
import { ContactMe } from '../types';

const GET_CONTACT_ME = `
  query {
    contactMe {
      profilePicture {
        url
      }
      name
      title
      summary
      companyUniversity
      linkedinLink
      email
      phoneNumber
    }
  }
`;

export async function getContactMe(): Promise<ContactMe> {
  const client = await getDatoCMSClient();
  const data = await client.request<{ contactMe: ContactMe }>(GET_CONTACT_ME);
  return data.contactMe;
}
