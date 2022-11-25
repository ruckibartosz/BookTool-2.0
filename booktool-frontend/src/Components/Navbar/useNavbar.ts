import useAppSelector from '@Hooks/useAppSelector';
import useCreationWizardModal from '@Components/CreationWizardModal/useCreationWizardModal';
import { ContextHeaderTranslation } from '@Types/context';

const useNavbar = () => {
    const { onOpen } = useCreationWizardModal();
    const { context } = useAppSelector(state => state.context);
    const indexOfEnumValue = Object.values(ContextHeaderTranslation).indexOf(
        context as unknown as ContextHeaderTranslation,
      );
      const translatedNavbarHeader = Object.keys(ContextHeaderTranslation)[indexOfEnumValue];
    const onAddButtonHandler = () => onOpen;

    return { onAddButtonHandler, translatedNavbarHeader };
}

export default useNavbar;