import React from 'react';
import { Text } from '@chakra-ui/react';

interface IProps {
    children: React.ReactNode;
}

const SideContextHeader: React.FC<IProps> = ({ children }) => {
    return (
        <Text fontWeight="semibold" fontSize="16px" mb="16px">
            {children}
        </Text>
    );
};

export default SideContextHeader;
