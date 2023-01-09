import React from 'react';
import { Grid, GridItem, Box } from '@chakra-ui/react';
import { BsCalendarCheck } from 'react-icons/bs';

import DashboardStatisticCard from '@Components/DashboardStatisticCard';
import RecentReservationTable from '@Components/RecentReservationTable';

const Dashboard: React.FC = () => {
    return (
        <Box p="18px">
            <Grid templateColumns="repeat(4, 1fr)" templateRows="200px">
                <GridItem>
                    <DashboardStatisticCard
                        cardIcon={<BsCalendarCheck size={18} color="purple" />}
                        cardHeading="7430"
                        cardSubText="Liczba rezerwacjii"
                        cardLastWeekText="120"
                        cardLastMonthText="340"
                    />
                </GridItem>
            </Grid>
            <RecentReservationTable />
        </Box>
    );
};

export default Dashboard;
