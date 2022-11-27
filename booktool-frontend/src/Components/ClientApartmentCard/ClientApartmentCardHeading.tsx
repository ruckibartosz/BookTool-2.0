import React from 'react';
import { Text } from '@chakra-ui/react';

type Props = {
    heading: string;
};

const ClientApartmentCardHeading: React.FC<Props> = ({ heading }) => {
    return (
        <Text mb="16px" fontSize="22px" fontWeight="semibold">
            {heading}
        </Text>
    );
};

export default ClientApartmentCardHeading;
