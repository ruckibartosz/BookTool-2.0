import React from 'react';
import { IconButton } from '@chakra-ui/react';
import { BiChevronRight, BiChevronLeft } from 'react-icons/bi';

import useSideContext from './useSideContext';
import useAppSelector from '@Hooks/useAppSelector';

const SideContextHideShowButton: React.FC = () => {
    const { isActive } = useAppSelector((state) => state.sideContext);
    const { handleShowHideButtonClick } = useSideContext();
    return (
        <IconButton
            onClick={handleShowHideButtonClick}
            aria-label="Show hide side context"
            bgColor="primary.second"
            colorScheme="purple"
            position="absolute"
            right="-15px"
            h="30px"
            minW="30px"
            icon={
                isActive ? (
                    <BiChevronLeft color="white" size={22} />
                ) : (
                    <BiChevronRight color="white" size={22} />
                )
            }
        />
    );
};

export default SideContextHideShowButton;
