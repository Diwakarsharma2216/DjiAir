import React from 'react'
import { Container, Text, Box, Heading } from '@chakra-ui/react'
import AdminNav from "./AdminNav.jsx"
import AdminContent from './AdminContent.jsx'
const AdminSide = () => {



    return (

        <Container maxW='8xl' bg='#9b9b9b' centerContent>
            <Box w="100%"
                h={{ base: "100vh", md: "100vh" }}
                m="auto"
                // border="1px solid cyan"
                backgroundSize="cover"
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
            >
                <Box
                    w="100%"
                    h={{ base: "90vh", md: "100vh" }}
                    // border="1px solid lime"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    overflow="hidden"
                >
                    {/*  sliding box here   */}

                    <Box 
                        // transition="transform 1s"
                        _hover={{
                            // transform: 'scale(1.05)',
                            cursor: 'pointer'
                        }}
                        w={{ base: "100%", md: "95%" }}
                        m="auto"
                        h={{ base: "85vh", md: "100vh" }}
                        overflow="auto"

                        bgColor={"#181818"}
                        borderRadius="none"
                        css={{
                            "&::-webkit-scrollbar": {
                                width: "5px", // Adjust the width as per your preference
                            },
                            "&::-webkit-scrollbar-thumb": {
                                backgroundColor: "#F44336", // Customize the scrollbar thumb color
                                borderRadius: "10px", // Adjust the scrollbar thumb border-radius
                            },
                            "&::-webkit-scrollbar-track": {
                                backgroundColor: "#B0BEC5", // Customize the scrollbar track color
                                borderRadius: "10px", // Adjust the scrollbar track border-radius
                            },
                        }}
                    >
                        <Container maxW={"100%"} bg="#fff" centerContent>
                            <AdminNav />
                        </Container>

                        {/* content starts here*/}
                        <Box m="auto" w={{ base: "95%", md: "95%" }}  h="auto"
                        // border="2px solid red"
                        >
                            <Box w={{ base: "35%", md: "100%" }} position="sticky" bg="rgb(0,0,0)"
                                top="0">
                                <Text textAlign={"left"} fontSize={{base:"20px",md:"35px"}} color="#4caf50" fontFamily={"dogica-lite"} >AdminSide</Text>
                            </Box>

                            <Box>
                                <AdminContent />
                            </Box>

                        </Box>
                        {/* scroll content ends here*/}
                    </Box>
                </Box>
            </Box>
        </Container>
    )
}

export default AdminSide
