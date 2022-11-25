import React from 'react';
import { Box } from '@chakra-ui/react';

interface IProps {
    children: React.ReactNode;
}

const SidebarBody: React.FC<IProps> = ({ children }) => {
    return (
        <Box bgColor="primary.first" h="100vh" w="full" p="10px 0" shadow="md" zIndex={99}>
            {children}
        </Box>
    );
};

export default SidebarBody;
