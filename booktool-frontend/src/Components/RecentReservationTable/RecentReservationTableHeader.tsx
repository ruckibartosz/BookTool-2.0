import React from 'react';
import { Thead, Tr, Th } from '@chakra-ui/react';

const RecentReservationTableHeader: React.FC = () => {
    const headerProps = {
        fontWeight: 'semibold',
        border: 0,
        color: 'gray.500'
    };

    return (
        <Thead backgroundColor="gray.200">
            <Tr>
                <Th {...headerProps}>Id rezerwacji</Th>
                <Th {...headerProps}>Id apartamentu</Th>
                <Th {...headerProps}>Status rezerwacji</Th>
                <Th {...headerProps}>Imię i nazwisko</Th>
                <Th {...headerProps}>Email</Th>
                <Th {...headerProps}>Data zameldowania</Th>
                <Th {...headerProps}>Data wymeldowania</Th>
                <Th {...headerProps} />
            </Tr>
        </Thead>
    );
};

export default RecentReservationTableHeader;
