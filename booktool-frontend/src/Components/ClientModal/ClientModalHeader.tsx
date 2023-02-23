import React from 'react';
import { ModalHeader, Text } from '@chakra-ui/react';

import useClientModal from './useClientModal';

const ClientModalHeader: React.FC = () => {
    const { id, clientId } = useClientModal();

    const renderHeader = () => {
        if(id === 'client-edit') return "Edytuj klienta";
        if(id === 'client-create') return "Utwórz klienta";
    }

    return (
        <ModalHeader>
            {renderHeader()}
            <Text fontWeight="medium" fontSize="xs" color="gray.500" mt="2px">
                 {id === 'client-edit' && `Id: ${clientId}`}
            </Text>
        </ModalHeader>
    );
};

export default ClientModalHeader;
