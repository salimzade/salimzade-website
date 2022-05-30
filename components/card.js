import { Box, Flex, Image, Text, useColorModeValue } from '@chakra-ui/react';
import Tag from './tag';

export default function Card(props) {
  const { coverImage, slug, title, tags } = props;
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      border={'1px solid'}
      borderColor={useColorModeValue('gray.100', 'gray.700')}
      borderRadius={'md'}
      overflow={'hidden'}
      transition={'0.3s ease'}
      _hover={{
        cursor: 'pointer',
        boxShadow: 'lg',
        transition: '0.3s ease',
      }}
    >
      <Box overflow={'hidden'}>
        <Image objectFit={'cover'} src={coverImage.url} alt={slug} w={'100%'} />
      </Box>
      <Box p={2}>
        <Text
          fontSize={'md'}
          fontWeight={500}
          lineHeight={'20px'}
          color={useColorModeValue('gray.800', 'teal.300')}
          mt={2}
        >
          {title}
        </Text>
      </Box>
      <Flex p={2}>
        {tags.map((tag, idx) => (
          <Tag text={tag} key={idx} />
        ))}
      </Flex>
    </Box>
  );
}
