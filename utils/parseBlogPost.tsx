import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import he from 'he';
import { IPostRaw } from '../pages/blog/[slug]';

export interface IPostParsed extends Omit<IPostRaw, 'markdown'> {
  markdown?: {
    markdown: string;
    mdx: MDXRemoteSerializeResult;
  };
}

const parsePostData = async ({
  markdown,
  ...post
}: IPostRaw): Promise<IPostParsed> => ({
  ...(markdown && {
    markdown: {
      markdown: markdown,
      mdx: await serialize(he.decode(markdown)),
    },
  }),
  ...post,
});

export { parsePostData };
