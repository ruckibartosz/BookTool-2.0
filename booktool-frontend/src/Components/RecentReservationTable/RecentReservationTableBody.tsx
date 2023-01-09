import React from 'react';
import { Tbody, Tr, IconButton } from '@chakra-ui/react';
import { AiOutlineEye } from 'react-icons/ai';

import RecentReservationTableTd from './RecentReservationTableTd';

const RecentReservationTableBody: React.FC = () => {
    return (
        <Tbody>
            <Tr>
                <RecentReservationTableTd>c73d9c7a</RecentReservationTableTd>
                <RecentReservationTableTd>cb0d4d1e</RecentReservationTableTd>
                <RecentReservationTableTd variant="payment-pending">Opłacono</RecentReservationTableTd>
                <RecentReservationTableTd>Adam Nowak</RecentReservationTableTd>
                <RecentReservationTableTd>anowak@gmail.com</RecentReservationTableTd>
                <RecentReservationTableTd variant="date">05-10-2023</RecentReservationTableTd>
                <RecentReservationTableTd variant="date">10-10-2023</RecentReservationTableTd>
                <RecentReservationTableTd>
                    <IconButton colorScheme="purple" aria-label="Details" icon={<AiOutlineEye size={22} />} />
                </RecentReservationTableTd>
            </Tr>
            <Tr>
                <RecentReservationTableTd>c73d9c7a</RecentReservationTableTd>
                <RecentReservationTableTd>cb0d4d1e</RecentReservationTableTd>
                <RecentReservationTableTd variant="payment-halfPaid">Opłacono</RecentReservationTableTd>
                <RecentReservationTableTd>Adam Nowak</RecentReservationTableTd>
                <RecentReservationTableTd>anowak@gmail.com</RecentReservationTableTd>
                <RecentReservationTableTd variant="date">05-10-2023</RecentReservationTableTd>
                <RecentReservationTableTd variant="date">10-10-2023</RecentReservationTableTd>
                <RecentReservationTableTd>
                    <IconButton colorScheme="purple" aria-label="Details" icon={<AiOutlineEye size={22} />} />
                </RecentReservationTableTd>
            </Tr>
            <Tr>
                <RecentReservationTableTd>c73d9c7a</RecentReservationTableTd>
                <RecentReservationTableTd>cb0d4d1e</RecentReservationTableTd>
                <RecentReservationTableTd variant="payment-cancelled">Opłacono</RecentReservationTableTd>
                <RecentReservationTableTd>Adam Nowak</RecentReservationTableTd>
                <RecentReservationTableTd>anowak@gmail.com</RecentReservationTableTd>
                <RecentReservationTableTd variant="date">05-10-2023</RecentReservationTableTd>
                <RecentReservationTableTd variant="date">10-10-2023</RecentReservationTableTd>
                <RecentReservationTableTd>
                    <IconButton colorScheme="purple" aria-label="Details" icon={<AiOutlineEye size={22} />} />
                </RecentReservationTableTd>
            </Tr>
        </Tbody>
    );
};

export default RecentReservationTableBody;
