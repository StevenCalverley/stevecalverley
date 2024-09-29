import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import SteveCalverley from '../public/images/SteveCalverley.jpg';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Steve Calverley</title>
        <meta name="description" content="Steve Calverley's personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto max-w-3xl py-8">
        <article className="flex">
          <div className="flex flex-col pr-8">
            <h1 className="font-bold text-3xl md:text-5xl tracking-tight text-black dark:text-white">
              Steve Calverley.
            </h1>
            <h2 className="mt-2 text-gray-700 dark:text-gray-200 mb-4">
              Technical Product Manager at{' '}
              <span className="font-semibold">
                <Link
                  href="https://chl.global/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CHL Group
                </Link>
              </span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-16">
              Developing software that simplifies the peer to peer market
              withing the camping industry.
            </p>
          </div>
          <div className="w-[80px] sm:w-[176px] relative">
            <Image
              src={SteveCalverley}
              alt="Steve Calverley"
              className="rounded-full filter grayscale"
            />
          </div>
        </article>
      </main>
    </div>
  );
};

export default Home;
