import { useState } from 'react';

import { openPopup } from '@Actions/popup';
import useAppSelector from '@Hooks/useAppSelector';
import useAppDispatch from '@Hooks/useAppDispatch';

type InputController = {
    isEditing: boolean;
    id: string;
};

const useClientApartmentCard = () => {
    const { actionType } = useAppSelector((state) => state.sideContext);
    const { context } = useAppSelector((state) => state.context);
    const dispatch = useAppDispatch();
    const [inputController, setInputController] = useState<InputController>({ isEditing: false, id: '' });

    const handleDeleteButtonClick = () => {
        switch (context) {
            case 'clients':
                dispatch(openPopup({ id: 'del-user', data: { clientId: '1241515125' } }));
                break;
            case 'apartments':
                dispatch(openPopup({ id: 'del-apartment', data: { apartmentId: '999999999' } }));
                break;
            default:
                break;
        }
    };

    const handleOnInputClick = (id: string) => {
        setInputController({ isEditing: true, id });
    };

    const handleOnInputBlur = () => setInputController({ isEditing: false, id: '' });

    return {
        actionType,
        inputController,
        handleDeleteButtonClick,
        handleOnInputClick,
        handleOnInputBlur
    };
};

export default useClientApartmentCard;
