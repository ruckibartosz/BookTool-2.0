import React from 'react';
import { ModalFooter, HStack, Button } from '@chakra-ui/react';

import useCreationWizardModal from './useCreationWizardModal';

const CreationWizardModalFooter: React.FC = () => {
    const { handleCloseButtonClick } = useCreationWizardModal('creation-wizard');

    return (
        <ModalFooter justifyContent="center">
            <HStack spacing="18px">
                <Button
                    colorScheme="gray"
                    variant="solid"
                    fontSize="xs"
                    w="120px"
                    onClick={handleCloseButtonClick}
                >
                    Anuluj
                </Button>
                <Button colorScheme="purple" color="white" variant="solid" fontSize="xs" w="120px">
                    Dodaj
                </Button>
            </HStack>
        </ModalFooter>
    );
};

export default CreationWizardModalFooter;
