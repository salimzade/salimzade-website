import Head from 'next/head';
import Link from 'next/link';
import { Box, Container, Grid } from '@chakra-ui/react';
import Card from '../../components/card';
import Heading from '../../components/heading';

import { getArticlesList } from '../../lib/gql-data';

export default function Articles({ items }) {
  return (
    <>
      <Head>
        <title>Статьи</title>
      </Head>
      <Container
        maxW={'container.xl'}
        pt={10}
        pb={10}
      >
        <Box mt={20}>
          <Heading
            title={'Статьи'}
            subTitle={'о разработке, дизайне и не только'}
          />
        </Box>
        <Grid
          templateColumns={'repeat(auto-fill, minmax(320px, 1fr))'}
          justifyContent={'center'}
          gap={5}
          mt={16}
        >
          {items.map((item) => (
            <Link href={`/articles/${item.slug}`} key={item.slug}>
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

export const getStaticProps = async () => {
  const data = await getArticlesList();
  return {
    props: {
      items: data.articles,
    },
  };
};