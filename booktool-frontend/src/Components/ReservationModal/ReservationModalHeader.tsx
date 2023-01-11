import React from 'react';
import { ModalHeader, Text } from '@chakra-ui/react';

const ReservationModalHeader: React.FC = () => {
    return (
        <>
            <ModalHeader>
                Rezerwacja
                <Text fontWeight="medium" fontSize="xs" color="gray.500" mt="2px">
                    Id: fe308-532fe4
                </Text>
            </ModalHeader>
        </>
    );
};

export default ReservationModalHeader;
