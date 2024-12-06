
import React, { useState } from 'react'
import Footer from "../Components/Footer.jsx"
import Navbar from "../Components/Navbar.jsx"
import { Box, Stack, RadioGroup, Radio, Heading, Text, Container, useDisclosure } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';
import CustomAlert from '../Alerts/CustomAlert.jsx';
const Page3 = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState('');
  console.log(value)
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handlePage2 = () => {
    navigate("/page2")
  }
  const handleNext = () => {
    if (value == "") {
      onOpen()
    } else {
      navigate("/page4")

    }
  }
  return (
    <>

      <Navbar />
      <Box w="100%" h="auto" bg="#F5F5F5">
        <Container maxW={'4xl'} py={16} as={Stack} spacing={12}>
          <RadioGroup onChange={setValue} value={value}>
            <Stack spacing={0} align={'center'}>
              <Heading>What would you most like to film with your drone?</Heading>
              <Text textAlign={"center"} fontSize={{ base: "14px", md: "18px" }} color="grey">Select one</Text>

              <Box
                boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
                w={{ base: "100%", md: "100%" }}
                h="auto" px={5} py={5} mt="10px" borderRadius={"md"} display={"flex"}
              >
                <Radio value='software_based' px={2} size='lg'></Radio> <Text textAlign={"justify"} fontSize={{ base: "14px", md: "16px" }}>
                  Yes. I edit using professional software.</Text>
              </Box>

              <Box
                boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
                w={{ base: "100%", md: "100%" }}
                h="auto" px={5} py={5} mt="10px" borderRadius={"md"} display={"flex"}
              >
                <Radio value='non_software_based' px={2} size='lg'></Radio>  <Text textAlign={"justify"} fontSize={{ base: "14px", md: "16px" }}>
                  Rarely. I prefer to share content directly or use quick editing software/apps.</Text>
              </Box>


              <Box py={6} w="100%" h="auto" display={"flex"} justifyContent={"center"}>
                <Box
                  w={{ base: "120px", md: "150px" }}
                  h={{ base: "35px", md: "40px" }}
                  borderTopRightRadius={"20px"}
                  borderTopLeftRadius={"20px"}
                  borderBottomRightRadius={"20px"}
                  borderBottomLeftRadius={"20px"}
                  bg="#ccd1d5"
                  display={'flex'}
                  justifyContent={"center"} alignContent={"center"} alignItems={"center"}
                  onClick={handlePage2}
                  _hover={{ cursor: "pointer" }}
                  mr="10px"
                >

                  <Text textAlign={"center"} color="#000">Back</Text>
                </Box>
                <Box
                  w={{ base: "120px", md: "150px" }}
                  h={{ base: "35px", md: "40px" }}
                  borderTopRightRadius={"20px"}
                  borderTopLeftRadius={"20px"}
                  borderBottomRightRadius={"20px"}
                  borderBottomLeftRadius={"20px"}
                  bg="#000"
                  display={'flex'}
                  justifyContent={"center"} alignContent={"center"} alignItems={"center"}
                  onClick={handleNext}
                  _hover={{ cursor: "pointer" }}
                >
                  <Text textAlign={"center"} color="#fff">Next</Text>
                </Box>
              </Box>

            </Stack>
          </RadioGroup>
        </Container>
      </Box>
      <CustomAlert isOpen={isOpen} onClose={onClose} />

      <Footer />

    </>
  )
}

export default Page3
