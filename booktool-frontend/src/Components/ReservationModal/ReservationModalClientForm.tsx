import React from 'react';
import { FormControl, FormLabel, Input, VStack, Box } from '@chakra-ui/react';

const ReservationModalClientForm: React.FC = () => {
    return (
        <FormControl>
            <VStack gap="16px" alignItems="flex-start">
                <Box w="full">
                    <FormLabel>Imię</FormLabel>
                    <Input type="text" />
                </Box>
                <Box w="full">
                    <FormLabel>Nazwisko</FormLabel>
                    <Input type="text" />
                </Box>
                <Box w="full">
                    <FormLabel>Adres email</FormLabel>
                    <Input type="email" />
                </Box>
                <Box w="full">
                    <FormLabel>Nr. telefonu</FormLabel>
                    <Input type="number" />
                </Box>
            </VStack>
        </FormControl>
    );
};

export default ReservationModalClientForm;
