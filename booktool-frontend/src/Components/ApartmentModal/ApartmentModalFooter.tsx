import React from 'react';
import { ModalFooter, HStack, Button } from '@chakra-ui/react';


const ApartmentModalFooter: React.FC = () => {

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
                <Button colorScheme="purple" color="white" variant="solid" fontSize="xs" w="120px">
                    Zapisz
                </Button>
            </HStack>
        </ModalFooter>
    );
};

export default ApartmentModalFooter;
