import useAppSelector from '@Hooks/useAppSelector';
import useAppDispatch from '@Hooks/useAppDispatch';
import { closePopup } from '@Actions/popup';

const useWarningAlert = (id: string) => {
    const { isOpen: isAlertOpen, id: alertId } = useAppSelector((state) => state.popup);
    const dispatch = useAppDispatch();

    const isOpen = alertId === id && isAlertOpen;
    const handleCloseButtonClick = () => dispatch(closePopup());

    return { isOpen, handleCloseButtonClick };
};

export default useWarningAlert;
