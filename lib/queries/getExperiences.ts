import { gql } from 'graphql-request';

export const getExperiences = gql`
  query MyExperiences {
    experiences(orderBy: startDate_DESC) {
      company {
        name
        website
      }
      responsibilities
      positions(orderBy: startDate_DESC) {
        title
        startDate
        endDate
      }
    }
  }
`;
