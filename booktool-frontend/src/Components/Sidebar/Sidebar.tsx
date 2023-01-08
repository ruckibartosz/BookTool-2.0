import React from 'react';
import { Box } from '@chakra-ui/react';
import {
    AiOutlineDashboard,
    AiOutlineCalendar,
    AiOutlineMail,
    AiOutlineHome,
    AiOutlineSetting,
    AiOutlineInfoCircle,
    AiOutlinePartition
} from 'react-icons/ai';
import { FiUsers } from 'react-icons/fi';
import { HiOutlineUserCircle } from 'react-icons/hi';

import SidebarBody from './SidebarBody';
import SidebarContext from './SidebarContext';
import SidebarButton from './SidebarButton';

const Sidebar: React.FC = () => {
    return (
        <SidebarBody>
            <SidebarContext>
                <SidebarButton
                    name="dashboard"
                    icon={<AiOutlineDashboard size={28} />}
                    label="Panel główny"
                />
                <SidebarButton name="calendar" icon={<AiOutlineCalendar size={28} />} label="Kalendarz" />
                <SidebarButton name="apartments" icon={<AiOutlineHome size={28} />} label="Apartamenty" />
                <SidebarButton name="clients" icon={<FiUsers size={28} />} label="Klienci" />
                <SidebarButton name="mails" icon={<AiOutlineMail size={28} />} label="Maile" />
                <SidebarButton
                    name="connection"
                    icon={<AiOutlinePartition size={28} />}
                    label="Synchronizacje"
                />
                <SidebarButton
                    name="information"
                    icon={<AiOutlineInfoCircle size={28} />}
                    label="Informację"
                />
                <Box mt="auto !important">
                    <SidebarButton name="settings" icon={<AiOutlineSetting size={28} />} label="Ustawienia" />
                    <SidebarButton name="profile" icon={<HiOutlineUserCircle size={28} />} label="Profil" />
                </Box>
            </SidebarContext>
        </SidebarBody>
    );
};

export default Sidebar;
