import React from 'react';
import { FcGoogle } from 'react-icons/fc';

import PageContainer from '@Components/PageContainer';
import SyncCard from '@Components/SyncCard';
import ListTilesView from '@Components/ListTilesView';
import ListTilesViewItem from '@Components/ListTilesView/ListTilesViewItem';

const Connection: React.FC = () => {
    return (
        <PageContainer>
            <ListTilesView>
                <ListTilesViewItem>
                    <SyncCard icon={<FcGoogle size={58} />} title="Google" isSynchronized={true}/>
                </ListTilesViewItem>
            </ListTilesView>
        </PageContainer>
    );
};

export default Connection;
