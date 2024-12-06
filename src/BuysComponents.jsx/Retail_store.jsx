import React, { useState, useEffect, useRef } from 'react'
import {
    Text, Box,
    MenuItem,
    Menu,
    MenuButton,
    MenuList,
    Radio,
    Button,
    Grid,
    Spinner,
    Center
} from "@chakra-ui/react"
import axios from 'axios';
import { ChevronDownIcon, ChevronRightIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom';

const MenuArray = [
    {
        menuName: "DJI Mavic",
        menuItemName: ["DJI Mavic 3 Pro", "DJI Mavic 3 Classic", "DJI Mavic 3", "Mavic 2", "Mavic Pro"],
        radioName: "DJI Mavic",
        radioValues: ["DJI Mavic 3 Pro", "DJI Mavic 3 Classic", "DJI Mavic 3", "Mavic 2", "Mavic Pro"],
    },
    {
        menuName: "DJI Air",
        menuItemName: ["DJI Air 3", "DJI Air 2S", "Mavic Air 2", "Mavic Air"],
        radioName: "DJI Air",
        radioValues: ["DJI Air 3", "DJI Air 2S", "Mavic Air 2", "Mavic Air"],
    },
    {
        menuName: "DJI Mini",
        menuItemName: ["DJI Mini 4 Pro", "DJI Mini 3 Pro", "DJI Mini 3", "DJI Mini 2 SE", "DJI Mini 2", "DJI Mini SE", "Mavic Mini"],
        radioName: "DJI Mini",
        radioValues: ["DJI Mini 4 Pro", "DJI Mini 3 Pro", "DJI Mini 3", "DJI Mini 2 SE", "DJI Mini 2", "DJI Mini SE", "Mavic Mini"],
    },
    {
        menuName: "DJI Avata",
        menuItemName: ["DJI Avata 2", "DJI Avata"],
        radioName: "DJI Avata",
        radioValues: ["DJI Avata 2", "DJI Avata"],
    },
    {
        menuName: "DJI FPV",
        menuItemName: ["DJI FPV", "DJI Digital FPV System", "DJI 03 Air Unit"],
        radioName: "DJI FPV",
        radioValues: ["DJI FPV", "DJI Digital FPV System", "DJI 03 Air Unit"],
    },
    {
        menuName: "Inspire",
        menuItemName: ["DJI Inspire 3", "Inspire 2"],
        radioName: "Inspire",
        radioValues: ["DJI Inspire 3", "Inspire 2"],
    },
    {
        menuName: "Phantom",
        menuItemName: ["Phantom 4 Series"],
        radioName: "Phantom",
        radioValues: ["Phantom 4 Series"],
    }

];

function Retail_store() {
    const [droneData, setDroneData] = useState([]);
    const [category, setCategory] = useState("");
    const [sort, setSort] = useState("");
    const [loading, setLoading] = useState(true);

    const handleMenuItemClick = (radioName, radioValue) => {
        const value = radioValue
        setCategory(value)

    };
    const baseURL = "https://drone-site-be2k24.onrender.com/"
    const fetchProductData = async () => {
        try {
            const response = await axios.get(`${baseURL}api/all/data/get?sort=Price from ${sort}`);
            if (response && response.data) {
                setLoading(false);
                const allProducts = response.data.Products;
                setDroneData(allProducts);
                // console.log(droneData)
            } else {
                setLoading(true);
                setDroneData([]);
            }

        } catch (error) {
            console.log("errorMSG", error)

        }
    }

    async function categoryFetch() {
        try {
            const Fetch_responce = await axios.get(`${baseURL}api/all/data/get/products?category=${category}&sort=Price from ${sort}`)
            setDroneData(Fetch_responce.data.Products)
            // console.log(droneData)
        } catch (error) {
            console.log(`new Error in fetching category based data:-------------------- ${error}`)
        }

    }

    useEffect(() => {
        if (category === "") {
            fetchProductData()
            // console.log("sort value", sort)
        } else {
            categoryFetch()
            // console.log(`Radio Value: ${category}`);

        }
    }, [category, sort])

    return (
        <div>
            <Box
                //  border={"1px solid red"} 
                display={"flex"} position={"relative"} w={{ base: "100%", md: "100%", lg: "100%" }} h="100vh" >


                <Box
                    // border={"1px solid yellow"}
                    position={"sticky"} px={1} w={{ base: "30%", md: "40%", lg: "22%" }} h="100vh" >

                    <Text fontSize={{ base: "22px", md: "22px", lg: "22px" }} color="#3e403f" fontWeight={"500"} mt={2}>Filter</Text>
                    <Text fontSize={{ base: "12px", md: "15px", lg: "15px" }} color="#3e403f" fontWeight={"600"} mt={1}>Product Series</Text>






                    {MenuArray.map((menu, index) => (
                        <Menu autoSelect={false} boundary="scrollParent" key={index}>
                            <Box
                                mt={5}
                                display={"flex"}
                                justifyContent={"space-between"}
                            // border={"1px solid lime"}
                            >
                                <Box >
                                    <MenuButton
                                        variant="unstyled"
                                        px={0}
                                        aria-label={menu.menuName}
                                        fontWeight="normal"
                                        as={Button}
                                        // border={"1px solid cyan"}
                                        fontSize={{ base: "12px", md: "15px" }}
                                    >
                                        <Text color="#666666"> {menu.menuName} <ChevronDownIcon /></Text>
                                    </MenuButton>

                                </Box>
                            </Box>
                            <MenuList variant="unstyled" border={"none"} borderRadius={"none"}
                                fontSize={{ base: "12px", md: "13px" }}
                            >
                                {menu.menuItemName.map((itemName, itemIndex) => (
                                    <MenuItem
                                        _hover={{ textColor: "#0693e3" }}
                                        key={itemIndex}
                                        onClick={() => handleMenuItemClick(menu.radioName, menu.radioValues[itemIndex])}
                                    >
                                        <Radio
                                            name={menu.radioName}
                                            value={menu.radioValues[itemIndex]}
                                            m="5px"

                                        ></Radio>
                                        {itemName}
                                    </MenuItem>
                                ))}
                            </MenuList>
                        </Menu>
                    ))}


                </Box>






                {/* ////////////////////////////////////Product Container Box here/////////////////////////////////////////// */}







                <Box
                    // border={"1px solid yellow"}
                    w={{ base: "70%", md: "60%", lg: "78%" }} overflow={"auto"} h="100vh" css={{ scrollbarWidth: "none", msOverflowStyle: "none" }} _webkit={{ overflowScrolling: "touch", "&::-webkit-scrollbar": { display: "none" } }}>
                    <Box w="100%" h="auto" overflowY="hidden"
                    // border={"1px solid lime"}
                    >

                        {/* ////////////////////////////////////Product Content here/////////////////////////////////////////// */}

                        <Box
                            // border={"1px solid lime"}
                            display={"flex"} flexDirection={"row"} justifyContent={"space-between"} w="100%" h={{ base: "auto", md: "auto" }}>

                            {/* Dynamic count of results---- */}
                            <Text fontSize={{ base: "11.5px", md: "13.5px" }} color="#808080" mt={1}>{droneData.length} Item(s) Found</Text>

                            <Box>
                                <Menu autoSelect={false} boundary="scrollParent" >
                                    <Box

                                        display={"flex"}
                                        justifyContent={"space-between"}
                                    // border={"1px solid lime"}
                                    >
                                        <Box >
                                            <MenuButton
                                                px={{ base: "1.5", md: "2" }}
                                                borderRadius={"lg"}
                                                py={{ base: "0", md: "0" }}
                                                fontWeight="normal"
                                                as={Button}
                                                h={{ base: "auto", md: "auto" }}
                                                // border={"1px solid cyan"}
                                                fontSize={{ base: "12px", md: "15px" }} mb={1}
                                            >
                                                <Text color="#666666" >Sort by Recomendation<ChevronDownIcon /></Text>
                                            </MenuButton>

                                        </Box>
                                    </Box>
                                    <MenuList variant="unstyled" border={"none"} borderRadius={"none"}
                                        fontSize={{ base: "12px", md: "13px" }}
                                    >

                                        <MenuItem
                                            _hover={{ textColor: "#0693e3" }}
                                            onClick={() => setSort("low to Heigh")}
                                        >
                                            <Radio name={"menu.radioName"} value={"low to Heigh"} m="5px"></Radio>
                                            Price from low to Heigh
                                            {/* {itemName} */}
                                        </MenuItem>
                                        <MenuItem
                                            _hover={{ textColor: "#0693e3" }}
                                            onClick={() => setSort("Heigh to low")}
                                        >
                                            <Radio name={"menu.radioName"} value={"Heigh to low"} m="5px"></Radio>
                                            Price from Heigh to low


                                        </MenuItem>
                                    </MenuList>
                                </Menu>
                            </Box>
                        </Box>



                        {/* //////////////////////////////////////////////Product Card Here//////////////////////////////////////////////////// */}






                        {loading ? (
                            <Center flexDirection={"row"} w="100%" h={{base:"20vh",md:"10vh"}} >

                                <Text color="#000">Loading...</Text>
                                <Spinner ml='10px' color="red.500"/>

                            </Center>
                        ) : (

                            <Grid gap={5} gridTemplateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }} w="100%" h="auto">
                                {droneData.map((el, i) => (
                                    <Link to={el._id} key={i}>
                                        <Box

                                            w={{ base: "100%", md: "100%" }}
                                            h={{ base: "350px", md: "420px" }}
                                            bg='#EEEEEE'
                                            _hover={{
                                                cursor: "pointer",
                                                ".hover-box": { visibility: "visible", opacity: 1, },
                                            }}

                                        >
                                            <Box
                                                w={{ base: "100%", md: "100%" }}
                                                h={{ base: "250px", md: "320px" }}
                                                // border={"1px solid yellow"}
                                                className=".hover-img"
                                                position={"relative"}
                                                bgImage={`url(${el.cover_img})`}
                                                bgSize="cover"
                                                bgRepeat="no-repeat"
                                                bgPosition={"center"}
                                                transition="background-image 0.5s ease-in-out"
                                                _hover={{ bgImage: `url(${el.background_img})`, bgColor: "rgba(0,0,0,0.9)", ".hover-text": { visibility: "visible", opacity: 1, textColor: "#FFFFFF", fontWeight: "500" }, }}


                                            >

                                                <Text className="hover-text"
                                                    position="absolute"
                                                    visibility="hidden"
                                                    opacity={0}
                                                    w={{ base: "100%", md: "100%" }}
                                                    h="auto"
                                                    bottom={0}
                                                    p={{ base: "0", md: "5" }}
                                                    color={{ base: "#999", md: "#EEEEEE" }}
                                                    fontSize={{ base: "0.0px", md: "13.5px" }}
                                                    transition="visibility 0.5s, opacity 0.5s"
                                                >
                                                    {el.background_title}
                                                </Text>

                                            </Box>

                                            <Box
                                                m="auto"
                                                w={{ base: "100%", md: "100%" }}
                                                h={{ base: "100px", md: "100px" }}
                                                // border={"1px solid yellow"}
                                                display={"flex"}
                                            >
                                                <Box
                                                    //  border={"1px solid red"}
                                                    w="85%">
                                                    <Text pl={5} fontSize={{ base: "16px", md: "17px", lg: "18px" }} color={"#000000"} textAlign={"left"}>
                                                        {el.discription}
                                                    </Text>

                                                    <Text fontSize={{ base: "12px", md: "13px", lg: "13px" }} pl={5} >USD $ <Text as="span" fontWeight={"500"} fontSize={{ base: "20px", md: "23px" }}>{el.price}</Text></Text>
                                                </Box>

                                                <Box w="15%" h="100%"
                                                    //  border={"1px solid yellow"} 
                                                    position={"relative"}>
                                                    <Box
                                                        className="hover-box" visibility={"visible"} transition="visibility 0.5s, opacity 0.5s"
                                                        opacity={{ base: "1", md: "1", lg: "0" }} display={"flex"} alignContent={"center"} justifyContent={"center"} alignItems={"center"} w="35px" h="35px" borderRadius={"50%"} position={"absolute"} bottom="20%" bg="#1273de">
                                                        <ChevronRightIcon color="#fff" />
                                                    </Box>

                                                </Box>




                                            </Box>

                                        </Box>
                                    </Link>
                                ))}



                            </Grid>
                        )}






                    </Box>
                </Box>



            </Box>


        </div>
    )
}

export default Retail_store
