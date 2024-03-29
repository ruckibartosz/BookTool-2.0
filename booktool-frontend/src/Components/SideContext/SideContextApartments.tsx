import React from 'react';

import { BsGrid3X3 } from 'react-icons/bs';
import { AiOutlineUnorderedList, AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
import { IoAddCircleOutline } from 'react-icons/io5';

import SideContextBody from './SideContextBody';
import SideContextSection from './SideContextSection';
import SideContextHeader from './SideContextHeader';
import SideContextButton from './SideContextButton';

const SideContextApartments: React.FC = () => {    
    return (
        <SideContextBody>
            <SideContextSection>
                <SideContextHeader>Wyświetlanie</SideContextHeader>
                <SideContextButton
                    func="list"
                    icon={<AiOutlineUnorderedList color="primary.first" size={20} />}
                >
                    Wyświetl jako listę
                </SideContextButton>
                <SideContextButton func="tiles" icon={<BsGrid3X3 color="primary.first" size={20} />}>
                    Wyświetl jako kafelki
                </SideContextButton>
            </SideContextSection>
            <SideContextSection>
                <SideContextHeader>Opcje</SideContextHeader>
                <SideContextButton func="add" icon={<IoAddCircleOutline color="primary.first" size={20} />}>
                    Utwórz apartament
                </SideContextButton>
                <SideContextButton func="edit" icon={<AiOutlineEdit color="primary.first" size={20} />}>
                    Edytuj apartament
                </SideContextButton>
                <SideContextButton func="delete" icon={<AiOutlineDelete color="primary.first" size={20} />}>
                    Usuń apartament
                </SideContextButton>
            </SideContextSection>
        </SideContextBody>
    );
};

export default SideContextApartments;
