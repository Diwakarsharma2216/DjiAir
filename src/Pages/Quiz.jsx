// Takeing reffrence from here https://chakra-templates.dev/page-sections/testimonials...
// updating and modifying this testimonial as per my requirments...
import React from 'react';
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

import { useNavigate } from 'react-router-dom';
import CustomAlert from '../Alerts/CustomAlert';





const Testimonial = ({ children }) => {
    return <Box>{children}</Box>;
};

const TestimonialContent = ({ children }) => {
    return (
        <Stack
            bg={useColorModeValue('white', 'gray.800')}
            boxShadow={'lg'}
            paddingBottom={3}
            w={{ base: "auto", md: "400px" }}
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




export default function Quiz() {
    const navigate = useNavigate()
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [nextVal, setNextVal] = React.useState('');
    console.log(nextVal)
    const handleNext = () => {
        if (nextVal == "") {
            // calling the custom Alert function here.....
            onOpen();
        } else {
            navigate("/page2")

        }
    }

    return (
        <Box bg="#F5F5F5">
            <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
                <Stack spacing={0} align={'center'}>
                    <Heading>Describe Your Interests</Heading>
                    <Text textAlign={"center"} fontSize={{ base: "14px", md: "14px" }} color="grey">Select one</Text>
                </Stack>
                <RadioGroup onChange={setNextVal} value={nextVal}>
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
                                    bgImage="url('https://dji-official-fe.djicdn.com/dps/09565504693b3535434a2fbb465749d5.jpg')"
                                    bgSize="cover" objectFit="cover"
                                    bgPosition="center" alt="Zoomable Image"
                                    bgRepeat="no-repeat"
                                />

                                <TestimonialText>
                                    I'm a professional involved in aerial photography.

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
                                    bgImage="url('https://dji-official-fe.djicdn.com/dps/8b5581dd160bf0e0369559fd67b0e91c.jpg')"
                                    bgSize="cover" objectFit="cover"
                                    bgPosition="center" alt="Zoomable Image"
                                    bgRepeat="no-repeat"
                                />
                                <TestimonialText>
                                    I'm passionate about photography and want to record moments with camera drones.
                                </TestimonialText>
                                <Radio value='photography' size='lg'></Radio>
                            </TestimonialContent>

                        </Testimonial>
                        <Testimonial>
                            <TestimonialContent>
                                <Box
                                    w="100%"
                                    h="200px"
                                    borderTopRightRadius="10px"
                                    borderTopLeftRadius="10px"
                                    bgImage="url('https://dji-official-fe.djicdn.com/dps/e4fe07cbd4ee0b9d9925163253d66555.jpg')"
                                    bgSize="cover" objectFit="cover"
                                    bgPosition="center" alt="Zoomable Image"
                                    bgRepeat="no-repeat"
                                />
                                <TestimonialText>
                                    I'm interested in new technology, want to experience the thrill and fun of flight.
                                </TestimonialText>
                                <Radio value='sport' size='lg'></Radio>
                            </TestimonialContent>

                        </Testimonial>
                    </Stack>
                </RadioGroup>

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
            </Container>
            <CustomAlert isOpen={isOpen} onClose={onClose} />
        </Box>
    );
}


