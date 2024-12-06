import React from 'react'
import { Box, Image, Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs, Text, useBreakpointValue, Button } from '@chakra-ui/react';
function Operational_system() {

    const videoStyles1 = {
        width: useBreakpointValue({ base: "100%", md: "100%", lg: "100%" }),
        height: useBreakpointValue({ base: "100%", md: "100%", lg: "90vh" }),
        objectFit: 'cover',
        margin: "auto"
    }
    const videoStyles2 = {
        width: useBreakpointValue({ base: "100%", md: "100%", lg: "100%" }),
        height: useBreakpointValue({ base: "100%", md: "100%", lg: "120vh" }),
        objectFit: 'cover',
        margin: "auto"
    }
    return (
        <>
            <Box h={{ base: "5vh", md: "10vh" }} w="100%"></Box> {/* space box added */}


            {/* Operational_system container starting here---------------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
            <Box w="100%" h="auto" bg="#000">
                <Box w="100%" h={{ base: "40vh", md: "120vh" }} >
                    <Image w="100%" h="100%" src="https://dji-official-fe.djicdn.com/dps/119eaa3b589be9feac21b9612839a53c.jpg" alt="" />
                </Box>


                <Box h={{ base: "5vh", md: "10vh" }} w="100%"></Box> {/* space box added */}

                <Box w={{ base: "100%", md: "100%" }} h={"auto"}>
                    <Tabs position="relative" variant="unstyled">
                        <TabPanels>
                            <TabPanel>
                                <Image w="100%" h="100%" src="https://dji-official-fe.djicdn.com/dps/e7f9d3b87412ab8580185d186c6c5178.jpg" alt="" />
                            </TabPanel>
                            <TabPanel>
                                <Image w="100%" h="100%" src="https://dji-official-fe.djicdn.com/dps/9810bdfab51130aba3ef110c398488f7.jpg" alt="" />
                            </TabPanel>
                            <TabPanel>
                                <Image w="100%" h="100%" src="https://dji-official-fe.djicdn.com/dps/5bbd54e12e038a2bdae21bee4ded876c.jpg" alt="" />
                            </TabPanel>
                        </TabPanels>
                        <Box w="100%" h="auto" display={"flex"} justifyContent={"center"} alignContent={"center"} alignItems={"center"}>
                            <TabList w="auto" h={"auto"} >
                                <Tab fontSize={{ base: "12px", md: "16px" }} style={{ color: "#dadada" }}>
                                    dual control

                                </Tab>
                                <Tab fontSize={{ base: "12px", md: "16px" }} style={{ color: "#dadada" }}>triple control I

                                </Tab>
                                <Tab fontSize={{ base: "12px", md: "16px" }} style={{ color: "#dadada" }}>triple control II</Tab>
                            </TabList>

                        </Box>
                        <TabIndicator
                            mt="-1.5px"
                            height="2px"
                            bg="rgb(144, 164, 174)"
                            borderRadius="0.5px"
                        />

                    </Tabs>
                </Box>





                {/* dual battery system part container starting from here ...................................>>>>>>>>>>>>>>>>>>>>>> */}




                <Box h={{ base: "5vh", md: "10vh" }} w="100%"></Box> {/* space box added */}
                <Box w={{ base: "95%", md: "90%", lg: "80%" }} display={"flex"} flexDirection={{ base: "column", md: "column", lg: "row" }} m="auto" h="100vh" >




                    <Box w={{ base: "100%", md: "50%" }} h="100%" >
                        <video
                            style={videoStyles1}
                            loop

                            autoPlay={true} // Set to true if you want videos to autoplay
                            muted // Adding this video to start muted
                        >
                            <source src={"https://dji-official-fe.djicdn.com/reactor/assets/_next/static/videos/a7f21224-9441-4730-9007-6af24bca75e5.webm"} />
                            Your browser does not support the video tag.
                        </video>
                    </Box>
                    <Box w={{ base: "100%", md: "50%" }} h="100%" display={"flex"} alignContent={"center"}>
                        <Box w="100%" h={{ base: "100%", md: "85%" }} m="auto" >

                            <Text mb={{ base: "-10px", md: "-25px" }} fontSize={{ base: "30px", md: "60px" }} textAlign={"left"} fontWeight={"500"} bgGradient="linear(to-l,rgb(255,154,10),rgb(255,97,4))" bgClip="text">dual</Text>
                            <Text fontSize={{ base: "30px", md: "60px" }} textAlign={"left"} fontWeight={"500"} bgGradient="linear(to-l,rgb(255,154,10),rgb(255,97,4))" bgClip="text">battery system</Text>
                            <Text fontSize={{ base: "15px", md: "22.5px" }} fontWeight={"500"} textAlign={"left"} textColor="grey">
                                Inspire 3 features the new TB51 dual battery system and adopts the latest battery material
                                technology for superior stability and performance.
                                TB51 batteries are smaller, lighter, have a more streamlined construction, and support higher
                                voltage than TB50 batteries. The battery allows for up to 28 minutes of flight time
                                [2] , and the battery removal mechanism has been redesigned and is hot-swappable to
                                facilitate continuous flight.
                            </Text>



                        </Box>
                    </Box>

                </Box>



                {/* dual battery system part container ending here ...................................>>>>>>>>>>>>>>>>>>>>>> */}


                {/* All-new battery charging hub part starting from here---------------->>>>>>>>>>>> */}

                <Box h={{ base: "5vh", md: "10vh" }} w="100%"></Box> {/* space box added */}
                <Box w={{ base: "95%", md: "90%", lg: "80%" }} display={"flex"} flexDirection={{ base: "column", md: "column", lg: "row" }} m="auto" h="100vh" >




                    <Box w={{ base: "100%", md: "50%" }} h="100%" display={"flex"} alignContent={"center"}>
                        <Box w="100%" h={{ base: "100%", md: "85%" }} m="auto" >

                            <Text mb={{ base: "-10px", md: "-25px" }} fontSize={{ base: "30px", md: "60px" }} textAlign={"left"} fontWeight={"500"} bgGradient="linear(to-l,rgb(255,154,10),rgb(255,97,4))" bgClip="text">All-new </Text>
                            <Text fontSize={{ base: "30px", md: "60px" }} textAlign={"left"} fontWeight={"500"} bgGradient="linear(to-l,rgb(255,154,10),rgb(255,97,4))" bgClip="text">battery charging</Text>
                            <Text fontSize={{ base: "30px", md: "60px" }} textAlign={"left"} fontWeight={"500"} bgGradient="linear(to-l,rgb(0,0,0),rgb(0,0,0))" bgClip="text">hub</Text>
                            <Text fontSize={{ base: "15px", md: "22.5px" }} fontWeight={"500"} textAlign={"left"} textColor="grey">
                                The battery charging hub has been redesigned to be foldable and compact, while also offering
                                superior charging efficiency. You can set 8 batteries. In fast charging mode, you can charge
                                two batteries simultaneously from 0% to 90% in just 35 minutes [21] and fully charge 8 batteries
                                in just 160 minutes. [21] You can charge the RC Plus transmitter using the included 65W USB-C port.
                            </Text>



                        </Box>
                    </Box>

                    <Box w={{ base: "100%", md: "50%" }} h="100%" >
                        <video
                            style={videoStyles1}
                            loop

                            autoPlay={true} // Set to true if you want videos to autoplay
                            muted // Adding this video to start muted
                        >
                            <source src={"https://dji-official-fe.djicdn.com/reactor/assets/_next/static/videos/63d0f737-ca75-46bf-aca3-6f87f3a0f197.webm"} />
                            Your browser does not support the video tag.
                        </video>
                    </Box>

                </Box>
                {/* All-new battery charging hub part ending here---------------->>>>>>>>>>>> */}




                {/* DJI PROSSD 1TB included part starting from here---------------------->>>>>>>>>>>>> */}



                <Box h={{ base: "5vh", md: "10vh" }} w="100%"></Box> {/* space box added */}
                <Box w={{ base: "95%", md: "90%", lg: "80%" }} display={"flex"} flexDirection={{ base: "column", md: "column", lg: "row" }} m="auto" h="100vh" >




                    <Box w={{ base: "100%", md: "50%" }} h="100%" display={"flex"} alignContent={"center"}>
                        <Box w="100%" h={{ base: "100%", md: "85%" }} m="auto" >

                            <Text mb={{ base: "-10px", md: "-25px" }} fontSize={{ base: "30px", md: "60px" }} textAlign={"left"} fontWeight={"500"} bgGradient="linear(to-l,rgb(255,154,10),rgb(255,97,4))" bgClip="text">DJI PROSSD</Text>
                            <Text fontSize={{ base: "30px", md: "60px" }} textAlign={"left"} fontWeight={"500"} bgGradient="linear(to-l,rgb(255,154,10),rgb(255,97,4))" bgClip="text">1TB included</Text>
                            <Text fontSize={{ base: "15px", md: "22.5px" }} fontWeight={"500"} textAlign={"left"} textColor="grey">
                                The included DJI PROSSD 1TB supports a maximum read speed of 900 MBps [22] , and you can use the included USB-C to USB-C cable to read footage directly to your computer, without the need for a card reader.
                            </Text>



                        </Box>
                    </Box>

                    <Box w={{ base: "100%", md: "50%" }} h="100%" >
                        <video
                            style={videoStyles1}
                            loop

                            autoPlay={true} // Set to true if you want videos to autoplay
                            muted // Adding this video to start muted
                        >
                            <source src={"https://dji-official-fe.djicdn.com/reactor/assets/_next/static/videos/d1bccedf-4429-49a5-b9e8-b9df0562bce3.webm"} />
                            Your browser does not support the video tag.
                        </video>
                    </Box>

                </Box>

                {/* DJI PROSSD 1TB included part starting from here---------------------->>>>>>>>>>>>> */}


                {/* Storage & movement part starting from here---------------------->>>>>>>>>>>>> */}

                <Box h={{ base: "5vh", md: "20vh" }} w="100%"></Box> {/* space box added */}
                <Text fontSize={{ base: "30px", md: "60px" }} textAlign={"center"} fontWeight={"500"} bgGradient="linear(to-l,rgb(255,154,10),rgb(255,97,4))" bgClip="text">Storage & movement</Text>
                <Text fontSize={{ base: "15px", md: "22.5px" }} m="auto" w={{ base: "95%", md: "60%" }} fontWeight={"500"} textAlign={"center"} textColor="grey">
                    The newly designed trolley case has one telescoping handle, two side handles, and wheels that can rotate
                    360°, making it easy to move and transport between sites. Additionally, it is equipped with two dial
                    locks that allow you to set a PIN code, improving safety. The exquisitely designed trolley case contains
                    1 x aircraft, 1 x X9-8K Air gimbal camera, 2 x RC Plus transmitters, 4 x lenses, 12 x batteries, 2 x
                    battery charging hubs, 3 sets of propellers, etc. You can store items. Newly designed collapsible
                    quick-release propellers are easily stored and do not need to be reinstalled before each flight.
                </Text>

                <Box mt="20px" w="100%" h={{ base: "45vh", md: "120vh" }} >
                    <video
                        style={videoStyles2}
                        loop

                        autoPlay={true} // Set to true if you want videos to autoplay
                        muted // Adding this video to start muted
                    >
                        <source src={"https://dji-official-fe.djicdn.com/reactor/assets/_next/static/videos/69dd4f0d-f592-49a4-b621-a8b62149a27c.webm"} />
                        Your browser does not support the video tag.
                    </video>
                </Box>

                {/* Storage & movement part ending here---------------------->>>>>>>>>>>>> */}


            </Box>



            {/* DJI inspire 3 pricing or bottom part starting from here------------------>>>>>>>>>>>>>>> */}



            <Box h={{ base: "5vh", md: "10vh" }} w="100%"></Box> {/* space box added */}
            <Box w="100%" h={{ base: "auto", md: "auto" }} bg="#fff">
                <Text textAlign={"center"} color="#000" fontWeight={"500"} fontSize={{ base: "4xl", md: "5xl" }}>DJI Inspire 3

                </Text>
                <Text textAlign={"center"} color="#000" fontWeight={"500"} fontSize={{ base: "xl", md: "xl" }}>See the unknown world in your eyes

                </Text>

                <Box w={{ base: "90%", md: "40%" }} m="auto" h={{ base: "30vh", md: "50vh" }} >
                    <Image w="100%" h="100%" src="https://dji-official-fe.djicdn.com/cms/uploads/afa366210665c77663733585d1e95aee.png" alt="inspire3" />
                </Box>
                <Text textAlign={"center"} bgGradient="linear(to-l,rgb(255,154,10),rgb(255,97,4))" bgClip="text" fontWeight={"500"} fontSize={{ base: "md", md: "2xl" }}>From 1,769,900  yen

                </Text>
                <Box w="100%" display={"flex"} justifyContent={"center"} alignContent={"center"} alignItems={"center"}>
                    <Button  _hover={{textColor:"#fff",bgColor:"#2196F3",}} transition={"0.5s ease"} borderRadius={"0px"} bg="#212121" textAlign={"center"} textColor={"#fff"} fontWeight={"100"} fontSize={{ base: "xl", md: "xl" }}>Buy now

                    </Button>
                </Box>

            </Box>
            <Box h={{ base: "5vh", md: "10vh" }} w="100%"></Box> {/* space box added */}

        </>
    )
}

export default Operational_system







// final product :- 
// Mavic 3 pro :- https://dji-official-fe.djicdn.com/cms/uploads/7a47e78d9544ac4d7f83a9f840c50b67.png