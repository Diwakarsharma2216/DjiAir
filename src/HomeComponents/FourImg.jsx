import React, { useState, useEffect } from 'react';
import { Box, Grid, Image, useBreakpointValue, Text } from '@chakra-ui/react';
import { Link, useLocation } from 'react-router-dom';

const Home_Four_images = [
    {
        image: "https://www1.djicdn.com/cms/uploads/dc9e619bc6ac2bc59d17d0bcaff58b3f.webp",
        text_svg: "https://www1.djicdn.com/cms/uploads/79944970c7d71630e6a98f34d1764670.svg",
        url: "",
        learn_url: "",
        buy_url: "",
        objectPosition: "50% 50%",

    },
    {
        image: "https://www1.djicdn.com/cms/uploads/53c3f3c5718ddeaa6bebbcf2e0a4f444.webp",
        text_svg: "https://www1.djicdn.com/cms/uploads/282d6b77b8dc608b6b6f7a344e7b6a91.svg",
        url: "",
        learn_url: "",
        buy_url: "",
        objectPosition: "50% 50%",

    },
    {
        image: "https://www1.djicdn.com/cms/uploads/09994a9e1f41431e686c06556900bbb2.webp",
        text_svg: "https://www1.djicdn.com/cms/uploads/92bd5ecd6c16060de84770c1631efd37.svg",
        url: "",
        learn_url: "",
        buy_url: "",
        objectPosition: "20% 80%",

    },
    {
        image: "https://www1.djicdn.com/cms/uploads/47b9ef9ae26196db022314bf3eebb00d.webp",
        text_svg: "https://dji-official-fe.djicdn.com/dps/5086b4aa705f909f103008bbf75b43f1.svg",
        url: "",
        learn_url: "",
        buy_url: "",
        objectPosition: "10% 90%",

    },
];



const Camera_drones_Four_images = [
    {
        image: "https://dji-official-fe.djicdn.com/dps/c2cf5f3b8c738ee773a4035a4da36214.jpg",
        text_svg: "https://dji-official-fe.djicdn.com/dps/53f699de8bfca9acdc59281f81121913.svg",
        url: "",
        learn_url: "",
        buy_url: "",
        objectPosition: "50% 50%",

    },
    {
        image: "https://dji-official-fe.djicdn.com/dps/a0d11066ee221205f88cba5ff2f07836.jpg",
        text_svg: "https://www1.djicdn.com/cms/uploads/79944970c7d71630e6a98f34d1764670.svg",
        url: "",
        learn_url: "",
        buy_url: "",
        objectPosition: "50% 50%",

    },
    {
        image: "https://dji-official-fe.djicdn.com/dps/e49a66fff20c5b41a43665582a770578.jpg",
        text_svg: "https://dji-official-fe.djicdn.com/dps/5086b4aa705f909f103008bbf75b43f1.svg",
        url: "",
        objectPosition: "60% 30%",

    },
    {
        image: "https://dji-official-fe.djicdn.com/dps/2389a2287c637fb8ca719370290e30d7.jpg",
        text_svg: "https://dji-official-fe.djicdn.com/dps/c5c9efc48e7711acf2cb1c3a8da9651a.svg",
        url: "",
        learn_url: "",
        buy_url: "",
        objectPosition: "50% 50%",

    },
];




