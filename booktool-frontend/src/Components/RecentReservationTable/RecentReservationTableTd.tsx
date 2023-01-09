import React from 'react';
import { Td, Tag } from '@chakra-ui/react';

type Props = {
    children: React.ReactNode;
    variant?: string;
};

const RecentReservationTableTd: React.FC<Props> = ({ children, variant }) => {
    if (variant) {
        switch (variant) {
            case 'date':
                return (
                    <Td border={0} fontWeight="semibold">
                        {children}
                    </Td>
                );
            case 'payment-paid':
                return (
                    <Td border={0}>
                        <Tag colorScheme="green">{children}</Tag>
                    </Td>
                );
            case 'payment-cancelled':
                return (
                    <Td border={0}>
                        <Tag colorScheme="red">{children}</Tag>
                    </Td>
                );
            case 'payment-pending':
                return (
                    <Td border={0}>
                        <Tag colorScheme="orange">{children}</Tag>
                    </Td>
                );
            case 'payment-halfPaid':
                return (
                    <Td border={0}>
                        <Tag colorScheme="blue">{children}</Tag>
                    </Td>
                );
        }
    }

    return <Td border={0}>{children}</Td>;
};

RecentReservationTableTd.defaultProps = {
    variant: 'text'
};

export default RecentReservationTableTd;
