# Hasura Next.js SSR

This example uses [Hasura](https://hasura.io/), [Next.js](https://nextjs.org/), and [graphql-request](https://github.com/prisma-labs/graphql-request) to fetch data from a GraphQL API and render server-side.

## Create Your Own

1. Create your own GraphQL API with [Hasura](https://cloud.hasura.io/).
   ![image](https://user-images.githubusercontent.com/9113740/89105409-82494480-d3e6-11ea-8898-55f4f05db9c4.png)
1. Inside the console, create a new schema and add some data.
   ![image](https://user-images.githubusercontent.com/9113740/89105413-8d03d980-d3e6-11ea-8e6f-6d616fe3da0f.png)
1. Optional: [Secure your API endpoint.](https://hasura.io/docs/1.0/graphql/manual/deployment/securing-graphql-endpoint.html)
   ![image](https://user-images.githubusercontent.com/9113740/89105407-76f61900-d3e6-11ea-9f5e-d989515154a7.png)

## Running Locally

1. Install dependencies by running `yarn` or `npm install`.
1. Create an `.env.local` file.
1. Populate `HASURA_API_URL`.
1. Optional: Populate `HASURA_ADMIN_SECRET`.
1. Run `yarn dev` or `npm run dev` to start the application at [http://localhost:3000](http://localhost:3000).

## Deployment

Deploy this project in one-click with [Vercel](https://vercel.com). You'll need to have your environment variables ready.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/leerob/hasura-nextjs-ssr)
