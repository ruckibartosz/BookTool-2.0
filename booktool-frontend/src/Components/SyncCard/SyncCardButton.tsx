import React from 'react';
import { Button } from '@chakra-ui/react';
import { AiOutlineDelete, AiOutlineSync } from 'react-icons/ai';

type Props = {
    isSynchronized: boolean;
};

const SyncCardButton: React.FC<Props> = ({ isSynchronized }) => {
    if (isSynchronized) {
        return (
            <Button leftIcon={<AiOutlineDelete />} colorScheme="red">
                Usuń synchronizację
            </Button>
        );
    }

    return (
        <Button leftIcon={<AiOutlineSync />} colorScheme="purple">
            Synchronizuj!
        </Button>
    );
};

export default SyncCardButton;
