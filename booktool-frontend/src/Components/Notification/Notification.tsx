import React from 'react';
import { HStack, VStack, Box, Text, Tag } from '@chakra-ui/react';
import { AiOutlinePlus, AiOutlineDelete, AiOutlineMessage } from 'react-icons/ai';
import { MdOutlineUpdate } from 'react-icons/md';

type NotificationVariantType = 'add' | 'update' | 'delete' | 'new-message';

type Props = {
    variant: NotificationVariantType;
    text: string;
    date: string;
};

const Notification: React.FC<Props> = ({ variant, text, date }) => {
    const renderNotificationIcon = () => {
        switch (variant) {
            case 'add':
                return <AiOutlinePlus size={23} />;
            case 'delete':
                return <AiOutlineDelete size={23} />;
            case 'update':
                return <MdOutlineUpdate size={23} />;
            case 'new-message':
                return <AiOutlineMessage size={23} />;
            default:
                break;
        }
    };

    return (
        <HStack>
            <Box padding="8px" rounded="md" bgColor="primary.firstAlpha35" color="primary.second">
                {renderNotificationIcon()}
            </Box>
            <VStack alignItems="flex-start">
                <Box>
                    <Text>{text}</Text>
                </Box>
                <Box>
                    <Tag color="primary.second" bgColor="primary.firstAlpha35" mt="-6px">
                        {date}
                    </Tag>
                </Box>
            </VStack>
        </HStack>
    );
};

export default Notification;
