import { menuAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(menuAnatomy.keys);

const baseStyle = definePartsStyle({
    button: {
        bg: 'primary.second',
        color: 'white',
        h: '30px',
        minW: '30px',
        rounded: 'md',
        _active: { bg: 'purple.600' },
        _hover: { bg: 'purple.600' },
        _focus: { bg: 'purple.600' }
    },
    list: {
        py: '4',
        borderRadius: 'md',
        border: '1px solid',
        borderColor: 'gray.200',
        bg: 'white'
    },
    item: {
        alignItems: 'center',
        justifyContent: 'center',
        color: 'black',
        _hover: {
            bg: 'primary.firstAlpha35',
        },
        _focus: {
            bg: 'primary.firstAlpha35'
        },
        _active: {
            bg: 'primary.firstAlpha35'
        }
    },
    groupTitle: {
        textTransform: 'uppercase',
        color: 'white',
        textAlign: 'center',
        letterSpacing: 'wider',
        opacity: '0.7'
    },
    command: {
        opacity: '0.8',
        fontFamily: 'mono',
        fontSize: 'sm',
        letterSpacing: 'tighter',
        pl: '4'
    },
    divider: {
        my: '4',
        borderColor: 'white',
        borderBottom: '2px dotted'
    }
});
// export the base styles in the component theme
export const menuTheme = defineMultiStyleConfig({ baseStyle });
