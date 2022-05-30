import Link from 'next/link';

import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Stack,
  Text,
  useColorMode,
  useColorModeValue,
  Image,
} from '@chakra-ui/react';

import { Compass, Moon, Sun } from 'react-feather';

const Links = [
  { id: 1, title: 'Проекты', path: '/' },
  { id: 2, title: 'Статьи', path: '/articles' },
];

const LinkItem = ({ title }) => {
  return (
    <Text
      fontSize={'md'}
      fontWeight={500}
      color={useColorModeValue('gray.600', 'teal.300')}
    >
      {title}
    </Text>
  );
};

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      position={'fixed'}
      bg={useColorModeValue('gray.50', 'gray.900')}
      borderBottom={'1px solid'}
      borderColor={useColorModeValue('gray.200', 'gray.700')}
      px={4}
      w={'100%'}
      zIndex={'2'}
    >
      <Container maxW={{ base: 'container.xl', md: 'container.lg'}}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <HStack alignItems={'center'}>
              <Image src={colorMode === 'light' ? '/logo-light.svg' : '/logo-dark.svg'} alt='logo' w={'128px'} h={'64px'} />
          </HStack>
          <HStack
            as={'nav'}
            spacing={10}
            justifyContent={'flex-end'}
            display={{ base: 'none', md: 'flex' }}
            w={'100%'}
            pr={10}
          >
            {Links.map((item) => (
              <Link href={item.path} key={item.id}>
                <a>
                  <LinkItem title={item.title} />
                </a>
              </Link>
            ))}
          </HStack>
          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? (
                  <Moon color="#3182CE" fill="#BEE3F8" />
                ) : (
                  <Sun color="#ECC94B" fill="#FAF089" />
                )}
              </Button>

              <Menu>
                <MenuButton as={Button} display={{ md: 'none' }}>
                  <Compass color="#3182CE" fill="#BEE3F8" />
                </MenuButton>
                <MenuList mt={2}>
                  {Links.map((item) => (
                    <MenuItem key={item.id}>
                      <Link href={item.path}>
                        <a>
                          <LinkItem title={item.title} />
                        </a>
                      </Link>
                    </MenuItem>
                  ))}
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}
