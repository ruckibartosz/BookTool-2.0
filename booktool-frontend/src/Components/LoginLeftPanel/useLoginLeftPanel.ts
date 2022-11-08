import { useMediaQuery } from '@chakra-ui/react'

const useLoginLeftPanel = () => {
    const [isMobile] = useMediaQuery(`(max-width: ${662}px)`)
    return [isMobile]
}

export default useLoginLeftPanel
