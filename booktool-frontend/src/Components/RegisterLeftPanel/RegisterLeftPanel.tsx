import React from 'react';
import {
    Box,
    Heading,
    Text,
    Link,
    Input,
    Stack,
    FormControl,
    FormLabel,
    Checkbox,
    Button
} from '@chakra-ui/react';
import { FcGoogle } from 'react-icons/fc';
import { BsFacebook } from 'react-icons/bs';

const RegisterLeftPanel: React.FC = () => {
    return (
        <Box
            w={['100vw', '100vw', '50vw']}
            h="100vh"
            p={{ base: '34px', sm: '50px', md: '70px', lg: '70px', xl: '150px' }}
        >
            <Heading
                fontSize={{ base: '2xl', sm: '2xl', md: '3xl', lg: '3xl', xl: '4xl' }}
                fontWeight="semibold"
            >
                Zarejestruj się!
            </Heading>

            <Stack spacing="10px" direction="column">
                <Button
                    mt="10px"
                    maxWidth="350px"
                    minWidth="260px"
                    bgColor="white"
                    border="1px"
                    borderColor="gray.300"
                    color="gray.500"
                    fontWeight="normal"
                    leftIcon={<FcGoogle size={25} />}
                >
                    Zarejestruj się z Google
                </Button>
                <Button
                    mt="10px"
                    maxWidth="350px"
                    minWidth="260px"
                    border="1px"
                    colorScheme="facebook"
                    fontWeight="normal"
                    leftIcon={<BsFacebook size={25} />}
                >
                    Zarejestruj się z Facebook
                </Button>
            </Stack>
            <FormControl mt="42px" isRequired>
                <Stack spacing="20px">
                    <Box>
                        <FormLabel fontSize="md" color="gray.500">
                            Email
                        </FormLabel>
                        <Input type="email" minWidth="260px" maxWidth="470px" />
                    </Box>
                    <Box>
                        <FormLabel fontSize="md" color="gray.500">
                            Hasło
                        </FormLabel>
                        <Input type="password" minWidth="260px" maxWidth="470px" />
                    </Box>
                    <Box>
                        <FormLabel fontSize="md" color="gray.500">
                            Nazwa firmy
                        </FormLabel>
                        <Input type="text" minWidth="260px" maxWidth="470px" />
                    </Box>
                    <Box>
                        <Stack direction={['column', 'row']} justify="space-between">
                            <Box>
                                <Checkbox>
                                    <Text fontSize={['12px', '14px']} color="gray.500">
                                        Akceptuje regulamin
                                    </Text>
                                </Checkbox>
                            </Box>
                        </Stack>
                    </Box>
                    <Button
                        mt="40px !important"
                        maxWidth="350px"
                        minWidth="260px"
                        h="48px"
                        bgColor="primary.second"
                        color="white"
                        colorScheme="purple"
                    >
                        Zarejestruj się!
                    </Button>
                </Stack>
                <Text mt="10px" textAlign="left">
                    Masz konto?
                    <Link
                        fontWeight="medium"
                        color="primary.first"
                        ml="5px"
                        href="http://localhost:3000/login"
                    >
                        Zaloguj się!
                    </Link>
                </Text>
            </FormControl>
        </Box>
    );
};

export default RegisterLeftPanel;
