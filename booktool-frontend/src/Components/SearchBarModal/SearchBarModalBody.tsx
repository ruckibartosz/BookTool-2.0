import React from 'react';
import { ModalBody } from '@chakra-ui/react';

type Props = {
    children: React.ReactNode;
};

const SearchBarModalBody: React.FC<Props> = ({ children }) => {
    return <ModalBody alignItems="center" p="20px">{children}</ModalBody>;
};

export default SearchBarModalBody;
