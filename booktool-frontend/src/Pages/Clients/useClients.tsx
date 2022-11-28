import { useToast } from '@chakra-ui/react';

import useAppSelector from '@Hooks/useAppSelector';
import useAppDispatch from '@Hooks/useAppDispatch';
import { closePopup } from '@Actions/popup';

const useClients = () => {
    const toast = useToast();
    const dispatch = useAppDispatch();
    const {
        data: { clientId }
    } = useAppSelector((state) => state.popup);

    const onConfirmAlertButtonClick = () => {
        toast({
            title: 'Usunięto użytkownika.',
            description: `Pomyślnie udało się usunąć użytkownika o id: ${clientId}`,
            status: 'success',
            duration: 4500,
            isClosable: true,
            position: 'top'
        });

        dispatch(closePopup())
    };

    return { onConfirmAlertButtonClick };
};

export default useClients;
