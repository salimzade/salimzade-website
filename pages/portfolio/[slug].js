import Head from 'next/head';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';

import { getPortfolioItemDetail, getPortfolioSlug } from '../../lib/gql-data';
import { Box, Container, Image, Text } from '@chakra-ui/react';

export default function ProjectDetails({ item, body }) {
  return (
    <>
      <Head>
        <title>{item.title}</title>
      </Head>
      <Container
        maxW={{ base: 'container.xl', md: 'container.lg' }}
        pt={16}
        pb={10}
      >
        <Box borderRadius={'md'} overflow={'hidden'} mt={5}>
          <Image
            objectFit={'cover'}
            src={item.coverImage.url}
            alt="image"
            w={'100%'}
          />
        </Box>
        <Box
          bg={'gray.50'}
          border={'1px solid'}
          borderColor={'gray.100'}
          borderRadius={'md'}
          mt={5}
          p={{ base: 2, md: 3, xl: 5 }}
        >
          <Box color={'gray.900'}>
            <Text
              fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}
              fontWeight={900}
              mb={5}
            >
              {item.title}
            </Text>
            <Text fontSize={'md'} fontWeight={900} mb={5}>
              {item.description}
            </Text>
          </Box>
          <Box color={'gray.900'} className="content">
            <MDXRemote {...body} lazy={true} />
          </Box>
        </Box>
      </Container>
    </>
  );
}

export const getStaticPaths = async () => {
  const slugRes = await getPortfolioSlug();
  const slugs = slugRes.portfolios;

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug.slug } })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const portfolioItem = await getPortfolioItemDetail(params.slug);
  const mdxSource = await serialize(portfolioItem.portfolios[0].contentBody);

  return {
    props: {
      item: portfolioItem.portfolios[0],
      body: mdxSource,
    },
  };
};