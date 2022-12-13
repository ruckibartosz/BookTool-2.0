import React from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    Button,
    Text,
    Grid,
    GridItem,
    HStack
} from '@chakra-ui/react';
import { AiFillHome, AiFillCalendar, AiFillMail } from 'react-icons/ai';
import { FaUserAlt } from 'react-icons/fa';
import { MdOutlineAccountTree } from 'react-icons/md';
import { HiTemplate } from 'react-icons/hi';

import useCreationWizardModal from './useCreationWizardModal';
import CreationWizardModalCard from '@Components/CreationWizardModalCard';

const CreationWizardModal: React.FC = () => {
    const { isOpen, handleCloseButtonClick } = useCreationWizardModal('creation-wizard');

    return (
        <>
            <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={handleCloseButtonClick} size="xl">
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader textAlign="center">Wybierz, co chciałbyś utworzyć</ModalHeader>
                    <Text textAlign="center" fontSize="xs" color="gray.500" mt="-8px" mb="12px">
                        Naciśnij na jedną z kategorii poniżej
                    </Text>
                    <ModalBody pb={6}>
                        <Grid
                            templateRows={['repeat(6, 150px)', 'repeat(3, 150px)', 'repeat(2, 150px)']}
                            templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)']}
                            gap={4}
                        >
                            <GridItem>
                                <CreationWizardModalCard
                                    cardIcon={<AiFillHome color="blue" size={28} />}
                                    cardHeading="Apartament"
                                />
                            </GridItem>
                            <GridItem>
                                <CreationWizardModalCard
                                    cardIcon={<FaUserAlt color="green" size={28} />}
                                    cardHeading="Klient"
                                />
                            </GridItem>
                            <GridItem>
                                <CreationWizardModalCard
                                    cardIcon={<AiFillCalendar color="purple" size={28} />}
                                    cardHeading="Rezerwacja"
                                />
                            </GridItem>
                            <GridItem>
                                <CreationWizardModalCard
                                    cardIcon={<AiFillMail color="orange" size={28} />}
                                    cardHeading="Mail"
                                />
                            </GridItem>
                            <GridItem>
                                <CreationWizardModalCard
                                    cardIcon={<MdOutlineAccountTree color="red" size={28} />}
                                    cardHeading="Konto"
                                />
                            </GridItem>
                            <GridItem>
                                <CreationWizardModalCard
                                    cardIcon={<HiTemplate color="gray" size={28} />}
                                    cardHeading="Wzór"
                                />
                            </GridItem>
                        </Grid>
                    </ModalBody>
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
                            <Button
                                colorScheme="purple"
                                color="white"
                                variant="solid"
                                fontSize="xs"
                                w="120px"
                            >
                                Dodaj
                            </Button>
                        </HStack>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default CreationWizardModal;
