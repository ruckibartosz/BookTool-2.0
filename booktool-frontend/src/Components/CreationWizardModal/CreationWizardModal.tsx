import React from 'react';
import { AiFillHome, AiFillCalendar, AiFillMail } from 'react-icons/ai';
import { FaUserAlt } from 'react-icons/fa';
import { MdOutlineAccountTree } from 'react-icons/md';
import { HiTemplate } from 'react-icons/hi';

import CreationWizardModalContainer from './CreationWizardModalContainer';
import CreationWizardModalCard from '@Components/CreationWizardModalCard';
import CreationWizardModalHeader from './CreationWizardModalHeader';
import CreationWizardModalBody from './CreationWizardModalBody';
import CreationWizardModalFooter from './CreationWizardModalFooter';

const CreationWizardModal: React.FC = () => {
    return (
        <>
            <CreationWizardModalContainer>
                <CreationWizardModalHeader />
                <CreationWizardModalBody>
                    <CreationWizardModalCard
                        cardIcon={<AiFillHome color="blue" size={28} />}
                        cardHeading="Apartament"
                    />

                    <CreationWizardModalCard
                        cardIcon={<FaUserAlt color="green" size={28} />}
                        cardHeading="Klient"
                    />

                    <CreationWizardModalCard
                        cardIcon={<AiFillCalendar color="purple" size={28} />}
                        cardHeading="Rezerwacja"
                    />

                    <CreationWizardModalCard
                        cardIcon={<AiFillMail color="orange" size={28} />}
                        cardHeading="Mail"
                    />

                    <CreationWizardModalCard
                        cardIcon={<MdOutlineAccountTree color="red" size={28} />}
                        cardHeading="Konto"
                    />

                    <CreationWizardModalCard
                        cardIcon={<HiTemplate color="gray" size={28} />}
                        cardHeading="Wzór"
                    />
                </CreationWizardModalBody>
                <CreationWizardModalFooter />
            </CreationWizardModalContainer>
        </>
    );
};

export default CreationWizardModal;
