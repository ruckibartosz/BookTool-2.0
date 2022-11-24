import React from 'react';
import { BsGrid3X3 } from 'react-icons/bs';
import { AiOutlineUnorderedList, AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
import { IoAddCircleOutline } from 'react-icons/io5';

import SideContextBody from './SideContextBody';
import SideContextSection from './SideContextSection';
import SideContextHeader from './SideContextHeader';
import SideContextButton from './SideContextButton';


const SideContextClients: React.FC = () => {
    return (
        <SideContextBody>
            <SideContextSection>
                <SideContextHeader>Wyświetlanie</SideContextHeader>
                <SideContextButton icon={<BsGrid3X3 color="primary.first" size={20} />}>
                    Wyświetl jako kafelki
                </SideContextButton>
                <SideContextButton icon={<AiOutlineUnorderedList color="primary.first" size={20} />}>
                    Wyświetl jako listę
                </SideContextButton>
            </SideContextSection>
            <SideContextSection>
                <SideContextHeader>Opcje</SideContextHeader>
                <SideContextButton icon={<IoAddCircleOutline color="primary.first" size={20} />}>
                    Utwórz klienta
                </SideContextButton>
                <SideContextButton icon={<AiOutlineEdit color="primary.first" size={20} />}>
                    Edytuj klienta
                </SideContextButton>
                <SideContextButton icon={<AiOutlineDelete color="primary.first" size={20} />}>
                    Usuń klienta
                </SideContextButton>
            </SideContextSection>
        </SideContextBody>
    );
};

export default SideContextClients;
