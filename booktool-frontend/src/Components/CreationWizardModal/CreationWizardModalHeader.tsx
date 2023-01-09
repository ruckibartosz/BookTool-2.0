import React from 'react';
import { ModalHeader, Text } from '@chakra-ui/react';

const CreationWizardModalHeader: React.FC = () => {
    return (
        <>
            <ModalHeader textAlign="center">Wybierz, co chciałbyś utworzyć</ModalHeader>
            <Text textAlign="center" fontSize="xs" color="gray.500" mt="-8px" mb="12px">
                Naciśnij na jedną z kategorii poniżej
            </Text>
        </>
    );
};

export default CreationWizardModalHeader;
