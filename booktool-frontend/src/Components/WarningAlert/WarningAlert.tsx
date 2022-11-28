import React from 'react';
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    Button,
    ButtonGroup
} from '@chakra-ui/react';

import useWarningAlert from './useWarningAlert';

type Props = {
    id: string;
    alertHeader: string;
    confirmButtonText: string;
    children: React.ReactNode;
    onConfirmClick?(): void;
};

const WarningAlert: React.FC<Props> = ({ id, alertHeader, children, confirmButtonText, onConfirmClick }) => {
    const { isOpen, handleCloseButtonClick } = useWarningAlert(id);
    const cancelRef = React.useRef<any>(null);

    return (
        <AlertDialog leastDestructiveRef={cancelRef} isOpen={isOpen} onClose={() => {}}>
            <AlertDialogOverlay>
                <AlertDialogContent>
                    <AlertDialogHeader fontSize="lg" fontWeight="semibold">
                        {alertHeader}
                    </AlertDialogHeader>
                    <AlertDialogBody>{children}</AlertDialogBody>
                    <AlertDialogFooter>
                        <ButtonGroup>
                            <Button
                                variant="outline"
                                onClick={handleCloseButtonClick}
                                _hover={{ bgColor: 'blackAlpha.700', color: 'white' }}
                            >
                                Anuluj
                            </Button>
                            <Button colorScheme="red" onClick={onConfirmClick}>
                                {confirmButtonText}
                            </Button>
                        </ButtonGroup>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialogOverlay>
        </AlertDialog>
    );
};

WarningAlert.defaultProps = {
    onConfirmClick: () => {}
};

export default WarningAlert;
