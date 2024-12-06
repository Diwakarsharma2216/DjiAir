import React from 'react'
import { Text, Box, Image, Grid } from "@chakra-ui/react";
import { Link } from 'react-router-dom';
const Camera_Drones = [
    { img_url: "https://dji-official-fe.djicdn.com/dps/3b7953435e791d6a56253d87584e34cf.png", name: "Dji Mavic", redirect_to: "/1" },
    { img_url: "https://dji-official-fe.djicdn.com/dps/77738ff32f7a228fc58b4f401261e481.png", name: "Dji Air", redirect_to: "/2" },
    { img_url: "https://dji-official-fe.djicdn.com/dps/5698cb42a9a1fdce69e22f30550d9767.png", name: "Dji Mini", redirect_to: "/3" },
    { img_url: "https://dji-official-fe.djicdn.com/dps/97e1b5ab20211e739898969647666de1.png", name: "Dji Avata2", redirect_to: "/3" },
    { img_url: "https://dji-official-fe.djicdn.com/dps/d13ba498aecd93533f69bcd1500458af.png", name: "Dji Inspire2", redirect_to: "/4" },
    { img_url: "https://dji-official-fe.djicdn.com/dps/445acaa272ac55184d736f9518c50b3c.png", name: "Dji FPV", redirect_to: "/5" },
    { img_url: "https://dji-official-fe.djicdn.com/dps/b429552c65fa90e612204031c752b2e0.png", name: "RC", redirect_to: "/6" },
    { img_url: "https://dji-official-fe.djicdn.com/dps/f14c7c1d91574014937b8f52e8226e1a.png", name: "Dji Power", redirect_to: "/7" },
]

const Hand_Held = [
    { img_url: "https://dji-official-fe.djicdn.com/dps/7c8319405a3529d93c8fa583fa70a1a6.png", name: "Osmo Pocket", redirect_to: "/1" },
    { img_url: "https://dji-official-fe.djicdn.com/dps/423f5cf385e90a9c6fb7ff5ed75c002b.png", name: "Osmo Action", redirect_to: "/2" },
    { img_url: "https://dji-official-fe.djicdn.com/dps/ef8311c4c307fb42deb65afd23b43269.png", name: "Osmo Mobile", redirect_to: "/3" },
    { img_url: "https://dji-official-fe.djicdn.com/dps/ea988e584e6816ddae6b6175f97ed51d.png", name: "Dji Mic", redirect_to: "/3" },
    { img_url: "https://dji-official-fe.djicdn.com/dps/5cc2e019595adec2e1b8d1319be88b81.png", name: "Ronin Cinema", redirect_to: "/4" },
    { img_url: "https://dji-official-fe.djicdn.com/dps/5417cd502563ad2025951f030fb69a99.png", name: "Ronin Stabilizer", redirect_to: "/5" },
    { img_url: "https://dji-official-fe.djicdn.com/dps/479ea683313c83130337ce83a127ebce.png", name: "Dji Pro Kit", redirect_to: "/6" },
    { img_url: "https://dji-official-fe.djicdn.com/dps/44ff17e390fe63b3ff6956cf2b870e1f.svg", name: "Compare", redirect_to: "/7" },
]

function EightImage() {

    const imageData = location.pathname === "/buy/camera_drones" ? Camera_Drones : Hand_Held;

    return (
        <div>
            <Box w="100%" h={{ base: "21.5vh", md: "20vh" }} bg="#F5F5F5">

                <Box w={{ base: "100%", md: "80%" }} m="auto" h="100%" bg="#" style={{ overflow: "hidden" }}>
                    {/* Render images based on currentIndex */}
                    <Grid templateColumns={{ base: 'repeat(4, 1fr)', md: 'repeat(8, 1fr)' }} gap={1}>

                        {imageData.map((el, i) => (

                            <Box
                                key={i}
                                display={"flex"}
                                flexDirection={"column"}
                                justifyContent={"center"}
                                alignContent={"center"}
                                w='100%'
                                h={{ base: "10vh", md: "95%" }}   >


                                <Image m="auto" src={el.img_url} w="80%" h="80%" alt={el.name} />

                                <Link to={el.redirect_to}>
                                    <Text
                                        _hover={{ textColor: "#26b0ee", cursor: "pointer" }}
                                        fontSize={{ base: "xs", md: "sm" }}
                                        textAlign={"center"}>{el.name}</Text>
                                </Link>


                            </Box>

                        ))}

                    </Grid>

                </Box>

            </Box>
        </div>
    )
}

export default EightImage

