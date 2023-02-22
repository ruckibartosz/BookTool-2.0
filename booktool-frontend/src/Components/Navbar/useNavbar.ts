import { ContextHeaderTranslation } from '@Types/context';
import useAppSelector from '@Hooks/useAppSelector';
import usePopup from '@Hooks/usePopup';

const useNavbar = () => {
    const { context } = useAppSelector((state) => state.context);
    const { handleOpenPopup } = usePopup('searchbar');
    const indexOfEnumValue = Object.values(ContextHeaderTranslation).indexOf(
        context as unknown as ContextHeaderTranslation
    );
    const translatedNavbarHeader = Object.keys(ContextHeaderTranslation)[indexOfEnumValue];

    const refreshPage = () => document.location.reload();

    const onFocusSearchbarHandler = () => handleOpenPopup();

    return { translatedNavbarHeader, refreshPage, onFocusSearchbarHandler };
};

export default useNavbar;
