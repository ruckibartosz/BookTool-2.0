import React from 'react';

import SyncCardBody from './SyncCardBody';
import SyncCardIcon from './SyncCardIcon';
import SyncCardButton from './SyncCardButton';
import SyncCardTitle from './SyncCardTitle';

type Props = {
    icon: React.ReactElement;
    title: string;
    isSynchronized: boolean;
};

const SyncCard: React.FC<Props> = ({ icon, title, isSynchronized }) => {
    return (
        <SyncCardBody>
            <SyncCardIcon icon={icon} />
            <SyncCardTitle>{title}</SyncCardTitle>
            <SyncCardButton isSynchronized={isSynchronized} />
        </SyncCardBody>
    );
};

export default SyncCard;
