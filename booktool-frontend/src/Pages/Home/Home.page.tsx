import React from 'react';
import { Grid, GridItem } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import { HOME_SETTINGS, HOME_AREA } from '@Constants/home.constants';
import useAppSelector from '@Hooks/useAppSelector';
import Sidebar from '@Components/Sidebar';
import Navbar from '@Components/Navbar';
import SideContext from '@Components/SideContext';
// import CreationWizardModal from '@Components/CreationWizardModal';

import './Home.style.scss';

const Home: React.FC = () => {
    const { isActive } = useAppSelector((state) => state.sideContext);
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
                    <CSSTransition in={isActive} timeout={300} classNames="sideContext">
                        <SideContext />
                    </CSSTransition>
                    <Outlet />
                </GridItem>
            </Grid>
        </>
    );
};

export default Home;