const Hand_Held_Four_images = [
    {
        image: "https://dji-official-fe.djicdn.com/dps/95c5432751f3357789cc85cfaa16a5b8.jpg",
        text_svg: "https://dji-official-fe.djicdn.com/dps/46bb9d21173deadeff052e78fe7f322b.svg",
        url: "",
        learn_url: "",
        buy_url: "",
        objectPosition: "50% 50%",

    },
    {
        image: "https://dji-official-fe.djicdn.com/dps/4da7adda2e30246082f72437eb9423ff.jpg",
        text_svg: "https://dji-official-fe.djicdn.com/dps/aa3dff8a18e1cfd57487523d5b9b10d9.svg",
        url: "",
        learn_url: "",
        buy_url: "",
        objectPosition: "28% 72%",

    },
    {
        image: "https://dji-official-fe.djicdn.com/dps/18a3ca578b5178c8ac7c432f820c3d00.jpg",
        text_svg: "https://dji-official-fe.djicdn.com/dps/5086b4aa705f909f103008bbf75b43f1.svg",
        url: "",
        objectPosition: "60% 30%",

    },
    {
        image: "https://dji-official-fe.djicdn.com/dps/390af4904d4c36673e6a9da1f2a083c3.jpg",
        text_svg: "https://dji-official-fe.djicdn.com/dps/c5c9efc48e7711acf2cb1c3a8da9651a.svg",
        url: "",
        learn_url: "",
        buy_url: "",
        objectPosition: "50% 50%",

    },
];




function FourImg() {
    const location = useLocation();
    const [target, setTarget] = useState([]);

    // const imageData = location.pathname === "/buy/camera_drones" ? Camera_drones_Four_images : Home_Four_images;

    useEffect(() => {
        // Seting the appropriate image data based on the routes...
        if (location.pathname === "/buy/camera_drones") {
            setTarget(Camera_drones_Four_images);
        } else if (location.pathname === "/buy/handheld") {
            setTarget(Hand_Held_Four_images);
        } else {
            setTarget(Home_Four_images);
        }
    }, [location.pathname]);

    const svgStyle = {
        position: "absolute",
        top: useBreakpointValue({ base: "10%", md: "10vh", lg: "10vh" }),
        left: "50%",
        transform: "translateX(-50%)",



    };
    const textStyle1 = {
        position: "absolute",
        textAlign: "center",
        fontSize: "15px",
        top: useBreakpointValue({ base: "25%", md: "15vh", lg: "18vh" }),
        left: "42%",
        transform: useBreakpointValue({ base: "translateX(-80%)", md: "translateX(-65%)", lg: "translateX(-50%)" }),
        color: "#546E7A",


    };
    const textStyle2 = {
        position: "absolute",
        textAlign: "center",
        fontSize: "15px",
        top: useBreakpointValue({ base: "25%", md: "15vh", lg: "18vh" }),
        left: "58%",
        transform: useBreakpointValue({ base: "translateX(-20%)", md: "translateX(-35%)", lg: "translateX(-50%)" }),
        color: "#546E7A",


    };
    return (
        <>
            <Box position="relative" w="100%" h="auto" >
                <Grid templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}>
                    {target.map((item, index) => (
                        <Box
                            // border={"1px solid red"}
                            key={index}
                            w={{ base: "100%", md: "98%" }}
                            m={{ base: "0%", md: "auto", lg: "auto" }}
                            mt={{ base: "2%", md: "1%", lg: "1%" }}
                            mb={{ base: "1%", md: "1%", lg: "1%" }}
                            h={{ base: "65vh", md: "85vh" }}
                            overflow="hidden"
                        >
                            <Box
                                // border={"1px solid red"}
                                zIndex={"999"} position={"absolute"} w={{ base: "99%", md: "49%" }} h={{ base: "10%", md: "20%" }}>
                                {/* svg box here... */}
                                {item.text_svg && (
                                    <Link to={item.url}>
                                        <Box
                                            // border={"1px solid blue"}
                                            as="img"
                                            src={item.text_svg}
                                            alt={`SVG ${index + 1}`}
                                            style={{ ...svgStyle }}
                                            zIndex="999"
                                            width={"40%"}
                                        />
                                        <Box display={"flex"} justifyContent={"center"} alignContent={"center"} alignItems={"center"}>
                                            <Text style={textStyle1} _hover={{ textDecoration: "underline" }}> Learn More {">"}</Text>
                                            <Link to="/buy"><Text style={textStyle2} _hover={{ textDecoration: "underline" }}>Where to Buy {">"}</Text></Link>
                                        </Box>
                                    </Link>
                                )}
                            </Box>

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
        </>

    );
}

export default FourImg;
