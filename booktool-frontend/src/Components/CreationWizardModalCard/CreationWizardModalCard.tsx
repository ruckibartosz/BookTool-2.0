import React from 'react';
import { Heading, Button, VStack, GridItem } from '@chakra-ui/react';

interface IProps {
    cardIcon: React.ReactElement;
    cardHeading: string;
}

const CreationWizardModalCard: React.FC<IProps> = ({ cardIcon, cardHeading }) => {
    return (
        <GridItem>
            <Button
                h="full"
                w="full"
                bgColor="white"
                rounded="md"
                border="1px solid"
                borderColor="gray.200"
                boxShadow="sm"
            >
                <VStack spacing="15px">
                    {cardIcon}
                    <Heading fontSize="lg" fontWeight="md">
                        {cardHeading}
                    </Heading>
                </VStack>
            </Button>
        </GridItem>
    );
};

export default CreationWizardModalCard;
