import React from 'react';
import { Modal, ModalOverlay, ModalContent } from '@chakra-ui/react';

type Props = {
    children: React.ReactNode;
};

const ReservationModalContainer: React.FC<Props> = ({ children }) => {
    return (
        <Modal closeOnOverlayClick={false} onClose={() => {}} isOpen size="xl">
            <ModalOverlay />
            <ModalContent overflow="hidden">{children}</ModalContent>
        </Modal>
    );
};

export default ReservationModalContainer;
