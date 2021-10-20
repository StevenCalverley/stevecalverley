import { GetStaticPropsContext } from 'next';
import Head from 'next/head';
import { graphcmsClient } from '../lib/client';
import { getAuthorByEmail, getExperiences } from '../lib/queries';
import type {
  IAuthor,
  IAuthorResponse,
  IExperience,
  IExperienceResponse,
} from '../lib/types';
import { Transition } from '@headlessui/react';
import Author from '../components/author/author';
import Experience from '../components/experiences/experiences';
import { parseExperienceResponse } from '../utils/parseExperienceResponse';

interface IndexProps {
  author: IAuthor;
  experiences: IExperience[];
}

export default function Home({ author, experiences }: IndexProps) {
  return (
    <>
      <Head>
        <title>{author.name}</title>
      </Head>

      <Transition as="main" appear={true} show={true}>
        <Author author={author} />
        <Experience experiences={experiences} />
      </Transition>
    </>
  );
}

export async function getStaticProps({
  params,
  preview = false,
}: GetStaticPropsContext) {
  const client = graphcmsClient(preview);

  const { author } = await client.request<IAuthorResponse>(getAuthorByEmail, {
    email: 'emailme@stevencalverley.com',
  });

  const { experiences } = await client.request<IExperienceResponse>(
    getExperiences
  );

  if (!author && !experiences) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      author,
      experiences,
      preview,
    },
    revalidate: 60,
  };
}
