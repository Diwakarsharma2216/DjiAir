import React, { useState, useEffect } from 'react';
import { Box, Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs, Text, useBreakpointValue, Image } from '@chakra-ui/react';
import { Link as ScrollLink, Element } from 'react-scroll';
import { motion } from 'framer-motion';





const ScrollableBox = ({ id, textContent, threshold }) => {
    const [showBox, setShowBox] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setShowBox(scrollPosition > threshold);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [threshold]);

    const renderContent = () => {
        if (id === "box1") {
            return (
                // Content for box1
                <Box height="60vh" bg="#000" >
                    <Text w={{ base: "95%", md: "70%" }} m="auto" fontSize={{ base: "23px", md: "30px" }} textAlign={"center"} bgGradient="linear(to-l,rgb(172,172,172),rgb(226,226,226), rgb(122,122,122))" bgClip="text">
                        {textContent}
                    </Text>
                </Box>
            );
        } else if (id === "box2") {
            return (
                // Content for box2
                <Box height={{ base: "70vh", md: "100vh" }} bg="#000" >
                    <Text w={{ base: "95%", md: "70%" }} m="auto" fontSize={{ base: "14px", md: "23px" }} fontWeight={"500"} textAlign={"center"} bgGradient="linear(to-l,rgb(172,172,172),rgb(226,226,226), rgb(122,122,122))" bgClip="text">
                        {textContent}
                    </Text>
                    <Text mb={{ base: "-10px", md: "-25px" }} w={{ base: "95%", md: "70%" }} m="auto" fontSize={{ base: "45px", md: "75px" }} fontWeight={"500"} textAlign={"center"} bgGradient="linear(to-l,rgb(172,172,172),rgb(226,226,226), rgb(122,122,122))" bgClip="text">
                        Sleek
                    </Text>
                    <Text w={{ base: "95%", md: "70%" }} m="auto" fontSize={{ base: "45px", md: "75px" }} fontWeight={"500"} textAlign={"center"} bgGradient="linear(to-l,rgb(172,172,172),rgb(226,226,226), rgb(122,122,122))" bgClip="text">
                        one-piece design
                    </Text>
                    <Text w={{ base: "95%", md: "60%" }} m="auto" fontSize={{ base: "23px", md: "35px" }} textAlign={"center"} bgGradient="linear(to-l,rgb(255,154,10),rgb(255,97,4))" bgClip="text">The Inspire 3 professional camera drone features a new sleek fuselage design that takes aerodynamics into consideration and reduces air resistance.
                    </Text>
                </Box>
            );
        } else if (id === "box3") {
            const videoStyles = {
                width: '100%',
                height: useBreakpointValue({ base: "30vh", md: "100vh", lg: "100vh" }),
                objectFit: 'cover',
            }
            return (
                // Content for box3
                <>
                    <Box height={{ base: "50vh", md: "100vh" }} bg="#000" >
                        <video
                            style={videoStyles}
                            loop

                            autoPlay={true} // Set to true if you want videos to autoplay
                            muted // Adding this video to start muted
                        >
                            <source src={"https://dji-official-fe.djicdn.com/reactor/assets/_next/static/videos/6e3524b8-09a1-4257-98f6-13471170d4dc.mp4"} />
                            Your browser does not support the video tag.
                        </video>
                    </Box>
                </>
            );
        }
    };


    return (
        <Element name={id}>
            <Box bg="#000" >
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: showBox ? 1 : 0, y: showBox ? 0 : 20 }}
                    transition={{ duration: 0.8 }}
                    p={8}
                    bg="gray.800"
                    borderRadius="lg"
                    boxShadow="lg"
                >

                    {renderContent()}
                </motion.div>
            </Box>
        </Element>
    );
};

