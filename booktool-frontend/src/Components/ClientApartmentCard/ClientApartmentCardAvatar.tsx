import React from 'react';
import { Circle } from '@chakra-ui/react';
import { BsFillPersonFill } from 'react-icons/bs';
import { AiFillHome } from 'react-icons/ai';

type Props = {
    variant: 'apartments' | 'clients';
};

const ClientApartmentCardAvatar: React.FC<Props> = ({ variant }) => {
    return (
        <Circle mb="16px" size="62px" bgColor="primary.firstAlpha15">
            {variant === 'clients' ? (
                <BsFillPersonFill size={42} color="#7642EB" />
            ) : (
                <AiFillHome size={24} color="#7642EB" />
            )}
        </Circle>
    );
};

export default ClientApartmentCardAvatar;
