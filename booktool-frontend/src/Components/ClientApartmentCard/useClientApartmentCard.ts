import { openPopup } from '@Actions/popup';
import useAppSelector from '@Hooks/useAppSelector';
import useAppDispatch from '@Hooks/useAppDispatch';

const useClientApartmentCard = () => {
    const { actionType } = useAppSelector((state) => state.sideContext);
    const dispatch = useAppDispatch();

    const handleDeleteButtonClick = () =>
        dispatch(openPopup({ id: 'del-user', data: { clientId: '1241515125' } }));

    return {
        actionType,
        handleDeleteButtonClick
    };
};

export default useClientApartmentCard;
