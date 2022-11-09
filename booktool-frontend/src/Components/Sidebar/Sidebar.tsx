/* eslint-disable */
import React from 'react';
import { Stack, Box } from '@chakra-ui/react';
import {
    AiOutlineDashboard,
    AiOutlineCalendar,
    AiOutlineMail,
    AiOutlineHome,
    AiOutlineSetting,
    AiOutlineInfoCircle,
    AiOutlinePartition,
    AiOutlineLogout
} from 'react-icons/ai';
import { FiUsers } from 'react-icons/fi';
import { HiOutlineUserCircle } from 'react-icons/hi';

const Sidebar: React.FC = () => {
    return (
        <Box bgColor="primary.first" h="100vh" w="full" p="10px 0" shadow="md" zIndex={99}>
            <Stack direction="column" spacing="20px" alignItems="center" h="full">
                <Box
                    as="button"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    h="58px"
                    w="58px"
                    rounded="md"
                    aria-label="Call Segun"
                    color="gray.500"
                    _hover={{ bgColor: 'primary.second', transition: 'all .3s ease-in-out', color: 'white' }}
                >
                    <AiOutlineDashboard size={28} />
                </Box>
                <Box
                    as="button"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    h="58px"
                    w="58px"
                    rounded="md"
                    aria-label="Call Segun"
                    color="gray.500"
                    _hover={{ bgColor: 'primary.second', transition: 'all .3s ease-in-out', color: 'white' }}
                >
                    <AiOutlineCalendar size={28} />
                </Box>
                <Box
                    as="button"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    h="58px"
                    w="58px"
                    rounded="md"
                    aria-label="Call Segun"
                    color="gray.500"
                    _hover={{ bgColor: 'primary.second', transition: 'all .3s ease-in-out', color: 'white' }}
                >
                    <AiOutlineMail size={28} />
                </Box>
                <Box
                    as="button"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    h="58px"
                    w="58px"
                    rounded="md"
                    aria-label="Call Segun"
                    color="gray.500"
                    _hover={{ bgColor: 'primary.second', transition: 'all .3s ease-in-out', color: 'white' }}
                >
                    <AiOutlineHome size={28} />
                </Box>
                <Box
                    as="button"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    h="58px"
                    w="58px"
                    rounded="md"
                    aria-label="Call Segun"
                    color="gray.500"
                    _hover={{ bgColor: 'primary.second', transition: 'all .3s ease-in-out', color: 'white' }}
                >
                    <FiUsers size={28} />
                </Box>
                <Box
                    as="button"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    h="58px"
                    w="58px"
                    rounded="md"
                    aria-label="Call Segun"
                    color="gray.500"
                    _hover={{ bgColor: 'primary.second', transition: 'all .3s ease-in-out', color: 'white' }}
                >
                    <AiOutlinePartition size={28} />
                </Box>
                <Box
                    as="button"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    h="58px"
                    w="58px"
                    rounded="md"
                    aria-label="Call Segun"
                    color="gray.500"
                    _hover={{ bgColor: 'primary.second', transition: 'all .3s ease-in-out', color: 'white' }}
                >
                    <AiOutlineInfoCircle size={28} />
                </Box>
                <Box mt="auto !important">
                    <Box
                        as="button"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        h="58px"
                        w="58px"
                        rounded="md"
                        aria-label="Call Segun"
                        color="gray.500"
                        _hover={{
                            bgColor: 'primary.second',
                            transition: 'all .3s ease-in-out',
                            color: 'white'
                        }}
                    >
                        <AiOutlineSetting size={28} />
                    </Box>
                    <Box
                        as="button"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        h="58px"
                        w="58px"
                        rounded="md"
                        aria-label="Call Segun"
                        color="gray.500"
                        _hover={{
                            bgColor: 'primary.second',
                            transition: 'all .3s ease-in-out',
                            color: 'white'
                        }}
                    >
                        <HiOutlineUserCircle size={28} />
                    </Box>
                </Box>
            </Stack>
        </Box>
    );
};

export default Sidebar;
