import React from 'react';
import {
    FormControl,
    FormLabel,
    Input,
    VStack,
    HStack,
    Box,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper
} from '@chakra-ui/react';

const ApartmentModalForm: React.FC = () => {
    return (
        <FormControl>
            <VStack gap="16px" alignItems="flex-start">
                <Box w="full">
                    <FormLabel>Nazwa</FormLabel>
                    <Input type="text" />
                </Box>
                <Box w="full">
                    <FormLabel>Identyfikator</FormLabel>
                    <Input type="text" />
                </Box>
                <HStack alignItems="flex-end">
                    <Box w="full">
                        <FormLabel>Koszt osoby dorosłej</FormLabel>
                        <NumberInput defaultValue={0} min={0}>
                            <NumberInputField />
                            <NumberInputStepper>
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                            </NumberInputStepper>
                        </NumberInput>
                    </Box>
                    <Box w="full">
                        <FormLabel>Koszt dziecka</FormLabel>
                        <NumberInput defaultValue={0} min={0}>
                            <NumberInputField />
                            <NumberInputStepper>
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                            </NumberInputStepper>
                        </NumberInput>
                    </Box>
                    <Box w="full">
                        <FormLabel>Maksymalna liczba gości</FormLabel>
                        <NumberInput defaultValue={0} min={1}>
                            <NumberInputField />
                            <NumberInputStepper>
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                            </NumberInputStepper>
                        </NumberInput>
                    </Box>
                </HStack>
            </VStack>
        </FormControl>
    );
};

export default ApartmentModalForm;
