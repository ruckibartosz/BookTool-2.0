import React from 'react';
import { HStack } from '@chakra-ui/react';

import useNavbar from './useNavbar';
import SearchBar from '@Components/SearchBar';
import NavbarContainer from './NavbarContainer';
import NavbarBreadcrumb from './NavbarBreadcrumb';
import NavbarControls from './NavbarControls';
import NavbarSyncInfo from './NavbarSyncInfo';

const Navbar: React.FC = () => {
    const { onFocusSearchbarHandler } = useNavbar();
    return (
        <NavbarContainer>
            <NavbarBreadcrumb />
            <SearchBar onClick={onFocusSearchbarHandler} disabled/>
            <HStack>
                <NavbarControls />
                <NavbarSyncInfo />
            </HStack>
        </NavbarContainer>
    );
};

export default Navbar;
