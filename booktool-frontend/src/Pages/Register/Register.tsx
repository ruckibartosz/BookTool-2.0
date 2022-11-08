import React from 'react';
import { Stack, Box } from '@chakra-ui/react';

interface Props {
    leftPanel: React.ReactElement;
    rightPanel: React.ReactElement;
}

const Register: React.FC<Props> = ({ leftPanel, rightPanel }) => {
    return (
        <Stack h="100vh" w="100vw" direction="row">
            <Box>{leftPanel}</Box>
            <Box>{rightPanel}</Box>
        </Stack>
    );
};

export default Register;
