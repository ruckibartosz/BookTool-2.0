import React from 'react';
import { HStack, Box, VStack, Tag, Text } from '@chakra-ui/react'; 
import { AiOutlineUser } from 'react-icons/ai';
import { Client } from '@Types/client';

type Props = {
    client: Client;
    firstName: string;
    lastName: string;
    email: string;
    onClick: (client: Client) => void;
}

const ClientsPopoverClientLabel: React.FC<Props> = ({ client, firstName, lastName, email, onClick }) => {

    return (
        <HStack cursor="pointer" onClick={() => onClick(client)}>
            <Box padding="8px" rounded="md" bgColor="primary.firstAlpha35" color="primary.second">
                <AiOutlineUser size={22} />
            </Box>
            <VStack alignItems="flex-start">
                <Box>
                    <Text>{firstName} {lastName}</Text>
                </Box>
                <Box>
                    <Tag color="primary.second" bgColor="primary.firstAlpha35" mt="-6px">
                        {email}
                    </Tag>
                </Box>
            </VStack>
        </HStack>
    );
}

export default ClientsPopoverClientLabel;