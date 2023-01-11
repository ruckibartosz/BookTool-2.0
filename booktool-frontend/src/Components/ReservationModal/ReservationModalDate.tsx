import React from 'react';
import moment from 'moment';
import { Box, HStack, Fade, Text } from '@chakra-ui/react';
import { FiChevronRight } from 'react-icons/fi';

type Props = {
    arrive?: string;
    checkout?: string;
};

const ReservationModalDate: React.FC<Props> = ({ arrive, checkout }) => {
    return (
        <Box>
            <HStack>
                <Fade in>
                    <Box>
                        <Text fontWeight="semibold" fontSize="18px">
                            {arrive}
                        </Text>
                    </Box>
                </Fade>
                <FiChevronRight size="22px" color="gray" />
                <Fade in>
                    <Box>
                        <Text fontWeight="semibold" fontSize="18px">
                            {checkout}
                        </Text>
                    </Box>
                </Fade>
            </HStack>
            
        </Box>
    );
};

ReservationModalDate.defaultProps = {
    arrive: moment().format('dddd, MMMM Do'),
    checkout: moment().format('dddd, MMMM Do')
};

export default ReservationModalDate;
