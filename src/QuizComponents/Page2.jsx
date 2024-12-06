import React, { useState, useEffect } from 'react'
import {
    Box,
    Heading,
    Text,
    Stack,
    Container,
    useColorModeValue,
    Radio,
    RadioGroup,
    useDisclosure,
} from '@chakra-ui/react';
import Navbar from "../Components/Navbar.jsx"
import Footer from "../Components/Footer.jsx"
import { useNavigate } from 'react-router-dom';
import CustomAlert from "../Alerts/CustomAlert.jsx"



const Testimonial = ({ children }) => {
    return <Box>{children}</Box>;
};
const TestimonialText = ({ children }) => {
    return (
        <Text
            textAlign={'center'}
            color={useColorModeValue('gray.600', 'gray.400')}
            fontSize={'sm'}>
            {children}
        </Text>
    );
};
const TestimonialContent = ({ children }) => {
    return (
        <Stack
            bg={useColorModeValue('white', 'gray.800')}
            boxShadow={'lg'}
            paddingBottom={3}
            w={{ base: "auto", md: "300px" }}
            rounded={'xl'}
            align={'center'}
            pos={'relative'}

            _after={{
                content: `""`,
                w: 0,
                h: 0,
                borderLeft: 'solid transparent',
                borderLeftWidth: 16,
                borderRight: 'solid transparent',
                borderRightWidth: 16,
                borderTop: 'solid',
                borderTopWidth: 16,
                borderTopColor: useColorModeValue('white', 'gray.800'),
                pos: 'absolute',
                bottom: '-16px',
                left: '50%',
                transform: 'translateX(-50%)',
            }}>
            {children}
        </Stack>
    );
};
function Page2() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const navigate = useNavigate();
    const [value, setValue] = useState('');
    console.log(value)
    const handlePage1 = () => {
        navigate("/quiz")
    }
    const handleNext = () => {
        if (value === "") {
            onOpen();
        } else {
            navigate("/page3");
        }
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Navbar />

            <Box bg="#F5F5F5">
                <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
                    <Stack spacing={0} align={'center'}>
                        <Heading>What would you most like to film with your drone?</Heading>
                        <Text textAlign={"center"} fontSize={{ base: "14px", md: "18px" }} color="grey">Select one</Text>
                    </Stack>
                    <RadioGroup onChange={setValue} value={value}>
                        <Stack
                            direction={{ base: 'column', md: 'row' }}
                            spacing={{ base: 10, md: 4, lg: 10 }}>
                            <Testimonial>
                                <TestimonialContent>
                                    <Box
                                        w="100%"
                                        h="200px"
                                        borderTopRightRadius="10px"
                                        borderTopLeftRadius="10px"
                                        bgImage="url('https://dji-official-fe.djicdn.com/dps/d87e8b8c69b0897608276bcf8a190f9b.jpg')"
                                        bgSize="cover" objectFit="cover"
                                        bgPosition="center" alt="quiz image"
                                        bgRepeat="no-repeat"
                                    />

                                    <TestimonialText>
                                        Landscapes, wildlife, or city views.

                                    </TestimonialText>
                                    <Radio value='professional' size='lg'></Radio>
                                </TestimonialContent>

                            </Testimonial>
                            <Testimonial>
                                <TestimonialContent>
                                    <Box
                                        w="100%"
                                        h="200px"
                                        borderTopRightRadius="10px"
                                        borderTopLeftRadius="10px"
                                        bgImage="url('https://dji-official-fe.djicdn.com/dps/4888feb9cab50cbc2dd9db2745ae6bf5.jpg')"
                                        bgSize="cover" objectFit="cover"
                                        bgPosition="center" alt="Zoomable Image"
                                        bgRepeat="no-repeat"
                                    />

                                    <TestimonialText>
                                        Personal travel

                                    </TestimonialText>
                                    <Radio value='travel' size='lg'></Radio>
                                </TestimonialContent>

                            </Testimonial>
                            <Testimonial>
                                <TestimonialContent>
                                    <Box
                                        w="100%"
                                        h="200px"
                                        borderTopRightRadius="10px"
                                        borderTopLeftRadius="10px"
                                        bgImage="url('https://dji-official-fe.djicdn.com/dps/8a146182d451e02a706643d93b4d4d18.jpg')"
                                        bgSize="cover" objectFit="cover"
                                        bgPosition="center" alt="Zoomable Image"
                                        bgRepeat="no-repeat"
                                    />
                                    <TestimonialText>
                                        Family activities and daily moments
                                    </TestimonialText>
                                    <Radio value='personal' size='lg'></Radio>
                                </TestimonialContent>

                            </Testimonial>
                            <Testimonial>
                                <TestimonialContent>
                                    <Box
                                        w="100%"
                                        h="200px"
                                        borderTopRightRadius="10px"
                                        borderTopLeftRadius="10px"
                                        bgImage="url('https://dji-official-fe.djicdn.com/dps/3c2b76df03fce1173da37026cb213316.jpg')"
                                        bgSize="cover" objectFit="cover"
                                        bgPosition="center" alt="Zoomable Image"
                                        bgRepeat="no-repeat"
                                    />
                                    <TestimonialText>
                                        Outdoors and sports activities
                                    </TestimonialText>
                                    <Radio value='sports' size='lg'></Radio>
                                </TestimonialContent>

                            </Testimonial>
                        </Stack>
                    </RadioGroup>
                    <Box w="100%" h="auto" display={"flex"} >
                        <Box
                            w={{ base: "120px", md: "150px" }}
                            h={{ base: "35px", md: "40px" }}
                            borderTopRightRadius={"20px"}
                            borderTopLeftRadius={"20px"}
                            borderBottomRightRadius={"20px"}
                            borderBottomLeftRadius={"20px"}
                            bg="#ccd1d5"
                            display={'flex'}
                            justifyContent={"center"} alignContent={"center"} alignItems={"center"}
                            onClick={handlePage1}
                            _hover={{ cursor: "pointer" }}
                            mr="10px"
                        >
                            <Text textAlign={"center"} color="#000">Back</Text>
                        </Box>
                        <Box
                            w={{ base: "120px", md: "150px" }}
                            h={{ base: "35px", md: "40px" }}
                            borderTopRightRadius={"20px"}
                            borderTopLeftRadius={"20px"}
                            borderBottomRightRadius={"20px"}
                            borderBottomLeftRadius={"20px"}
                            bg="#000"
                            display={'flex'}
                            justifyContent={"center"} alignContent={"center"} alignItems={"center"}
                            onClick={handleNext}
                            _hover={{ cursor: "pointer" }}
                        >
                            <Text textAlign={"center"} color="#fff">Next</Text>
                        </Box>
                    </Box>

                </Container>
            </Box>

            <CustomAlert isOpen={isOpen} onClose={onClose} />
            <Footer />



        </>
    );

}

export default Page2;
