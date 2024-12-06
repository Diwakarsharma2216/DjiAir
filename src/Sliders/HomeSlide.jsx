//  I took help from "https://codesandbox.io/p/sandbox/chakra-ui-carousel-wgdp6?file=%2Fsrc%2FApp.js%3A6%2C29" to build this HomeSlide componet 


import { useBreakpointValue, Image, Text, Box } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import { FiShoppingCart, FiArrowRight } from 'react-icons/fi';
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const slides = [
  {
    image:
      "https://dji-official-fe.djicdn.com/cms/uploads/a9b0636a0208b6467b18abcf6f8bb06d.jpg",
    text1: "Triple-Lens Camera Drone",
    text2: "DJI MAVIC 3 pro",
    text3: "Inspiration in Focus",
    link1: "/",
    link2: "/dynamic/combinator/669e5b0f983a686e94f6b619",
  },
  {
    image:
      "https://dji-official-fe.djicdn.com/cms/uploads/d4e8e295ca6f4e4146b744943ea6a9fd.jpg",
    text1: "1 CMOS Pocket Gibal Camera",
    text2: "OSMO POCKET 3",
    text3: "For Moving Moments",
    link1: "/",
    link2: "/dynamic/combinator/669e6eec23114847a2f1c597",
  },
  {
    image:
      "https://dji-official-fe.djicdn.com/cms/uploads/e64d421632de007395222eb0cce98fe7.jpg",
    text1: "Get 1% of your order back in DJI Credit",
    text2: "DJI INSPIRE 3",
    text3: "Master the Unseen",
    link1: "/",
    link2: "/dynamic/combinator/INSPIRE3",
  },
  {
    image:
      "https://dji-official-fe.djicdn.com/cms/uploads/81b484ebfa1d073281c2e2ee6eca7cd1.jpg",
    text1: "Enterprise Small Commercial Drones",
    text2: "MAVIC 3",
    text3: "Your Everyday Commercial Drones",
    link1: "/",
    link2: "/dynamic/combinator/669e7df323114847a2f1c59f",
  },
  {
    image:
      "https://dji-official-fe.djicdn.com/cms/uploads/943efdcdbb68ccad90c65d7a8b9f38ed@origin.jpg",
    text1: "Mission Planning",
    text2: "DJI MAVIC 3M",
    text3: "See More, Work Smarter",
    link1: "/",
    link2: "/dynamic/combinator/669e7df323114847a2f1c59f",
  },
  {
    image:
      "https://dji-official-fe.djicdn.com/cms/uploads/5469e09498cb5bec60e052e587616a1c@origin.jpg",
    text1: "Agricultural Flagships",
    text2: "AGRAS T50",
    text3: "One For All",
    link1: "/",
    link2: "/dynamic/combinator/669eba595b39b4f6a21f1c0b",
  }, {
    image:
      "https://dji-official-fe.djicdn.com/cms/uploads/6f10c62aeb91090cf4cc4577ccef7feb@1x.jpg",
    text1: "DJI Holiday Wonderlands Savings",
    text2: "UP TO 30% OFF",
    text3: "Discover exclusive gifts and discounts",
    link1: "/",
    link2: "/buy",
  }, {
    image:
      "https://dji-official-fe.djicdn.com/cms/uploads/7bb8eb7615a19c1ed4824f6dc58cea13.jpg",
    text1: "Intigrate 8K Cinema Camera",
    text2: "DJI RONIN 4D-8D",
    text3: " Imagin Excilence Redefined",
    link1: "/",
    link2: "/dynamic/combinator/669ebe015b39b4f6a21f1c0d",
  }
];

// 1. https://www1.djicdn.com/cms/uploads/dc9e619bc6ac2bc59d17d0bcaff58b3f.webp
// 1. https://www1.djicdn.com/cms/uploads/79944970c7d71630e6a98f34d1764670.svg


// 2. https://www1.djicdn.com/cms/uploads/09994a9e1f41431e686c06556900bbb2.webp
// 2.https://www1.djicdn.com/cms/uploads/1bd5cd9f763f790d6abbe8193b5c95c8.svg


// 3.https://www1.djicdn.com/cms/uploads/cbf96b4e76c9d541c79ca9e40797cd1f.web
// 3.https://www1.djicdn.com/cms/uploads/92bd5ecd6c16060de84770c1631efd37.svg

// 4.https://www1.djicdn.com/cms/uploads/47b9ef9ae26196db022314bf3eebb00d.webp

const HomeSlide = () => {
  const imageStyle = {
    width: useBreakpointValue({ base: "100%", md: "100%" }),
    height: useBreakpointValue({ base: "75vh", md: "100vh", lg: "100vh" }),
    objectFit: "cover",
  };
  const textStyle1 = {
    position: "absolute",
    top: useBreakpointValue({ base: "10%", md: "10vh", lg: "10vh" }),
    left: "50%",
    transform: "translateX(-50%)",
    color: "#ededed",
    fontSize: useBreakpointValue({ base: "13px", md: "16px", lg: "16px" }),
    width: "100%"
  };
  const textStyle2 = {
    position: "absolute",
    top: useBreakpointValue({ base: "12.5%", md: "12.5vh", lg: "12.5vh" }),
    left: "50%",
    transform: "translateX(-50%)",
    color: "white",
    fontSize: useBreakpointValue({ base: "30px", md: "45px", lg: "45px" }),
    fontWeight: "400",
    width: "100%"
  };
  const textStyle3 = {
    position: "absolute",
    top: useBreakpointValue({ base: "20%", md: "21vh", lg: "21vh" }),
    left: "50%",
    transform: "translateX(-50%)",
    color: "white",
    fontSize: useBreakpointValue({ base: "18px", md: "24px", lg: "24px" }),
    width: "100%"
  };
  const linkBox1 = {
    width: useBreakpointValue({ base: "100px", md: "90px", lg: "130px" }),
    height: useBreakpointValue({ base: "35px", md: "90px", lg: "35px" }),
    position: "absolute",
    top: useBreakpointValue({ base: "25%", md: "30%", lg: "30%" }),
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
    top: useBreakpointValue({ base: "25%", md: "30%", lg: "30%" }),
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
    <Carousel infiniteLoop showThumbs={false}>
      {slides.map((slide, index) => (
        <Box key={index} position="relative">
          <Image style={imageStyle} w="100%" h="100vh" src={slide.image} />
          {slide.text1 && (
            <Text style={textStyle1} textAlign="center">
              {slide.text1}
            </Text>
          )}
          {slide.text2 && (
            <Text style={textStyle2} textAlign="center">
              {slide.text2}
            </Text>
          )}
          {slide.text3 && (
            <Text style={textStyle3} textAlign="center">
              {slide.text3}
            </Text>
          )}
          {slide.link1 && (
            <Box style={linkBox1} textAlign="center">
              <Link to={slide.link1}>Learn more </Link><FiArrowRight />
            </Box>
          )}
          {slide.link2 && (
            <Box style={linkBox2} textAlign="center">
              <Link to={slide.link2}>Buy now </Link><FiShoppingCart />
            </Box>
          )}

        </Box>
      ))}
    </Carousel>
  );
};

export default HomeSlide;
