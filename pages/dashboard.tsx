import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import { SWRConfig } from 'swr';
import Head from 'next/head';

import { getTopTracks } from '../lib/spotify';
import type { Track } from '../lib/spotify/types';

import Tracks from '../components/Tracks';

export const getStaticProps: GetStaticProps = async () => {
  const res = await getTopTracks();

  return {
    props: {
      fallback: {
        '/api/tracks': res
      }
    }, // will be passed to the page component as props
    revalidate: 60
  };
};

const Dashboard: NextPage<{ fallback: Track[] }> = ({ fallback }) => {
  return (
    <div>
      <Head>
        <title>Dashboard | Steve Calverley</title>
        <meta name="description" content="Steve Calverley's dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto max-w-3xl py-8">
        <SWRConfig value={{ fallback }}>
          <Tracks />
        </SWRConfig>
      </main>
    </div>
  );
};

export default Dashboard;
