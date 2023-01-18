import React from 'react';
import { ModalHeader, Text } from '@chakra-ui/react';

const ClientModalHeader: React.FC = () => {
    return (
        <ModalHeader>
            Klient
            <Text fontWeight="medium" fontSize="xs" color="gray.500" mt="2px">
                Id: fe308-532fe4
            </Text>
        </ModalHeader>
    );
};

export default ClientModalHeader;
