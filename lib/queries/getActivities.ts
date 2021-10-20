import { gql } from 'graphql-request';

export const getActivities = gql`
  query MyActivities {
    activities {
      name
      iconComponent
    }
  }
`;
