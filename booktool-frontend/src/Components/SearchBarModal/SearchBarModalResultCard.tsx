import React from 'react';
import { HStack, VStack, Text, Circle } from '@chakra-ui/react';
import { AiOutlineUser, AiOutlineCalendar, AiOutlineMail, AiOutlineHome } from 'react-icons/ai';

type Props = {
    variant: 'client' | 'reservation' | 'mail' | 'apartment';
    category: string;
    data: string;
};

const SearchBarModalResultCard: React.FC<Props> = ({ variant, category, data }) => {
    const renderCardIcon = () => {
        switch (variant) {
            case 'client':
                return <AiOutlineUser size={23} />;
            case 'reservation':
                return <AiOutlineCalendar size={23} />;
            case 'mail':
                return <AiOutlineMail size={23} />;
            case 'apartment':
                return <AiOutlineHome size={23} />;
        }
    };

    return (
        <HStack
            p="12px"
            border="1px solid"
            borderColor="gray.300"
            w="full"
            rounded="md"
            shadow="md"
            _hover={{ cursor: 'pointer', backgroundColor: 'primary.firstAlpha35' }}
            transition="all .2s ease-in-out"
        >
            <Circle size="44px">{renderCardIcon()}</Circle>
            <VStack alignItems="flex-start">
                <Text fontSize="12px">{category}</Text>
                <Text fontSize="16px" fontWeight="semibold">
                    {data}
                </Text>
            </VStack>
        </HStack>
    );
};

export default SearchBarModalResultCard;
