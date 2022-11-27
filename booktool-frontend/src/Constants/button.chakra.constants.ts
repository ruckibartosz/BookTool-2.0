import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const del = defineStyle({
    bg: 'red',
    color: 'white',
    h: '30px',
    minW: '30px',
    rounded: 'md',
    _active: { bg: 'red.500' },
    _hover: { bg: 'red.500' },
    _focus: { bg: 'red.500' }
});

const edit = defineStyle({
    bg: 'blue',
    color: 'white',
    h: '30px',
    minW: '30px',
    rounded: 'md',
    _active: { bg: 'purple.600' },
    _hover: { bg: 'purple.600' },
    _focus: { bg: 'purple.600' }
});

const accept = defineStyle({
    bg: 'green',
    color: 'white',
    h: '30px',
    minW: '30px',
    rounded: 'md',
    _active: { bg: 'green.500' },
    _hover: { bg: 'green.500' },
    _focus: { bg: 'green.500' }
});

export const buttonTheme = defineStyleConfig({
    variants: { accept, edit, del }
});
