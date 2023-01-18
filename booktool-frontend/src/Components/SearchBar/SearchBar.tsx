import React from 'react';
import { Box, InputGroup, InputLeftElement, Input, ChakraProps } from '@chakra-ui/react';
import { AiOutlineSearch } from 'react-icons/ai';

const SearchBar: React.FC<ChakraProps> = ({ w, border, _focusVisible, mb }) => {
    return (
        <Box w={w} mb={mb}>
            <InputGroup
            >
                <InputLeftElement pointerEvents="none">
                    <AiOutlineSearch color="primary.second" size={18} />
                </InputLeftElement>
                <Input
                    type="tel"
                    placeholder="Wyszukaj..."
                    maxW="320px"
                    border={border}
                    _focusVisible={_focusVisible}
                />
            </InputGroup>
        </Box>
    );
};

export default SearchBar;
