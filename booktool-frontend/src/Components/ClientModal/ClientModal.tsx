import React from 'react';

import ClientModalContainer from './ClientModalContainer';
import ClientModalHeader from './ClientModalHeader';
import ClientModalBody from './ClientModalBody';
import ClientModalFooter from './ClientModalFooter';
import ClientModalForm from './ClientModalForm';

const ClientModal: React.FC = () => {
    return (
        <ClientModalContainer>
            <ClientModalHeader />
            <ClientModalBody>
                <ClientModalForm />
            </ClientModalBody>
            <ClientModalFooter />
        </ClientModalContainer>
    );
};

export default ClientModal;
