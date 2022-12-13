import React from 'react';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { HStack, Box, Text } from '@chakra-ui/react';

const NavbarSyncInfo: React.FC = () => {
    return (
        <HStack>
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
    );
};

export default NavbarSyncInfo;
