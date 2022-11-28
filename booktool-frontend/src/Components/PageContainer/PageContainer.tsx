import React from 'react';
import { Container } from '@chakra-ui/react';

import useAppSelector from '@Hooks/useAppSelector';

type Props = {
    children: React.ReactNode;
};

const PageContainer: React.FC<Props> = ({ children }) => {
    const { isActive } = useAppSelector((state) => state.sideContext);
    return (
        <Container
            maxW="6xl"
            maxH="calc(100vh - 92px)"
            pt="22px"
            position="relative"
            left={isActive ? '320px' : '28px'}
            transition="all .3s ease-in-out"
            overflowY="scroll"
            overflowX="hidden"
        >
            {children}
        </Container>
    );
};

export default PageContainer;
