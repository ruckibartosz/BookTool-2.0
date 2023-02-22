import { useToast } from '@chakra-ui/react';
import { useEffect } from 'react';

import { getAllApartments } from '@Actions/apartment';
import { closePopup } from '@Actions/popup';
import useAppSelector from '@Hooks/useAppSelector';
import useAppDispatch from '@Hooks/useAppDispatch';

const useApartments = () => {
    const toast = useToast();
    const dispatch = useAppDispatch();
    const { data } = useAppSelector((state) => state.popup);
    const { allApartments, isLoading } = useAppSelector((state) => state.apartment);

    const onConfirmAlertButtonClick = () => {
        toast({
            title: 'Usunięto apartament.',
            description: `Pomyślnie udało się usunąć apartament o id: ${
                data?.apartmentId && data?.apartmentId
            }`,
            status: 'success',
            duration: 4500,
            isClosable: true,
            position: 'top'
        });

        dispatch(closePopup());
    };

    useEffect(() => {
        dispatch(getAllApartments());
    }, []);

    return { allApartments, isLoading,  onConfirmAlertButtonClick };
};

export default useApartments;
