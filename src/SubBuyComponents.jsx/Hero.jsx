import React, { useState, useEffect } from 'react'
import { Text, Box } from "@chakra-ui/react";
import { useLocation } from 'react-router-dom';

const Camera_drones = [
    {
        hero_heading: "Camera Drones",
        sub_heading1: "Capture your moments from above with",
        sub_heading2: "a mini drone, FPV, or professional aerial camera.",
        hero_img_url: "url('https://dji-official-fe.djicdn.com/dps/a0078af5ca32445787d0f0ba5fdf10af@origin.jpg')",
        pro_name: "DJI AVATA 2",
        pro_discription: "All Thrills, No Frills",
        where_to_buy: "",
        learn_more: "",

    }
]
const HandHeld = [
    {
        hero_heading: "Handheld Imaging Devices",
        sub_heading1: "From casual vlogging to professional shoots",
        sub_heading2: "stabilizer that's right for you.",
        hero_img_url: "url('https://dji-official-fe.djicdn.com/dps/4bbbb6a11e9c13e089d1139c6f08dc0b@origin.jpg')",
        pro_name: "DJI RS 4 PRO",
        pro_discription: "Transcend Potential",
        where_to_buy: "",
        learn_more: "",
    }
]
function Hero() {
    const location = useLocation();
    const [target, setTarget] = useState([]);

    useEffect(() => {
        // Seting the appropriate text and image data based on the routes...
        if (location.pathname === "/buy/camera_drones") {
            setTarget(Camera_drones);
        } else {
            setTarget(HandHeld);
        }
    }, [location.pathname]);
    return (
        <>
            {/* camera drones heading box starting here-------------->>>>>>>>>> */}
            <Box w={"100%"} h={{ base: "15vh", md: "35vh" }} justifyContent={"center"} display={"flex"} alignContent={"center"} alignItems={"center"}>
                <Box w='80%' h='auto'  >
                    {target.map((el, i) => (
                        <React.Fragment key={i}>
                            <Text textAlign={"center"} fontSize={{ base: "2xl", md: "5xl" }} fontWeight={"500"}>
                                {el.hero_heading}
                            </Text>
                            <Text fontSize={{ base: "12px", md: "16px" }} textColor={"#998"} textAlign={"center"}>
                                {el.sub_heading1}
                            </Text>
                            <Text fontSize={{ base: "12px", md: "16px" }} textColor={"#998"} textAlign={"center"}>
                                {el.sub_heading2}
                            </Text>
                        </React.Fragment>
                    ))}
                </Box>


            </Box>
            {/* camera drones heading box ends here-------------->>>>>>>>>> */}

            {/* Dji Avata 2 hero part starting from here------------->>>>>>>>>>>> */}
            <Box w='100%' h={{ base: "80vh", md: "90vh" }} display={"flex"} justifyContent={"center"} alignContent={"center"} alignItems={"center"}
            >
                {target.map((el, i) => (
                    <Box
                        key={i}
                        position={"relative"}
                        w="99%" h={{ base: "100%", md: "100%" }}
                        bgImage={el.hero_img_url}
                        bgSize="cover" objectFit="cover"
                        bgPosition="center" alt="Zoomable Image"
                        bgRepeat="no-repeat"
                    >
                        <Box position="absolute"
                            top={{ base: "15%", md: "10%" }}
                            left={0}
                            //  border={"1px solid red"}
                            width="100%"
                            height={{ base: "25vh", md: "30vh" }}
                            cursor={"pointer"}>

                            <Text textAlign={"center"} textColor={"#fff"} fontWeight={"400"} fontSize={{ base: "40px", md: "45px" }}>{el.pro_name}</Text>
                            <Text textAlign={"center"} textColor={"#eee"} fontWeight={"400"} fontSize={{ base: "12px", md: "16px" }}>{el.pro_discription}</Text>
                            <Text textAlign={"center"}> <span style={{ color: "#fff", textDecoration: "underline", fontSize: "12px", textAlign: "center" }}>Learn More</span> <span style={{ color: "#fff", textDecoration: "underline", fontSize: "12px", textAlign: "center" }}>Where to Buy</span></Text>
                        </Box>

                    </Box>
                ))}


            </Box>


        </>
    )
}

export default Hero
