import React from 'react'
import { Box, useBreakpointValue, Text, Image } from '@chakra-ui/react'
function Imaging_system() {
    const videoStyle1 = {
        width: '100%',
        height: useBreakpointValue({ base: "55vh", md: "100vh", lg: "110vh" }),
        objectFit: 'cover',
    }
    const videoStyle2 = {
        width: '100%',
        height: useBreakpointValue({ base: "40vh", md: "100vh", lg: "110vh" }),
        objectFit: 'cover',
        margin: "auto"
    }
    return (
        <>
            <Box w="100%" h="auto" bg="#000">
                <Box h={{ base: "5vh", md: "20vh" }} w="100%"></Box> {/* space box added */}
                <video
                    style={videoStyle1}
                    loop

                    autoPlay={true} // Set to true if you want videos to autoplay
                    muted // Adding this video to start muted
                >
                    <source src={"https://dji-official-fe.djicdn.com/reactor/assets/_next/static/videos/6ea9cb55-1dcc-46c4-b0cf-0fe52de40dee.mp4"} />
                    Your browser does not support the video tag.
                </video>
                <Box h={{ base: "5vh", md: "20vh" }} w="100%"></Box> {/* space box added */}
                <Text fontSize={{ base: "30px", md: "60px" }} textAlign={"center"} fontWeight={"500"} bgGradient="linear(to-l,rgb(255,154,10),rgb(255,97,4))" bgClip="text">Uniquely developed 8K</Text>
                <Text fontSize={{ base: "30px", md: "60px" }} textAlign={"center"} fontWeight={"500"} bgGradient="linear(to-l,rgb(255,154,10),rgb(255,97,4))" bgClip="text">sensor</Text>
                <Text fontSize={{ base: "15px", md: "22.5px" }} m="auto" w={{ base: "95%", md: "60%" }} fontWeight={"500"} textAlign={"center"} textColor="grey">
                    DJI's lightest full-frame 3-axis gimbal camera ever, the X9-8K Air, was developed exclusively for the Inspire
                    3 and takes drone aerial photography to the next level. This gimbal camera is compatible with DJI's latest video
                    processing system, CineCore 3.0, and supports internal recording of 8K/25fps CinemaDNG videos [9] , 8K/75fps [10] and
                    Apple ProRes RAW videos [9]
                    , allowing you to record top-class movies. Meet your production and TV programming needs.</Text>
                <video
                    style={videoStyle2}
                    loop

                    autoPlay={true} // Set to true if you want videos to autoplay
                    muted // Adding this video to start muted
                >
                    <source src={"https://dji-official-fe.djicdn.com/reactor/assets/_next/static/videos/7ad1432a-6eda-4969-9203-7e780008c33f.webm"} />
                    Your browser does not support the video tag.
                </video>
                <Text fontSize={{ base: "15px", md: "22.5px" }} m="auto" w={{ base: "95%", md: "60%" }} fontWeight={"500"} textAlign={"center"} textColor="grey">
                    8K ultra-high resolution aerial footage reproduces textures that are faithful to reality, and even when displayed on a large
                    screen, every detail is clearly depicted. RAW shooting takes full advantage of the X9-8K Air's sensor, giving you greater
                    freedom in post-editing visual effects and color grading.</Text>
                <Box h={{ base: "5vh", md: "20vh" }} w="100%"></Box> {/* space box added */}
                <Text fontSize={{ base: "30px", md: "60px" }} textAlign={"center"} fontWeight={"500"} bgGradient="linear(to-l,rgb(255,154,10),rgb(255,97,4))" bgClip="text">14+ stops</Text>
                <Text fontSize={{ base: "30px", md: "60px" }} textAlign={"center"} fontWeight={"500"} bgGradient="linear(to-l,rgb(255,154,10),rgb(255,97,4))" bgClip="text">dynamic range</Text>
                <Text fontSize={{ base: "15px", md: "22.5px" }} m="auto" w={{ base: "95%", md: "60%" }} fontWeight={"500"} textAlign={"center"} textColor="grey">
                    The X9-8K Air supports a dynamic range of 14+ stops and clearly captures details in bright and dark areas even
                    under complex lighting conditions such as sunrise and sunset. High dynamic range gives you more options in
                    post-editing, allowing you to maintain true-to-life colors even when making large exposure adjustments.</Text>


                {/* Stats image container starting from here 16jan 2k24-------------------------------------------------->>>>>>>>>>> */}

                <Box mt="20px" w="100%" h={{ base: "30vh", md: "100vh" }} >
                    <Image w={{ base: "100%", md: "85%" }} m="auto" h={{ base: "100%", md: "85%" }} src="https://dji-official-fe.djicdn.com/dps/1106ad000e69d38a1f40bb2b61c9d2de.jpg" alt="stats" />
                </Box>

                {/* Stats image container ends here 16jan 2k24-------------------------------------------------->>>>>>>>>>> */}


                {/* Sensor specs part starting from here 16jan 2k24----------------------------------------------------->>>>>>>>>>>>>>>>>>>> */}


                <Box h={{ base: "5vh", md: "20vh" }} w="100%"></Box> {/* space box added */}
                <Text fontSize={{ base: "30px", md: "60px" }} textAlign={"center"} fontWeight={"500"} bgGradient="linear(to-l,rgb(255,154,10),rgb(255,97,4))" bgClip="text">DL mount lens [11]</Text>
                <Text fontSize={{ base: "15px", md: "22.5px" }} m="auto" w={{ base: "95%", md: "60%" }} fontWeight={"500"} textAlign={"center"} textColor="grey">
                    The X9-8K Air is compatible with DJI's proprietary DL mount, and in addition to the existing full-frame D
                    L 24/35/50 mm F2.8 lens group, the new 18 mm F2.8 full-frame ultra-wide-angle lens and It is also compatible
                    with telephoto lenses [12] . All five of these lenses are custom designed for aerial photography.
                    The housing features a lightweight carbon fiber monocoque design, with the lightest lens weighing just 178g, meeting the
                    agile needs of Inspire 3.</Text>

                <Box mt="20px" w="100%" h={{ base: "45vh", md: "120vh" }} >
                    <Image w={{ base: "100%", md: "100%" }} m="auto" h={{ base: "100%", md: "100%" }} src="https://dji-official-fe.djicdn.com/dps/498ccfba9093885c1a94f267f81efa6e.jpg" alt="sensor-image" />
                </Box>


                {/* Sensor specs part ending here 16jan 2k24----------------------------------------------------->>>>>>>>>>>>>>>>>>>> */}

            </Box>

        </>
    )
}

export default Imaging_system
