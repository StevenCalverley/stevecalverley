import { gql } from 'graphql-request';

export const getAuthorByEmail = gql`
  query AuthorByEmail($email: String) {
    author(where: { email: $email }) {
      name
      profile
      website
      email
      contact
    }
  }
`;
