import { gql } from '@apollo/client';

export const GET_PORTFOLIOS = gql`
  query GetPortfolios {
    transactions(
      tags: [
        {
          name: "Protocol",
          values: ["PRTRT001"]
        }
      ]
    ) {
      pageInfo {
        hasNextPage
      }
      edges {
        cursor
        node {
          id
          tags {
            name
            value
          }
        }
      }
    }
  }
`;

export const GET_PORTFOLIOS_BY_CATAGORY = gql`
  query GetPortfoliosByKeyword($category: [String!], $after: String) {
    transactions(
      tags: [
        {
          name: "Keyword"
          values: $category
        },
        {
          name: "Protocol",
          values: ["PRTRT001"]
        }
      ]
      after: $after
    ) {
      pageInfo {
        hasNextPage
      }
      edges {
        cursor
        node {
          id
          tags {
            name
            value
          }
        }
      }
    }
  }
`;

export const GET_MORE_PORTFOLIOS_BY_CATAGORY = gql`
  query GetMorePortfoliosByKeyword($keyword: [String!], $after: String) {
    transactions(
      tags: [
        {
          name: "Keyword"
          values: $keyword
        },
        {
          name: "Protocol",
          values: ["PRTRT001"]
        }
      ]
      after: $after
    ) {
      pageInfo {
        hasNextPage
      }
      edges {
        cursor
        node {
          id
          tags {
            name
            value
          }
        }
      }
    }
  }
`;

export const GET_ALL_PORTFOLIOS = gql`
  query GetPortfolios {
    transactions(
      tags: [
        {
          name: "Protocol",
          values: ["PRTRT001"]
        }
      ]
      first: 100
    ) {
      pageInfo {
        hasNextPage
      }
      edges {
        cursor
        node {
          id
          tags {
            name
            value
          }
        }
      }
    }
  }
`;