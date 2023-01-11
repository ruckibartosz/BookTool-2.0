import React from 'react';

import ReservationModalClientSummary from './ReservationModalClientSummary';
import ReservationModalReservationSummary from './ReservationModalReservationSummary';

const ReservationModalSummary: React.FC = () => {
    return (
        <>
            <ReservationModalClientSummary />
            <ReservationModalReservationSummary />

        </>
    )
}

export default ReservationModalSummary;