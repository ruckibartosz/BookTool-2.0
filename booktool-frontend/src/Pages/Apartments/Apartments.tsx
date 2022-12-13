import React from 'react';

import useApartments from './useApartments';
import PageContainer from '@Components/PageContainer';
import PageHeadingCard from '@Components/PageHeadingCard';
import ListTilesView from '@Components/ListTilesView';
import ListTilesViewItem from '@Components/ListTilesView/ListTilesViewItem';
import ClientApartmentCard from '@Components/ClientApartmentCard';
import WarningAlert from '@Components/WarningAlert';
import ClientApartmentFilters from "@Components/ClientApartmentFilters";

const Apartments: React.FC = () => {
    const { onConfirmAlertButtonClick } = useApartments();
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
            <PageContainer>
                <PageHeadingCard variant="apartments" lastWeekData={5} lastMonthData={10} />
                <ClientApartmentFilters />
                <ListTilesView>
                    <ListTilesViewItem>
                        <ClientApartmentCard
                            variant="apartments"
                            heading="Bartosz Rucki"
                            firstColumnData="ruckibartosz@gmail.com"
                            secondColumnData="726766346"
                        />
                    </ListTilesViewItem>
                    <ListTilesViewItem>
                        <ClientApartmentCard
                            variant="apartments"
                            heading="Bartosz Rucki"
                            firstColumnData="ruckibartosz@gmail.com"
                            secondColumnData="726766346"
                        />
                    </ListTilesViewItem>
                    <ListTilesViewItem>
                        <ClientApartmentCard
                            variant="apartments"
                            heading="Bartosz Rucki"
                            firstColumnData="ruckibartosz@gmail.com"
                            secondColumnData="726766346"
                        />
                    </ListTilesViewItem>
                    <ListTilesViewItem>
                        <ClientApartmentCard
                            variant="apartments"
                            heading="Bartosz Rucki"
                            firstColumnData="ruckibartosz@gmail.com"
                            secondColumnData="726766346"
                        />
                    </ListTilesViewItem>
                    <ListTilesViewItem>
                        <ClientApartmentCard
                            variant="apartments"
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

export default Apartments;
