import React from 'react';
import { AiOutlineUnorderedList, AiOutlineCalendar } from 'react-icons/ai';
import { BsCalendarDay } from 'react-icons/bs';
import { IoCalendarNumberOutline, IoCalendarOutline } from 'react-icons/io5';

import SideContextBody from './SideContextBody';
import SideContextSection from './SideContextSection';
import SideContextHeader from './SideContextHeader';
import SideContextButton from './SideContextButton';

const SideContextCalendar: React.FC = () => {
    return (
        <SideContextBody>
            <SideContextSection>
                <SideContextHeader>Wyświetlanie</SideContextHeader>
                <SideContextButton icon={<AiOutlineUnorderedList color="primary.first" size={20} />}>
                    Wyświetl jako listę
                </SideContextButton>
                <SideContextButton icon={<AiOutlineCalendar color="primary.first" size={20} />}>
                    Wyświetl jako kalendarz
                </SideContextButton>
            </SideContextSection>
            <SideContextSection>
                <SideContextHeader>Filtry</SideContextHeader>
                <SideContextButton icon={<IoCalendarOutline color="primary.first" size={20} />}>
                    Rok
                </SideContextButton>
                <SideContextButton icon={<IoCalendarNumberOutline color="primary.first" size={20} />}>
                    Miesiąc
                </SideContextButton>
                <SideContextButton icon={<BsCalendarDay color="primary.first" size={20} />}>
                    Tydzień
                </SideContextButton>
            </SideContextSection>
        </SideContextBody>
    );
};

export default SideContextCalendar;