function IndustrialDesign() {
    const textContents = {
        box1: useBreakpointValue({
            base: "At the peak of aerial cinematography, DJI inspire 3 offers unprecedented, camera language, and creative freedom. This all-in-one 8k camera drone empowers professional-level filmmakers to fully maximize the potential of any short and master the unseen.", // For mobile devices
            md: "Nowadays, video production using aerial photography is gaining popularity, and DJI Inspire 3 boasts high work efficiency, enabling unprecedented video expression and a high degree of creativity.", // For tablets
            lg: "Nowadays, video production using aerial photography is gaining popularity, and DJI Inspire 3 boasts high work efficiency, enabling unprecedented video expression and a high degree of creativity.This all-in-one 8K camera drone allows professional filmmakers to unleash their full potential in every shoot, bringing the unknown into sharp focus.", // For desktops
        }),
        box2: useBreakpointValue({
            base: "Power and performance that defies common sense", // For mobile devices
            md: "Power and performance that defies common sense", // For tablets
            lg: "Power and performance that defies common sense", // For desktops
        }),
        box3: useBreakpointValue({
            base: "At the peak of aerial cinematography, DJI inspire 3 offers unprecedented, camera language, and creative freedom. This all-in-one 8k camera drone empowers professional-level filmmakers to fully maximize the potential of any short and master the unseen.", // For mobile devices
            md: "Nowadays, video production using aerial photography is gaining popularity, and DJI Inspire 3 boasts high work efficiency, enabling unprecedented video expression and a high degree of creativity.", // For tablets
            lg: "Nowadays, video production using aerial photography is gaining popularity, and DJI Inspire 3 boasts high work efficiency, enabling unprecedented video expression and a high degree of creativity.This all-in-one 8K camera drone allows professional filmmakers to unleash their full potential in every shoot, bringing the unknown into sharp focus.", // For desktops
        }),

        // Add more 😉
    };
    const thresholds = {
        box1: 1000,
        box2: 1600,
        box3: 2150,

        // Add more thresholds as needed
    };
    const videoStyles = {
        width: useBreakpointValue({ base: "100%", md: "80%", lg: "80%" }),
        height: useBreakpointValue({ base: "30vh", md: "80vh", lg: "80vh" }),
        objectFit: 'cover',
        margin: "auto"
    }
    return (
        <>
            <ScrollableBox id="box1" textContent={textContents.box1} threshold={thresholds.box1} />
            <ScrollableBox id="box2" textContent={textContents.box2} threshold={thresholds.box2} />
            <ScrollableBox id="box3" textContent={textContents.box3} threshold={thresholds.box3} />
            <ScrollableBox id="box4" textContent={textContents.box3} threshold={thresholds.box4} />
            <ScrollableBox id="box5" textContent={textContents.box3} threshold={thresholds.box5} />

            {/* Tabs section starting from here 15jan 2k23------------------------------------------------------------------>>>>>>>>>>>>>>>>>>>>>> */}

            <Box w="100%" h={{ base: "auto", md: "auto" }} bg="#000" >
                <Text w={{ base: "95%", md: "65%" }} m="auto" fontSize={{ base: "16px", md: "21px" }} fontWeight={"400"} textAlign={{ base: "center", md: "center" }} textColor={"#dadade"}>
                    The Inspire 3, which inherited the modified design of the fuselage frame from the Inspire series,
                    has a new design that supports 360° panning and tilt boost. When the landing gear is lowered, the
                    gimbal can point the camera up to 80 degrees and shoot without any reflections such as the aircraft
                    frame . This allows you to take innovative shots like never before.
                </Text>
                <Box w={{ base: "100%", md: "100%" }} h={{ base: "50vh", md: "100vh" }} >

                    <Tabs position="relative" variant="unstyled">
                        <TabPanels>
                            <TabPanel>
                                <video
                                    style={videoStyles}
                                    loop

                                    autoPlay={true} // Set to true if you want videos to autoplay
                                    muted // Adding this video to start muted
                                >
                                    <source src={"https://dji-official-fe.djicdn.com/reactor/assets/_next/static/videos/9d5306d1-3a22-4258-98a0-37f9eb504799.mp4"} />
                                    Your browser does not support the video tag.
                                </video>
                            </TabPanel>
                            <TabPanel>
                                <video
                                    style={videoStyles}
                                    loop

                                    autoPlay={true} // Set to true if you want videos to autoplay
                                    muted // Adding this video to start muted
                                >
                                    <source src={"https://dji-official-fe.djicdn.com/reactor/assets/_next/static/videos/3fd75726-05d4-4e58-9da6-e89e4ff31127.mp4"} />
                                    Your browser does not support the video tag.
                                </video>
                            </TabPanel>
                            <TabPanel>
                                <video
                                    style={videoStyles}
                                    loop

                                    autoPlay={true} // Set to true if you want videos to autoplay
                                    muted // Adding this video to start muted
                                >
                                    <source src={"https://dji-official-fe.djicdn.com/reactor/assets/_next/static/videos/c80af7a6-2d47-4294-874f-59dd1c8c3c46.mp4"} />
                                    Your browser does not support the video tag.
                                </video>
                            </TabPanel>
                        </TabPanels>
                        <Box w="100%" h="auto" display={"flex"} justifyContent={"center"} alignContent={"center"} alignItems={"center"}>
                            <TabList w="auto" h={"auto"} style={{ color: "#dadada" }}>
                                <Tab>tilt boost
                                </Tab>
                                <Tab style={{ color: "#dadada" }}>360° pan
                                </Tab>
                                <Tab style={{ color: "#dadada" }}>travel mode</Tab>
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

            </Box>



            {/* Tabs section ending here 15jan 2k23------------------------------------------------------------------>>>>>>>>>>>>>>>>>>>>>> */}

            {/* https://dji-official-fe.djicdn.com/reactor/assets/_next/static/videos/f6b4f76e-d2ee-4ad2-8128-c6748b327517.mp4 */}


            <Box w="100%" bg="#000" h="auto" >
                <video
                    style={videoStyles}
                    loop

                    autoPlay={true} // Set to true if you want videos to autoplay
                    muted // Adding this video to start muted
                >
                    <source src={"https://dji-official-fe.djicdn.com/reactor/assets/_next/static/videos/f6b4f76e-d2ee-4ad2-8128-c6748b327517.mp4"} />
                    Your browser does not support the video tag.
                </video>

                <Box  m="auto" w={{base:"95%",md:"55%",lg:"45%"}}>
                    <Text textAlign={"center"} fontSize={{base:"16px",md:"22px"}} mt="30px" mb="50px" color="#dadade">From the exterior design to the internal structure of the aircraft, every detail of the Inspire 3 has been carefully thought out and optimized.</Text>
                </Box>

                <Image w={{base:"98%",md:"95%",lg:"95%"}} m="auto" height={{base:"40vh",md:"100vh",lg:"100vh"}} src="https://dji-official-fe.djicdn.com/dps/7b2ac164df5d05d3128fd1f6faca6798.jpg" alt="" />


            </Box>




        </>
    );
}

export default IndustrialDesign;










