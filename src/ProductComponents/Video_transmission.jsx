import React from 'react'
import { Box, Image, Text, useBreakpointValue, Grid } from '@chakra-ui/react'





function Video_transmission() {
    const ImageData = [
        {
            image: "https://dji-official-fe.djicdn.com/dps/a9da149914b27a8bc621d4c12c06ce37.jpg",
            text_svg1: "www1.djicdn.com/cms/uploads/79944970c7d71630e6a98f34d1764670.svg",
            objectPosition: "50% 50%",

        },
        {
            image: "https://dji-official-fe.djicdn.com/dps/120dd741571b956ab541fc3fc72fd876.jpg",
            text_svg2: "https://www1.djicdn.com/cms/uploads/282d6b77b8dc608b6b6f7a344e7b6a91.svg",
            objectPosition: "50% 50%",

        },

    ];
    const textStyle1 = {
        position: "absolute",
        top: useBreakpointValue({ base: "5vh", md: "25vh", lg: "30vh" }),
        left: "50%",
        fontWeight: "500",
        transform: "translateX(-50%)",
        color: "#ededed",
        fontSize: useBreakpointValue({ base: "17px", md: "16px", lg: "28px" }),
        width: "100%"
    };
    const textStyle2 = {
        position: "absolute",
        top: useBreakpointValue({ base: "9vh", md: "30vh", lg: "35vh" }),
        left: "50%",
        fontWeight: "500",
        transform: "translateX(-50%)",
        color: "white",
        fontSize: useBreakpointValue({ base: "28px", md: "58px", lg: "70px" }),
        width: "100%"
    };
    const textStyle3 = {
        position: "absolute",
        top: useBreakpointValue({ base: "15vh", md: "42vh", lg: "47vh" }),
        left: "50%",
        fontWeight: "500",
        transform: "translateX(-50%)",
        color: "white",
        fontSize: useBreakpointValue({ base: "28px", md: "58px", lg: "70px" }),
        width: "100%"
    };
    return (
        <>
            <Box w="100%" h="auto" bg="#fff" position="relative">

                <Box w="100%" h={{ base: "50vh", md: "150vh" }} >
                    <Text style={textStyle1} textAlign="center">
                        Broad ecosystem
                    </Text>
                    <Text style={textStyle2} textAlign="center">
                        O3 Pro Video Transmission
                    </Text>
                    <Text style={textStyle3} textAlign="center">
                        & Control System
                    </Text>
                    <Image w={{ base: "100%", md: "100%" }} m="auto" h={{ base: "100%", md: "100%" }} src="https://dji-official-fe.djicdn.com/dps/8187d31cd196256f588e3f4deafe093a.jpg" alt="transmiter-image" />
                </Box>


                {/* grid image part here */}

                <Box position="relative" w="100%" h="auto" >
                    <Grid templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}>

                        {ImageData.map((item, index) => (
                            <Box
                                key={index}
                                w={{ base: "100%", md: "98%" }}
                                m={{ base: "0%", md: "auto", lg: "auto" }}
                                mt={{ base: "2%", md: "1%", lg: "1%" }}
                                mb={{ base: "1%", md: "1%", lg: "1%" }}
                                h={{ base: "65vh", md: "80vh" }}
                                overflow="hidden"
                            >
                                <Image
                                    w="100%"
                                    h="100%"
                                    objectFit="cover"
                                    objectPosition={item.objectPosition}
                                    src={item.image}
                                    alt={`Image ${index + 1}`}
                                />

                            </Box>
                        ))}


                    </Grid>
                </Box>

                {/* grid image part ends here */}



                <Box h={{ base: "5vh", md: "10vh" }} w="100%"></Box> {/* space box added */}

                <Text mb={{ base: "-10px", md: "-25px" }} fontSize={{ base: "30px", md: "60px" }} textAlign={"center"} fontWeight={"500"} bgGradient="linear(to-l,rgb(255,154,10),rgb(255,97,4))" bgClip="text">Independent</Text>
                <Text mb={{ base: "-10px", md: "-25px" }} fontSize={{ base: "30px", md: "60px" }} textAlign={"center"} fontWeight={"500"} bgGradient="linear(to-l,rgb(255,154,10),rgb(255,97,4))" bgClip="text">connections for dual</Text>
                <Text fontSize={{ base: "30px", md: "60px" }} textAlign={"center"} fontWeight={"500"} bgGradient="linear(to-l,rgb(255,154,10),rgb(255,97,4))" bgClip="text">control [18]</Text>
                <Text fontSize={{ base: "15px", md: "22.5px" }} m="auto" w={{ base: "95%", md: "60%" }} fontWeight={"500"} textAlign={"center"} textColor="grey">
                    control experience is a significant upgrade over its predecessor.
                    Two transmitters can each receive live video and control the drone, so pilots and
                    gimbal operators in the field can work in separate locations. This eliminates the
                    need to link and control the main and sub transmitters via WiFi.

                </Text>
                <Text fontSize={{ base: "15px", md: "22.5px" }} m="auto" w={{ base: "95%", md: "60%" }} fontWeight={"500"} textAlign={"center"} textColor="grey">
                    Additionally, in the unlikely event that the pilot is unable to receive the aircraft's signals, the gimbal operator can
                    take over control of the aircraft and safely execute RTH or land directly.

                </Text>

                <Box h={{ base: "5vh", md: "10vh" }} w="100%"></Box> {/* space box added */}

                <Box mt="20px" w="100%" h={{ base: "30vh", md: "100vh" }} >
                    <Image w={{ base: "100%", md: "80%" }} m="auto" h={{ base: "100%", md: "87%" }} src="https://dji-official-fe.djicdn.com/dps/a0228786d6c83fda31d80a1edcc39933.jpg" alt="RTF" />
                </Box>







            </Box>

        </>
    )
}

export default Video_transmission


// images :- https://dji-official-fe.djicdn.com/dps/60cbc17ddfe6f8857365dc1b5d2677da.jpg

