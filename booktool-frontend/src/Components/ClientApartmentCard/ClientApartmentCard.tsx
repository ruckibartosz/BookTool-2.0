import React from 'react';

import ClientApartmentCardBody from './ClientApartmentCardBody';
import ClientApartmentCardAvatar from './ClientApartmentCardAvatar';
import ClientApartmentCardHeading from './ClientApartmentCardHeading';
import ClientApartmentCardDetails from './ClientApartmentCardDetails';

type Props = {
    variant: 'apartments' | 'clients';
    heading: string;
    firstColumnData: string;
    secondColumnData: string;
};

const ClientApartmentCard: React.FC<Props> = ({ variant, heading, firstColumnData, secondColumnData }) => {
    return (
        <ClientApartmentCardBody>
            <ClientApartmentCardAvatar variant={variant} />
            <ClientApartmentCardHeading heading={heading} />
            <ClientApartmentCardDetails variant={variant} data={[firstColumnData, secondColumnData]} />
        </ClientApartmentCardBody>
    );
};

export default ClientApartmentCard;
