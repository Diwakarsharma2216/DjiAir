import React from 'react';
import { Box, Heading, Spinner, Text } from '@chakra-ui/react';

const LoadingSpinner = () => {
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="100vh"
            flexDirection="column"
            bgGradient="linear(to-r, gray.100, gray.300)"
            color="white"
        >
            <Heading size={{base:"3xl",md:"3xl"}} color="#000000" pb="50px">DJI global</Heading>
            <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="blue.500"
                color="white"
                size="xl"
            />
            <Text color={"#000000"} mt={4} fontSize="xl" fontWeight="bold">
                Loading...
            </Text>
        </Box>
    );
};

export default LoadingSpinner;