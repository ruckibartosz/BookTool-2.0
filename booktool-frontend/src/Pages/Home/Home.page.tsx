import React from 'react';
import { Box } from "@chakra-ui/react";
import { Outlet } from 'react-router-dom';

import Sidebar from "@Components/Sidebar";

const Home: React.FC = () => {
    return (
        <Box>
            <Sidebar />
            <Outlet />
        </Box>
    );
};

export default Home;
