import React from 'react';
import { Flex, Text } from '@chakra-ui/react';

const ReservationModalReservationSummary: React.FC = () => {
    return (
        <>
            <Text fontSize="16px" fontWeight="semibold" mb="6px" mt="12px">
                Dane rezerwacji:
            </Text>
            <Flex direction="column" gap="8px">
                <Flex direction="row" gap="12px">
                    <Text fontSize="small" color="gray.500">
                        Od:
                    </Text>
                    <Text fontSize="small" fontWeight="semibold">
                        05-10-2023
                    </Text>
                </Flex>
                <Flex direction="row" gap="12px">
                    <Text fontSize="small" color="gray.500">
                        Do:
                    </Text>
                    <Text fontSize="small" fontWeight="semibold">
                        10-05-2023
                    </Text>
                </Flex>
                <Flex direction="row" gap="12px">
                    <Text fontSize="small" color="gray.500">
                        Status:
                    </Text>
                    <Text fontSize="small" fontWeight="semibold">
                        Oczekuję
                    </Text>
                </Flex>
                <Flex direction="row" gap="12px">
                    <Text fontSize="small" color="gray.500">
                        Apartament:
                    </Text>
                    <Text fontSize="small" fontWeight="semibold">
                        5 pokojowy
                    </Text>
                </Flex>
                <Flex direction="row" gap="12px">
                    <Text fontSize="small" color="gray.500">
                        Ilość dorosłych:
                    </Text>
                    <Text fontSize="small" fontWeight="semibold">
                        2
                    </Text>
                </Flex>
                <Flex direction="row" gap="12px">
                    <Text fontSize="small" color="gray.500">
                        Ilość dzieci:
                    </Text>
                    <Text fontSize="small" fontWeight="semibold">
                        0
                    </Text>
                </Flex>
                <Flex direction="row" gap="12px">
                    <Text fontSize="small" color="gray.500">
                        Cena:
                    </Text>
                    <Text fontSize="small" fontWeight="semibold">
                        1500 PLN
                    </Text>
                </Flex>
            </Flex>
        </>
    );
}

export default ReservationModalReservationSummary;
