import React from 'react';

import { Heading } from '@chakra-ui/react';

interface IProps {
    children: React.ReactNode;
}

const SideContextTitle: React.FC<IProps> = ({ children }) => {
    return (
        <Heading
            fontSize="22px"
            fontWeight="semibold"
            color="gray.500"
            borderBottom="1px solid"
            borderColor="gray.200"
            pb="10px"
            mb="20px"
        >
            {children}
        </Heading>
    );
};

export default SideContextTitle;
