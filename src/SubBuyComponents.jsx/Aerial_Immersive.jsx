import React, { useState, useEffect } from 'react'
import axios from "axios";
import { Text, Box, Divider, Image, Grid, Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs, GridItem, } from "@chakra-ui/react";



function Aerial_Immersive() {
    const [drones, setDrones] = useState([]);
    const [immersive, setImmersive] = useState([]);
    const baseURL = "https://drone-site-be2k24.onrender.com/"  
    const localURL = "http://localhost:4000/"
    const fetchDroneData = async () => {
        try {

            const response1 = await axios.get(`${baseURL}camera_drones/get/aerial`);
            setDrones(response1.data.get_data[0].drones)
            // console.log(drones)

            const response2 = await axios.get(`${baseURL}camera_drones/get/immersive`);
            setImmersive(response2.data.get_data[0].drones)
            // console.log(immersive)

        } catch (error) {
            // Handle error here
            console.error('Error creating user:', error);
        }
    }
    useEffect(() => {
        fetchDroneData()
    }, [])

    return (
        <>
            <Box w={"100%"} h={{ base: "auto", md: "auto" }} flexDirection={"column"} justifyContent={"center"} display={"flex"} alignContent={"center"} alignItems={"center"}>
                <Box w='80%' h={{ base: "20vh", md: "30vh" }} justifyContent={"center"} display={"flex"} alignContent={"center"} alignItems={"center"}>
                    <Text textAlign={"center"} fontSize={{ base: "30px", md: "5xl" }} fontWeight={"500"}>
                        Which camera drone is right for you?
                    </Text>

                </Box>

                <Tabs
                    position="relative" variant="unstyled"
                >
                    <Box
                        // border={"1px solid cyan"}
                        w="100%" h="15vh" display={"flex"} justifyContent={"center"} alignContent={"center"} alignItems={"center"} flexDirection={"column"}>
                        <TabList>
                            <Tab fontSize={{ base: "12px", md: "15px" }}>Aerial Imaging</Tab>
                            <Tab fontSize={{ base: "12px", md: "15px" }}>Immersive Flight</Tab>
                        </TabList>
                        <TabIndicator
                            mt="30px"
                            height="1.65px"
                            bg="rgb(0,0,0,0.8)"
                            borderRadius="0.5px"
                        />
                    </Box>

                    <TabPanels>
                        <TabPanel w={{ base: "350px", md: "900px" }} h="auto">

                            {/* Aerial Imaging container here----------------------->>>>>>>>>>>> */}
                            <Box
                                w={{ base: "100%", md: "100%" }} h="100%"
                            >
                                <Grid templateColumns={{ base: 'repeat(3, 1fr)', md: 'repeat(3, 1fr)' }} gap={3} >

                                    {/* mapping all the Aerial Imagin data from backend here------>>>> */}
                                    {drones.map((drone, index) => (
                                        <Box w="100%" h="auto" bg="fff" key={index} >





                                            {/* product image */}
                                            <Box w={{ base: "90%", md: "90%" }} m="auto" h={{ base: "16vh", md: "30vh" }} >
                                                <Image src={drone.img_url} alt={"drone.png"} />
                                            </Box>
                                            {/* product image */}





                                            <Text textAlign={"center"} fontSize={{ base: "10px", md: "12px" }} color={"#d0021b"}>Flagship</Text>





                                            {/* pro name */}
                                            <Text textAlign={"center"} fontWeight={"350"} fontSize={{ base: "16px", md: "25px" }} color={"#3a3738"}>{drone.pro_title}</Text>
                                            {/* pro name */}




                                            {/* where to buy  */}
                                            {/* learn more */}
                                            <Box
                                                display={"flex"}
                                                justifyContent={"space-evenly"}
                                                alignContent={"center"}
                                                alignItems={"center"}
                                                w="100%" h="100px"
                                                flexDirection={"column"}
                                            // border="1px solid red"
                                            >

                                                <Box
                                                    display={"flex"}
                                                    justifyContent={"center"}
                                                    alignContent={"center"}
                                                    alignItems={"center"}
                                                    _hover={{ cursor: "pointer", bg: "#4897ef" }}
                                                    w={{ base: "50%", md: "40%" }}
                                                    height={{ base: "30px", md: "30px" }}
                                                    borderTopRightRadius={"17px"}
                                                    borderTopLeftRadius={"17px"}
                                                    borderBottomRightRadius={"17px"}
                                                    borderBottomLeftRadius={"17px"}
                                                    bg="#2484ef">

                                                    <Text textAlign={"center"} fontWeight={"400"} fontSize={{ base: "10px", md: "15px" }} color={"#fff"}>Where to buy</Text>
                                                </Box>
                                                <Box w="100%" h="auto" >
                                                    <Text _hover={{ cursor: "pointer", textDecoration: "underline" }} textAlign={"center"} fontWeight={"500"} fontSize={{ base: "10px", md: "12px" }} color={"#4897ef"}>Learn more {">"}</Text>
                                                    <Divider />
                                                </Box>
                                            </Box>
                                            {/* where to buy  */}
                                            {/* learn more */}








                                            {/*pro  weight */}
                                            {/* pro flight time */}
                                            <Box
                                                w="100%" h={{ base: "120px", md: "210px" }}
                                            // border={"1px solid cyan"}
                                            >
                                                <Text mt="10px" textAlign={"center"} fontWeight={"500"} fontSize={{ base: "24px", md: "42px" }} color={"#000"}>{drone.pro_weight}</Text>
                                                <Text mt="-3px" textAlign={"center"} fontWeight={"300"} fontSize={{ base: "11px", md: "16px" }} color={"#000"}>Takeoff Weight</Text>

                                                <Box
                                                    display={"flex"}
                                                    justifyContent={"center"}
                                                    alignContent={"center"}
                                                    alignItems={"center"}
                                                    flexDirection={"column"}
                                                    mt="10px" w="100%" h="auto"
                                                // border="1px solid purple"
                                                >
                                                    <Image w={{ base: "20%", md: "18%" }} h={"auto"} src="https://dji-official-fe.djicdn.com/dps/f9127d27145b69a9c196c225c91e4e32.svg" alt="svg" />
                                                    <Text mt="3px" textAlign={"center"} fontWeight={"300"} fontSize={{ base: "11px", md: "16px" }} color={"#000"}>
                                                        {drone.flight_time}
                                                    </Text>
                                                </Box>
                                            </Box>
                                            {/*pro  weight */}
                                            {/* pro flight time */}









                                            {/* camera resolution */}
                                            <Box
                                                display={"flex"}
                                                justifyContent={"center"}
                                                alignContent={"center"}
                                                alignItems={"center"}
                                                flexDirection={"column"}
                                                mt="10px" w="100%" h="auto"
                                            // border="1px solid red"
                                            >
                                                <Image w={{ base: "20%", md: "18%" }} h="auto" src="https://dji-official-fe.djicdn.com/dps/cd0846ffff48ba7425dcb2a71b58f28c.svg" alt="svg" />
                                                <Text mt="3px" textAlign={"center"} fontWeight={"300"} fontSize={{ base: "11px", md: "16px" }} color={"#000"}>{drone.camera_info}
                                                </Text>
                                            </Box>
                                            {/* camera resolution */}






                                            {/* photo resolution */}
                                            <Text mt="10px" textAlign={"center"} fontWeight={"500"} fontSize={{ base: "24px", md: "42px" }} color={"#000"}>{drone.camera_photo_reso}</Text>
                                            <Text mt="-3px" textAlign={"center"} fontWeight={"300"} fontSize={{ base: "11px", md: "16px" }} color={"#000"}>Max Photo Resolution</Text>
                                            {/* photo resolution */}





                                            {/* transmiter range */}
                                            <Box
                                                display={"flex"}
                                                justifyContent={"center"}
                                                alignContent={"center"}
                                                alignItems={"center"}
                                                flexDirection={"column"}
                                                mt="10px" w="100%" h="auto"
                                            //  border="1px solid red"
                                            >
                                                <Image w={{ base: "20%", md: "18%" }} h="auto" src="https://dji-official-fe.djicdn.com/dps/3d0d77b212222ab4f20219cc95ca6d20.svg" alt="svg" />
                                                <Text mt="3px" textAlign={"center"} fontWeight={"300"} fontSize={{ base: "11px", md: "16px" }} color={"#000"}>
                                                    {drone.tx_range}
                                                </Text>
                                            </Box>
                                            {/* transmiter range */}





                                        </Box>

                                    ))}
                                </Grid>

                            </Box>
                        </TabPanel>

                        <TabPanel w={{ base: "350px", md: "900px" }} h="auto">
                            <Box
                                w={{ base: "100%", md: "100%" }} h="100%"
                            >


                                <Grid templateColumns={{ base: 'repeat(3, 1fr)', md: 'repeat(3, 1fr)' }} gap={3} >
                                    {/* mapping all the Aerial Imagin data from backend here------>>>> */}
                                    {immersive.map((drone, index) => (
                                        <Box w="100%" h="auto" key={index} bg="fff">





                                            {/* product image */}
                                            <Box w={{ base: "90%", md: "90%" }} m="auto" h={{ base: "16vh", md: "30vh" }} >
                                                <Image src={drone.img_url} alt="" />
                                            </Box>
                                            {/* product image */}





                                            <Text textAlign={"center"} fontSize={{ base: "10px", md: "12px" }} color={"#d0021b"}>Flagship</Text>





                                            {/* pro name */}
                                            <Text textAlign={"center"} fontWeight={"350"} fontSize={{ base: "16px", md: "25px" }} color={"#3a3738"}>{drone.pro_title}</Text>
                                            {/* pro name */}




                                            {/* where to buy  */}
                                            {/* learn more */}
                                            <Box
                                                display={"flex"}
                                                justifyContent={"space-evenly"}
                                                alignContent={"center"}
                                                alignItems={"center"}
                                                w="100%" h="100px"
                                                flexDirection={"column"}
                                            // border="1px solid red"
                                            >

                                                <Box
                                                    display={"flex"}
                                                    justifyContent={"center"}
                                                    alignContent={"center"}
                                                    alignItems={"center"}
                                                    _hover={{ cursor: "pointer", bg: "#4897ef" }}
                                                    w={{ base: "50%", md: "40%" }}
                                                    height={{ base: "30px", md: "30px" }}
                                                    borderTopRightRadius={"17px"}
                                                    borderTopLeftRadius={"17px"}
                                                    borderBottomRightRadius={"17px"}
                                                    borderBottomLeftRadius={"17px"}
                                                    bg="#2484ef">

                                                    <Text textAlign={"center"} fontWeight={"400"} fontSize={{ base: "10px", md: "15px" }} color={"#fff"}>Where to buy</Text>
                                                </Box>
                                                <Box w="100%" h="auto" >
                                                    <Text _hover={{ cursor: "pointer", textDecoration: "underline" }} textAlign={"center"} fontWeight={"500"} fontSize={{ base: "10px", md: "12px" }} color={"#4897ef"}>Learn more {">"}</Text>
                                                    <Divider />
                                                </Box>
                                            </Box>
                                            {/* where to buy  */}
                                            {/* learn more */}








                                            {/*pro  weight */}
                                            {/* pro flight time */}
                                            <Box
                                                w="100%" h={{ base: "120px", md: "210px" }}
                                            // border={"1px solid cyan"}
                                            >
                                                <Text mt="10px" textAlign={"center"} fontWeight={"500"} fontSize={{ base: "24px", md: "42px" }} color={"#000"}>{drone.pro_weight}</Text>
                                                <Text mt="-3px" textAlign={"center"} fontWeight={"300"} fontSize={{ base: "11px", md: "16px" }} color={"#000"}>Takeoff Weight</Text>

                                                <Box
                                                    display={"flex"}
                                                    justifyContent={"center"}
                                                    alignContent={"center"}
                                                    alignItems={"center"}
                                                    flexDirection={"column"}
                                                    mt="10px" w="100%" h="auto"
                                                // border="1px solid purple"
                                                >
                                                    <Image w={{ base: "20%", md: "18%" }} h={"auto"} src="https://dji-official-fe.djicdn.com/dps/f9127d27145b69a9c196c225c91e4e32.svg" alt="svg" />
                                                    <Text mt="3px" textAlign={"center"} fontWeight={"300"} fontSize={{ base: "11px", md: "16px" }} color={"#000"}>
                                                        {drone.flight_time}
                                                    </Text>
                                                </Box>
                                            </Box>
                                            {/*pro  weight */}
                                            {/* pro flight time */}









                                            {/* camera resolution */}
                                            <Box
                                                display={"flex"}
                                                justifyContent={"center"}
                                                alignContent={"center"}
                                                alignItems={"center"}
                                                flexDirection={"column"}
                                                mt="10px" w="100%" h="auto"
                                            // border="1px solid red"
                                            >
                                                <Image w={{ base: "20%", md: "18%" }} h="auto" src="https://dji-official-fe.djicdn.com/dps/cd0846ffff48ba7425dcb2a71b58f28c.svg" alt="svg" />
                                                <Text mt="3px" textAlign={"center"} fontWeight={"300"} fontSize={{ base: "11px", md: "16px" }} color={"#000"}>
                                                    {drone.camera_info}
                                                </Text>
                                            </Box>
                                            {/* camera resolution */}






                                            {/* camera angle*/}
                                            <Text mt="10px" textAlign={"center"} fontWeight={"500"} fontSize={{ base: "24px", md: "42px" }} color={"#000"}>{drone.camera_angle}</Text>
                                            <Text mt="-3px" textAlign={"center"} fontWeight={"300"} fontSize={{ base: "11px", md: "16px" }} color={"#000"}>Ultra-Wide FOV</Text>
                                            {/* photo resolution */}





                                            {/* transmiter range */}
                                            <Box
                                                display={"flex"}
                                                justifyContent={"center"}
                                                alignContent={"center"}
                                                alignItems={"center"}
                                                flexDirection={"column"}
                                                mt="10px" w="100%" h="auto"
                                            //  border="1px solid red"
                                            >
                                                <Text mt="3px" textAlign={"center"} fontWeight={"300"} fontSize={{ base: "11px", md: "16px" }} color={"#000"}>
                                                    {drone.discription}
                                                </Text>
                                            </Box>
                                            {/* transmiter range */}





                                        </Box>
                                    ))}
                                </Grid>


                            </Box>

                        </TabPanel>
                    </TabPanels>

                </Tabs>

            </Box>


        </>
    )
}

export default Aerial_Immersive


