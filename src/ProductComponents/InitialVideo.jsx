import React, { useEffect, useState } from 'react'
import { Box, useBreakpointValue, Text } from '@chakra-ui/react'
import { FiShoppingCart, FiArrowRight } from 'react-icons/fi';



const slides = [
    {

        heading: "DJI INSPIRE 3",
        link1: "https://www.dji.com/mavic-3-pro?site=brandsite&from=homepage",
        link2: "https://store.dji.com/product/dji-mavic-3-pro?site=brandsite&from=homepage",
    },

];



function InitialVideo() {

    const videoStyles = {
        width: '100%',
        height: useBreakpointValue({ base: "70vh", md: "100vh", lg: "100vh" }),
        objectFit: 'cover',
    }
    const videoStyles2 = {
        width: '100%',
        height: useBreakpointValue({ base: "80vh", md: "100vh", lg: "100vh" }),
        objectFit: 'cover',
    }
    const headingStyle = {
        position: "absolute",
        top: useBreakpointValue({ base: "5%", md: "10vh", lg: "10vh" }),
        left: "50%",
        transform: "translateX(-50%)",
        fontWeight: "500",
        color: "#ededed",
        fontSize: useBreakpointValue({ base: "40px", md: "16px", lg: "70px" }),
        width: "100%"
    };

    const TextStyle = {
        color: "#fff",
        // fontSize: "",
        position: "absolute",
        textAlign: "center",
        top: "0",
        left: "0",
        background: "#000",
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: useBreakpointValue({ base: "80px", md: "100px", lg: "140px" }),
        fontWeight: "500",
        mixBlendMode: "multiply",
        flexDirection: "column"
    }

    const linkBox1 = {
        width: useBreakpointValue({ base: "100px", md: "90px", lg: "130px" }),
        height: useBreakpointValue({ base: "35px", md: "90px", lg: "35px" }),
        position: "absolute",
        top: useBreakpointValue({ base: "30%", md: "30%", lg: "12%" }),
        left: useBreakpointValue({ base: "35%", md: "44%", lg: "44%" }),
        transform: "translateX(-50%)",
        color: "#ededed",
        border: "1px solid #fff",
        borderBottomRightRadius: "15px",
        borderTopRightRadius: "15px",
        borderBottomLeftRadius: "15px",
        borderTopLeftRadius: "15px",
        paddingLeft: "10px",
        paddingRight: "10px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: useBreakpointValue({ base: "12px", md: "", lg: "" }),
        cursor: "pointer",

    }
    const linkBox2 = {
        width: useBreakpointValue({ base: "100px", md: "90px", lg: "130px" }),
        height: useBreakpointValue({ base: "35px", md: "90px", lg: "35px" }),
        position: "absolute",
        top: useBreakpointValue({ base: "30%", md: "30%", lg: "12%" }),
        left: "50%",
        transform: "translateX(+5%)",
        color: "#ededed",
        border: "1px solid #fff",
        borderBottomRightRadius: "15px",
        borderTopRightRadius: "15px",
        borderBottomLeftRadius: "15px",
        borderTopLeftRadius: "15px",
        paddingLeft: "10px",
        paddingRight: "10px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: useBreakpointValue({ base: "12px", md: "", lg: "" }),
        cursor: "pointer",

    }

    return (
        <>

            <Box w="100%" h={{ base: "", md: "230vh" }} bg="#000" position="relative">

                <video
                    style={videoStyles}
                    loop

                    autoPlay={true} // Set to true if you want videos to autoplay
                    muted // Adding this video to start muted
                >
                    <source src={"https://dji-official-fe.djicdn.com/reactor/assets/_next/static/videos/a6ac452d-9fbe-49fc-95ea-e2bffdc80a0b.mp4"} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                {slides.map((slide, index) => (
                    <Box key={index}>

                        {slide.heading && (
                            <Text style={headingStyle} textAlign="center">
                                {slide.heading}
                            </Text>
                        )}
                        {slide.link1 && (
                            <Box style={linkBox1} textAlign="center">
                                Learn more <FiArrowRight />
                            </Box>
                        )}
                        {slide.link2 && (
                            <Box style={linkBox2} textAlign="center">
                                Buy now <FiShoppingCart />
                            </Box>
                        )}
                    </Box>

                ))}


                <Box w="100%" h={{ base: "130vh", md: "130vh" }} position={"relative"}>
                    <Box w="100%" h="auto" height={"30vh"}></Box>

                    <video
                        style={videoStyles2}
                        loop

                        autoPlay={true} // Set to true if you want videos to autoplay
                        muted // Adding this video to start muted
                    >
                        <source src={"https://dji-official-fe.djicdn.com/reactor/assets/_next/static/videos/f8221748-07ec-4bc6-a050-ad1cda891694.mp4"} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <Box style={TextStyle}>

                        <Text mt={{ base: "", md: "" }} mb={{ base: "-10%", md: "-5%" }}>See the</Text>
                        <Text mb={{ base: "-10%", md: "-5%" }} >unknown</Text>
                        <Text mb={{ base: "-10%", md: "-5%" }} >world</Text>
                        <Text mb={{ base: "-10%", md: "-5%" }} >in your eyes</Text>

                    </Box>


                </Box>









            </Box>


        </>
    )
}

export default InitialVideo



