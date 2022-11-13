import { useRef } from 'react';
import { useDisclosure } from '@chakra-ui/react';

const useCreationWizardModal = () => {
    const modalButtonTriggerRef = useRef(null);
    const { isOpen, onOpen, onClose } = useDisclosure();

    return { isOpen, onOpen, onClose, modalButtonTriggerRef };
};

export default useCreationWizardModal;
