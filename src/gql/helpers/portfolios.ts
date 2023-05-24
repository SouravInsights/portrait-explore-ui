import { useQuery } from '@apollo/client';
import { GET_PORTFOLIOS, GET_ALL_PORTFOLIOS, GET_PORTFOLIOS_BY_CATAGORY } from '@/gql/queries/portfolios';
import _ from 'lodash';

export const getAllPortfolios = () => {
  const { loading, error, data } = useQuery(GET_PORTFOLIOS);
  const allPortfolios = data?.transactions.edges;
  return { loading, error, allPortfolios };
};

export const getPortfliosByKeyword = (category: any) => {

  const { loading, error, data, fetchMore } = useQuery(GET_PORTFOLIOS_BY_CATAGORY, {
    variables: { category: category },
  });

  const portfolios = data?.transactions;

  const loadNextPage = () => {
    fetchMore({
      variables: {
        after: portfolios.edges[portfolios.edges.length - 1].cursor,
      },
      updateQuery: (prevResult, { fetchMoreResult }) => {
        const newPortfolios = fetchMoreResult.transactions;
        const updatedPortfolios = [...prevResult.transactions.edges, ...newPortfolios.edges];

        return {
          transactions: {
            edges: updatedPortfolios,
            pageInfo: fetchMoreResult.transactions.pageInfo,
            __typename: 'TransactionConnection',
          },
        };
      },
    });
  };

  return { loading, error, portfolios, loadNextPage };
}

export const getAllKeywords = () => {
  const { loading, error, data } = useQuery(GET_ALL_PORTFOLIOS);
  const uniqueCategoryObjs = _.uniqBy(_.filter(_.flatMap(data?.transactions.edges, 'node.tags'), {'name': 'Keyword'}), 'value');
  const categories = _.flatMap(uniqueCategoryObjs, 'value');
   
  return { loading, error, categories };
}