import React from 'react';
import { ModalHeader, Text } from '@chakra-ui/react';

const ApartmentModalHeader: React.FC = () => {
    return (
        <ModalHeader>
            Apartament
            <Text fontWeight="medium" fontSize="xs" color="gray.500" mt="2px">
                Id: fe308-532fe4
            </Text>
        </ModalHeader>
    );
};

export default ApartmentModalHeader;
