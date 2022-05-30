import { gql, GraphQLClient } from 'graphql-request';

const endpoint = process.env.API_URL;

const graphQLClient = new GraphQLClient(endpoint);

// Portfolio Query
export const getPortfolioItemsList = async () => {
  const query = gql`
    {
      portfolios(orderBy: date_DESC) {
        title
        slug
        description
        coverImage {
          url
          width
          height
        }
        date
        tags
      }
    }
  `;
  return await graphQLClient.request(query);
};

export const getPortfolioItemDetail = async (slug) => {
  const query = gql`
    query getPortfolio($slug: String!) {
      portfolios(where: { slug: $slug }) {
        title
        slug
        description
        coverImage {
          url
          width
          height
        }
        contentBody
        date
        tags
      }
    }
  `;

  const variables = {
    slug
  };

  return await graphQLClient.request(query, variables);
};

export const getPortfolioSlug = async () => {
  const query = gql`
    {
      portfolios {
        slug
      }
    }
  `;

  return await graphQLClient.request(query);
};

// Articles Query
export const getArticlesList = async () => {
  const query = gql`
    {
      articles(orderBy: date_DESC) {
        title
        slug
        description
        coverImage {
          url
          width
          height
        }
        date
        tags
        author {
          name
          profileImage {
            url
            width
            height
          }
        }
      }
    }
  `;

  return await graphQLClient.request(query);
};

export const getArticleDetails = async (slug) => {
  const query = gql`
    query getArticle($slug: String!) {
      articles(where: { slug: $slug }) {
        title
        slug
        description
        coverImage {
          url
          width
          height
        }
        contentBody
        date
        tags
        author {
          name
          profileImage {
            url
            width
            height
          }
        }
      }
    }
  `;

  const variables = {
    slug
  };

  return await graphQLClient.request(query, variables);
};

export const getArticlesSlug = async () => {
  const query = gql`
    {
      articles {
        slug
      }
    }
  `;
  return await graphQLClient.request(query);
};