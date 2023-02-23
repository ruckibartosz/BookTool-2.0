import React from 'react';
import { ModalFooter, HStack, Button } from '@chakra-ui/react';

import useClientModal from './useClientModal';

const ClientModalFooter: React.FC = () => {
    const { handleSaveButtonClick } = useClientModal();
    
    return (
        <ModalFooter justifyContent="center">
            <HStack spacing="18px">
                <Button
                    colorScheme="gray"
                    variant="solid"
                    fontSize="xs"
                    w="120px"
                    onClick={() => {}}
                >
                    Anuluj
                </Button>
                <Button onClick={handleSaveButtonClick} colorScheme="purple" color="white" variant="solid" fontSize="xs" w="120px">
                    Zapisz
                </Button>
            </HStack>
        </ModalFooter>
    );
};

export default ClientModalFooter;
