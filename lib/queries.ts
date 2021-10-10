import { gql } from 'graphql-request';

const getBlogPosts = gql`
  query BlogPosts() {
    posts() {
      id
      slug
      title
      updatedAt
      publishedAt
      excerpt
      date
      content {
        html
        markdown
      }
    }
  }
`;

const getStaticBlogPosts = gql`
  query StaticBlogPosts() {
    posts() {
      slug
    }
  }
`;

const getBlogPostBySlug = gql`
  query BlogPostBySlug($slug: String) {
    post(where: { slug: $slug }) {
      id
      slug
      title
      updatedAt
      publishedAt
      excerpt
      date
      content {
        html
        markdown
      }
      markdown
    }
  }
`;

export { getBlogPosts, getStaticBlogPosts, getBlogPostBySlug };
