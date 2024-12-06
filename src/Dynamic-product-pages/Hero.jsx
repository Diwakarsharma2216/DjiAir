import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Box, useBreakpointValue, Text, Image, Tabs, TabPanels, TabPanel, Tab, TabIndicator, TabList, Button, } from '@chakra-ui/react'
import { useParams, useNavigate } from 'react-router-dom';
import { FiShoppingCart, FiArrowRight } from 'react-icons/fi';
import Navbar from "../Components/Navbar.jsx"
import Imaging_system from '../ProductComponents/Imaging_system.jsx';
import Footer from "../Components/Footer.jsx"
import LoadingSpinner from '../Components/LoadingSpinner.jsx';


// const dynamic_data = {
//     PRODUCT_NAME: "",
//     RKT_VIDEO1: "",
//     RKT_VIDEO2: "",
//     ACTUAL_PRO_IMAGE: "",
//     WAYPOINT_PRO_IMAGE: "",
//     DARK_IMG: "",
//     TAB_VID1: "",
//     TAB_VID2: "",
//     TAB_VID3: "",
//     FINAL_PRO_IMG: "",
//     PRICE: ""
// }


const Hero = () => {
    const baseURL = "https://drone-site-be2k24.onrender.com/"
    const { id } = useParams();
    const [pageData, setPageData] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate()

    useEffect(() => {
        const fetchPages = async () => {
            if (id) {
                try {
                    const res = await axios.get(`${baseURL}api/page/${id}`);
                    if (res && res.data) {
                        // console.log('API response:', res.data);
                        setPageData(res.data.page_data);
                        setLoading(false);
                    } else {
                        setPageData(null);
                        setLoading(false);
                    }
                } catch (error) {
                    setPageData(null);
                    setLoading(false);
                    console.error('Error fetching page data:', error);
                }
            }
        };

        fetchPages();
    }, [id]);


    useEffect(() => {
        // console.log(pageData)
    }, [pageData])

    const handleBuy = () => {
        navigate("/buy")
    }
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
    const Flight_videoStyles1 = {
        width: useBreakpointValue({ base: "100%", md: "100%", lg: "100%" }),
        height: useBreakpointValue({ base: "100%", md: "100%", lg: "100vh" }),
        objectFit: 'cover',
        margin: "auto"
    }
    const Flight_videoStyles2 = {
        width: useBreakpointValue({ base: "100%", md: "100%", lg: "100%" }),
        height: useBreakpointValue({ base: "40vh", md: "90vh", lg: "90vh" }),
        objectFit: 'cover',
        margin: "auto"
    }



    const Operational_videoStyles1 = {
        width: useBreakpointValue({ base: "100%", md: "100%", lg: "100%" }),
        height: useBreakpointValue({ base: "100%", md: "100%", lg: "90vh" }),
        objectFit: 'cover',
        margin: "auto"
    }
    const Operational_videoStyles2 = {
        width: useBreakpointValue({ base: "100%", md: "100%", lg: "100%" }),
        height: useBreakpointValue({ base: "100%", md: "100%", lg: "120vh" }),
        objectFit: 'cover',
        margin: "auto"
    }
    return (
        <>
            <Navbar />

            {loading ? (
                <LoadingSpinner />
            ) : (
                pageData ? (
                    //  initial video and Big text section starting here.... 
                    <>
                        <Box Box w="100%" h={{ base: "", md: "230vh" }} bg="#000" position="relative">

                            <video
                                style={videoStyles}
                                loop
                                autoPlay={true}
                                muted
                            >
                                <source src={pageData.INIT_VIDEO} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>


                            <Box>

                                <Text style={headingStyle} textAlign="center">
                                    {pageData.PRODUCT_NAME}
                                </Text>


                                <Box style={linkBox1} textAlign="center">
                                    Learn more <FiArrowRight />
                                </Box>


                                <Box style={linkBox2} textAlign="center">
                                    Buy now <FiShoppingCart />
                                </Box>

                            </Box>



                            <Box w="100%" h={{ base: "130vh", md: "130vh" }} position={"relative"}>
                                <Box w="100%" h="auto" height={"30vh"}></Box>
                                <video
                                    style={videoStyles2}
                                    loop
                                    autoPlay={true}
                                    muted
                                >
                                    <source src={pageData.TEXT_VIDEO} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                                <Box style={TextStyle}>
                                    <Text mt={{ base: "", md: "" }} mb={{ base: "-10%", md: "-5%" }}>See the</Text>
                                    <Text mb={{ base: "-10%", md: "-5%" }} >unknown</Text>
                                    <Text mb={{ base: "-10%", md: "-5%" }} >world</Text>
                                    <Text mb={{ base: "-10%", md: "-5%" }} >in your eyes</Text>

                                </Box>
                            </Box>
                        </Box >

                        {/* Flight System section starting here............ */}
                        <Box w="100%" h="auto" bg="#fff">
                            <Box w="100%" h={{ base: "12vh", md: "15vh", lg: "20vh" }}></Box>

                            <Box w={{ base: "95%", md: "90%", lg: "80%" }} display={"flex"} flexDirection={{ base: "column", md: "column", lg: "row" }} m="auto" h="100vh" >

                                <Box w={{ base: "100%", md: "50%" }} h="100%" display={"flex"} alignContent={"center"}>
                                    <Box w="100%" h={{ base: "100%", md: "85%" }} m="auto" >

                                        <Text mb={{ base: "-10px", md: "-25px" }} fontSize={{ base: "30px", md: "60px" }} textAlign={"left"} fontWeight={"500"} bgGradient="linear(to-l,rgb(255,154,10),rgb(255,97,4))" bgClip="text">Boasts cm-level </Text>
                                        <Text fontSize={{ base: "30px", md: "60px" }} textAlign={"left"} fontWeight={"500"} bgGradient="linear(to-l,rgb(255,154,10),rgb(255,97,4))" bgClip="text">accuracy</Text>
                                        <Text fontSize={{ base: "30px", md: "60px" }} textAlign={"left"} fontWeight={"500"} bgGradient="linear(to-l,rgb(0,0,0),rgb(0,0,0))" bgClip="text">RTK positioning</Text>
                                        <Text fontSize={{ base: "15px", md: "22.5px" }} fontWeight={"500"} textAlign={"left"} textColor="grey">
                                            <Text as="span">Inspire 3{" "}</Text> is equipped with RTK high-precision positioning technology used in the fields
                                            of architecture and surveying, and boasts cm-level accuracy . [4] Compared with traditional
                                            meter-level positioning using Global Navigation Satellite System (GNSS), positioning using
                                            RTK not only increases flight stability but also enables more accurate flight route planning,
                                            Greatly improves shooting efficiency.</Text>
                                    </Box>
                                </Box>


                                <Box w={{ base: "100%", md: "50%" }} h="100%" >
                                    <video
                                        style={Flight_videoStyles1}
                                        loop

                                        autoPlay={true}
                                        muted
                                    >
                                        <source src={pageData.RKT_VIDEO1} />
                                        Your browser does not support the video tag.
                                    </video>
                                </Box>

                            </Box>

                            <Box h={{ base: "5vh", md: "20vh" }} w="100%"></Box>
                            <Box m="auto" w={{ base: "95%", md: "80%" }} h={{ base: "40vh", md: "auto" }} >
                                <video
                                    style={Flight_videoStyles1}
                                    loop

                                    autoPlay={true}
                                    muted
                                >
                                    <source src={pageData.RKT_VIDEO2} />
                                    Your browser does not support the video tag.
                                </video>
                            </Box>

                            <Text m="auto" w={{ base: "95%", md: "80%" }} fontSize={{ base: "15px", md: "22.5px" }} fontWeight={"500"} textAlign={{ base: "justify", md: "left" }} textColor="grey">
                                A newly designed multilayer ceramic antenna for RTK positioning is built
                                into the aircraft frame and can receive three types of GNSS signals (GPS, BeiDou, Galileo),
                                achieving cm-level positioning using two types of frequencies. . Enabling network RTK [5]
                                or installing a D-RTK 2 mobile station [6] enables highly accurate positioning without
                                the need to install additional modules.
                            </Text>


                            <Box h={{ base: "5vh", md: "20vh" }} w="100%"></Box>

                            <Text mb={{ base: "-10px", md: "-25px" }} fontSize={{ base: "30px", md: "60px" }} textAlign={"center"} fontWeight={"500"} bgGradient="linear(to-l,rgb(255,154,10),rgb(255,97,4))" bgClip="text">Equipped with dual</Text>
                            <Text fontSize={{ base: "30px", md: "60px" }} textAlign={"center"} fontWeight={"500"} bgGradient="linear(to-l,rgb(255,154,10),rgb(255,97,4))" bgClip="text">antennas</Text>
                            <Box h={{ base: "40vh", md: "100vh" }} w="100%">

                                <Image w={{ base: "100%", md: "80%" }} m="auto" h="100%" src={pageData.ACTUAL_PRO_IMAGE} alt="Big_drone" />
                            </Box>
                            <Box h={{ base: "5vh", md: "10vh" }} w="100%"></Box>

                            <Text fontSize={{ base: "30px", md: "60px" }} textAlign={"center"} fontWeight={"500"} bgGradient="linear(to-l,rgb(255,154,10),rgb(255,97,4))" bgClip="text">Waypoint Pro</Text>
                            <Text fontSize={{ base: "15px", md: "22.5px" }} m="auto" w={{ base: "95%", md: "60%" }} fontWeight={"500"} textAlign={"center"} textColor="grey">
                                Specifically designed for aerial photography, the Waypoint Pro feature allows you to plan flight routes and capture shots with a wide range of custom settings. New repeatable route mode and 3D dolly mode make it easy to perform innovative automatic shooting .
                                In addition, centimeter-level positioning using RTK enables more accurate flight route planning and execution. Whether it's a one-off shoot or a professional film crew, Waypoint Pro allows you to capture even the most complex scenes with ease.
                            </Text>
                            <Box h={{ base: "5vh", md: "10vh" }} w="100%"></Box>

                            <Box m="auto" w={{ base: "95%", md: "80%" }} h={{ base: "40vh", md: "90vh" }} >
                                <video
                                    style={Flight_videoStyles2}
                                    loop
                                    autoPlay={true}
                                    muted
                                >
                                    <source src={pageData.WAYPOINT_PRO_VID} />
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
                        {/* Operational Section starting here---------------------- */}
                        <Box h={{ base: "5vh", md: "10vh" }} w="100%"></Box> {/* space box added */}

                        {/* Operational_system container starting here---------------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
                        <Box w="100%" h="auto" bg="#000">
                            <Box w={{ base: "95%", md: "100%" }} m="auto" h={{ base: "35vh", md: "100vh" }} >
                                <Image w="100%" h="100%" src={pageData.DARK_IMG} alt="" />
                            </Box>


                            <Box h={{ base: "5vh", md: "10vh" }} w="100%"></Box> {/* space box added */}

                            <Box w={{ base: "100%", md: "100%" }} h={"auto"}>
                                <Tabs position="relative" variant="unstyled">
                                    <TabPanels>
                                        <TabPanel>
                                            <video
                                                style={videoStyles}
                                                loop

                                                autoPlay={true}
                                                muted
                                            >
                                                <source src={pageData.TAB_VID1} />
                                                Your browser does not support the video tag.
                                            </video>
                                        </TabPanel>
                                        <TabPanel>
                                            <video
                                                style={videoStyles}
                                                loop

                                                autoPlay={true}
                                                muted
                                            >
                                                <source src={pageData.TAB_VID2} />
                                                Your browser does not support the video tag.
                                            </video>
                                        </TabPanel>
                                        <TabPanel>
                                            <video
                                                style={videoStyles}
                                                loop

                                                autoPlay={true}
                                                muted
                                            >
                                                <source src={pageData.TAB_VID3} />
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

                            {/* dual battery system part container starting from here ...................................>>>>>>>>>>>>>>>>>>>>>> */}

                            <Box h={{ base: "5vh", md: "10vh" }} w="100%"></Box> {/* space box added */}
                            <Box w={{ base: "95%", md: "90%", lg: "80%" }} display={"flex"} flexDirection={{ base: "column", md: "column", lg: "row" }} m="auto" h="100vh" >
                                <Box w={{ base: "100%", md: "50%" }} h="100%" >
                                    <video
                                        style={Operational_videoStyles1}
                                        loop
                                        autoPlay={true}
                                        muted
                                    >
                                        <source src={"https://dji-official-fe.djicdn.com/reactor/assets/_next/static/videos/a7f21224-9441-4730-9007-6af24bca75e5.webm"} />
                                        Your browser does not support the video tag.
                                    </video>
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
                                        style={Operational_videoStyles1}
                                        loop
                                        autoPlay={true}
                                        muted
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
                                        style={Operational_videoStyles1}
                                        loop
                                        autoPlay={true}
                                        muted
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
                                    style={Operational_videoStyles2}
                                    loop
                                    autoPlay={true}
                                    muted
                                >
                                    <source src={"https://dji-official-fe.djicdn.com/reactor/assets/_next/static/videos/69dd4f0d-f592-49a4-b621-a8b62149a27c.webm"} />
                                    Your browser does not support the video tag.
                                </video>
                            </Box>

                            {/* Storage & movement part ending here---------------------->>>>>>>>>>>>> */}


                        </Box>

                        <Imaging_system />

                        {/* pricing or bottom part starting from here------------------>>>>>>>>>>>>>>> */}

                        <Box h={{ base: "5vh", md: "10vh" }} w="100%"></Box> {/* space box added */}
                        <Box w="100%" h={{ base: "auto", md: "auto" }} bg="#fff">
                            <Text textAlign={"center"} color="#000" fontWeight={"500"} fontSize={{ base: "4xl", md: "5xl" }}>
                                {pageData.PRODUCT_NAME}
                            </Text>
                            <Text textAlign={"center"} color="#000" fontWeight={"500"} fontSize={{ base: "xl", md: "xl" }}>See the unknown world in your eyes

                            </Text>

                            <Box w={{ base: "90%", md: "40%" }} m="auto" h={{ base: "30vh", md: "50vh" }} >
                                <Image w="100%" h="100%" src={pageData.FINAL_PRO_IMG} alt="inspire3" />
                            </Box>
                            <Text textAlign={"center"} bgGradient="linear(to-l,rgb(255,154,10),rgb(255,97,4))" bgClip="text" fontWeight={"500"} fontSize={{ base: "md", md: "2xl" }}>From ${pageData.PRICE}

                            </Text>
                            <Box w="100%" display={"flex"} justifyContent={"center"} alignContent={"center"} alignItems={"center"}>
                                <Button onClick={handleBuy} _hover={{ textColor: "#fff", bgColor: "#2196F3", }} transition={"0.5s ease"} borderRadius={"0px"} bg="#212121" textAlign={"center"} textColor={"#fff"} fontWeight={"100"} fontSize={{ base: "xl", md: "xl" }}>Buy now

                                </Button>
                            </Box>

                        </Box>
                        <Box h={{ base: "5vh", md: "10vh" }} w="100%"></Box> {/* space box added */}

                        <Footer />



                    </>
                ) :

                    (
                        <LoadingSpinner />
                    )
            )}

        </>
    )
}

export default Hero
