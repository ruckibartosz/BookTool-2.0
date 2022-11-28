import React from 'react';
import { Box, Flex } from '@chakra-ui/react';

type Props = {
    children: React.ReactNode;
};

const ClientApartmentCardBody: React.FC<Props> = ({ children }) => {
    return (
        <Box
            p="22px"
            position="relative"
            boxShadow="sm"
            rounded="md"
            border="1px solid"
            borderColor="gray.200"
            h="full"
            w="full"
        >
            <Flex h="100%" w="100%" alignItems="center" justifyContent="center" flexDirection="column">
                {children}
            </Flex>
        </Box>
    );
};

export default ClientApartmentCardBody;
