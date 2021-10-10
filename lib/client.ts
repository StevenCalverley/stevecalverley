import { GraphQLClient } from 'graphql-request';

const GRAPHCMS_URL = process.env.NEXT_PUBLIC_GRAPHCMS_URL;

if (!GRAPHCMS_URL) {
  throw new Error('Config:: Missing Graph CMS URL');
}
const graphcmsClient = (preview = false) =>
  new GraphQLClient(GRAPHCMS_URL, {
    headers: {
      ...(process.env.GRAPHCMS_TOKEN && {
        Authorization: `Bearer ${
          preview
            ? process.env.GRAPHCMS_PREVIEW_TOKEN
            : process.env.GRAPHCMS_TOKEN
        }`,
      }),
    },
  });

export { graphcmsClient };
