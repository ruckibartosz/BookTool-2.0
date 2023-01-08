import React from 'react';
import { Grid, GridItem } from '@chakra-ui/react';
import { FcGoogle } from 'react-icons/fc';
import { TbBrandBooking } from 'react-icons/tb';

import PageContainer from '@Components/PageContainer';
import SyncCard from '@Components/SyncCard';

const Connection: React.FC = () => {
    return (
        <PageContainer>
            <Grid templateColumns={['1fr', '1fr', '1fr', 'repeat(2, 1fr)', 'repeat(3, 1fr)']} gap={6}>
                <GridItem>
                    <SyncCard icon={<FcGoogle size={58} />} title="Google" isSynchronized={true} />
                </GridItem>
                <GridItem>
                    <SyncCard
                        icon={<TbBrandBooking size={58} />}
                        title="Booking.com"
                        isSynchronized={false}
                    />
                </GridItem>
            </Grid>
        </PageContainer>
    );
};

export default Connection;
