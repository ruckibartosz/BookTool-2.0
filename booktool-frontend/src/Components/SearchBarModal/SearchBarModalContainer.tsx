import React from 'react';
import { Modal, ModalOverlay, ModalContent } from '@chakra-ui/react';

import usePopup from '@/Hooks/usePopup';

type Props = {
    children: React.ReactNode;
};

const SearchBarModalContainer: React.FC<Props> = ({ children }) => {
    const { isOpen, handleClosePopup } = usePopup("searchbar");
    return (
        <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={() => {}} onOverlayClick={handleClosePopup} size="md">
            <ModalOverlay />
            <ModalContent>{children}</ModalContent>
        </Modal>
    );
};

export default SearchBarModalContainer;
