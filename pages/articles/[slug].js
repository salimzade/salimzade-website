import Router from 'next/router';
import Head from 'next/head';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import {
  Box,
  Button,
  Container,
  Flex,
  Image,
  Img,
  Text,
} from '@chakra-ui/react';
import { Calendar, ArrowLeftCircle } from 'react-feather';

import { getArticleDetails, getArticlesSlug } from '../../lib/gql-data';

export default function ArticleDetail({ item, body }) {
  let strDate = `${item.date}`;

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
        <Box
          bg={'gray.50'}
          border={'1px solid'}
          borderColor={'gray.100'}
          borderRadius={'md'}
          mt={5}
          p={{ base: 2, md: 3, xl: 5 }}
        >
          <Button
            color={'gray.600'}
            border={'1px solid'}
            borderColor={'blue.200'}
            mb={3}
            onClick={() => Router.back()}
          >
            <ArrowLeftCircle color="#3182CE" style={{ marginRight: '1rem' }} />
            Назад
          </Button>
          <Box borderRadius={'md'} overflow={'hidden'} mt={2} mb={10}>
            <Image
              objectFit={'cover'}
              src={item.coverImage.url}
              alt={Img.slug}
              w={'100%'}
            />
          </Box>
          <Box color={'gray.900'}>
            <Text
              fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}
              fontWeight={900}
            >
              {item.title}
            </Text>
          </Box>
          <Box color={'gray.900'} mt={10}>
            <Flex alignItems={'center'}>
              <Flex alignItems={'center'}>
                <Image
                  borderRadius="full"
                  boxSize="32px"
                  objectFit="cover"
                  src={item.author.profileImage.url}
                  alt={item.author.name}
                />
                <Text fontSize={'sm'} ml={3}>
                  {item.author.name}
                </Text>
              </Flex>
              <Flex alignItems={'center'} ml={10}>
                <Calendar size={'18'} color="#3182CE" fill="#BEE3F8" />
                <Text fontSize={'sm'} ml={3}>
                  {strDate.substring(0, 10)}
                </Text>
              </Flex>
            </Flex>
          </Box>
          <Box color={'gray.900'}>
            <MDXRemote {...body} lazy={true} />
          </Box>
        </Box>
      </Container>
    </>
  );
}

export const getStaticPaths = async () => {
  const slugRes = await getArticlesSlug();
  const slugs = slugRes.articles;

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug.slug } })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const articleDetails = await getArticleDetails(params.slug);
  const mdxSource = await serialize(articleDetails.articles[0].contentBody);

  return {
    props: {
      item: articleDetails.articles[0],
      body: mdxSource,
    },
  };
};