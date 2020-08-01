import { GraphQLClient } from 'graphql-request';

const getTodos = async () => {
  const graphQLClient = new GraphQLClient(process.env.HASURA_API_URL, {
    headers: {
      'x-hasura-admin-secret': process.env.HASURA_ADMIN_SECRET
    }
  });

  const query = `
    {
      todos {
        id
        createdAt
        isCompleted
        title
      }
    }
  `;

  try {
    return graphQLClient.request(query);
  } catch (error) {
    return { error };
  }
};

export { getTodos };
