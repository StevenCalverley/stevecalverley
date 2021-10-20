import { gql } from 'graphql-request';

export const getEducations = gql`
  query MyEducations {
    educations(orderBy: endDate_DESC) {
      title
      startDate
      endDate
      institution
      summary
    }
  }
`;
