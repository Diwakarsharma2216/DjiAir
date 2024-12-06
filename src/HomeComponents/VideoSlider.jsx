import React, { useState } from 'react'
import { Carousel } from "react-responsive-carousel";
import { Box, useBreakpointValue, Text } from "@chakra-ui/react"
import { FiShoppingCart, FiArrowRight } from 'react-icons/fi';


export const SlideData = [
    {
        video_url:
            "https://terra-1-g.djicdn.com/851d20f7b9f64838a34cd02351370894/%E5%A4%A9%E7%A9%BA%E4%B9%8B%E5%9F%8E%209%20%E5%91%A8%E5%B9%B4%E5%BD%B1%E5%83%8F%E5%A4%A7%E8%B5%9B/1124.mp4",
        text1: "Triple-Lens Camera Drone",
        text2: "DJI MAVIC 3 pro",
        text3: "Inspiration in Focus",
        link1: "https://www.dji.com/mavic-3-pro?site=brandsite&from=homepage",
        link2: "/buy",
    }
    ,
    {
        video_url:
            "https://terra-1-g.djicdn.com/851d20f7b9f64838a34cd02351370894/212%20download/F55_HG212_%E9%A6%96%E9%A1%B5Shot%20on%20Banner%E8%A7%86%E9%A2%91_CLEAN_-10s_V2_1200-720%20%EF%BC%88%E8%BE%93%E5%87%BA2X%EF%BC%89.mp4",
        text1: "1 CMOS Pocket Gibal Camera",
        text2: "OSMO POCKET 3",
        text3: "For Moving Moments",
        link1: "1",
        link2: "/buy",
    },
    {
        video_url:
            "https://terra-1-g.djicdn.com/851d20f7b9f64838a34cd02351370894/140%20shot%20on/F30_WA140_DJI%20home%20page%20Shot%20on%20Banner%20Video_CLEAN_%E2%89%A410s_V4_2400-1440.mp4",
        text1: "Get 1% of your order back in DJI Credit",
        text2: "DJI INSPIRE 3",
        text3: "Master the Unseen",
        link1: "1",
        link2: "/buy",
    },
    {
        video_url:
            "https://terra-1-g.djicdn.com/851d20f7b9f64838a34cd02351370894/261%20shot%20on/shot%20on.mp4",
        text1: "Enterprise Small Commercial Drones",
        text2: "MAVIC 3",
        text3: "Your Everyday Commercial Drones",
        link1: "1",
        link2: "/buy",
    },
    {
        video_url:
            "https://terra-1-g.djicdn.com/851d20f7b9f64838a34cd02351370894/203/C19_AC203_WebClips_%E5%AE%98%E7%BD%91%E9%A6%96%E9%A1%B5ShotOn_V3_PC_2400x1440.mp4",
        text1: "Mission Planning",
        text2: "DJI MAVIC 3M",
        text3: "See More, Work Smarter",
        link1: "1",
        link2: "/buy",
    },
    {
        video_url:
            "https://terra-1-g.djicdn.com/851d20f7b9f64838a34cd02351370894/Shot%20on%20%E8%A7%86%E9%A2%91%E8%B0%83%E6%95%B4/1.mov",
        text1: "Agricultural Flagships",
        text2: "AGRAS T40",
        text3: "One For All",
        link1: "1",
        link2: "/buy",
    }, {
        video_url:
            "https://terra-1-g.djicdn.com/851d20f7b9f64838a34cd02351370894/Shot%20on%20%E8%A7%86%E9%A2%91%E8%B0%83%E6%95%B4/169%20shot%20on-pc-1_AfterCodecs.mp4",
        text1: "DJI Holiday Wonderlands Savings",
        text2: "UP TO 30% OFF",
        text3: "Discover exclusive gifts and discounts at the DJI store",
        link1: "1",
        link2: "/buy",
    }, {
        video_url:
            "https://terra-1-g.djicdn.com/851d20f7b9f64838a34cd02351370894/Shot%20on%20%E8%A7%86%E9%A2%91%E8%B0%83%E6%95%B4/F09_HG330Flex_ShotOn_V4_2400x1440_AfterCodecs.mp4",
        text1: "Intigrate 8K Cinema Camera",
        text2: "DJI RONIN 4D-8D",
        text3: " Imagin Excilence Redefined",
        link1: "1",
        link2: "/buy",
    }

];





function VideoSlider() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleSlideChange = (index) => {
        setCurrentSlide(index);
    };
    const videoStyles = {
        width: '100%',
        height: useBreakpointValue({ base: "80vh", md: "100vh", lg: "100vh" }),
        objectFit: 'cover',
    }






    const linkBox1 = {
        width: useBreakpointValue({ base: "100px", md: "90px", lg: "130px" }),
        height: useBreakpointValue({ base: "35px", md: "90px", lg: "35px" }),
        position: "absolute",
        top: useBreakpointValue({ base: "50%", md: "65%", lg: "70%" }),
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


    }
    const linkBox2 = {
        width: useBreakpointValue({ base: "80px", md: "90px", lg: "130px" }),
        height: useBreakpointValue({ base: "35px", md: "90px", lg: "35px" }),
        position: "absolute",
        top: useBreakpointValue({ base: "50%", md: "65%", lg: "70%" }),
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

    }
    return (
        <div>
            <Box w="100%" h={{ base: "25px", md: "50px" }}
            // border="3px solid green"
            ></Box>
            <Carousel infiniteLoop showThumbs={false} onChange={handleSlideChange}>
                {SlideData.map((slide, index) => (
                    <Box key={index} position="relative">
                        <video
                            style={videoStyles}
                            loop

                            autoPlay={true} // Set to true if you want videos to autoplay
                            muted // Add this if you want videos to start muted
                        >
                            <source src={slide.video_url} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>


                        <Box position="absolute"
                            top={{ base: "15%", md: "10%" }}
                            left={0}
                            width="100%"
                            height={{ base: "25vh", md: "30vh" }}
                            cursor={"pointer"}
                        // border="1px solid red"
                        >
                            <Text fontSize={{ base: "18px", md: "30px" }} fontWeight={"500"} color="#fff">{SlideData[currentSlide].text1}</Text>
                            <Text fontSize={{ base: "18px", md: "30px" }} fontWeight={"500"} color="#fff">{SlideData[currentSlide].text2}</Text>
                            <Text fontSize={{ base: "18px", md: "30px" }} fontWeight={"500"} color="#fff">{SlideData[currentSlide].text3}</Text>
                            <a href={SlideData[currentSlide].link1} style={linkBox1} target="_blank" rel="noopener noreferrer">
                                Learn more <FiArrowRight />
                            </a>
                            <a href={SlideData[currentSlide].link2} style={linkBox2} target="_blank" rel="noopener noreferrer">
                                Buy now <FiShoppingCart />
                            </a>




                        </Box>



                    </Box>
                ))}
            </Carousel>
        </div>
    )
}

export default VideoSlider
