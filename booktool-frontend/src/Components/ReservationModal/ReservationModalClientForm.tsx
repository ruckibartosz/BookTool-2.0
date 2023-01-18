import React from 'react';
import { FormControl, FormLabel, Input, VStack, HStack, Box } from '@chakra-ui/react';

import ClientsPopover from '@Components/ClientsPopover';

const ReservationModalClientForm: React.FC = () => {
    return (
        <FormControl>
            <VStack gap="16px" alignItems="flex-start">
                <HStack alignItems="flex-end">
                    <Box w="full">
                        <FormLabel>Imię</FormLabel>
                        <Input type="text" />
                    </Box>
                    <Box w="full">
                        <FormLabel>Nazwisko</FormLabel>
                        <Input type="text" />
                    </Box>
                    <Box>
                        <ClientsPopover />
                    </Box>
                </HStack>
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
