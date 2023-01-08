import React from 'react';
import { Box } from '@chakra-ui/react';

type Props = {
    icon: React.ReactElement;
};

const SyncCardIcon: React.FC<Props> = ({ icon }) => {
    return <Box>{icon}</Box>;
};

export default SyncCardIcon;
