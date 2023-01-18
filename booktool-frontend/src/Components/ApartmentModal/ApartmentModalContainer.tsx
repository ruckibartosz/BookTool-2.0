import React from 'react';
import { Modal, ModalOverlay, ModalContent } from '@chakra-ui/react';

type Props = {
    children: React.ReactNode;
};

const ApartmentModalContainer: React.FC<Props> = ({ children }) => {
    return (
        <Modal closeOnOverlayClick={false} isOpen={true} onClose={() => {}} size="xl">
            <ModalOverlay />
            <ModalContent>{children}</ModalContent>
        </Modal>
    );
};

export default ApartmentModalContainer;
