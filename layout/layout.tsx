import Head from 'next/head';
import Link from 'next/link';
import Nav from './Nav';

const name = 'Steven Calverley';
export const siteTitle = 'Steven Calverley';

export default function Layout({ children, home }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Steven Calverley Personal Website" />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css"></link>
      </Head>
      <header className="pt-8 flex justify-center items-center flex-col">
        {home ? (
          <>
            <img
              src="/images/SteveCalverley.jpg"
              className="h-48 w-48 rounded-full"
              alt={name}
            />
            <h1 className="mt-4 text-4xl font-bold">{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <img
                  src="/images/SteveCalverley.jpg"
                  className="h-32 w-32 rounded-full"
                  alt={name}
                />
              </a>
            </Link>
            <h2 className="mt-4 text-4xl font-bold">
              <Link href="/">
                <a>{name}</a>
              </Link>
            </h2>
          </>
        )}
        {/* <Nav /> */}
      </header>
      <main className="mt-16 mx-auto container">{children}</main>
    </div>
  );
}
