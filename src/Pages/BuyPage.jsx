import React, { useState } from 'react';
import Navbar from "../Components/Navbar.jsx";
import Footer from '../Components/Footer'
import { Text, Box, Divider } from "@chakra-ui/react"
import Retail_store from '../BuysComponents.jsx/Retail_store.jsx';
import Online_store from '../BuysComponents.jsx/Online_store.jsx';
function BuyPage() {
  const [selectedOption, setSelectedOption] = useState("retail"); // Default selected option

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };
  return (



    <div>

      <Navbar />
      <Box w={{ base: "100%", md: "80%" }} m="auto" h={{ base: "auto", md: "auto" }}>

        <Text w={{ base: "90%", md: "90%", lg: "100%" }} m="auto" color="#999" fontSize={{ base: "xs", md: "13px", lg: "12.8px" }}>Home / Where To Buy / Retail Stores</Text>
        <Text w={{ base: "90%", md: "90%", lg: "100%" }} m="auto" mt={{ base: "10px", md: "15px", lg: "20px" }} fontWeight={"500"} color="#000" fontSize={{ base: "2xl", md: "20px", lg: "32.8px" }}>Where To Buy</Text>
        <Divider />



        {/* Where To Buy Options part here----------------->>> */}
        <Box display={"flex"} alignContent={"center"} alignItems={"center"} justifyContent={"center"} m="auto" w={{ base: "90%", md: "90%", lg: "100%" }} h={{ base: "10vh", md: "15vh", lg: "15vh" }} borderTop="1px solid #CFD8DC" borderBottom="1px solid #CFD8DC" >
          <Box display={"flex"} alignContent={"left"} gap={"20px"} alignItems={"center"} justifyContent={"left"} w="100%" h={{ base: "30%", md: "35%", lg: "33%" }}
          // border={"1px solid red"}
          >
            <Box  onClick={() => handleOptionClick("online")}
            cursor="pointer"
            backgroundColor={selectedOption === "online" ? "#000" : "transparent"}
            color={selectedOption === "online" ? "#fff" : "#000"}
              border={"0.5px solid #bbb"} _hover={{ bg: "#000", textColor: "#fff" }} display={"flex"} alignContent={"center"} alignItems={"center"} justifyContent={"center"} w="auto" h="100%" borderTopRightRadius={"15px"} borderTopLeftRadius={"15px"} borderBottomRightRadius={"15px"} borderBottomLeftRadius={"15px"}>
              <Text p={1} ml={"4px"} mr="4px" fontSize={{ base: "10px", md: "12px", lg: "12px" }}>Official Online store</Text>
            </Box>
            <Box  onClick={() => handleOptionClick("retail")}
            cursor="pointer"
            backgroundColor={selectedOption === "retail" ? "#000" : "transparent"}
            color={selectedOption === "retail" ? "#fff" : "#000"}
              border={"0.5px solid #bbb"} _hover={{ bg: "#000", textColor: "#fff" }} display={"flex"} alignContent={"center"} alignItems={"center"} justifyContent={"center"} w="auto" h="100%" borderTopRightRadius={"15px"} borderTopLeftRadius={"15px"} borderBottomRightRadius={"15px"} borderBottomLeftRadius={"15px"}>
              <Text p={1} ml={"4px"} mr="4px" fontSize={{ base: "10px", md: "12px", lg: "12px" }}>Retail store</Text>
            </Box>
          </Box>
        </Box>
        {/* Where To Buy Options part ends here----------------->>> */}


        {/* all select tag part starting here------>>> */}
        <Box w="100%" h="20px" ></Box>


        {selectedOption === "retail" && <Retail_store />}
        {selectedOption === "online" && <Online_store />}

        {/* all select tag part ending here------>>> */}







      </Box>

      <Footer />

    </div>
  )
}

export default BuyPage
