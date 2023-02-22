import React from 'react';

import useClients from './useClients';
import PageContainer from '@Components/PageContainer';
import PageHeadingCard from '@Components/PageHeadingCard';
import ListTilesView from '@Components/ListTilesView';
import ListTilesViewItem from '@Components/ListTilesView/ListTilesViewItem';
import ClientApartmentCard from '@Components/ClientApartmentCard';
import WarningAlert from '@Components/WarningAlert';
import ClientApartmentFilters from '@Components/ClientApartmentFilters';
import Loader from '@Components/Loader';

const Clients: React.FC = () => {
    const { allClients, isLoading, onConfirmAlertButtonClick } = useClients();

    const renderAllClients = () => {
        return allClients.map((client) => {
            return (
                <ListTilesViewItem key={client._id}>
                    <ClientApartmentCard
                        id={client._id}
                        variant="clients"
                        heading={`${client.firstName} ${client.lastName}`}
                        firstColumnData={client.email}
                        secondColumnData={client.phoneNumber}
                    />
                </ListTilesViewItem>
            );
        });
    };

    const renderContext = () => {
        if (isLoading) return <Loader />;

        return (
            <>
                <PageHeadingCard variant="clients" lastWeekData={5} lastMonthData={10} />
                <ClientApartmentFilters />
                <ListTilesView>{renderAllClients()}</ListTilesView>
            </>
        );
    };

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
            <PageContainer>{renderContext()}</PageContainer>
        </>
    );
};

export default React.memo(Clients);
