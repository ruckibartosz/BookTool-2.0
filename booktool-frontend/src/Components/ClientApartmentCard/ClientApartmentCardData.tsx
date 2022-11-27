import React from 'react';
import { Box, Text } from '@chakra-ui/react';

type Props = {
    variant: 'apartments' | 'clients';
    data: string | number | React.ReactElement;
    key: number
};

const ClientApartmentCardData: React.FC<Props> = ({ key, data, variant }) => {
    return (
        <Box key={key}>
            <Text fontWeight="semibold" color="blackAlpha.700">
                {variant === 'clients' ? 'Email' : 'Coś tam'}
            </Text>
            <Text
                maxW="130px"
                textOverflow="ellipsis"
                whiteSpace="nowrap"
                overflow="hidden"
                fontWeight="semibold"
            >
                {data}
            </Text>
        </Box>
    );
};

export default ClientApartmentCardData;
