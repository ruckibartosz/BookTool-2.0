import { ChangeEvent, useState } from 'react';

import { Client } from '@Types/client';

const useReservationModal = () => {
    const [clientFirstName, setClientFirstName] = useState('');
    const [clientLastName, setClientLastName] = useState('');
    const [clientEmail, setClientEmail] = useState('');
    const [clientPhoneNumber, setClientPhoneNumber] = useState('');

    const handleClientPopoverClick = (client: Client) => {
        setClientFirstName(client.firstName);
        setClientLastName(client.lastName);
        setClientEmail(client.email);
        setClientPhoneNumber(client.phoneNumber);
    };

    const onFirstNameChangeHandler = (e: ChangeEvent<HTMLInputElement>) => setClientFirstName(e.target.value);
    const onLastNameChangeHandler = (e: ChangeEvent<HTMLInputElement>) => setClientLastName(e.target.value);
    const onEmailChangeHandler = (e: ChangeEvent<HTMLInputElement>) => setClientEmail(e.target.value);
    const onClientPhoneChangeHandler = (e: ChangeEvent<HTMLInputElement>) =>
        setClientPhoneNumber(e.target.value);

    return {
        clientFirstName,
        clientLastName,
        clientEmail,
        clientPhoneNumber,
        handleClientPopoverClick,
        onFirstNameChangeHandler,
        onLastNameChangeHandler,
        onEmailChangeHandler,
        onClientPhoneChangeHandler
    };
};

export default useReservationModal;
