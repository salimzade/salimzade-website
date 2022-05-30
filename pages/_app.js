import { ChakraProvider } from '@chakra-ui/react';
import Head from 'next/head';
import Footer from '../components/footer';
import Navbar from '../components/navbar';

import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta httpEquiv="Content-Type" content="text/html" charSet="UTF-8" />
        <meta name="robots" content="index. follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="персональный вебсайт про ui/ux и веб-дизайн портфолио и блог"
        />
        <meta name="author" content="Teymur Salimzade" />
        <meta name="author" content="salimzade" />
        <meta property="og:site_name" content="Teymur Salimzade" />
        <meta name="og:title" content="Teymur Salimzade" />
        <meta property="og:type" content="website" />
      </Head>
      <ChakraProvider>
        <Navbar />
        <Component {...pageProps} />
        <Footer/>
      </ChakraProvider>
    </>
  );
}

export default MyApp;

// <meta property="og:image" content="/2042.jpg" />
