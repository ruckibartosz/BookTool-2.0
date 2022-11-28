import React from 'react';
import { GridItem } from '@chakra-ui/react';

type Props = {
    children: React.ReactNode;
};

const ListTilesView: React.FC<Props> = ({ children }) => {
    return <GridItem>{children}</GridItem>;
};

export default ListTilesView;
