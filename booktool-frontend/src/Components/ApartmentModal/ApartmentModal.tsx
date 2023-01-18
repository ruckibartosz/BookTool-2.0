import React from 'react';

import ApartmentModalContainer from './ApartmentModalContainer';
import ApartmentModalHeader from './ApartmentModalHeader';
import ApartmentModalBody from './ApartmentModalBody';
import ApartmentModalFooter from './ApartmentModalFooter';
import ApartmentModalForm from './ApartmentModalForm';

const ApartmentModal: React.FC = () => {
    return (
        <ApartmentModalContainer>
            <ApartmentModalHeader />
            <ApartmentModalBody>
                <ApartmentModalForm />
            </ApartmentModalBody>
            <ApartmentModalFooter />
        </ApartmentModalContainer>
    );
};

export default ApartmentModal;
