import React from 'react';
import { FormControl, FormLabel, Input, VStack, Box } from '@chakra-ui/react';

import useClientModal from './useClientModal';

const ClientModalForm: React.FC = () => {
    const {
        clientFirstName,
        clientLastName,
        clientPhoneNumber,
        clientEmail,
        onEmailChangeHandler,
        onClientPhoneChangeHandler,
        onFirstNameChangeHandler,
        onLastNameChangeHandler
    } = useClientModal();

    return (
        <FormControl>
            <VStack gap="16px" alignItems="flex-start">
                <Box w="full">
                    <FormLabel>Imię</FormLabel>
                    <Input value={clientFirstName} onChange={onFirstNameChangeHandler} type="text" />
                </Box>
                <Box w="full">
                    <FormLabel>Nazwisko</FormLabel>
                    <Input value={clientLastName} onChange={onLastNameChangeHandler} type="text" />
                </Box>
                <Box w="full">
                    <FormLabel>E-mail</FormLabel>
                    <Input value={clientEmail} onChange={onEmailChangeHandler} type="email" />
                </Box>
                <Box w="full">
                    <FormLabel>Nr. telefonu</FormLabel>
                    <Input value={clientPhoneNumber} onChange={onClientPhoneChangeHandler} type="number" />
                </Box>
            </VStack>
        </FormControl>
    );
};

export default ClientModalForm;
