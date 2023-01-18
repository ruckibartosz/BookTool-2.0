import React from 'react';
import { ModalBody } from '@chakra-ui/react';

type Props = {
    children: React.ReactNode;
};

const ApartmentModalBody: React.FC<Props> = ({ children }) => {
    return <ModalBody pb={6}>{children}</ModalBody>;
};

export default ApartmentModalBody;
