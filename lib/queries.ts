import { gql } from 'graphql-request';

const getAuthorByEmail = gql`
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

export { getAuthorByEmail };
