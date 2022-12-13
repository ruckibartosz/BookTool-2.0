import React from 'react';

import ClientApartmentFiltersContainer from './ClientApartmentFiltersContainer';
import SearchBar from '@Components/SearchBar';
import SortBy from '@Components/SortBy';

const ClientApartmentFilters: React.FC = () => {
    return (
        <ClientApartmentFiltersContainer>
            <SearchBar />
            <SortBy values={[{ value: 'last added', option: 'Ostatnio dodani' }]} />
        </ClientApartmentFiltersContainer>
    );
};

export default ClientApartmentFilters;
