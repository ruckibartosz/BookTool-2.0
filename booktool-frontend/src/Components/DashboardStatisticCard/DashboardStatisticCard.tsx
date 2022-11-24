import React from 'react';
import { Box, Circle, VStack, HStack, Heading, Text } from '@chakra-ui/react';
import { LineChart, Line, ResponsiveContainer } from 'recharts';

interface IProps {
    cardIcon: React.ReactElement;
    cardHeading: string | number;
    cardSubText: string;
    cardLastWeekText: string | React.ReactElement;
    cardLastMonthText: string | React.ReactElement;
}

const DashboardStatisticCard: React.FC<IProps> = ({
    cardIcon,
    cardHeading,
    cardSubText,
    cardLastWeekText,
    cardLastMonthText
}) => {
    const data = [
        {
            name: 'Page A',
            uv: 4000,
            pv: 2400,
            amt: 2400
        },
        {
            name: 'Page B',
            uv: 3000,
            pv: 1398,
            amt: 2210
        },
        {
            name: 'Page C',
            uv: 2000,
            pv: 9800,
            amt: 2290
        },
        {
            name: 'Page D',
            uv: 2780,
            pv: 3908,
            amt: 2000
        },
        {
            name: 'Page E',
            uv: 1890,
            pv: 4800,
            amt: 2181
        },
        {
            name: 'Page F',
            uv: 2390,
            pv: 3800,
            amt: 2500
        },
        {
            name: 'Page G',
            uv: 3490,
            pv: 4300,
            amt: 2100
        }
    ];

    return (
        <Box h="full" w="full" rounded="lg" border="1px solid" borderColor="gray.200" boxShadow="sm" p="20px">
            <VStack h="full" w="full" alignItems="center" justifyContent="center" spacing="24px">
                <Box w="full" borderBottom="1px solid" borderColor="gray.200" pb="20px">
                    <HStack w="full" justifyContent="space-around">
                        <Circle border="1px solid" borderColor="purple" size="50px">
                            {cardIcon}
                        </Circle>
                        <Box>
                            <VStack spacing="0">
                                <Heading w="full" fontWeight="semibold" fontSize="24px">
                                    {cardHeading}
                                </Heading>
                                <Text fontSize="12px" color="gray.500" m="0">
                                    {cardSubText}
                                </Text>
                            </VStack>
                        </Box>
                        <Box>
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart width={50} height={50} data={data}>
                                    <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
                                </LineChart>
                            </ResponsiveContainer>
                        </Box>
                    </HStack>
                </Box>
                <Box w="full">
                    <HStack justifyContent="space-around" w="full">
                        <Box>
                            <Text textAlign="center" fontWeight="semibold" fontSize="14px">
                                {cardLastWeekText}
                            </Text>
                            <Text fontSize="12px" color="gray.500">
                                Ostatni tydzień
                            </Text>
                        </Box>
                        <Box w="1px" h="50px" border=".5px solid" borderColor="gray.200" />
                        <Box>
                            <Text textAlign="center" fontWeight="semibold" fontSize="14px">
                                {cardLastMonthText}
                            </Text>
                            <Text fontSize="12px" color="gray.500">
                                Ostatni miesiąc
                            </Text>
                        </Box>
                    </HStack>
                </Box>
            </VStack>
        </Box>
    );
};

export default DashboardStatisticCard;
