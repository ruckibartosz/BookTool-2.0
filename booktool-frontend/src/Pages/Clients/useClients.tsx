import { useEffect } from 'react';
import { useToast } from '@chakra-ui/react';

import { getAllClients } from '@Actions/client';
import { closePopup } from '@Actions/popup';
import useAppSelector from '@Hooks/useAppSelector';
import useAppDispatch from '@Hooks/useAppDispatch';

const useClients = () => {
    const toast = useToast();
    const dispatch = useAppDispatch();
    const { data } = useAppSelector((state) => state.popup);
    const { allClients, isLoading } = useAppSelector((state) => state.client);

    const onConfirmAlertButtonClick = () => {
        toast({
            title: 'Usunięto użytkownika.',
            description: `Pomyślnie udało się usunąć użytkownika o id: ${data?.clientId && data?.clientId}`,
            status: 'success',
            duration: 4500,
            isClosable: true,
            position: 'top'
        });

        dispatch(closePopup());
    };

    useEffect(() => {
        dispatch(getAllClients());
    }, []);

    return { allClients, isLoading, onConfirmAlertButtonClick };
};

export default useClients;
