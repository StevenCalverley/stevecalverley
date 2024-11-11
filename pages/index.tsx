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
