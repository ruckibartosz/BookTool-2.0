import React from 'react';
import { FormControl, FormLabel, Input, VStack, HStack, Box } from '@chakra-ui/react';

import useReservationModal from './useReservationModal';
import ClientsPopover from '@Components/ClientsPopover';

const ReservationModalClientForm: React.FC = () => {
    const {
        clientFirstName,
        clientLastName,
        clientEmail,
        clientPhoneNumber,
        handleClientPopoverClick,
        onFirstNameChangeHandler,
        onLastNameChangeHandler,
        onClientPhoneChangeHandler,
        onEmailChangeHandler
    } = useReservationModal();

    return (
        <FormControl>
            <VStack gap="16px" alignItems="flex-start">
                <HStack alignItems="flex-end">
                    <Box w="full">
                        <FormLabel>Imię</FormLabel>
                        <Input value={clientFirstName} onChange={onFirstNameChangeHandler} type="text" />
                    </Box>
                    <Box w="full">
                        <FormLabel>Nazwisko</FormLabel>
                        <Input value={clientLastName} onChange={onLastNameChangeHandler} type="text" />
                    </Box>
                    <Box>
                        <ClientsPopover onClick={handleClientPopoverClick} />
                    </Box>
                </HStack>
                <Box w="full">
                    <FormLabel>Adres email</FormLabel>
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

export default ReservationModalClientForm;
