import React from 'react';
import { HStack } from '@chakra-ui/react';

type Props = {
    children: React.ReactNode;
};

const ClientApartmentFiltersContainer: React.FC<Props> = ({ children }) => {
    return <HStack m="32px 0"justifyContent="space-around">{children}</HStack>;
};

export default ClientApartmentFiltersContainer;
