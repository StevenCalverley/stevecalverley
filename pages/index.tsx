import { GetStaticPropsContext } from 'next';
import Head from 'next/head';
import { graphcmsClient } from '../lib/client';
import { getAuthorByEmail, getExperiences } from '../lib/queries';
import type {
  IAuthor,
  IAuthorResponse,
  IExperience,
  IExperienceResponse,
  IActivity,
  IActivitiesResponse,
  ISkill,
  ISkillResponse,
} from '../lib/types';
import Author from '../components/author/author';
import Experience from '../components/experiences/experiences';
import Skills from '../components/skills/skills';
import { getSkillsByType } from '../lib/queries/getSkills';
import Activities from '../components/activities/activities';
import { getActivities } from '../lib/queries/getActivities';

interface IndexProps {
  author: IAuthor;
  experiences: IExperience[];
  skills: {
    business: ISkill[];
    development: ISkill[];
  };
  activities: IActivity[];
}

export default function Home({
  author,
  experiences,
  skills,
  activities,
}: IndexProps) {
  return (
    <>
      <Head>
        <title>{author.name}</title>
      </Head>
      <main>
        <Author author={author} />
        <Experience experiences={experiences} />
        <Skills skills={skills} />
        <Activities activities={activities} />
      </main>
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

  const { skills: businessSkills } = await client.request<ISkillResponse>(
    getSkillsByType,
    {
      type: 'Business',
    }
  );
  const { skills: developmentSkills } = await client.request<ISkillResponse>(
    getSkillsByType,
    {
      type: 'Development',
    }
  );

  const { activities } = await client.request<IActivitiesResponse>(
    getActivities
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
      skills: {
        business: businessSkills,
        development: developmentSkills,
      },
      activities,
      preview,
    },
    revalidate: 60,
  };
}
