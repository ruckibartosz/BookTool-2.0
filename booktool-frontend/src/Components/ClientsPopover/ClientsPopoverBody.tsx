import React from 'react';
import { PopoverBody } from '@chakra-ui/react';

import Notification from '@Components/Notification';

const ClientsPopoverBody: React.FC = () => {
    return (
    <PopoverBody>
        <Notification variant="update" text="Dodano nową rezerwację" date="12h ago, 12:04:12"/>
        </PopoverBody>);
};

export default ClientsPopoverBody;
