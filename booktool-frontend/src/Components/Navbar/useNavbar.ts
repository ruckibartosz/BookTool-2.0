import useCreationWizardModal from '@Components/CreationWizardModal/useCreationWizardModal';

const useNavbar = () => {
    const { onOpen } = useCreationWizardModal();

    const onAddButtonHandler = () => onOpen;

    return { onAddButtonHandler };
}

export default useNavbar;