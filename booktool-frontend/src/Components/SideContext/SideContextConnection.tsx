import React from 'react';
import { SiGooglecalendar } from 'react-icons/si';
import { TbBrandBooking } from 'react-icons/tb';

import SideContextBody from './SideContextBody';
import SideContextSection from './SideContextSection';
import SideContextHeader from './SideContextHeader';
import SideContextButton from './SideContextButton';

const SideContextConnection: React.FC = () => {
    return (
        <SideContextBody>
            <SideContextSection>
                <SideContextHeader>Połącz się z</SideContextHeader>
                <SideContextButton icon={<SiGooglecalendar color="primary.first" size={20} />}>
                    Kalendarz Google
                </SideContextButton>
                <SideContextButton icon={<TbBrandBooking color="primary.first" size={20} />}>
                    Booking.com
                </SideContextButton>
            </SideContextSection>
            <SideContextSection>
                <SideContextHeader>Usuń synchronizację</SideContextHeader>
                <SideContextButton icon={<SiGooglecalendar color="primary.first" size={20} />}>
                    Kalendarz Google
                </SideContextButton>
                <SideContextButton icon={<TbBrandBooking color="primary.first" size={20} />}>
                    Booking.com
                </SideContextButton>
            </SideContextSection>
        </SideContextBody>
    );
};

export default SideContextConnection;
