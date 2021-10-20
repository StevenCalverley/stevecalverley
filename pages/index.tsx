import { GetStaticPropsContext } from 'next';
import Head from 'next/head';
import { graphcmsClient } from '../lib/client';
import {
  getAuthorByEmail,
  getExperiences,
  getSkillsByType,
  getActivities,
  getEducations,
} from '../lib/queries';
import {
  IAuthor,
  IAuthorResponse,
  IExperience,
  IExperienceResponse,
  IActivity,
  IActivitiesResponse,
  ISkill,
  ISkillResponse,
  IEducationResponse,
  IEducation,
} from '../lib/types';
import Author from '../components/author/author';
import Experience from '../components/experiences/experiences';
import Skills from '../components/skills/skills';
import Activities from '../components/activities/activities';
import Educations from '../components/educations/educations';

interface IndexProps {
  author: IAuthor;
  experiences: IExperience[];
  skills: {
    business: ISkill[];
    development: ISkill[];
  };
  activities: IActivity[];
  educations: IEducation[];
}

export default function Home({
  author,
  experiences,
  skills,
  activities,
  educations,
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
        <Educations educations={educations} />
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

  const { educations } = await client.request<IEducationResponse>(
    getEducations
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
      educations,
      preview,
    },
    revalidate: 60,
  };
}
