import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <div className="flex-grow">
        <Component {...pageProps} />
        <Analytics />
      </div>
      <Footer />
    </>
  );
}
export default MyApp;
