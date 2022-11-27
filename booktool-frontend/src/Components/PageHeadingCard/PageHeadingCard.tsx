import React from 'react';
import { Box, Text, HStack, Circle } from '@chakra-ui/react';
import { BsFillPersonFill } from 'react-icons/bs';
import { AiFillHome } from 'react-icons/ai';

type Props = {
    variant: 'clients' | 'apartments';
    lastWeekData: number;
    lastMonthData: number;
};

const PageHeadingCard: React.FC<Props> = ({ variant, lastWeekData, lastMonthData }) => {
    return (
        <Box w="70%" mb='16px' p='18px' bgColor='blackAlpha.200' rounded='md' boxShadow='sm'>
            <HStack justifyContent='space-around'>
                <Box>
                    <HStack gap='14px'>
                        <Circle size='45px' bgColor='primary.firstAlpha15'>
                            {variant === 'clients' ? (
                                <BsFillPersonFill size={24} color='#7642EB' />
                            ) : (
                                <AiFillHome size={24} color='#7642EB' />
                            )}
                        </Circle>
                        {variant === 'clients' ? (
                            <Text fontSize='22px' fontWeight='semibold'>
                                Klienci
                            </Text>
                        ) : (
                            <Text fontSize='22px' fontWeight='semibold'>
                                Apartamenty
                            </Text>
                        )}
                    </HStack>
                </Box>
                <Box>
                    <Text fontWeight='semibold' color='blackAlpha.700'>Ostatni tydzień</Text>
                    <Text fontWeight='semibold' textAlign="center">{lastWeekData}</Text>
                </Box>
                <Box>
                    <Text fontWeight='semibold' color='blackAlpha.700'>Ostatni miesiąc</Text>
                    <Text fontWeight='semibold' textAlign="center">{lastMonthData}</Text>
                </Box>
            </HStack>
        </Box>
    );
};

export default PageHeadingCard;
