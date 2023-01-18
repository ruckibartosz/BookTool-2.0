import React from 'react';
import { Modal, ModalOverlay, ModalContent } from '@chakra-ui/react';

type Props = {
    children: React.ReactNode;
};

const SearchBarModalContainer: React.FC<Props> = ({ children }) => {
    return (
        <Modal closeOnOverlayClick={false} isOpen={true} onClose={() => {}} size="md">
            <ModalOverlay />
            <ModalContent>{children}</ModalContent>
        </Modal>
    );
};

export default SearchBarModalContainer;
