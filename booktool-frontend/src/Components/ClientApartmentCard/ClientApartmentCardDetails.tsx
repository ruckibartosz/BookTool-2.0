import React from 'react';

import ClientApartmentCardDetailsBody from './ClientApartmentCardDetailsBody';
import ClientApartmentCardDetailsData from './ClientApartmentCardData';

type Props = {
    variant: 'apartments' | 'clients';
    data: string[] | number[];
};

const ClientApartmentCardAvatar: React.FC<Props> = ({ data, variant }) => {

    const renderDetails = () => {
        return data.map((val, index) => {
            return <ClientApartmentCardDetailsData key={index} variant={variant} data={val} />
        });
    }

    return (
        <ClientApartmentCardDetailsBody>
            {renderDetails()}
        </ClientApartmentCardDetailsBody>
    );
};

export default ClientApartmentCardAvatar;
