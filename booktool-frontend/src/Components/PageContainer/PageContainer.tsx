import React from 'react';
import { Container, Flex } from '@chakra-ui/react';

import useAppSelector from '@Hooks/useAppSelector';

type Props = {
    children: React.ReactNode;
};

const PageContainer: React.FC<Props> = ({ children }) => {
    const { isActive } = useAppSelector((state) => state.sideContext);
    return (
        <Container
            maxW="4xl"
            pt="22px"
            position="relative"
            left={isActive ? '320px' : '28px'}
            transition="all .3s ease-in-out"
        >
            <Flex alignItems="center" flexDirection="column">{children}</Flex>
        </Container>
    );
};

export default PageContainer;
