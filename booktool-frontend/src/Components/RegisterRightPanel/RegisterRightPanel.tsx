import React from 'react';
import { Heading, Text, Box, Image, Flex } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
SwiperCore.use([Autoplay]);

import useRegisterRightPanel from './useRegisterRightPanel';
import Dashboard1 from '@Assets/dashboard1.png';
import Dashboard2 from '@Assets/dashboard2.jpg';

import 'swiper/css';

const RegisterRightPanel: React.FC = () => {
    const [isMobile] = useRegisterRightPanel();

    if (!isMobile) {
        return (
            <Box p="24px" w="50vw" h="100vh" bgColor="primary.second">
                <Swiper
                    autoplay={{ delay: 3000 }}
                    slidesPerView={1}
                    style={{ height: '100%' }}
                    navigation={true}
                >
                    <SwiperSlide>
                        <Flex alignItems="center" justifyContent="center" flexDirection="column" h="100%">
                            <Image
                                h={['220px', '220px', '220px', '370px', '430px']}
                                w="720px"
                                src={Dashboard1}
                                alt="dashboard1"
                                rounded="md"
                                boxShadow="lg"
                            />

                            <Heading
                                fontSize="24px"
                                fontWeight="medium"
                                color="white"
                                mt="52px"
                                textAlign="center"
                            >
                                Komfort w korzystaniu z naszej aplikacji
                            </Heading>
                            <Text
                                mt="12px"
                                color="white"
                                fontWeight="light"
                                fontSize="14px"
                                textAlign="center"
                                maxWidth="80%"
                            >
                                Sprawd?? nasze najnowsze funkcjonalno??ci, kt??re to pozwol?? Ci w komfortowy
                                spos??b zarz??dza?? swoim hotelem. Oraz takie fajne inne rzeczy, kt??re s??
                                zar??biste
                            </Text>
                        </Flex>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Flex alignItems="center" justifyContent="center" flexDirection="column" h="100%">
                            <Image
                                h={['220px', '220px', '220px', '370px', '430px']}
                                w="720px"
                                src={Dashboard2}
                                alt="dashboard2"
                                rounded="md"
                                boxShadow="lg"
                            />

                            <Heading
                                fontSize="24px"
                                fontWeight="medium"
                                color="white"
                                mt="52px"
                                textAlign="center"
                            >
                                Komfort w korzystaniu z naszej aplikacji
                            </Heading>
                            <Text
                                mt="12px"
                                color="white"
                                fontWeight="light"
                                fontSize="14px"
                                textAlign="center"
                                maxWidth="80%"
                            >
                                Sprawd?? nasze najnowsze funkcjonalno??ci, kt??re to pozwol?? Ci w komfortowy
                                spos??b zarz??dza?? swoim hotelem. Oraz takie fajne inne rzeczy, kt??re s??
                                zar??biste
                            </Text>
                        </Flex>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Flex alignItems="center" justifyContent="center" flexDirection="column" h="100%">
                            <Image
                                h={['220px', '220px', '220px', '370px', '430px']}
                                w="720px"
                                src={Dashboard1}
                                alt="dashboard1"
                                rounded="md"
                                boxShadow="lg"
                            />

                            <Heading
                                fontSize="24px"
                                fontWeight="medium"
                                color="white"
                                mt="52px"
                                textAlign="center"
                            >
                                Komfort w korzystaniu z naszej aplikacji
                            </Heading>
                            <Text
                                mt="12px"
                                color="white"
                                fontWeight="light"
                                fontSize="14px"
                                textAlign="center"
                                maxWidth="80%"
                            >
                                Sprawd?? nasze najnowsze funkcjonalno??ci, kt??re to pozwol?? Ci w komfortowy
                                spos??b zarz??dza?? swoim hotelem. Oraz takie fajne inne rzeczy, kt??re s??
                                zar??biste
                            </Text>
                        </Flex>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Flex alignItems="center" justifyContent="center" flexDirection="column" h="100%">
                            <Image
                                h={['220px', '220px', '220px', '370px', '430px']}
                                w="720px"
                                src={Dashboard1}
                                alt="dashboard1"
                                rounded="md"
                                boxShadow="lg"
                            />

                            <Heading
                                fontSize="24px"
                                fontWeight="medium"
                                color="white"
                                mt="52px"
                                textAlign="center"
                            >
                                Komfort w korzystaniu z naszej aplikacji
                            </Heading>
                            <Text
                                mt="12px"
                                color="white"
                                fontWeight="light"
                                fontSize="14px"
                                textAlign="center"
                                maxWidth="80%"
                            >
                                Sprawd?? nasze najnowsze funkcjonalno??ci, kt??re to pozwol?? Ci w komfortowy
                                spos??b zarz??dza?? swoim hotelem. Oraz takie fajne inne rzeczy, kt??re s??
                                zar??biste
                            </Text>
                        </Flex>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Flex alignItems="center" justifyContent="center" flexDirection="column" h="100%">
                            <Image
                                h={['220px', '220px', '220px', '370px', '430px']}
                                w="720px"
                                src={Dashboard1}
                                alt="dashboard1"
                                rounded="md"
                                boxShadow="lg"
                            />

                            <Heading
                                fontSize="24px"
                                fontWeight="medium"
                                color="white"
                                mt="52px"
                                textAlign="center"
                            >
                                Komfort w korzystaniu z naszej aplikacji
                            </Heading>
                            <Text
                                mt="12px"
                                color="white"
                                fontWeight="light"
                                fontSize="14px"
                                textAlign="center"
                                maxWidth="80%"
                            >
                                Sprawd?? nasze najnowsze funkcjonalno??ci, kt??re to pozwol?? Ci w komfortowy
                                spos??b zarz??dza?? swoim hotelem. Oraz takie fajne inne rzeczy, kt??re s??
                                zar??biste
                            </Text>
                        </Flex>
                    </SwiperSlide>
                </Swiper>
            </Box>
        );
    }

    return null;
};

export default RegisterRightPanel;
