import React from 'react';
import { Grid } from '@chakra-ui/react';

import useListTilesView from './useListTilesView';

type Props = {
    children: React.ReactNode;
};

const ListTilesView: React.FC<Props> = ({ children }) => {
    const { renderType } = useListTilesView();

    const listProps = {
        templateColumns: 'repeat(1, 1fr)',
        gap: 6
    };

    const tilesProps = {
        templateColumns: ['1fr', '1fr', '1fr', 'repeat(2, 1fr)', 'repeat(3, 1fr)'],
        gap: 6,
    };

    const props = renderType === 'list' ? listProps : tilesProps;

    return (
        <Grid zIndex={-1} mb="16px" {...props}>
            {children}
        </Grid>
    );
};

export default ListTilesView;
