import React from 'react';
import { BiBookOpen, BiErrorAlt } from 'react-icons/bi';
import { BsLightbulb } from 'react-icons/bs';
import { HiOutlineInformationCircle } from 'react-icons/hi';

import SideContextBody from './SideContextBody';
import SideContextSection from './SideContextSection';
import SideContextHeader from './SideContextHeader';
import SideContextButton from './SideContextButton';

const SideContextInformation: React.FC = () => {
    return (
        <SideContextBody>
            <SideContextSection>
                <SideContextHeader>Informację</SideContextHeader>
                <SideContextButton icon={<BiBookOpen color="primary.first" size={20} />}>
                    Tutorial
                </SideContextButton>
                <SideContextButton icon={<BsLightbulb color="primary.first" size={20} />}>
                    Najnowsze aktualizację
                </SideContextButton>
                <SideContextButton icon={<BiErrorAlt color="primary.first" size={20} />}>
                    Zgłoś błąd
                </SideContextButton>
                <SideContextButton icon={<HiOutlineInformationCircle color="primary.first" size={20} />}>
                    O programie
                </SideContextButton>
            </SideContextSection>
        </SideContextBody>
    );
};

export default SideContextInformation;
