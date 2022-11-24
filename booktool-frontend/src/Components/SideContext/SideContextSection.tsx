import React from 'react';
import { Box } from '@chakra-ui/react';

interface IProps {
    children: React.ReactNode;
}

const SideContextSection: React.FC<IProps> = ({ children }) => {
    return <Box mb="22px">{children}</Box>;
};

export default SideContextSection;
