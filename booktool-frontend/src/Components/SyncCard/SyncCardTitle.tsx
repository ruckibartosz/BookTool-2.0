import React from 'react';
import { Box, Text } from '@chakra-ui/react';

type Props = {
    children: React.ReactNode;
};

const SyncCardTitle: React.FC<Props> = ({ children }) => {
    return (
        <Box>
            <Text fontWeight="semibold" fontSize="2xl">
                {children}
            </Text>
        </Box>
    );
};

export default SyncCardTitle;
