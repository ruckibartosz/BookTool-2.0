import React from 'react';
import { Grid, GridItem } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

import Sidebar from '@Components/Sidebar';
import Navbar from '@Components/Navbar';

const Home: React.FC = () => {
    return (
        <Grid
            templateAreas={`"sidebar navbar"
        "sidebar main"
        "sidebar main"`}
        gridTemplateColumns={'90px 1fr'}
        gridTemplateRows={'92px 1fr'}
        >
            <GridItem area={'sidebar'}>
                <Sidebar />
            </GridItem>
            <GridItem area={'navbar'}>
                <Navbar />
            </GridItem>
            <GridItem area={'main'}>
                <Outlet />
            </GridItem>
        </Grid>
    );
};

export default Home;
