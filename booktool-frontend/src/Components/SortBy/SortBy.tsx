import React from 'react';
import { HStack, Select, Text } from '@chakra-ui/react';

type ValueType = {
    value: string;
    option: string;
};

type Props = {
    placeholder?: string;
    values: Array<ValueType>;
};

const SortBy: React.FC<Props> = ({ placeholder, values }) => {
    const renderOptions = () => {
        return values.map((val, key) => {
            const { value, option } = val;
            return (
                <option key={key} value={value}>
                    {option}
                </option>
            );
        });
    };
    return (
        <HStack>
            <Text fontWeight="semibold" whiteSpace="nowrap"> Sortuj po: </Text>
            <Select placeholder={placeholder}>{renderOptions()}</Select>
        </HStack>
    );
};

SortBy.defaultProps = {
    placeholder: 'Wybierz opcję'
};

export default SortBy;
