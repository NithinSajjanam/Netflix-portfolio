// queries/getSkills.ts
import getDatoCMSClient from './datoCMSClient';
import { Skill } from '../types';

const GET_SKILLS = `
{
  allSkills(orderBy: category_ASC) {
    name
    category
    description
    icon
  }
}
`;

export async function getSkills(): Promise<Skill[]> {
  const client = await getDatoCMSClient();
  const data = await client.request<{ allSkills: Skill[] }>(GET_SKILLS);
  return data.allSkills;
}
