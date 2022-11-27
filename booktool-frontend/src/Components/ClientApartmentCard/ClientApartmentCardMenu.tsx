/* eslint-disable */

import React from 'react';
import { Box, Flex, Menu, MenuButton, MenuList, MenuItem, IconButton } from '@chakra-ui/react';
import { BsThreeDots } from 'react-icons/bs';
import { AiOutlineDelete, AiOutlineEdit, AiOutlineCheck } from 'react-icons/ai';
import { CgDetailsMore } from 'react-icons/cg';

const ClientApartmentCardMenu: React.FC = () => {
    const currentMode: string = 'deleting';

    const renderMenu = () => {
        return (
            <Menu>
                <MenuButton>
                    <Flex alignItems="center" justifyContent="center">
                        <BsThreeDots size={20} />
                    </Flex>
                </MenuButton>
                <MenuList>
                    <MenuItem icon={<CgDetailsMore size={20} />}>Zobacz szczegóły</MenuItem>
                    <MenuItem icon={<AiOutlineEdit size={20} />}>Edytuj</MenuItem>
                    <MenuItem icon={<AiOutlineDelete size={20} />}>Usuń</MenuItem>
                </MenuList>
            </Menu>
        );
    };

    const renderMenuOrIconButton = () => {
        switch (currentMode) {
            case 'editing':
                return <IconButton aria-label="Edit" variant="edit" />;
            case 'deleting':
                return <IconButton icon={<AiOutlineDelete size={20} />} aria-label="Delete" variant="del" />;
            case 'accepting':
                return <IconButton icon={<AiOutlineCheck size={20} />} aria-label="Accept" variant="accept" />;
            default:
                return renderMenu();
        }
    };

    return (
        <Box position="absolute" top="0" right="0" m="22px" aria-label="Show hide side context">
            {renderMenuOrIconButton()}
        </Box>
    );
};

export default ClientApartmentCardMenu;
