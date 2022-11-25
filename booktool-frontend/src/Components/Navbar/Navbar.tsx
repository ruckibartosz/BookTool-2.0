import React from 'react';
import {
    HStack,
    Box,
    Heading,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Button,
    Text
} from '@chakra-ui/react';
import { BiChevronRight, BiDotsHorizontalRounded } from 'react-icons/bi';
import { SlReload } from 'react-icons/sl';
import { AiOutlineLogout, AiOutlinePlus, AiOutlineCheckCircle } from 'react-icons/ai';

import useNavbar from './useNavbar';
import useCreationWizardModal from "@Components/CreationWizardModal/useCreationWizardModal";
import SearchBar from '@Components/SearchBar';


const Navbar: React.FC = () => {
    const { translatedNavbarHeader } = useNavbar();
    const { onOpen } = useCreationWizardModal();

    return (
        <HStack p="22px" w="full" h="full" justifyContent="space-between" shadow="md" zIndex={100}>
            <Box>
                <Breadcrumb
                    spacing="8px"
                    separator={<BiChevronRight size={18} color="gray.500" />}
                    color="primary.second"
                    fontWeight="semibold"
                    fontSize="12px"
                >
                    <BreadcrumbItem>
                        <BreadcrumbLink href="#">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="#">About</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem isCurrentPage>
                        <BreadcrumbLink href="#">Contact</BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
                <Box>
                    <Heading fontSize="2xl" fontWeight="semibold">
                        {translatedNavbarHeader}
                    </Heading>
                </Box>
            </Box>
            <Box>
                <SearchBar />
            </Box>
            <Box>
                <HStack>
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
                        <SlReload size={28} />
                    </Box>
                    <Button
                        leftIcon={<AiOutlinePlus size={18} />}
                        colorScheme="purple"
                        color="white"
                        variant="solid"
                        onClick={onOpen}
                    >
                        Dodaj
                    </Button>
                    <Box h="34px" w="1px" bgColor="gray.500" />
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
                    <Box h="34px" w="1px" bgColor="gray.500" />
                    <HStack>
                        <AiOutlineCheckCircle color="green" size={26} />
                        <Box>
                            <Text color="gray" fontSize="12px">
                                ruckibartosz@gmail.com
                            </Text>
                            <Text color="gray" fontSize="12px">
                                Feb 2, 2022 10:32:57
                            </Text>
                        </Box>
                    </HStack>
                </HStack>
            </Box>
        </HStack>
    );
};

export default Navbar;
