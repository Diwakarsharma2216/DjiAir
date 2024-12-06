import React from 'react'
import { Text, Box, Image } from "@chakra-ui/react"

function Online_store() {

    const handleNavtoAmazon = () => {
        window.location.href = "https://www.amazon.com/stores/page/A2F1C74C-8865-4820-AD23-3C56F28F254C?channel=EC_Store";
    }
    const handleNavtoEbay = () => {
        window.location.href = "https://www.ebay.com/str/djiofficialstore";
    }
    return (
        <>
            <Box w="100%" h="auto" >
                <Box w="100%" h="100%" display={"flex"} flexDir={{ base: "column", md: "row", lg: "row" }}>
                    <Box m={{ base: "0", md: "5px", lg: "5px" }} my={{ base: "10px", md: "10px", lg: "10px" }} display={"flex"} alignItems={"center"} flexDirection={"column"} justifyContent={"center"} w={{ base: "100%", md: "50%", lg: "50%" }} h="150px" bg="#eee">
                        <Image w="23%" h="25%" src="https://stormsend1.djicdn.com/stormsend/uploads/c909b8328b78b615cbcfc6db93020b3c.png" alt="amazon.png" />
                        <Text textDecoration={{ base: "underline", md: "none" }} onClick={handleNavtoAmazon} fontSize={{ base: "14px", md: "22px", lg: "25px" }} _hover={{ textDecoration: "underline", cursor: "pointer" }} fontWeight={"500"}>amazon DJI official store {">"}</Text>
                    </Box>
                    <Box m={{ base: "0", md: "5px", lg: "5px" }} my={{ base: "10px", md: "10px", lg: "10px" }} display={"flex"} flexDirection={"column"} alignItems={"center"} justifyContent={"center"} w={{ base: "100%", md: "50%", lg: "50%" }} h="150px" bg="#eee">
                        <Image w="23%" h="25%" src="https://stormsend1.djicdn.com/stormsend/uploads/f2e345c11d328783636d833ceb56f903.png" alt="ebay.png" />
                        <Text textDecoration={{ base: "underline", md: "none" }} onClick={handleNavtoEbay} fontSize={{ base: "14px", md: "22px", lg: "25px" }} _hover={{ textDecoration: "underline", cursor: "pointer" }} fontWeight={"500"}>ebay DJI official store {">"}</Text>
                    </Box>
                </Box>

            </Box>

        </>
    )
}

export default Online_store
