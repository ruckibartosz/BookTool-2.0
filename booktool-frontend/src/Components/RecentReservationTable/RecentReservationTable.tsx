import React from 'react';
import { Table, TableContainer } from '@chakra-ui/react';

import RecentReservationTableHeader from './RecentReservationTableHeader';
import RecentReservationTableBody from './RecentReservationTableBody';

const RecentReservationTable: React.FC = () => {
    return (
        <TableContainer border="1px solid" borderColor="gray.200" rounded="md" boxShadow="small">
            <Table>
                <RecentReservationTableHeader />
                <RecentReservationTableBody />
            </Table>
        </TableContainer>
    );
};

export default RecentReservationTable;
