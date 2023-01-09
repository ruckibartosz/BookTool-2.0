import React from 'react';
import { ModalBody, Grid } from '@chakra-ui/react';

type Props = {
    children: React.ReactNode;
};

const CreationWizardModalBody: React.FC<Props> = ({ children }) => {
    return (
        <>
            <ModalBody pb={6}>
                <Grid
                    templateRows={['repeat(6, 150px)', 'repeat(3, 150px)', 'repeat(2, 150px)']}
                    templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)']}
                    gap={4}
                >
                    {children}
                </Grid>
            </ModalBody>
        </>
    );
};

export default CreationWizardModalBody;
