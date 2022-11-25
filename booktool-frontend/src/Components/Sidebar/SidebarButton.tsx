import React from 'react';
import { Box } from '@chakra-ui/react';

import { ContextType } from '@Types/context';
import useSidebar from './useSidebar';

interface IProps {
    name: ContextType;
    icon: React.ReactElement;
}

const SidebarButton: React.FC<IProps> = ({ icon, name }) => {
    const { handleSidebarButtonClick, context } = useSidebar();

    return (
        <Box
            as="button"
            display="flex"
            alignItems="center"
            justifyContent="center"
            h="58px"
            w="58px"
            rounded="md"
            aria-label="Call Segun"
            color={name === context ? 'white' : 'gray.500'}
            bgColor={name === context ? 'primary.second' : 'transparent'}
            _hover={{
                bgColor: 'primary.second',
                transition: 'all .3s ease-in-out',
                color: 'white'
            }}
            transition="all .2s ease-in-out"
            onClick={() => handleSidebarButtonClick(name)}
        >
            {icon}
        </Box>
    );
};

export default SidebarButton;
