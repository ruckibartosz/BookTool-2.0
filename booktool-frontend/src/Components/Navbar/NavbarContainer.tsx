import React from 'react';
import { HStack } from '@chakra-ui/react';

type Props = {
    children: React.ReactNode;
};

const NavbarContainer: React.FC<Props> = ({ children }) => {
    return (
        <HStack p="22px" w="full" h="full" justifyContent="space-between" shadow="md" zIndex={100}>
            {children}
        </HStack>
    );
};

export default NavbarContainer;
