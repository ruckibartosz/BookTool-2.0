import React from 'react';

import useAppSelector from '@Hooks/useAppSelector';
import SideContextMail from './SideContextMail';
import SideContextApartments from './SideContextApartments';
import SideContextClients from './SideContextClients';
import SideContextCalendar from './SideContextCalendar';
import SideContextConnection from './SideContextConnection';
import SideContextSettings from './SideContextSettings';
import SideContextInformation from './SideContextInformation';

const SideContext: React.FC = () => {
    const { contextType } = useAppSelector((state) => state.sideContext);

    const renderSideContextType = () => {
        switch (contextType) {
            case 'mails':
                return <SideContextMail />;
            case 'apartments':
                return <SideContextApartments />;
            case 'clients':
                return <SideContextClients />;
            case 'calendar':
                return <SideContextCalendar />;
            case 'connection':
                return <SideContextConnection />;
            case 'settings':
                return <SideContextSettings />;
            case 'information':
                return <SideContextInformation />;
            default:
                break;
        }
    };

    return <>{renderSideContextType()}</>;
};

export default SideContext;
