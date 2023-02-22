import React from 'react';
import { Modal, ModalOverlay, ModalContent } from '@chakra-ui/react';

import useClientModal from './useClientModal';

type Props = {
    children: React.ReactNode;
};

const ClientModalContainer: React.FC<Props> = ({ children }) => {
    const { handleClosePopup, isOpen } = useClientModal();
    return (
        <Modal onOverlayClick={handleClosePopup} isOpen={isOpen} onClose={() => {}} size="xl">
            <ModalOverlay />
            <ModalContent>{children}</ModalContent>
        </Modal>
    );
};

export default ClientModalContainer;
