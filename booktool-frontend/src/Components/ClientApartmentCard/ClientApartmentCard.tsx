/* eslint-disable */
import React from 'react';
import { Box, Circle, Text, Flex } from '@chakra-ui/react';
import { BsFillPersonFill } from 'react-icons/bs';
import { AiFillHome } from 'react-icons/ai';

type Props = {
    variant: 'apartments' | 'clients';
    heading: string;
    firstColumnData: string;
    secondColumnData: string;
};

const ClientApartmentCard: React.FC<Props> = ({ variant, heading, firstColumnData, secondColumnData }) => {
    return (
        <Box
            p="22px"
            boxShadow="sm"
            rounded="md"
            border="1px solid"
            borderColor="gray.200"
            w="320px"
            h="235px"
        >
            <Flex h="100%" w="100%" alignItems="center" justifyContent="center" flexDirection="column">
                <Circle mb="16px" size="62px" bgColor="primary.firstAlpha15">
                    {variant === 'clients' ? (
                        <BsFillPersonFill size={42} color="#7642EB" />
                    ) : (
                        <AiFillHome size={24} color="#7642EB" />
                    )}
                </Circle>
                <Text mb="16px" fontSize="22px" fontWeight="semibold">
                    {heading}
                </Text>
                <Box p="8px" w="100%" h="100%" bgColor="blackAlpha.200" rounded="lg">
                    <Flex justifyContent="space-around">
                        <Box>
                            <Text fontWeight="semibold" color="blackAlpha.700">
                                {variant === 'clients' ? 'Mail' : 'Coś tam'}
                            </Text>
                            <Text
                                fontWeight="semibold"
                                textOverflow="ellipsis"
                                overflow="hidden"
                                width="50px"
                            >
                                {firstColumnData}
                            </Text>
                        </Box>
                        <Box>
                            <Text fontWeight="semibold" color="blackAlpha.700">
                                {variant === 'clients' ? 'Nr. telefonu' : 'Coś tam'}
                            </Text>
                            <Text fontWeight="semibold" textAlign="center">
                                {secondColumnData}
                            </Text>
                        </Box>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    );
};

export default ClientApartmentCard;
