import React from 'react';
import { Box } from '@chakra-ui/react';

import SideContextHideShowButton from './SideContextHideShowButton';

interface IProps {
    children: React.ReactNode;
}

const SideContextBody: React.FC<IProps> = ({ children }) => {
    return (
        <Box
            w="320px"
            height="full"
            position="absolute"
            bgColor="white"
            border="1px solid"
            borderColor="gray.200"
            p="28px"
            pt="22px"
            boxShadow="base"
        >
            <SideContextHideShowButton />
            {children}
        </Box>
    );
};

export default SideContextBody;
