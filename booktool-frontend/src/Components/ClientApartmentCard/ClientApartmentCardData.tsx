import React, { useId } from 'react';
import { Box, Text, Editable, EditableInput, EditablePreview } from '@chakra-ui/react';

import useClientApartmentCard from './useClientApartmentCard';

type Props = {
    variant: 'apartments' | 'clients';
    data: string | number | React.ReactElement;
    key: number;
};

const ClientApartmentCardData: React.FC<Props> = ({ key, data, variant }) => {
    const { handleOnInputClick, handleOnInputBlur } = useClientApartmentCard();
    const cardId = useId();

    return (
        <Box key={key} w="full">
            <Text fontWeight="semibold" color="blackAlpha.700">
                {variant === 'clients' ? 'Email' : 'Coś tam'}
            </Text>
            <Editable
                maxW="130px"
                textOverflow="ellipsis"
                whiteSpace="nowrap"
                overflow="hidden"
                fontWeight="semibold"
                defaultValue={String(data)}
                transition="all .3s ease-in-out"
                onClick={() => handleOnInputClick(cardId)}
                onBlur={handleOnInputBlur}
            >
                <EditablePreview />
                <EditableInput />
            </Editable>
        </Box>
    );
};

export default ClientApartmentCardData;
