import useAppSelector from '@Hooks/useAppSelector';
import useAppDispatch from '@Hooks/useAppDispatch';
import { openPopup, closePopup } from '@Actions/popup';

const useCreationWizardModal = (id: string) => {
    const { isOpen: isCreationWizardOpen, id: creationWizardId } = useAppSelector((state) => state.popup);
    const dispatch = useAppDispatch();

    const isOpen = creationWizardId === id && isCreationWizardOpen;
    const handleCloseButtonClick = () => dispatch(closePopup());
    const handleOpenButtonClick = () => dispatch(openPopup({ id }));

    return { isOpen, handleOpenButtonClick, handleCloseButtonClick };
};

export default useCreationWizardModal;
