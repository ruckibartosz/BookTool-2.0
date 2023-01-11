import React from 'react';

import ReservationModalContainer from './ReservationModalContainer';
import ReservationModalHeader from './ReservationModalHeader';
import ReservationModalBody from './ReservationModalBody';
import ReservationModalFooter from './ReservationModalFooter';
// import ReservationModalContext from './ReservationModalContext';
import ReservationModalSummary from './ReservationModalSummary';

const ReservationModal: React.FC = () => {
    return (
        <>
            <ReservationModalContainer>
                <ReservationModalHeader />
                <ReservationModalBody>
                    {/* <ReservationModalContext /> */}
                    <ReservationModalSummary />
                </ReservationModalBody>
                <ReservationModalFooter />
            </ReservationModalContainer>
        </>
    );
};

export default ReservationModal;
