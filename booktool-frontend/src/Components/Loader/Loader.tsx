import React from 'react';
import { Spinner, Flex } from '@chakra-ui/react';

const Loader: React.FC = () => {
    return (
        <Flex alignItems="center" justifyContent="center">
            <Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="primary.first" size="xl" />
        </Flex>
    );
};

export default Loader;
