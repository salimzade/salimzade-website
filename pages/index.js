import Link from 'next/link';
import Head from 'next/head';

import { Box, Container, Grid } from '@chakra-ui/react';

import Card from '../components/card';
import Heading from '../components/heading';

import { getPortfolioItemsList } from '../lib/gql-data';

export default function Home({ items }) {
  console.log(items)
  return (
    <>
      <Head>
        <title>Проекты | Портфолио</title>
      </Head>
      <Container
        maxW={'container.xl'}
        pt={10}
        pb={10}
      >
        <Box mt={20}>
          <Heading
            title={'Проекты'}
            subTitle={'взгляните на последние работы и не последние тоже'}
          />
        </Box>
        <Grid
          templateColumns={'repeat(auto-fill, minmax(320px, 1fr))'}
          justifyContent={'center'}
          gap={5}
          mt={16}
        >
          {items?.map((item) => (
            <Link href={`/portfolio/${item.slug}`} key={item.slug}>
              <a>
                <Card {...item} />
              </a>
            </Link>
          ))}
        </Grid>
      </Container>
    </>
  );
}

// SSR
export const getStaticProps = async () => {
  const data = await getPortfolioItemsList();
  return {
    props: {
      items: data.portfolios,
    },
  };
};