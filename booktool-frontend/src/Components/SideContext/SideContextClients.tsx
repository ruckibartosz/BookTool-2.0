import React from 'react';
import { BsGrid3X3 } from 'react-icons/bs';
import { AiOutlineUnorderedList, AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
import { IoAddCircleOutline } from 'react-icons/io5';

import useSideContextClients from './useSideContextClients';
import SideContextBody from './SideContextBody';
import SideContextSection from './SideContextSection';
import SideContextHeader from './SideContextHeader';
import SideContextButton from './SideContextButton';


const SideContextClients: React.FC = () => {
    const { handleOpenPopupCreateClient } = useSideContextClients();

    return (
        <SideContextBody>
            <SideContextSection>
                <SideContextHeader>Wyświetlanie</SideContextHeader>
                <SideContextButton func="list" icon={<AiOutlineUnorderedList color="primary.first" size={20} />}>
                    Wyświetl jako listę
                </SideContextButton>
                <SideContextButton func="tiles" icon={<BsGrid3X3 color="primary.first" size={20} />}>
                    Wyświetl jako kafelki
                </SideContextButton>
            </SideContextSection>
            <SideContextSection>
                <SideContextHeader>Opcje</SideContextHeader>
                <SideContextButton onClick={handleOpenPopupCreateClient} func="add" icon={<IoAddCircleOutline color="primary.first" size={20} />}>
                    Utwórz klienta
                </SideContextButton>
                <SideContextButton func="edit" icon={<AiOutlineEdit color="primary.first" size={20} />}>
                    Edytuj klienta
                </SideContextButton>
                <SideContextButton func="delete" icon={<AiOutlineDelete color="primary.first" size={20} />}>
                    Usuń klienta
                </SideContextButton>
            </SideContextSection>
        </SideContextBody>
    );
};

export default SideContextClients;
