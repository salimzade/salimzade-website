import Head from 'next/head';
import {
  Container,
  Flex,
  Image,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

export default function ErrorPage() {
  return (
    <>
      <Head>
        <title>Page not found</title>
      </Head>
      <Container maxW={'container.xl'} pt={16} pb={16}>
        <Flex
          flexDirection={'column'}
          alignItems={'center'}
          justifyContent={'center'}
          mt={10}
        >
          <Image src={'/404.png'} alt="404" />
          <Text
            fontSize={'5xl'}
            fontWeight={600}
            mt={10}
            color={useColorModeValue('gray.800', 'yellow.300')}
          >
            OMG! Page not found!
          </Text>
        </Flex>
      </Container>
    </>
  );
}