import { Box, Text, useColorModeValue } from '@chakra-ui/react';

export default function Tag({ text }) {
  return (
    <Box
      bg={useColorModeValue('gray.100', 'gray.700')}
      border={'1px solid'}
      borderColor={useColorModeValue('gray.200', 'gray.600')}
      borderRadius={'sm'}
      padding={'0.2rem 0.5rem'}
      mr={2}
    >
      <Text
        fontFamily={'Roboto Mono'}
        fontSize={'sm'}
        letterSpacing={'1px'}
        color={useColorModeValue('gray.700', 'teal.300')}
      >
        {text}
      </Text>
    </Box>
  );
}
