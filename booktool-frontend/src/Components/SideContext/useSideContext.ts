import { hideSideContext, displaySideContext } from '@Store/Actions/sideContext';
import useAppSelector from '@Hooks/useAppSelector';
import useAppDispatch from '@Hooks/useAppDispatch';

const useSideContext = () => {
    const { isActive } = useAppSelector((state) => state.sideContext);
    const dispatch = useAppDispatch();

    const handleShowHideButtonClick = () => {
        if (isActive) {
            dispatch(hideSideContext());
        } else {
            dispatch(displaySideContext());
        }
    };

    return { handleShowHideButtonClick };
};

export default useSideContext;
