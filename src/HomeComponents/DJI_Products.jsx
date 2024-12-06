
import React from 'react'
import { Box, Grid, GridItem, Text } from '@chakra-ui/react'

import { FiArrowRight } from 'react-icons/fi';
function DJI_Products() {
    return (
        <div>
            <Box w="100%" h={{ base: "25px", md: "50px" }}
            //  border={"1px solid blue"}
            >

            </Box>
            <Box
                // border={"1px solid red"}
                w="100%" h="auto">

                <Text textAlign={"center"} fontWeight={"500"} fontSize={{ base: "2xl", md: "41.5px" }}>Explore DJI Products in Different Fields</Text>

                <Box w="100%" h={{ base: "25px", md: "50px" }}
                //  border={"1px solid blue"}
                ></Box>

                <Box
                    // border={"1px solid red"}
                    w={{ base: "100%", md: "80%" }} m="auto"
                    height={{ base: "", md: "80vh" }}


                >

                    <Grid templateColumns={{ base: "repeat(1, 1fr)", md: 'repeat(3, 1fr)' }} gap={4}>
                        <Box w='100%' h={{base:"500px" ,md:"500px"}} position="relative" cursor={"pointer"}
                            overflow="hidden" >

                            <Box w='100%' h="100%"
                                bgImage="url('https://www1.djicdn.com/cms/uploads/add9aa1ceef194bd5774249c6e88983b.webp')"
                                bgSize="cover" objectFit="cover"
                                bgPosition="center" alt="Zoomable Image"
                                bgRepeat="no-repeat" transition="transform .5s"
                                _hover={{ transform: 'scale(1.05)' }}
                            >
                                <Box w="100%" h="auto" position="absolute" top="20%" left="50%" transform="translate(-50%, -50%)" >
                                    <Text fontWeight={"500"} color={"#fff"} w="100%" textAlign={"center"} fontSize={{ base: "25px", md: "30px" }}>Video Production</Text>
                                    <Text fontWeight={"200"} color={"#fff"} w="70%" m="auto" textAlign={"center"}>Professional Aerial and Ground Filmmaking Tools</Text>
                                    <Text w="100%" textAlign={"center"} color={"#fff"}>Learn More <span style={{ display: 'inline-block', marginTop: '15px' }}><FiArrowRight /></span></Text>
                                </Box>






                            </Box></Box>

                        <Box w='100%' h={{base:"500px" ,md:"500px"}} position="relative" cursor={"pointer"}
                            overflow="hidden">
                            <Box w='100%' h="500px"
                                bgImage="url('https://www1.djicdn.com/cms/uploads/698fb861951da3f2fd736a6c867217b1.webp')"
                                bgSize="cover" objectFit="cover"
                                bgPosition="center" alt="Zoomable Image"
                                bgRepeat="no-repeat" transition="transform .5s"
                                _hover={{ transform: 'scale(1.05)' }}
                            >
                                <Box w="100%" h="auto" position="absolute" top="20%" left="50%" transform="translate(-50%, -50%)" >
                                    <Text fontWeight={"500"} color={"#fff"} w="100%" textAlign={"center"} fontSize={{ base: "25px", md: "30px" }}>Enterprise</Text>
                                    <Text fontWeight={"200"} color={"#fff"} w="70%" m="auto" textAlign={"center"}>Drone Solutions for a New Generation of Work</Text>
                                    <Text w="100%" textAlign={"center"} color={"#fff"}>Learn More <span style={{ display: 'inline-block', marginTop: '15px' }}><FiArrowRight /></span></Text>
                                </Box>



                            </Box></Box>
                        <Box w='100%' h={{base:"500px" ,md:"500px"}} position="relative" cursor={"pointer"}
                            overflow="hidden">
                            <Box w='100%' h="500px" bgImage="url('https://www1.djicdn.com/cms/uploads/3a800890a9e26382f74908783cd653b9.webp')"
                                bgSize="cover" objectFit="cover"
                                bgPosition="center" alt="Zoomable Image"
                                bgRepeat="no-repeat" transition="transform .5s"
                                _hover={{ transform: 'scale(1.05)' }}
                            >
                                <Box w="100%" h="auto" position="absolute" top="20%" left="50%" transform="translate(-50%, -50%)" >
                                    <Text fontWeight={"500"} color={"#fff"} w="100%" textAlign={"center"} fontSize={{ base: "25px", md: "30px" }}>Agriculture</Text>
                                    <Text fontWeight={"200"} color={"#fff"} w="70%" m="auto" textAlign={"center"}>Efficient and Intelligrnt Agricultural Solution</Text>
                                    <Text w="100%" textAlign={"center"} color={"#fff"}>Learn More <span style={{ display: 'inline-block', marginTop: '15px' }}><FiArrowRight /></span></Text>
                                </Box>



                            </Box></Box>

                    </Grid>

                </Box>

            </Box>

        </div>
    )
}

export default DJI_Products
