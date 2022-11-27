import { hideSideContext, displaySideContext, changeSideContextAction, changeSideContextRenderType } from '@Store/Actions/sideContext';
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

    const handleAddButtonClick = () => dispatch(changeSideContextAction('add'));
    const handleEditButtonClick = () => dispatch(changeSideContextAction('edit'));
    const handleDeleteButtonClick = () => dispatch(changeSideContextAction('delete'));
    const handleListButtonClick = () => dispatch(changeSideContextRenderType('list'));
    const handleTilesButtonClick = () => dispatch(changeSideContextRenderType('tiles'));

    return {
        handleShowHideButtonClick,
        handleAddButtonClick,
        handleEditButtonClick,
        handleDeleteButtonClick,
        handleListButtonClick,
        handleTilesButtonClick,
    };
};

export default useSideContext;
