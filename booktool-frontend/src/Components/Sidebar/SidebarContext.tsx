import React from 'react';
import { Stack } from '@chakra-ui/react';

interface IProps {
    children: React.ReactNode;
}

const SidebarContext: React.FC<IProps> = ({ children }) => {
    return (
        <Stack direction="column" spacing="20px" alignItems="center" h="full">
            {children}
        </Stack>
    );
};

export default SidebarContext;
