import React from 'react';
import {
    FormControl,
    FormLabel,
    Input,
    Box,
    VStack,
    HStack,
    Select,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper
} from '@chakra-ui/react';

const ReservationModalReservationForm: React.FC = () => {
    return (
        <FormControl>
            <VStack gap="16px" alignItems="flex-start">
                <HStack>
                    <Box w="full">
                        <FormLabel>Od</FormLabel>
                        <Input type="date" />
                    </Box>
                    <Box w="full">
                        <FormLabel>Do</FormLabel>
                        <Input type="date" />
                    </Box>
                </HStack>
                <Box w="full">
                    <FormLabel>Status</FormLabel>
                    <Select placeholder="Select option">
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </Select>
                </Box>
                <Box w="full">
                    <FormLabel>Apartament</FormLabel>
                    <Select placeholder="Select option">
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </Select>
                </Box>
                <HStack>
                    <Box>
                        <FormLabel>Ilość dorosłych</FormLabel>
                        <NumberInput defaultValue={0} min={0}>
                            <NumberInputField />
                            <NumberInputStepper>
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                            </NumberInputStepper>
                        </NumberInput>
                    </Box>
                    <Box>
                        <FormLabel>Ilość dzieci</FormLabel>
                        <NumberInput defaultValue={0} min={0}>
                            <NumberInputField />
                            <NumberInputStepper>
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                            </NumberInputStepper>
                        </NumberInput>
                    </Box>
                </HStack>
                <Box w="full">
                    <FormLabel>Cena</FormLabel>
                    <Input type="number" />
                </Box>
            </VStack>
        </FormControl>
    );
};

export default ReservationModalReservationForm;
