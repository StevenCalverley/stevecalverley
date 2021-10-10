import { GetStaticPropsContext } from 'next';
import Head from 'next/head';
import { graphcmsClient } from '../lib/client';
import { getAuthorByEmail } from '../lib/queries';
import type { IAuthor } from '../lib/types';
import Layout from '../layout/layout';
import Author from '../components/author';

interface IndexProps {
  author: IAuthor;
}

export default function Home({ author }: IndexProps) {
  return (
    <>
      <Head>
        <title>{author.name}</title>
      </Head>

      <main className="mx-auto sm:py-16 container">
        <Author author={author} />
      </main>
    </>
  );
}

export async function getStaticProps({
  params,
  preview = false,
}: GetStaticPropsContext) {
  const client = graphcmsClient(preview);

  const { author } = await client.request(getAuthorByEmail, {
    email: 'emailme@stevencalverley.com',
  });

  if (!author) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      author,
      preview,
    },
    revalidate: 60,
  };
}
