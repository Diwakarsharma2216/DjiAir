import React, { useContext, useState } from 'react'
import Footer from "../Components/Footer.jsx"
import { Box, Container, Flex, VStack, Text, Heading, Center, Grid } from '@chakra-ui/react'
import { CheckCircleIcon } from '@chakra-ui/icons'
import { Navigate, useNavigate } from 'react-router-dom'
import { FaCartArrowDown } from "react-icons/fa"



const droneData = [
    { cover_img: "https://stormsend1.djicdn.com/tpc/uploads/spu/cover/a8d109dc745bbd761997b81278f59d7d@xlarge.png", price: "152", discription: "vsdv sdbvsdbv sbsdb", background_img: "http://192.168.118.120:5000/buy/665dd4ed37182ba4d76fc917", background_title: "dgfhd ", id: "1ghgf45452" },
    { cover_img: "https://stormsend1.djicdn.com/tpc/uploads/sku/cover/275cd727-41ae-4a46-af32-a1d9274cd9ce@xlarge.png", price: "595", discription: " dfbvsfb fdsbsdfb sdfbb", background_img: "http://192.168.118.120:5000/buy/665dda7337182ba4d76fc91d", background_title: "edhdh ", id: "4547hggh5" },
    { cover_img: "https://stormsend1.djicdn.com/tpc/uploads/spu/cover/dec7fc08d4404fe5dbb27116bd985d85@xlarge.png", price: "999", discription: "sgbsb sbdffb sdbgsb ", background_img: "http://192.168.118.120:5000/buy/665dda7337182ba4d76fc91d", background_title: "therheh", id: "chdf577ghfjh" }
]





