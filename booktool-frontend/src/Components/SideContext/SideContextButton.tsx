import React from 'react';

import { Button } from '@chakra-ui/react';

interface IProps {
    icon: React.ReactElement;
    children: React.ReactNode;
}

const SideContextButton: React.FC<IProps> = ({ icon, children }) => {
    return (
        <Button
            leftIcon={icon}
            bgColor="white"
            w="full"
            mb="12px"
            justifyContent="flex-start"
            gap="10px"
            border="1px solid"
            borderColor="gray.200"
            boxShadow="sm"
            fontSize="16px"
            _hover={{ color: 'primary.second', bgColor: 'primary.firstAlpha10' }}
            _last={{mb: "0"}}
        >
            {children}
        </Button>
    );
};

export default SideContextButton;
