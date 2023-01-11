import React from 'react';
import { Tag } from '@chakra-ui/react';

const ReservationModalSummaryTags: React.FC = () => {
    return (
        <>
            <Tag colorScheme="purple" mt="8px">
                7 dni
            </Tag>
            <Tag colorScheme="orange" mt="8px" ml="4px">
                Adam Nowak
            </Tag>
            <Tag colorScheme="green" mt="8px" ml="4px">
                500 PLN
            </Tag>
        </>
    );
};

export default ReservationModalSummaryTags;
