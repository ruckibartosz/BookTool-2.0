import React from 'react';
import { HStack } from '@chakra-ui/react';

type Props = {
    children: React.ReactNode;
};

const NavbarControlsContainer: React.FC<Props> = ({ children }) => {
    return <HStack>{children}</HStack>;
};

export default NavbarControlsContainer;
