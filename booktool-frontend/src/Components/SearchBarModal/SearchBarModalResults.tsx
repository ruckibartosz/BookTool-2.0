import React from 'react';
import { VStack } from '@chakra-ui/react';

import SearchBarModalResultCard from './SearchBarModalResultCard';

const SearchBarModalResult: React.FC = () => {
    return (
        <VStack gap="8px" alignItems="flex-start" w="full">
            <SearchBarModalResultCard variant="client" category="Klient" data="Adam Nowak" />
            <SearchBarModalResultCard variant="apartment" category="Apartament" data="1245-5365363" />
            <SearchBarModalResultCard
                variant="mail"
                category="Mail"
                data="Witam, piszę testową wiadomość..."
            />
            <SearchBarModalResultCard variant="reservation" category="Rezerwacja" data="21142-46gff33" />
        </VStack>
    );
};

export default SearchBarModalResult;
