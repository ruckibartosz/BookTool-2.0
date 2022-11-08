import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
    fonts: {
        body: `'Poppins', sans-serif`,
        heading: `'Poppins', sans-serif`
    },
    colors: {
        primary: {
            first: '#1A0053',
            second: '#7642EB'
        },
        gray: {
            100: '#7B7482'
        },
    },
});

export default theme;
