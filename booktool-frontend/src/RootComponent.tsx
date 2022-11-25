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
import Dashboard from '@Pages/Dashboard';
import Calendar from '@Pages/Calendar';
import NotFound from '@Pages/NotFound';
import Mails from '@Pages/Mails';
import Clients from '@Pages/Clients';
import Settings from '@Pages/Settings';
import Information from '@Pages/Information';
import Connection from '@Pages/Connection';
import Apartments from '@Pages/Apartments';
import Profile from '@Pages/Profile';

import '@Styles/main.scss';

const RootComponent: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="*" element={<NotFound />} />
                <Route path={ROUTES.HOMEPAGE_ROUTE} element={<Home />}>
                    <Route path={ROUTES.DASHBOARD_ROUTE} element={<Dashboard />} />
                    <Route path={ROUTES.CALENDAR_ROUTE} element={<Calendar />} />
                    <Route path={ROUTES.MAILS_ROUTE} element={<Mails />} />
                    <Route path={ROUTES.CLIENTS_ROUTE} element={<Clients />} />
                    <Route path={ROUTES.APARTMENTS_ROUTE} element={<Apartments />} />
                    <Route path={ROUTES.SETTINGS_ROUTE} element={<Settings />} />
                    <Route path={ROUTES.INFORMATION_ROUTE} element={<Information />} />
                    <Route path={ROUTES.CONNECTION_ROUTE} element={<Connection />} />
                    <Route path={ROUTES.PROFILE_ROUTE} element={<Profile />} />
                </Route>
                <Route
                    path={ROUTES.LOGIN_ROUTE}
                    element={<Login leftPanel={<LoginLeftPanel />} rightPanel={<LoginRightPanel />} />}
                />
                <Route
                    path={ROUTES.REGISTER_ROUTE}
                    element={
                        <Register leftPanel={<RegisterLeftPanel />} rightPanel={<RegisterRightPanel />} />
                    }
                />
            </Routes>
        </Router>
    );
};

export default RootComponent;
