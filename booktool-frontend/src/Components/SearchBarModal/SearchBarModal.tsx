import React from 'react';

import SearchBarModalContainer from './SearchBarModalContainer';
import SearchBarModalBody from './SearchBarModalBody';
import SearchBarModalResults from './SearchBarModalResults';
import SearchBar from '@Components/SearchBar';

const SearchBarModal: React.FC = () => {
    return (
        <SearchBarModalContainer>
            <SearchBarModalBody>
                <SearchBar w="full" border="0" _focusVisible={{ border: 0 }} mb="22px"/>
                <SearchBarModalResults />
            </SearchBarModalBody>
        </SearchBarModalContainer>
    );
};

export default SearchBarModal;
