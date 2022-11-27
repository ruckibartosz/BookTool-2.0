import React from 'react';
import { Box, Flex } from '@chakra-ui/react';

type Props = {
    children: React.ReactNode;
};

const ClientApartmentCardDetailsBody: React.FC<Props> = ({ children }) => {
    return (
        <Box p="8px" w="100%" h="80px" bgColor="blackAlpha.200" rounded="lg">
            <Flex h="full" justifyContent="space-around" alignItems="center">{children}</Flex>
        </Box>
    );
};

export default ClientApartmentCardDetailsBody;
