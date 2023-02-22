import React from 'react';
import { PopoverBody, VStack } from '@chakra-ui/react';

import { Client } from '@/Types/client';
import Loader from '@Components/Loader';
import ClientsPopoverClientLabel from './ClientsPopoverClientLabel';
import useClientsPopover from './useClientsPopover';

type Props = {
    onClick: (client: Client) => void;
}

const ClientsPopoverBody: React.FC<Props> = ({ onClick }) => {
    const { allClients, isLoading } = useClientsPopover();

    const renderAllClients = () => {
        return allClients.map((client) => {
            return (
                <ClientsPopoverClientLabel
                    key={client._id}
                    client={client}
                    firstName={client.firstName}
                    lastName={client.lastName}
                    email={client.email}
                    onClick={onClick}
                />
            );
        });
    };

    const renderContext = () => {
        if (isLoading) return <Loader />;

        return renderAllClients();
    };

    return (
        <PopoverBody>
            <VStack gap="5px" alignItems="flex-start">{renderContext()}</VStack>
        </PopoverBody>
    );
};

export default ClientsPopoverBody;
