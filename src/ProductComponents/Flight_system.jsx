import React from 'react'
import { Box, Grid, useBreakpointValue, Text, Image } from '@chakra-ui/react'
function Flight_system() {
    const videoStyles1 = {
        width: useBreakpointValue({ base: "100%", md: "100%", lg: "100%" }),
        height: useBreakpointValue({ base: "100%", md: "100%", lg: "100vh" }),
        objectFit: 'cover',
        margin: "auto"
    }
    const videoStyles2 = {
        width: useBreakpointValue({ base: "100%", md: "100%", lg: "100%" }),
        height: useBreakpointValue({ base: "40vh", md: "90vh", lg: "90vh" }),
        objectFit: 'cover',
        margin: "auto"
    }
    return (
        <>



            <Box w="100%" h="auto" bg="#fff">
                <Box w="100%" h={{ base: "12vh", md: "15vh", lg: "20vh" }}></Box>
                {/* Boasts cm-level accuracy container here 16jan 2k24---------------------------------------------> */}
                <Box w={{ base: "95%", md: "90%", lg: "80%" }} display={"flex"} flexDirection={{ base: "column", md: "column", lg: "row" }} m="auto" h="100vh" >

                    <Box w={{ base: "100%", md: "50%" }} h="100%" display={"flex"} alignContent={"center"}>
                        <Box w="100%" h={{ base: "100%", md: "85%" }} m="auto" >

                            <Text mb={{ base: "-10px", md: "-25px" }} fontSize={{ base: "30px", md: "60px" }} textAlign={"left"} fontWeight={"500"} bgGradient="linear(to-l,rgb(255,154,10),rgb(255,97,4))" bgClip="text">Boasts cm-level </Text>
                            <Text fontSize={{ base: "30px", md: "60px" }} textAlign={"left"} fontWeight={"500"} bgGradient="linear(to-l,rgb(255,154,10),rgb(255,97,4))" bgClip="text">accuracy</Text>
                            <Text fontSize={{ base: "30px", md: "60px" }} textAlign={"left"} fontWeight={"500"} bgGradient="linear(to-l,rgb(0,0,0),rgb(0,0,0))" bgClip="text">RTK positioning</Text>
                            <Text fontSize={{ base: "15px", md: "22.5px" }} fontWeight={"500"} textAlign={"left"} textColor="grey">
                                <Text as="span">Inspire 3{" "}</Text>Inspire 3 is equipped with RTK high-precision positioning technology used in the fields
                                of architecture and surveying, and boasts cm-level accuracy . [4] Compared with traditional
                                meter-level positioning using Global Navigation Satellite System (GNSS), positioning using
                                RTK not only increases flight stability but also enables more accurate flight route planning,
                                Greatly improves shooting efficiency.</Text>



                        </Box>
                    </Box>


                    <Box w={{ base: "100%", md: "50%" }} h="100%" >
                        <video
                            style={videoStyles1}
                            loop

                            autoPlay={true} // Set to true if you want videos to autoplay
                            muted // Adding this video to start muted
                        >
                            <source src={"https://dji-official-fe.djicdn.com/reactor/assets/_next/static/videos/af0579e9-06c6-461d-b6f9-5ddaab05da06.mp4"} />
                            Your browser does not support the video tag.
                        </video>
                    </Box>

                </Box>
                {/* Boasts cm-level accuracy container ends here---------------------------------------------> */}








                {/* D-RTK 2 mobile station [6] video part starting here 16jan 2k24 ------------------------------------------------>*/}
                <Box h={{ base: "5vh", md: "20vh" }} w="100%"></Box> {/* space box added */}
                <Box m="auto" w={{ base: "95%", md: "80%" }} h={{ base: "40vh", md: "90vh" }} >
                    <video
                        style={videoStyles2}
                        loop

                        autoPlay={true} // Set to true if you want videos to autoplay
                        muted // Adding this video to start muted
                    >
                        <source src={"https://dji-official-fe.djicdn.com/reactor/assets/_next/static/videos/8496e38e-b90a-4656-9b87-05cbc5c5fabd.webm"} />
                        Your browser does not support the video tag.
                    </video>
                </Box>

                <Text m="auto" w={{ base: "95%", md: "80%" }} fontSize={{ base: "15px", md: "22.5px" }} fontWeight={"500"} textAlign={{ base: "justify", md: "left" }} textColor="grey">A newly designed multilayer ceramic antenna for RTK positioning is built
                    into the aircraft frame and can receive three types of GNSS signals (GPS, BeiDou, Galileo),
                    achieving cm-level positioning using two types of frequencies. . Enabling network RTK [5]
                    or installing a D-RTK 2 mobile station [6] enables highly accurate positioning without
                    the need to install additional modules.
                </Text>


                <Box h={{ base: "5vh", md: "20vh" }} w="100%"></Box> {/* space box added */}


                <Text mb={{ base: "-10px", md: "-25px" }} fontSize={{ base: "30px", md: "60px" }} textAlign={"center"} fontWeight={"500"} bgGradient="linear(to-l,rgb(255,154,10),rgb(255,97,4))" bgClip="text">Equipped with dual</Text>
                <Text fontSize={{ base: "30px", md: "60px" }} textAlign={"center"} fontWeight={"500"} bgGradient="linear(to-l,rgb(255,154,10),rgb(255,97,4))" bgClip="text">antennas</Text>


                <Box h={{ base: "65vh", md: "200vh" }} w="100%">
                    <Image w={{ base: "100%", md: "100%" }} m="auto" h="100%" src="https://dji-official-fe.djicdn.com/dps/6e81961c5e3bdeb787a2c10e820450b8.jpg" alt="Big_drone" />
                </Box>

                <Box h={{ base: "5vh", md: "10vh" }} w="100%"></Box> {/* space box added */}

                <Text fontSize={{ base: "30px", md: "60px" }} textAlign={"center"} fontWeight={"500"} bgGradient="linear(to-l,rgb(255,154,10),rgb(255,97,4))" bgClip="text">Waypoint Pro</Text>
                <Text fontSize={{ base: "15px", md: "22.5px" }} m="auto" w={{ base: "95%", md: "60%" }} fontWeight={"500"} textAlign={"center"} textColor="grey"> Specifically designed for aerial photography, the Waypoint Pro feature allows you to plan flight routes and capture shots with a wide range of custom settings. New repeatable route mode and 3D dolly mode make it easy to perform innovative automatic shooting .
                    In addition, centimeter-level positioning using RTK enables more accurate flight route planning and execution. Whether it's a one-off shoot or a professional film crew, Waypoint Pro allows you to capture even the most complex scenes with ease.</Text>

                <Box h={{ base: "5vh", md: "10vh" }} w="100%"></Box> {/* space box added */}

                <Box m="auto" w={{ base: "95%", md: "80%" }} h={{ base: "40vh", md: "90vh" }} >
                    <video
                        style={videoStyles2}
                        loop

                        autoPlay={true} // Set to true if you want videos to autoplay
                        muted // Adding this video to start muted
                    >
                        <source src={"https://dji-official-fe.djicdn.com/reactor/assets/_next/static/videos/c65aff54-5b8c-4ca8-ab30-395d265f5b4f.mp4"} />
                        Your browser does not support the video tag.
                    </video>
                </Box>

                <Text m="auto" w={{ base: "95%", md: "80%" }} fontSize={{ base: "15px", md: "22.5px" }} fontWeight={"500"} textAlign={{ base: "justify", md: "left" }} textColor="grey">A newly designed multilayer ceramic antenna for RTK positioning is built
                    into the aircraft frame and can receive three types of GNSS signals (GPS, BeiDou, Galileo),
                    achieving cm-level positioning using two types of frequencies. . Enabling network RTK [5]
                    or installing a D-RTK 2 mobile station [6] enables highly accurate positioning without
                    the need to install additional modules.
                </Text>






            </Box>





        </>
    )
}

export default Flight_system


// half box video :-
// mavic 3 pro :- https://dji-official-fe.djicdn.com/reactor/assets/_next/static/videos/3b1057aa-7bdf-46b8-a310-f6c3e98ad8e8.mp4
// video second :-
// mavic 3 pro :- https://dji-official-fe.djicdn.com/reactor/assets/_next/static/videos/379f7815-59f6-42ce-a13e-e0d936e61e89.mp4
// last video :-
// mavic 3 pro :- https://dji-official-fe.djicdn.com/reactor/assets/_next/static/videos/cc05d9cf-6eb4-4374-bfe9-786d190fa2d8.webm