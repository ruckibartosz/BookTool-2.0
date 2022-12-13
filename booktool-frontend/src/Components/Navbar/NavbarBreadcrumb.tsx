import React from 'react';
import { Box, Heading, Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { BiChevronRight } from 'react-icons/bi';

import useNavbar from './useNavbar';

const NavbarBreadcrumb: React.FC = () => {
    const { translatedNavbarHeader } = useNavbar();

    return (
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
    );
};

export default NavbarBreadcrumb;
