import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { ROUTES } from '@Constants/routes.constants';
import Login from '@Pages/Login';
import LoginLeftPanel from '@Components/LoginLeftPanel';
import LoginRightPanel from '@Components/LoginRightPanel';
import Register from '@Pages/Register';
import RegisterLeftPanel from '@Components/RegisterLeftPanel';
import RegisterRightPanel from '@Components/RegisterRightPanel';
import Home from '@Pages/Home';
import NotFound from '@Pages/NotFound';

import '@Styles/main.scss';

const RootComponent: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="*" element={<NotFound />} />
                <Route path={ROUTES.HOMEPAGE_ROUTE} element={<Home />} />
                <Route
                    path={ROUTES.LOGIN_ROUTE}
                    element={<Login leftPanel={<LoginLeftPanel />} rightPanel={<LoginRightPanel />} />}
                />
                <Route
                    path={ROUTES.REGISTER_ROUTE}
                    element={<Register leftPanel={<RegisterLeftPanel />} rightPanel={<RegisterRightPanel />} />}
                />
            </Routes>
        </Router>
    );
};

export default RootComponent;
