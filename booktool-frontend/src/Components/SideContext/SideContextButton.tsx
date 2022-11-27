import React from 'react';
import { Button } from '@chakra-ui/react';

import useSideContext from './useSideContext';
interface IProps {
    func?: 'add' | 'edit' | 'delete' | 'tiles' | 'list' | 'none';
    icon: React.ReactElement;
    children: React.ReactNode;
}

const SideContextButton: React.FC<IProps> = ({ func, icon, children }) => {
    const {
        handleAddButtonClick,
        handleEditButtonClick,
        handleDeleteButtonClick,
        handleListButtonClick,
        handleTilesButtonClick
    } = useSideContext();

    const handleButtonFunction = () => {
        switch (func) {
            case 'add':
                handleAddButtonClick();
                break;
            case 'edit':
                handleEditButtonClick();
                break;
            case 'delete':
                handleDeleteButtonClick();
                break;
            case 'list':
                handleListButtonClick();
                break;
            case 'tiles':
                handleTilesButtonClick();
                break;
            default:
                break;
        }
    };

    return (
        <Button
            leftIcon={icon}
            bgColor="white"
            w="full"
            mb="12px"
            justifyContent="flex-start"
            gap="10px"
            border="1px solid"
            borderColor="gray.200"
            boxShadow="sm"
            fontSize="16px"
            _hover={{ color: 'primary.second', bgColor: 'primary.firstAlpha10' }}
            _last={{ mb: '0' }}
            onClick={handleButtonFunction}
        >
            {children}
        </Button>
    );
};

SideContextButton.defaultProps = {
    func: 'none'
};

export default SideContextButton;
