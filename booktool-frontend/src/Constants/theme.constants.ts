import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
    fonts: {
        body: `'Poppins', sans-serif`,
        heading: `'Poppins', sans-serif`
    },
    colors: {
        primary: {
            first: '#1A0053',
            second: '#7642EB',
            firstAlpha10: 'rgba(118, 66, 235, 0.10)',
            firstAlpha15: 'rgba(118, 66, 235, 0.15)',
            firstAlpha35: 'rgba(118, 66, 235, 0.35)',
            firstAlpha60: 'rgba(118, 66, 235, 0.60)',
        },
        gray: {
            100: '#7B7482'
        },
    },
});

export default theme;
