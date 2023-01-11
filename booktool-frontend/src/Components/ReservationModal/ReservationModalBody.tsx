import React from 'react';
import { ModalBody } from '@chakra-ui/react';

type Props = {
    children: React.ReactNode;
};

const ReservationModalBody: React.FC<Props> = ({ children }) => {
    return <ModalBody pb={6}>{children}</ModalBody>;
};

export default ReservationModalBody;
