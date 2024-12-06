// working date 30 dec 2k23............S
import React from 'react'
import { Box, Grid, Image, Text, Input, Divider } from '@chakra-ui/react'
import { EmailIcon } from '@chakra-ui/icons';
function Footer() {
    return (
        <>
            <Box w="100%" h="auto"
                
            >
                {/* WHERE TO BUY SUPPORT AND FLY SAFE container starting from here*/}
                <Box w="100%" h={{ base: "20vh", md: "45vh" }} bg="#f7f9fa">
                    <Box m="auto" w={{ base: "100%", md: "80%" }} h="100%"  >

                        <Grid h={{ base: "20vh", md: "45vh" }} templateColumns={{ base: "repeat(3, 1fr)", md: 'repeat(3, 1fr)' }} gap={{ base: "0", md: "4" }}>

                            <Box m="auto" w={{ base: "100px", md: "250px" }} h={{ base: "120px", md: "25vh" }} >
                                <Box display={"flex"} justifyContent={"center"} alignContent={"center"} alignItems={"center"} flexDirection={"column"}>
                                    <Image src="https://www1.djicdn.com/cms/uploads/94964ecb1bc4c100c42c93a814bd4733.svg" w={{ base: "50px", md: "78px" }} h={{ base: "50px", md: "78px" }} alt="svg1" />
                                    <Text marginTop={"10px"} fontWeight={"500"} fontSize={{ base: "15px", md: "2xl" }}>Where to Buy</Text>
                                    <Text fontSize={{ base: "12px", md: "2xl" }}>Learn More </Text>
                                </Box>
                            </Box>
                            <Box m="auto" w={{ base: "100px", md: "250px" }} h={{ base: "120px", md: "25vh" }} >
                                <Box display={"flex"} justifyContent={"center"} alignContent={"center"} alignItems={"center"} flexDirection={"column"}>
                                    <Image src="https://www1.djicdn.com/cms/uploads/60ff58dae8a3fffc6a6e292ce587ca46.svg" w={{ base: "50px", md: "78px" }} h={{ base: "50px", md: "78px" }} alt="svg2" />
                                    <Text marginTop={"10px"} fontWeight={"500"} fontSize={{ base: "15px", md: "2xl" }}>Support</Text>
                                    <Text fontSize={{ base: "12px", md: "2xl" }}>Learn More </Text>
                                </Box>
                            </Box>
                            <Box m="auto" w={{ base: "100px", md: "250px" }} h={{ base: "120px", md: "25vh" }} >
                                <Box display={"flex"} justifyContent={"center"} alignContent={"center"} alignItems={"center"} flexDirection={"column"}>
                                    <Image src="https://www1.djicdn.com/cms/uploads/e5878a0a23f0c8b05878dac1e0293dfd.svg" m="auto" w={{ base: "50px", md: "78px" }} h={{ base: "50px", md: "78px" }} alt="svg3" />
                                    <Text marginTop={"10px"} fontWeight={"500"} fontSize={{ base: "15px", md: "2xl" }}>Fly Safe</Text>
                                    <Text fontSize={{ base: "12px", md: "2xl" }} >Learn More </Text>

                                </Box>
                            </Box>
                        </Grid>
                    </Box>

                </Box>
                {/* WHERE TO BUY SUPPORT AND FLY SAFE container ends here*/}



                {/* Main Footer Container starting from here>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
                <Box w="100%" h={{ base: "auto", md: "90vh" }} bg="#272727" >



                    <Grid h="70%" w="80%" m="auto" templateColumns={{ base: "repeat(1, 1fr)", md: 'repeat(5, 1fr)' }} >


                        <Box w="100%" h="auto" mt='10%' >
                            <Text color="#fff" fontSize={{ base: "14px", md: "12px" }} fontWeight={"500"}>Product Categories</Text>

                            <Text color="rgba(255,255,255,.75)" mt="10px" fontSize={{ base: "14px", md: "12px" }} >Consumer</Text>
                            <Text color="rgba(255,255,255,.75)" mt="10px" fontSize={{ base: "14px", md: "12px" }} fontWeight={"400"}>Professional</Text>
                            <Text color="rgba(255,255,255,.75)" mt="10px" fontSize={{ base: "14px", md: "12px" }} fontWeight={"400"}>Enterprise</Text>
                            <Text color="rgba(255,255,255,.75)" mt="10px" fontSize={{ base: "14px", md: "12px" }} fontWeight={"400"}>Components</Text>

                            <Text color="rgba(255,255,255)" mt="30px" fontSize={{ base: "14px", md: "12px" }} fontWeight={"500"}>Service Plans</Text>
                            <Text color="rgba(255,255,255,.75)" mt="10px" fontSize={{ base: "14px", md: "12px" }} fontWeight={"400"}>DJI Care Refresh</Text>
                            <Text color="rgba(255,255,255,.75)" mt="10px" fontSize={{ base: "14px", md: "12px" }} fontWeight={"400"}>DJI Care Pro</Text>
                            <Text color="rgba(255,255,255,.75)" mt="10px" fontSize={{ base: "14px", md: "12px" }} fontWeight={"400"}>DJI Care Enterprise</Text>
                            <Text color="rgba(255,255,255,.75)" mt="10px" fontSize={{ base: "14px", md: "12px" }} fontWeight={"400"}>DJI Maintenance Program</Text>

                        </Box>
                        <Box w="100%" h="auto" mt='10%' >
                            <Text color="#fff" fontSize={{ base: "14px", md: "12px" }} fontWeight={"500"}>Where to Buy</Text>
                            <Text color="rgba(255,255,255,.75)" mt="10px" fontSize={{ base: "14px", md: "12px" }} fontWeight={"400"}>DJI Online Store</Text>
                            <Text color="rgba(255,255,255,.75)" mt="10px" fontSize={{ base: "14px", md: "12px" }} fontWeight={"400"}>Flagship Stores</Text>
                            <Text color="rgba(255,255,255,.75)" mt="10px" fontSize={{ base: "14px", md: "12px" }} fontWeight={"400"}>DJI-Operated Stores</Text>
                            <Text color="rgba(255,255,255,.75)" mt="10px" fontSize={{ base: "14px", md: "12px" }} fontWeight={"400"}>Retail Stores</Text>
                            <Text color="rgba(255,255,255,.75)" mt="10px" fontSize={{ base: "14px", md: "12px" }} fontWeight={"400"}>Enterprise Retailers</Text>
                            <Text color="rgba(255,255,255,.75)" mt="10px" fontSize={{ base: "14px", md: "12px" }} fontWeight={"400"}>Agricultural Drone Dealer</Text>
                            <Text color="rgba(255,255,255,.75)" mt="10px" fontSize={{ base: "14px", md: "12px" }} fontWeight={"400"}>Pro Retailers</Text>
                            <Text color="rgba(255,255,255,.75)" mt="10px" fontSize={{ base: "14px", md: "12px" }} fontWeight={"400"}>DJI Store App</Text>
                            <Text color="rgba(255,255,255)" mt="30px" fontSize={{ base: "14px", md: "12px" }} fontWeight={"500"}>Cooperation</Text>
                            <Text color="rgba(255,255,255,.75)" mt="10px" fontSize={{ base: "14px", md: "12px" }} fontWeight={"400"}>Become a Dealer</Text>
                            <Text color="rgba(255,255,255,.75)" mt="10px" fontSize={{ base: "14px", md: "12px" }} fontWeight={"400"}>Apply For Authorized Store</Text>

                        </Box>
                        <Box w="100%" h="auto" mt='10%'>
                            <Text color="#fff" fontSize={{ base: "14px", md: "12px" }} fontWeight={"500"}>Fly Safe</Text>
                            <Text color="rgba(255,255,255,.75)" mt="10px" fontSize={{ base: "14px", md: "12px" }} fontWeight={"400"}>Fly Safe</Text>
                            <Text color="rgba(255,255,255,.75)" mt="10px" fontSize={{ base: "14px", md: "12px" }} fontWeight={"400"}>DJI Flying Tips</Text>
                            <Text color="rgba(255,255,255)" mt="30px" fontSize={{ base: "14px", md: "12px" }} fontWeight={"500"}>Support</Text>


                            <Text color="rgba(255,255,255,.75)" mt="10px" fontSize={{ base: "14px", md: "12px" }} fontWeight={"400"}>Product Support</Text>
                            <Text color="rgba(255,255,255,.75)" mt="10px" fontSize={{ base: "14px", md: "12px" }} fontWeight={"400"}>Service Request and Inquiry</Text>
                            <Text color="rgba(255,255,255,.75)" mt="10px" fontSize={{ base: "14px", md: "12px" }} fontWeight={"400"}>Help Center</Text>
                            <Text color="rgba(255,255,255,.75)" mt="10px" fontSize={{ base: "14px", md: "12px" }} fontWeight={"400"}>After-Sales Service Policies</Text>
                            <Text color="rgba(255,255,255,.75)" mt="10px" fontSize={{ base: "14px", md: "12px" }} fontWeight={"400"}>Download Center</Text>
                            <Text color="rgba(255,255,255,.75)" mt="10px" fontSize={{ base: "14px", md: "12px" }} fontWeight={"400"}>Security and Privacy</Text>
                        </Box>
                        <Box w="100%" h="auto" mt='10%'>
                            <Text color="#fff" fontSize={{ base: "14px", md: "12px" }} fontWeight={"500"}>Explore</Text>


                            <Text color="rgba(255,255,255,.75)" mt="10px" fontSize={{ base: "14px", md: "12px" }} fontWeight={"400"}>Newsroom</Text>
                            <Text color="rgba(255,255,255,.75)" mt="10px" fontSize={{ base: "14px", md: "12px" }} fontWeight={"400"}>Buying Guides</Text>
                            <Text color="rgba(255,255,255,.75)" mt="10px" fontSize={{ base: "14px", md: "12px" }} fontWeight={"400"}>STEAM Education</Text>

                        </Box>

                        <Box w="100%" h="auto" mt='10%' >
                            <Text color="#fff" fontSize={{ base: "14px", md: "12px" }} fontWeight={"500"}>Community</Text>
                            <Text color="rgba(255,255,255,.75)" mt="10px" fontSize={{ base: "14px", md: "12px" }} fontWeight={"400"}></Text>



                            <Text color="rgba(255,255,255,.75)" mt="10px" fontSize={{ base: "14px", md: "12px" }} fontWeight={"400"}>SkyPixel</Text>
                            <Text color="rgba(255,255,255,.75)" mt="10px" fontSize={{ base: "14px", md: "12px" }} fontWeight={"400"}>DJI Forum</Text>
                            <Text color="rgba(255,255,255,.75)" mt="10px" fontSize={{ base: "14px", md: "12px" }} fontWeight={"400"}>Developer</Text>
                            <Text color="rgba(255,255,255)" mt="30px" fontSize={{ base: "14px", md: "12px" }} fontWeight={"500"}>Subscribe</Text>


                            <Text color="rgba(255,255,255,.75)" mt="10px" fontSize={{ base: "14px", md: "12px" }} fontWeight={"400"}>Get the latest news from DJI</Text>
                            <Box w="100%" display={"flex"} h="auto" justifyContent={"center"} alignContent={"center"} alignItems={"center"}>
                                <Input placeholder='Your email address' size='xs' /><Box w="30px" h="50px" display={"flex"} justifyContent={"center"} alignContent={"center"} alignItems={"center"}><EmailIcon m="auto" color="#fff" /></Box>

                            </Box>

                        </Box>




                    </Grid >




                    <Grid borderBottom={"1px solid #999"} h={{ base: "auto", md: "20%" }} w={{base:"80%",md:"80%"}} m="auto" templateColumns={{ base: "repeat(1, 1fr)", md: 'repeat(1, 1fr)' }} >

                        <Box w="100%" h={{ base: "auto", md: "7vh" }} >
                            {/* <Divider /> */}

                            <Grid h="100%" templateColumns={{ base: "repeat(1, 1fr)", md: 'repeat(2, 1fr)' }} >

                                <Box w={{ base: "100%", md: "100%" }} h="100%" >

                                    {/* <Box w="50px"  border={"1px solid lime"}>
                                        <Image w="100%"  src="https://www1.djicdn.com/dps/176201ad61d0753e17d860c4ca117932.svg" alt="" />
                                    </Box> */}
                                    <Grid h="100%" w={{ base: "30%", md: "100%" }} gap={{base:"2.5",md:"0"}} templateColumns={{ base: "repeat(1, 1fr)", md: 'repeat(7, 1fr)' }} >

                                        <Box w="100%" h="100%" display={"flex"} justifyContent={{base:"left",md:"center"}} alignContent={"center"} alignItems={"center"} >
                                            <Image w="55%" h="auto" src="https://www1.djicdn.com/dps/176201ad61d0753e17d860c4ca117932.svg" alt="" />
                                        </Box>
                                        <Box w="100%" h="100%" display={"flex"} justifyContent={{ base: "left", md: "center" }} alignContent={"center"} alignItems={"center"} >
                                            <Text color={"#dadada"} fontSize={"11.4px"}>Who we are</Text>
                                        </Box>
                                        <Box w="100%" h="100%" display={"flex"} justifyContent={{ base: "left", md: "center" }} alignContent={"center"} alignItems={"center"} >
                                            <Text color={"#dadada"} fontSize={"11.4px"}>Contact Us</Text>
                                        </Box>
                                        <Box w="100%" h="100%" display={"flex"} justifyContent={{ base: "left", md: "center" }} alignContent={"center"} alignItems={"center"} >
                                            <Text color={"#dadada"} fontSize={"11.4px"}>Careers</Text>
                                        </Box>
                                        <Box w="100%" h="100%" display={"flex"} justifyContent={{ base: "left", md: "center" }} alignContent={"center"} alignItems={"center"} >
                                            <Text color={"#dadada"} fontSize={"11.4px"}>Dealer Portal</Text>
                                        </Box>
                                        <Box w="100%" h="100%" display={"flex"} justifyContent={{ base: "left", md: "center" }} alignContent={"center"} alignItems={"center"} >
                                            <Text color={"#dadada"} fontSize={"11.4px"}>RoboMaster</Text>
                                        </Box>
                                        <Box w="100%" h="100%" display={"flex"} justifyContent={{ base: "left", md: "center" }} alignContent={"center"} alignItems={"center"} >
                                            <Text color={"#dadada"} fontSize={"11px"}>DJI Automotive</Text>
                                        </Box>

                                    </Grid>

                                </Box>
                                <Box w={{ base: "30%", md: "100%" }} h="100%" >
                                    <Grid h="100%" w={{ base: "100%", md: "100%" }} templateColumns={{ base: "repeat(2, 1fr)", md: 'repeat(8, 1fr)' }} >

                                        <Box w="100%" h={{ base: "50px", md: "100%" }} display={"flex"} justifyContent={"left"} alignContent={"center"} alignItems={"center"} >

                                        </Box>
                                        <Box w="100%" h={{ base: "0px", md: "100%" }} display={"flex"} justifyContent={"left"} alignContent={"center"} alignItems={"center"}>

                                        </Box>
                                        <Box w="100%" h={{ base: "0px", md: "100%" }} display={"flex"} justifyContent={"left"} alignContent={"center"} alignItems={"center"} >

                                        </Box>
                                        <Box w="100%" h={{ base: "0px", md: "100%" }} display={"flex"} justifyContent={"left"} alignContent={"center"} alignItems={"center"} >

                                        </Box>
                                        <Box w="100%" h={{ base: "0px", md: "100%" }} display={"flex"} justifyContent={"left"} alignContent={"center"} alignItems={"center"} >

                                        </Box>
                                        <Box w="100%" h={{ base: "0px", md: "100%" }} display={"flex"} justifyContent={"left"} alignContent={"center"} alignItems={"center"} >

                                        </Box>
                                        <Box w="100%" h={{ base: "50px", md: "100%" }} display={"flex"} justifyContent={"space-evenly"} alignContent={"center"} m="auto" alignItems={"center"} >
                                            <Image w={{base:"40%",md:"25%"}} src="https://www5.djicdn.com/uploads/footer_social/cover/1792/793cb64aaae69d1dd1b478336fd1b42e.png" alt="facebook" />
                                            <Image w={{base:"40%",md:"25%"}} src="https://www1.djicdn.com/uploads/footer_social/cover/1793/f973c01f1a95ba549a2e54b60a0e90a1.png" alt="X" />
                                        
                                        </Box>
                                        <Box w="100%" h={{ base: "50px", md: "100%" }} display={"flex"} justifyContent={"space-evenly"} alignContent={"center"} alignItems={"center"} >
                                            <Image w={{base:"40%",md:"25%"}} src="https://www3.djicdn.com/uploads/footer_social/cover/1794/8f24c284378a0920e6df15c87c4b9b59.png" alt="youtube"/>
                                            <Image w={{base:"40%",md:"25%"}} src="https://www1.djicdn.com/uploads/footer_social/cover/1798/51bab9bb7867de27a68b9ea14ae8f8b3.png" alt="insta" />
                                        </Box>



                                    </Grid>
                                </Box>

                            </Grid>

                        </Box>

                    </Grid>


                </Box >






            </Box >
        </>
    )
}

export default Footer







