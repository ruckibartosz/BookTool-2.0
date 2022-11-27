import React from 'react';

import PageContainer from '@Components/PageContainer';
import PageHeadingCard from '@Components/PageHeadingCard';
import ClientApartmentCard from '@Components/ClientApartmentCard';

const Clients: React.FC = () => {
    return (
        <PageContainer>
            <PageHeadingCard variant="clients" lastWeekData={5} lastMonthData={10} />
            <ClientApartmentCard
                variant="clients"
                heading="Bartosz Rucki"
                firstColumnData="ruckibartosz@gmail.com"
                secondColumnData="726766346"
            />
        </PageContainer>
    );
};

export default Clients;
