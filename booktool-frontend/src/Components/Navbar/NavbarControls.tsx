import React from 'react';
import { Box, Button, Tooltip } from '@chakra-ui/react';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { SlReload } from 'react-icons/sl';
import { AiOutlineLogout, AiOutlinePlus } from 'react-icons/ai';

import useNavbar from './useNavbar';
import useCreationWizardModal from '@Components/CreationWizardModal/useCreationWizardModal';
import NavbarControlsContainer from './NavbarControlsContainer';

const NavbarControls: React.FC = () => {
    const { handleOpenButtonClick } = useCreationWizardModal('creation-wizard');
    const { refreshPage } = useNavbar();

    return (
        <NavbarControlsContainer>
            <Tooltip hasArrow label="Odśwież stronę" placement="bottom">
                <Box
                    as="button"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    h="42px"
                    w="42px"
                    rounded="md"
                    aria-label="Call Segun"
                    color="primary.second"
                    bgColor="primary.firstAlpha35"
                    _hover={{ bgColor: 'primary.firstAlpha60', transition: 'all .3s ease-in-out' }}
                    onClick={refreshPage}
                >
                    <SlReload size={28} />
                </Box>
            </Tooltip>
            <Button
                leftIcon={<AiOutlinePlus size={18} />}
                colorScheme="purple"
                color="white"
                variant="solid"
                onClick={handleOpenButtonClick}
            >
                Dodaj
            </Button>
            <Box h="34px" w="1px" bgColor="gray.500" />
            <Tooltip hasArrow label="Wyloguj się" placement="bottom">
                <Box
                    as="button"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    h="42px"
                    w="42px"
                    rounded="md"
                    aria-label="Call Segun"
                    color="primary.second"
                    bgColor="primary.firstAlpha35"
                    _hover={{ bgColor: 'primary.firstAlpha60', transition: 'all .3s ease-in-out' }}
                >
                    <AiOutlineLogout size={26} />
                </Box>
            </Tooltip>
            <Tooltip hasArrow label="Więcej opcji" placement="bottom">
                <Box
                    as="button"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    h="42px"
                    w="42px"
                    rounded="md"
                    aria-label="Call Segun"
                    color="primary.second"
                    bgColor="primary.firstAlpha35"
                    _hover={{ bgColor: 'primary.firstAlpha60', transition: 'all .3s ease-in-out' }}
                >
                    <BiDotsHorizontalRounded size={26} />
                </Box>
            </Tooltip>
        </NavbarControlsContainer>
    );
};

export default NavbarControls;
