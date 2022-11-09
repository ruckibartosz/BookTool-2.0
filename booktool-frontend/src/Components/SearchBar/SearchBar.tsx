import React from 'react';
import { Box, InputGroup, InputLeftElement, Input } from '@chakra-ui/react';
import { AiOutlineSearch } from 'react-icons/ai';

const SearchBar: React.FC = () => {
    return (
        <Box>
            <InputGroup>
                <InputLeftElement pointerEvents="none">
                    <AiOutlineSearch color="primary.second" size={18} />
                </InputLeftElement>
                <Input type="tel" placeholder="Wyszukaj..." maxW="320px" />
            </InputGroup>
        </Box>
    );
};

export default SearchBar;
