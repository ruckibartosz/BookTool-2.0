import React from 'react';
import {
    Box,
    Popover,
    PopoverContent,
    PopoverArrow,
    PopoverCloseButton,
    PopoverTrigger
} from '@chakra-ui/react';
import { AiOutlineBell } from 'react-icons/ai';

import NotificationsPopoverHeader from './NotificationsPopoverHeader';
import NotificationsPopoverBody from './NotificationsPopoverBody';

const NotificationsPopover: React.FC = () => {
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
                    <AiOutlineBell size={26} />
                </Box>
            </PopoverTrigger>

            <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                <NotificationsPopoverHeader />
                <NotificationsPopoverBody />
            </PopoverContent>
        </Popover>
    );
};

export default NotificationsPopover;
