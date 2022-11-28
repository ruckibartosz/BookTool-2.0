import React from 'react';

import PageContainer from '@Components/PageContainer';
import PageHeadingCard from '@Components/PageHeadingCard';
import ListTilesView from '@Components/ListTilesView';
import ListTilesViewItem from '@Components/ListTilesView/ListTilesViewItem';
import ClientApartmentCard from '@Components/ClientApartmentCard';

const Clients: React.FC = () => {
    return (
        <PageContainer>
            <PageHeadingCard variant="clients" lastWeekData={5} lastMonthData={10} />
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
    );
};

export default Clients;
