
import React, { useState } from 'react'
import Footer from "../Components/Footer.jsx"
import Navbar from "../Components/Navbar.jsx"
import { useToast, Box, Stack, RadioGroup, Radio, Heading, Text, Container, useDisclosure } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';
import CustomAlert from '../Alerts/CustomAlert.jsx';
const Page4 = () => {
  const navigate = useNavigate();
  const toast = useToast()
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [value, setValue] = useState('');
  console.log(value)
  const handleBack = () => {
    navigate("/page3")
  }
  const handleNext = () => {
    if (value == "") {
      onOpen()
    } else {
      const examplePromise = new Promise((resolve, reject) => {
        setTimeout(() => resolve(200), 5000)
      })
      toast.promise(examplePromise, {
        success: { title: 'Feedback saved.', description: 'Looks great' },
        error: { title: 'Feedback rejected !', description: 'Something wrong' },
        loading: { title: 'Feedback pending...', description: 'Please wait' },
      })
      examplePromise.then(() => {
        navigate("/buy");
      }).catch((error) => {
        console.error("An error occurred:", error);
      })
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
                <Radio value='$800' px={2} size='lg'></Radio> <Text textAlign={"justify"} fontSize={{ base: "14px", md: "16px" }}>
                  I want something to start creating professionally that fits my price range under $800 USD.
                </Text>
              </Box>

              <Box
                boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
                w={{ base: "100%", md: "100%" }}
                h="auto" px={5} py={5} mt="10px" borderRadius={"md"} display={"flex"}
              >
                <Radio value='$800 - $1,300' px={2} size='lg'></Radio>  <Text textAlign={"justify"} fontSize={{ base: "14px", md: "16px" }}>
                  I want high quality yet affordable, fitting a price range between $800 - $1,300 USD.
                </Text>
              </Box>


              <Box
                boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
                w={{ base: "100%", md: "100%" }}
                h="auto" px={5} py={5} mt="10px" borderRadius={"md"} display={"flex"}
              >
                <Radio value='$1,300 - $1,800' px={2} size='lg'></Radio> <Text textAlign={"justify"} fontSize={{ base: "14px", md: "16px" }}>
                  I want something with an advanced comprehensive experience, price range between $1,300 - $1,800 USD.
                </Text>
              </Box>

              <Box
                boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
                w={{ base: "100%", md: "100%" }}
                h="auto" px={5} py={5} mt="10px" borderRadius={"md"} display={"flex"}
              >
                <Radio value='$1,800' px={2} size='lg'></Radio>  <Text textAlign={"justify"} fontSize={{ base: "14px", md: "16px" }}>
                  I want a top-tier choice, price can be over $1,800 USD.
                </Text>
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
                  onClick={handleBack}
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

export default Page4
