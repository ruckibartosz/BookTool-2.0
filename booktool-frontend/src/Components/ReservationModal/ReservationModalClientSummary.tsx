import React from 'react';
import { Flex, Text } from '@chakra-ui/react';

const ReservationModalClientSummary: React.FC = () => {
    return (
        <>
            <Text fontSize="16px" fontWeight="semibold" mb="6px">
                Dane klienta:
            </Text>
            <Flex direction="column" gap="8px">
                <Flex direction="row" gap="12px">
                    <Text fontSize="small" color="gray.500">
                        Wynajmujący:
                    </Text>
                    <Text fontSize="small" fontWeight="semibold">
                        Adam Nowak
                    </Text>
                </Flex>
                <Flex direction="row" gap="12px">
                    <Text fontSize="small" color="gray.500">
                        Adres email:
                    </Text>
                    <Text fontSize="small" fontWeight="semibold">
                        anowak@gmail.com
                    </Text>
                </Flex>
                <Flex direction="row" gap="12px">
                    <Text fontSize="small" color="gray.500">
                        Nr. telefonu:
                    </Text>
                    <Text fontSize="small" fontWeight="semibold">
                        123123123
                    </Text>
                </Flex>
            </Flex>
        </>
    );
};

export default ReservationModalClientSummary;
