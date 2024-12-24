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
        <article className="flex flex-col px-4">
          <div className="flex justify-between items-end">
            <h1 className="font-bold text-3xl sm:text-5xl tracking-tight text-black dark:text-white">
              Steve Calverley
            </h1>
            <div className="w-[80px] sm:w-[176px] relative">
              <Image
                src={SteveCalverley}
                alt="Steve Calverley"
                className="rounded-full filter grayscale"
              />
            </div>
          </div>
          <div>
            <p className="mt-8 text-gray-500 dark:text-gray-400 max-w-xl">
              Hard-working web developer with a flair for creating elegant
              web-based solutions on time and within budget. I build solutions
              that elevate experiences and empower businesses. Developed a suite
              of web applications supporting business objectives to enhance
              customer experience. Passionate about software architecture and
              user experience.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
};

export default Home;
