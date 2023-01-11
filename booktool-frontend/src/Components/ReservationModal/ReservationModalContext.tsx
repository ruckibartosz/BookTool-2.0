import React from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';

import ReservationModalDate from './ReservationModalDate';
import ReservationModalClientForm from './ReservationModalClientForm';
import ReservationModalReservationForm from './ReservationModalReservationForm';
import ReservationModalSummaryTags from './ReservationModalSummaryTags';

const ReservationModalContext: React.FC = () => {
    return (
        <>
            <ReservationModalDate />
            <ReservationModalSummaryTags />
            <Tabs variant="soft-rounded" colorScheme="purple" mt="22px">
                <TabList>
                    <Tab>Dane klienta</Tab>
                    <Tab>Dane rezerwacji</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <ReservationModalClientForm />
                    </TabPanel>
                    <TabPanel>
                        <ReservationModalReservationForm />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </>
    );
};

export default ReservationModalContext;
