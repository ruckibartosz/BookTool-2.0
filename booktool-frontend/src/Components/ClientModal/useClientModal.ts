import { ChangeEvent, useState, useEffect } from 'react';

import { updateClient, createClient } from '@Actions/client';
import usePopup from '@Hooks/usePopup';
import useAppSelector from '@Hooks/useAppSelector';
import useAppDispatch from '@Hooks/useAppDispatch';

const useClientModal = () => {
    const { id } = useAppSelector((state) => state.popup);
    const {
        _id: clientId,
        firstName,
        lastName,
        email,
        phoneNumber,
        createdAt: clientCreatedAt
    } = useAppSelector((state) => state.client.oneClient);
    const { isOpen: isClientEditOpen, handleClosePopup } = usePopup('client-edit');
    const { isOpen: isClientCreateOpen } = usePopup('client-create');

    const [clientFirstName, setClientFirstName] = useState('');
    const [clientLastName, setClientLastName] = useState('');
    const [clientEmail, setClientEmail] = useState('');
    const [clientPhoneNumber, setClientPhoneNumber] = useState('');

    const dispatch = useAppDispatch();

    const onFirstNameChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        console.log('e = ', e.target.value);
        setClientFirstName(e.target.value);
        console.log('state = ', clientFirstName);
    }
    const onLastNameChangeHandler = (e: ChangeEvent<HTMLInputElement>) => setClientLastName(e.target.value);
    const onEmailChangeHandler = (e: ChangeEvent<HTMLInputElement>) => setClientEmail(e.target.value);
    const onClientPhoneChangeHandler = (e: ChangeEvent<HTMLInputElement>) =>
        setClientPhoneNumber(e.target.value);

    const handleSaveButtonClick = () => {
        console.log('clientFirstName state inside handler = ', clientFirstName)
        switch (id) {
            case 'client-edit':
                dispatch(
                    updateClient({
                        clientId,
                        client: {
                            firstName: clientFirstName,
                            lastName: clientLastName,
                            email: clientEmail,
                            phoneNumber: clientPhoneNumber,
                            _id: clientId,
                            createdAt: clientCreatedAt
                        }
                    })
                );
                break;
            case 'client-create':
                dispatch(
                    createClient({
                        firstName: clientFirstName,
                        lastName: clientLastName,
                        email: clientEmail,
                        phoneNumber: clientPhoneNumber,
                        _id: clientId,
                        createdAt: clientCreatedAt
                    })
                );
        }
    };

    useEffect(() => {
        if (id === 'client-edit') {
            setClientFirstName(firstName);
            setClientLastName(lastName);
            setClientEmail(email);
            setClientPhoneNumber(phoneNumber);
        }
    }, []);

    const isOpen = isClientCreateOpen || isClientEditOpen;

    return {
        clientId,
        clientFirstName,
        clientLastName,
        clientEmail,
        clientPhoneNumber,
        isOpen,
        id,
        onFirstNameChangeHandler,
        onLastNameChangeHandler,
        onEmailChangeHandler,
        onClientPhoneChangeHandler,
        handleClosePopup,
        handleSaveButtonClick
    };
};

export default useClientModal;
