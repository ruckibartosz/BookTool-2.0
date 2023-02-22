import { ChangeEvent, useState, useEffect } from 'react';

import usePopup from '@Hooks/usePopup';
import useAppSelector from '@Hooks/useAppSelector';

const useClientModal = () => {
    const { id } = useAppSelector((state) => state.popup);
    const { firstName, lastName, email, phoneNumber } = useAppSelector((state) => state.client.oneClient);
    const { isOpen: isClientEditOpen, handleClosePopup } = usePopup('client-edit');
    const { isOpen: isClientCreateOpen } = usePopup('client-create');

    const [clientFirstName, setClientFirstName] = useState('');
    const [clientLastName, setClientLastName] = useState('');
    const [clientEmail, setClientEmail] = useState('');
    const [clientPhoneNumber, setClientPhoneNumber] = useState('');

    const onFirstNameChangeHandler = (e: ChangeEvent<HTMLInputElement>) => setClientFirstName(e.target.value);
    const onLastNameChangeHandler = (e: ChangeEvent<HTMLInputElement>) => setClientLastName(e.target.value);
    const onEmailChangeHandler = (e: ChangeEvent<HTMLInputElement>) => setClientEmail(e.target.value);
    const onClientPhoneChangeHandler = (e: ChangeEvent<HTMLInputElement>) =>
        setClientPhoneNumber(e.target.value);

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
        clientFirstName,
        clientLastName,
        clientEmail,
        clientPhoneNumber,
        isOpen,
        onFirstNameChangeHandler,
        onLastNameChangeHandler,
        onEmailChangeHandler,
        onClientPhoneChangeHandler,
        handleClosePopup
    };
};

export default useClientModal;
