import { GraphQLClient } from 'graphql-request';
import { getDatoCmsToken } from './getDatoCmsToken';

const DATO_CMS_ENDPOINT = 'https://graphql.datocms.com/';

const getDatoCMSClient = async (): Promise<GraphQLClient> => {
  const token = await getDatoCmsToken();
  return new GraphQLClient(DATO_CMS_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export default getDatoCMSClient;
