import React from 'react';

import useClients from './useClients';
import PageContainer from '@Components/PageContainer';
import PageHeadingCard from '@Components/PageHeadingCard';
import ListTilesView from '@Components/ListTilesView';
import ListTilesViewItem from '@Components/ListTilesView/ListTilesViewItem';
import ClientApartmentCard from '@Components/ClientApartmentCard';
import WarningAlert from '@Components/WarningAlert';
import ClientApartmentFilters from "@Components/ClientApartmentFilters";

const Clients: React.FC = () => {
    const { onConfirmAlertButtonClick } = useClients();
    return (
        <>
            <WarningAlert
                id="del-user"
                alertHeader="Usuń klienta"
                confirmButtonText="Usuń"
                onConfirmClick={onConfirmAlertButtonClick}
            >
                Czy na pewno chcesz usunąć użytkownika? Tej akcji nie będzie można cofnąć.
            </WarningAlert>
            <PageContainer>
                <PageHeadingCard variant="clients" lastWeekData={5} lastMonthData={10} />
                <ClientApartmentFilters />
                <ListTilesView>
                    <ListTilesViewItem>
                        <ClientApartmentCard
                            variant="clients"
                            heading="Bartosz Rucki"
                            firstColumnData="ruckibartosz@gmail.com"
                            secondColumnData="726766346"
                        />
                    </ListTilesViewItem>
                    <ListTilesViewItem>
                        <ClientApartmentCard
                            variant="clients"
                            heading="Bartosz Rucki"
                            firstColumnData="ruckibartosz@gmail.com"
                            secondColumnData="726766346"
                        />
                    </ListTilesViewItem>
                    <ListTilesViewItem>
                        <ClientApartmentCard
                            variant="clients"
                            heading="Bartosz Rucki"
                            firstColumnData="ruckibartosz@gmail.com"
                            secondColumnData="726766346"
                        />
                    </ListTilesViewItem>
                    <ListTilesViewItem>
                        <ClientApartmentCard
                            variant="clients"
                            heading="Bartosz Rucki"
                            firstColumnData="ruckibartosz@gmail.com"
                            secondColumnData="726766346"
                        />
                    </ListTilesViewItem>
                    <ListTilesViewItem>
                        <ClientApartmentCard
                            variant="clients"
                            heading="Bartosz Rucki"
                            firstColumnData="ruckibartosz@gmail.com"
                            secondColumnData="726766346"
                        />
                    </ListTilesViewItem>
                </ListTilesView>
            </PageContainer>
        </>
    );
};

export default Clients;
