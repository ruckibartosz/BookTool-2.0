import React from 'react';
import { HStack } from '@chakra-ui/react';

import SearchBar from '@Components/SearchBar';
import NavbarContainer from './NavbarContainer';
import NavbarBreadcrumb from './NavbarBreadcrumb';
import NavbarControls from './NavbarControls';
import NavbarSyncInfo from './NavbarSyncInfo';

const Navbar: React.FC = () => {
    return (
        <NavbarContainer>
            <NavbarBreadcrumb />
            <SearchBar />
            <HStack>
                <NavbarControls />
                <NavbarSyncInfo />
            </HStack>
        </NavbarContainer>
    );
};

export default Navbar;
