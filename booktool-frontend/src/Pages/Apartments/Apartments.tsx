import React from 'react';

import useApartments from './useApartments';
import PageContainer from '@Components/PageContainer';
import PageHeadingCard from '@Components/PageHeadingCard';
import ListTilesView from '@Components/ListTilesView';
import ListTilesViewItem from '@Components/ListTilesView/ListTilesViewItem';
import ClientApartmentCard from '@Components/ClientApartmentCard';
import WarningAlert from '@Components/WarningAlert';
import ClientApartmentFilters from '@Components/ClientApartmentFilters';
import Loader from '@Components/Loader';

const Apartments: React.FC = () => {
    const { allApartments, isLoading, onConfirmAlertButtonClick } = useApartments();

    const renderAllApartmentsCard = () => {
        return allApartments.map((apartment) => {
            return (
                <ListTilesViewItem key={apartment._id}>
                    <ClientApartmentCard
                        id={apartment._id}
                        variant="apartments"
                        heading={apartment.name}
                        firstColumnData={String(apartment.houseNumber)}
                        secondColumnData={String(apartment.adultCost)}
                    />
                </ListTilesViewItem>
            );
        });
    };

    const renderContext = () => {
        if (isLoading) return <Loader />;

        return (
            <>
                <PageHeadingCard variant="apartments" lastWeekData={5} lastMonthData={10} />
                <ClientApartmentFilters />
                <ListTilesView>{renderAllApartmentsCard()}</ListTilesView>
            </>
        );
    };

    return (
        <>
            <WarningAlert
                id="del-apartment"
                alertHeader="Usuń apartament"
                confirmButtonText="Usuń"
                onConfirmClick={onConfirmAlertButtonClick}
            >
                Czy na pewno chcesz usunąć apartament? Tej akcji nie będzie można cofnąć.
            </WarningAlert>
            <PageContainer>{renderContext()}</PageContainer>
        </>
    );
};

export default Apartments;
