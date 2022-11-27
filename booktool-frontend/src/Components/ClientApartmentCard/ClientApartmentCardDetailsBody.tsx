import React from 'react';
import { Box, Flex } from '@chakra-ui/react';

type Props = {
    children: React.ReactNode;
};

const ClientApartmentCardDetailsBody: React.FC<Props> = ({ children }) => {
    return (
        <Box p="8px" w="100%" h="100%" bgColor="blackAlpha.200" rounded="lg">
            <Flex justifyContent="space-around">{children}</Flex>
        </Box>
    );
};

export default ClientApartmentCardDetailsBody;
