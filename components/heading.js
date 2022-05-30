import { Box, Text, useColorModeValue } from "@chakra-ui/react";

export default function Heading({title, subTitle}) {
    return (
        <Box>
            <Text fontSize={'4xl'} fontWeight={900} mb={2} color={useColorModeValue('gray.900', 'teal.300')}>
                {title}
            </Text>
            <Text fontSize={'xl'} fontWeight={500} color={useColorModeValue('gray.700', 'teal.400')}>
                {subTitle}
            </Text>
        </Box>
    )
}