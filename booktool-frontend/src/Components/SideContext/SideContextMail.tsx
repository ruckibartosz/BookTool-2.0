import React from 'react';
import { AiOutlineInbox, AiOutlineMail } from 'react-icons/ai';
import { HiOutlineTemplate } from 'react-icons/hi';

import SideContextBody from './SideContextBody';
import SideContextSection from './SideContextSection';
import SideContextHeader from './SideContextHeader';
import SideContextButton from './SideContextButton';

const SideContextMail: React.FC = () => {
    return (
        <SideContextBody>
            <SideContextSection>
                <SideContextHeader>Wyświetlanie</SideContextHeader>
                <SideContextButton icon={<AiOutlineInbox color="primary.first" size={20} />}>
                    Skrzynka odbiorcza
                </SideContextButton>
            </SideContextSection>
            <SideContextSection>
                <SideContextHeader>Opcje</SideContextHeader>
                <SideContextButton icon={<AiOutlineMail color="primary.first" size={20} />}>
                    Utwórz maila
                </SideContextButton>
                <SideContextButton icon={<HiOutlineTemplate color="primary.first" size={20} />}>
                    Utwórz wzór maila
                </SideContextButton>
            </SideContextSection>
        </SideContextBody>
    );
};

export default SideContextMail;
