import { ContextHeaderTranslation } from '@Types/context';
import useAppSelector from '@Hooks/useAppSelector';

const useNavbar = () => {
    const { context } = useAppSelector((state) => state.context);
    const indexOfEnumValue = Object.values(ContextHeaderTranslation).indexOf(
        context as unknown as ContextHeaderTranslation
    );
    const translatedNavbarHeader = Object.keys(ContextHeaderTranslation)[indexOfEnumValue];

    return { translatedNavbarHeader };
};

export default useNavbar;
