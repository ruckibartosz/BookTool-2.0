import React from 'react';
import { Grid, GridItem } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

import { HOME_SETTINGS, HOME_AREA } from '@Constants/home.constants';
import Sidebar from '@Components/Sidebar';
import Navbar from '@Components/Navbar';
import SideContext from '@Components/SideContext';
// import CreationWizardModal from '@Components/CreationWizardModal';

const Home: React.FC = () => {
    return (
        <>
            {/* <CreationWizardModal /> */}
            <Grid {...HOME_SETTINGS}>
                <GridItem area={HOME_AREA.sidebar} zIndex={2}>
                    <Sidebar />
                </GridItem>
                <GridItem area={HOME_AREA.navbar}>
                    <Navbar />
                </GridItem>
                <GridItem area={HOME_AREA.main} position="relative">
                    <SideContext />
                    <Outlet />
                </GridItem>
            </Grid>
        </>
    );
};

export default Home;
