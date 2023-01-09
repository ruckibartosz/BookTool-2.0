import React from 'react';
import { Modal, ModalOverlay, ModalContent } from '@chakra-ui/react';

import useCreationWizardModal from './useCreationWizardModal';

type Props = {
    children: React.ReactNode;
};

const CreationWizardModalContainer: React.FC<Props> = ({ children }) => {
    const { isOpen, handleCloseButtonClick } = useCreationWizardModal('creation-wizard');

    return (
        <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={handleCloseButtonClick} size="xl">
            <ModalOverlay />
            <ModalContent>{children}</ModalContent>
        </Modal>
    );
};

export default CreationWizardModalContainer;
