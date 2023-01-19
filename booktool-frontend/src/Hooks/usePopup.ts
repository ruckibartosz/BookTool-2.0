import useAppSelector from '@Hooks/useAppSelector';
import useAppDispatch from '@Hooks/useAppDispatch';
import { openPopup, closePopup } from '@Actions/popup';

const usePopup = (id: string) => {
    const { isOpen: isPopupOpen, id: popupId } = useAppSelector((state) => state.popup);
    const dispatch = useAppDispatch();

    const isOpen = popupId === id && isPopupOpen;
    const handleClosePopup = () => dispatch(closePopup());
    const handleOpenPopup = () => dispatch(openPopup({ id }));

    return { isOpen, handleOpenPopup, handleClosePopup };
};

export default usePopup;
