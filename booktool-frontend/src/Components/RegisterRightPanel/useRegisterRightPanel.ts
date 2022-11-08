import { useMediaQuery } from '@chakra-ui/react';

const useRegisterRightPanel = () => {
    const [isMobile] = useMediaQuery(`(max-width: ${662}px)`);
    return [isMobile];
};

export default useRegisterRightPanel;
