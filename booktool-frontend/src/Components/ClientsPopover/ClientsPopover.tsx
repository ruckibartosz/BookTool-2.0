import React from 'react';
import {
    Box,
    Popover,
    PopoverContent,
    PopoverArrow,
    PopoverCloseButton,
    PopoverTrigger
} from '@chakra-ui/react';
import { AiOutlineUser } from 'react-icons/ai';

import { Client } from '@Types/client';
import ClientsPopoverHeader from './ClientsPopoverHeader';
import ClientsPopoverBody from './ClientsPopoverBody';

type Props = {
    onClick: (client: Client) => void;
}

const ClientsPopover: React.FC<Props> = ({ onClick }) => {
    return (
        <Popover>
            <PopoverTrigger>
                <Box
                    as="button"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    h="42px"
                    w="42px"
                    rounded="md"
                    aria-label="Call Segun"
                    color="primary.second"
                    bgColor="primary.firstAlpha35"
                    _hover={{ bgColor: 'primary.firstAlpha60', transition: 'all .3s ease-in-out' }}
                >
                    <AiOutlineUser size={26} />
                </Box>
            </PopoverTrigger>

            <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                <ClientsPopoverHeader />
                <ClientsPopoverBody onClick={onClick} />
            </PopoverContent>
        </Popover>
    );
}

export default ClientsPopover;