const Add_to_cart = () => {

    const Navigate = useNavigate()

    const handleAddtoCart = () => {

        Navigate(`/cart`);
    }




    return (
        <>
            {/* container here............... */}





            <Container p={0} maxW={{ base: "100%", md: "100%" }} h={"auto"} bg="#eee">
                <Box display="flex" alignContent={"center"} alignItems={"center"} w="100%" h={{ base: "auto", md: "auto" }} bg="#FFFFFF">
                    <Text p={5} fontSize={{ base: "14px", md: "14px" }} color="#777">
                        Store /
                        Camera Drones
                        / DJI globak
                    </Text>
                </Box>

                <Box w="100%" h={{ base: "8vh", md: "10vh" }}></Box>
                <Flex flexDirection={{ base: "column", md: "row" }} w={{ base: "90%", md: "80%" }} m="auto" h="auto" p="3" bg="#FFF" borderRadius={"lg"}>
                    <Flex w={{ base: "100%", md: "70%" }} h="100%" >
                        <Box display={"flex"} alignContent={"center"} alignItems={"center"} p="1" w={{ base: "20%", md: "10%" }} h="100%" >
                            <CheckCircleIcon boxSize={{ base: "25px", md: "30px" }} color={'#66BB6A'} />
                        </Box>
                        <Box w={{ base: "auto", md: "auto" }} >
                            <Box display={"flex"} flexDirection={"column"} justifyContent={"left"}>
                                <Text color="#000" fontWeight={"500"} fontSize={{ base: "12px", md: "14px" }} >
                                    Your Item(s) Added to Cart Successfully!</Text>
                                <Text color="#666666" fontSize={{ base: "12px", md: "14px" }}> DJI Care Refresh 2-Year Plan (DJI Mavic 3 Pro) ×1 and Others...</Text>
                            </Box>
                        </Box>
                    </Flex>
                    <Box p={2} display={"flex"} justifyContent={{ base: "left", md: "center" }} alignItems={"center"} alignContent="center" w={{ base: "100%", md: "30%" }} h="100%" >
                        <Box w={{ base: "auto", md: "auto" }} bg="#1855C0" h={{ base: "30px", md: "50px" }}
                            display={"flex"} justifyContent={"center"} alignItems={"center"} alignContent="center"
                            borderTopRightRadius={{ base: "20px", md: "30px" }}
                            borderTopLeftRadius={{ base: "20px", md: "30px" }}
                            borderBottomRightRadius={{ base: "20px", md: "30px" }}
                            borderBottomLeftRadius={{ base: "20px", md: "30px" }}
                            _hover={{ cursor: "pointer", bg: "#165fdc" }}
                            onClick={handleAddtoCart}
                        >
                            <Text px={{ base: "10px", md: "25px" }} color="#FFFFFF" fontSize={{ base: "13px", md: "17px" }}>View Cart</Text>
                        </Box>
                    </Box>

                </Flex>














                <Box w="100%" h={{ base: "8vh", md: "10vh" }}></Box>
                <center w="100%" h="auto" bg="#FFFFFF">
                    <Heading as='h3' size={{ base: "lg", md: "2xl" }} fontWeight={"500"}>Recommended Accessories</Heading>
                </center>















                <Box w="100%" h={{ base: "8vh", md: "10vh" }}></Box>
                <Box w="100%" h="auto">


                    <Grid gridTemplateColumns={{ base: "repeat(1,1fr)", md: "repeat(3,1fr)" }} w="80%" h="auto" m="auto">
                        {droneData.map((el, i) => (

                            <Box
                                key={i}
                                w={{ base: "100%", md: "100%" }}
                                h={{ base: "350px", md: "420px" }}
                                bg='#EEEEEE'
                                _hover={{
                                    cursor: "pointer",
                                    ".hover-box": { visibility: "visible", opacity: 1, },
                                }}

                            >
                                <Box
                                    w={{ base: "100%", md: "100%" }}
                                    h={{ base: "250px", md: "320px" }}
                                    // border={"1px solid yellow"}
                                    className=".hover-img"
                                    position={"relative"}
                                    bgImage={`url(${el.cover_img})`}
                                    bgSize="cover"
                                    bgRepeat="no-repeat"
                                    bgPosition={"center"}
                                    transition="background-image 0.5s ease-in-out"
                                    _hover={{ bgImage: `url(${el.background_img})`, bgColor: "rgba(0,0,0,0.9)", ".hover-text": { visibility: "visible", opacity: 1, textColor: "#FFFFFF", fontWeight: "500" }, }}


                                >

                                    <Text className="hover-text"
                                        position="absolute"
                                        visibility="hidden"
                                        opacity={0}
                                        w={{ base: "100%", md: "100%" }}
                                        h="auto"
                                        bottom={0}
                                        p={{ base: "0", md: "5" }}
                                        color={{ base: "#999", md: "#EEEEEE" }}
                                        fontSize={{ base: "0.0px", md: "13.5px" }}
                                        transition="visibility 0.5s, opacity 0.5s"
                                    >
                                        {el.background_title}
                                    </Text>

                                </Box>

                                <Box
                                    m="auto"
                                    w={{ base: "100%", md: "100%" }}
                                    h={{ base: "100px", md: "100px" }}
                                    // border={"1px solid yellow"}
                                    display={"flex"}
                                >
                                    <Box
                                        //  border={"1px solid red"}
                                        w="85%">
                                        <Text pl={5} fontSize={{ base: "16px", md: "17px", lg: "18px" }} color={"#000000"} textAlign={"left"}>
                                            {el.discription}
                                        </Text>

                                        <Text fontSize={{ base: "12px", md: "13px", lg: "13px" }} pl={5} >USD $ <Text as="span" fontWeight={"500"} fontSize={{ base: "20px", md: "23px" }}>{el.price}</Text></Text>
                                    </Box>

                                    <Box w="15%" h="100%"
                                        //  border={"1px solid yellow"} 
                                        position={"relative"}>
                                        <Box onClick={handleAddtoCart}
                                            className="hover-box" visibility={"visible"} transition="visibility 0.5s, opacity 0.5s"
                                            opacity={{ base: "1", md: "1", lg: "0" }} display={"flex"} alignContent={"center"} justifyContent={"center"} alignItems={"center"} w="35px" h="35px" borderRadius={"50%"} position={"absolute"} bottom="20%" bg="#1273de">
                                            <Box w={{ base: "auto", md: "auto" }} bg="#1855C0" h={{ base: "auto", md: "auto" }}
                                                display={"flex"} justifyContent={"center"} alignItems={"center"} alignContent="center"
                                                borderTopRightRadius={{ base: "20px", md: "30px" }}
                                                borderTopLeftRadius={{ base: "20px", md: "30px" }}
                                                borderBottomRightRadius={{ base: "20px", md: "30px" }}
                                                borderBottomLeftRadius={{ base: "20px", md: "30px" }}
                                            >
                                                <FaCartArrowDown color='#fff' />
                                            </Box>
                                        </Box>

                                    </Box>
                                </Box>
                            </Box>

                        ))}

                    </Grid>

                </Box>

            </Container>



            <Footer />
        </>
    )
}

export default Add_to_cart
