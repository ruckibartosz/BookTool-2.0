import React from 'react';
import { AiOutlineUser, AiOutlineHome, AiOutlineMail, AiOutlineNotification } from 'react-icons/ai';

import SideContextBody from './SideContextBody';
import SideContextSection from './SideContextSection';
import SideContextHeader from './SideContextHeader';
import SideContextButton from './SideContextButton';

const SideContextSettings: React.FC = () => {
    return (
        <SideContextBody>
            <SideContextSection>
                <SideContextHeader>Ustawienia</SideContextHeader>
                <SideContextButton icon={<AiOutlineHome color="primary.first" size={20} />}>
                    Firma
                </SideContextButton>
                <SideContextButton icon={<AiOutlineUser color="primary.first" size={20} />}>
                    Profil
                </SideContextButton>
                <SideContextButton icon={<AiOutlineMail color="primary.first" size={20} />}>
                    Mail
                </SideContextButton>
                <SideContextButton icon={<AiOutlineNotification color="primary.first" size={20} />}>
                    Powiadomienia
                </SideContextButton>
            </SideContextSection>
        </SideContextBody>
    );
};

export default SideContextSettings;
