import {
  Box,
  Button,
  Container,
  Flex,
  Image,
  Stack,
  Text,
  useColorMode,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react';
import Link from 'next/link';

import { GitHub, Youtube } from 'react-feather';

const Links = [
  { id: 1, title: 'Проекты', path: '/' },
  { id: 2, title: 'Статьи', path: '/articles' },
  { id: 3, title: 'Icons 8', path: 'https://icons8.ru/illustrations' },
];

const LinkText = ({ text }) => {
  return (
    <Text fontWeight={500} color={useColorModeValue('gray.600', 'teal.300')}>
      {text}
    </Text>
  );
};

const SocialButton = ({ children, label, href }) => {
  return (
    <Button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={12}
      h={12}
      cursor={'pointer'}
      as={'a'}
      href={href}
      target={'_blank'}
      display={'flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </Button>
  );
};

export default function Footer() {
  const { colorMode } = useColorMode();
  return (
    <Box
      bg={useColorModeValue('gray.100', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.400')}
    >
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        h={'96px'}
        spacing={4}
        justify={'center'}
        align={'center'}
      >
        <Stack direction={'row'} spacing={6}>
          {Links.map((item) => (
            <Link key={item.id} href={item.path}>
              <a>
                <LinkText text={item.title} />
              </a>
            </Link>
          ))}
        </Stack>
      </Container>
      <Flex
        align={'center'}
        _before={{
          content: '""',
          borderBottom: '1px solid',
          borderColor: useColorModeValue('gray.200', 'gray.700'),
          flexGrow: 1,
          mr: 8,
        }}
        _after={{
          content: '""',
          borderBottom: '1px solid',
          borderColor: useColorModeValue('gray.200', 'gray.700'),
          flexGrow: 1,
          ml: 8,
        }}
      >
        <Image
          src={colorMode == 'light' ? '/logo-light.svg' : '/logo-dark.svg'}
          width={'128px'}
          height={'64px'}
          alt={'Salimzade Logo'}
        />
      </Flex>
      <Box>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}
        >
          <Text fontSize={12} color={useColorModeValue('gray.900', 'gray.500')}>
            © 2020 - {new Date().getFullYear()} Built by SALIMZADE. All rights
            reserved (v 1.0.0)
          </Text>
          <Stack direction={'row'} spacing={6}>
            <SocialButton href={''}>
              <Youtube />
            </SocialButton>
            <SocialButton href={'https://github.com/salimzade'}>
              <GitHub />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
