import React from 'react';

import ClientApartmentCardBody from './ClientApartmentCardBody';
import ClientApartmentCardMenu from './ClientApartmentCardMenu';
import ClientApartmentCardAvatar from './ClientApartmentCardAvatar';
import ClientApartmentCardHeading from './ClientApartmentCardHeading';
import ClientApartmentCardDetails from './ClientApartmentCardDetails';

type Props = {
    id: string;
    variant: 'apartments' | 'clients';
    heading: string;
    firstColumnData: string;
    secondColumnData: string;
};

const ClientApartmentCard: React.FC<Props> = ({ id, variant, heading, firstColumnData, secondColumnData }) => {
    return (
        <ClientApartmentCardBody>
            <ClientApartmentCardMenu id={id} />
            <ClientApartmentCardAvatar variant={variant} />
            <ClientApartmentCardHeading heading={heading} />
            <ClientApartmentCardDetails variant={variant} data={[firstColumnData, secondColumnData]} />
        </ClientApartmentCardBody>
    );
};

export default ClientApartmentCard;
