// queries/getProjects.ts
import getDatoCMSClient from './datoCMSClient';
import { Project } from '../types';

const GET_PROJECTS = `
  query {
    allProjects(orderBy: title_ASC) {
      title
      description
      techUsed
      image {
        url
      }
    }
  }
`;

export async function getProjects(): Promise<Project[]> {
  const client = await getDatoCMSClient();
  const data = await client.request<{ allProjects: Project[] }>(GET_PROJECTS);
  return data.allProjects;
}
