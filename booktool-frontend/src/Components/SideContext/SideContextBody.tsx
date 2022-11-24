import React from 'react';
import { Box } from '@chakra-ui/react';

import useAppSelector from '@Hooks/useAppSelector';
import SideContextHideShowButton from './SideContextHideShowButton';

interface IProps {
    children: React.ReactNode;
}

const SideContextBody: React.FC<IProps> = ({ children }) => {
    const { isActive } = useAppSelector(state => state.sideContext);
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
            left={isActive ? "0" : "-290px"}
            transition="all 0.3s ease-in-out"
        >
            <SideContextHideShowButton />
            {children}
        </Box>
    );
};

export default SideContextBody;
