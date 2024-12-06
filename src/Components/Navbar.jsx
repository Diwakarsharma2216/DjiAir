
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Flex, Button, useDisclosure, Image, Text, VStack, useToast, Center } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { FiShoppingCart, FiSearch, FiUser } from 'react-icons/fi';
import { CloseIcon } from '@chakra-ui/icons';
const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isScrolled, setIsScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate()
  const toast = useToast()
  const isAuth = localStorage.getItem("USER_ID")
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleCameraDrone = () => {
    navigate(`/buy/camera_drones`)
  }
  const handleHandHeld = () => {
    navigate("/buy/handheld")
  }
  const handleWhereToBuy = () => {
    navigate(`/buy`)
  }
  const handleHome = () => {
    navigate(`/`)
  }
  const handleCloseNav = () => {
    onClose()
  }

  const handleLogin = () => {
    navigate("/login")
  }
  const handleLogout = () => {
    // localStorage.clear()
    const examplePromise = new Promise((resolve, reject) => {
      setTimeout(() => resolve(200), 2000)
    })
    toast.promise(examplePromise, {
      success: { title: 'You are logged out', description: 'Login again to get full access...' },
      error: { title: 'logging out rejected', description: `Something wrong to logout user UID :- ${isAuth}` },
      loading: { title: 'status pending..', description: 'kindly wait' },
    })
    examplePromise.then(() => {
      localStorage.clear()
    }).catch((error) => {
      console.error(`An error occurred: to logging out user :-  ${isAuth}`, error);
    })
  }
  const handleSignup = () => {
    navigate("/signup")
  }
  const handleCart = () => {
    navigate("/cart")
  }
  // const handleAdminPanel = () =>{
  //   navigate("/admin/add/products")
  // }






  return (
    <Box
      // border={"1px solid lime"}
      w="100%" h='auto' bg="#fff"
      position={isScrolled ? "fixed" : "static"}
      zIndex={isScrolled ? "9999" : "auto"}
      opacity={isScrolled ? 0.80 : 1} // Adjust opacity values as needed
    >
      <Flex
        // border={"2px solid red"}
        w={{ base: "100vw", md: "80vw" }}
        m={{ base: "0%", md: "auto" }}
        h={{ base: "70px", md: "70px" }}
        bgColor="#fff"
      >
        <Box
          // border={"5px solid cyan"}
          w={{ base: "100%" }} h="auto" display={{ base: "flex", md: "none" }} alignContent={"center"} alignItems={"center"} justifyContent={"space-between"} flexDirection={{ base: "row" }}>
          <Button
            display={{ base: 'block', md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
            leftIcon={<HamburgerIcon />}
            variant="unstyled"
            ml={0}
            size={"lg"}
          >

          </Button>
          <Box onClick={handleHome} display={{ base: 'block', md: 'none' }} w="55px" h={{ base: "55px", md: "55px" }}  >
            <Image w="100%" h="100%" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAaVBMVEX///
          8VFRUAAAALCwvLy8s8PDxpaWnj4+P7+/sSEhJ8fHzIyMj09PRsbGwGBgYzMzNxcXHd3d3X19fr6+tZWVlKSkqFhYVSUlKWlpZERETAwMCMjIys
          rKy5ubkuLi4nJyeioqIgICBhYWHAKhIRAAAG90lEQVR4nO2b63qqOhCGIUEJSEHEAyIIeP8XuSSJtXuvfKGSuqHPnvdnKWGSzCkz0fMIgiAIgi
          AIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgnAmXMdmdnNLNoGOmdnnc0s2gRXzTbBLMrdkr5OY5xKxem7JJrAxTyZdbeaWbAIx0LKPYm7JJ
          pClZi27zC3YBMI+Mk2G97/RZGpunAw7/MYo8wFMZv0bHfMBmMxxbskmsLlyo8m0zdySTeBiNpn0HM4t2QTWwGRucws2gfBkNhlezi3ZBBqzyUT9
          b3TMJTObTDa3YBNItijKzC3ZAyGSIgzz3UAA2Cg12h3AZFQuk4O31csCDf4zjjDZ1Zfter/fnw6Hw3lgBbh28oXanJj5TGbMIs6ML2cfeiXMYx9+
          IkQ16+zac3niTdOUcRtMLW5p3hjee8IbXJ15EKZcXZemxqdnd+fR+IzxKDKv9F8G7svMq0AmE6shM3N20Afy8e1d9ib2zBzKzbB4WHkvWBmjjM+
          UtBewb1f5tABZXep6EAoz83fhZCr5WoOO//Jpgs6gW/m4Alnd1fG4XZxem0vEZBUpASbDTnLUHRiVKQOHWZ3b2SE5pi+omJRWeqtwD6Tt5LBNb1z
          6h6t7U1YHchLLZEq5ekEEpLW6OqZMZmc2GZ93TnMJwRpBImUyogZFpla5OmQy6thWt0ZtiHy3Omj9TX/8lPYqlx4auHJ1MDv4jqubClrBv4l0GNI
          lMeQCtYFX5hw0YnKqIyFqKkjzh2UCJfFOypMjaZWidEDavfrqGYSoymUuCfjonTTtdkUi/mZ4Twgordw3uPQqB63NK+GrfZtKCGNMxKzpawIdsz
          KZFpRt5L4JYDLM7SAUgCX6VAhEgdZWKUoFpFWuLkSJmdNxW4BoMAxszyuAtGmmXB2KMrGczKa1hqiJJBYts6vvEUmrTAYpoXJ1IERxR5PBWnayv
          9kDd9Tpcc2VDp3VoZVwS/9B4vuUClGgc5ndZHRWZz9uTwWnMnZfhhRFt2UFWnqd1aEQFXoOeibM2jB8NrMPi2ziKKVNruCxNatjK6f0P8Abc7RP
          Bq1tJ5+GKAdVrg71QS5O9g9ilz+aV+zsbVm09Gupu4UPnIdbXQbmZZzbTQZFcN2WRYdMlR2gENU7pf8Jdsxre7P4bD2sQCWUS48C9dg3R7A5Zqv
          6FuajFW+VbwVKqBudAt3psH9zDJDZDmsYWF+sfXM14qQUBSmhzg5QUcetLmOu0g2fXdnVF+X3qvDqIces0kigD46lzNy8vs81RCTmCB75SlqYHSh
          
          vheoy9m+O0cEz5oj6ogKeyphHsgMPBOqR/GkMmMtEI1EGFPDYQS0BOqxsZYDPwb61bidmULoaVd8EKYpyzIXZFKNUV//t+zaRHbb/rVV9AxBlfOW
          OKnCdJhtMRuAQ5ZSYoVbR6MCo5tWqx2jfVPov7FndVGCUGXEsATqNqPJ+YW6nf1b/33LZLgF2KkeuErM7E6LYIb+hAy1qp2u/jU46NyfHnEP7H4Lm
          pW6qzb+omqbuti2YC089La3ZZK5qrqj653ZzqIL2fycFxcw70GsocVCjQzde8qvZZBwv23Uw/k9Dn7NrVEVSJgOyOu7Yli1f6WJ+Yy6qmoNO/z5X
          S4+yur1TxuyVL/bLxiajAjjqZESRNHBQp4tSx8t23at9Gftcbio0wYr4WT4OVuDmkONNhpe7fzYe1xxgG07HxNK8gunK8Rb0qz1m+1ykRQjUYnq4
          B4FMZqR8Og64X/U6EeP6yIC6MvfZyuc5qnQ4X7a7L9NPKBpn6ePujoBFBR2EUHaQut+XSeIrY+lkPxBFfIit7f7ySN4L4MrG2um8d57LneZ4yyIc
          7MfoV/vtpXlU2ASSdShlPtqyZn7mfqrIN/d8qyzLyzGOt5IPzfqTx18+5PM4Ph7vL5RdXTeb/KsXanAZTtlEeFwbuf3kLWghRJIUmhDz+JdEd2n/
          MYYXmNuY/rMDnaCB3cL/G6hAbW/YmNMv+2VAebWcKOrFLb2NzYnhuThWxP9b8vLu4i0OXvfLFkfylaLIq/p4GHwrnsk9iviBS3fvfaxX8oJw1vbP
          8DQWdB2LSO/jMYE05d/NHHi20B854h4oJFroxghUJ7LxE5eu3wNovNg2pu/mFhqAbjLZNua2SCXzYOPFNpd2sT8+e/We7d36l2owngB3/yF8pM87
          J4G5YY63hS80wgyUL82Fs9Vy9wX2KsG2tPFibd/DV96MU4nW9VJ9suS7JdAhBf2ol7wt3tDKHLUZlUofymrhUxka5uNkt0sd5ItWMMluf82+IH+G
          eD4cTqfbehsfL2VdbfIwLEAzdGGIBPL8iQBBEARBEARBEARBEARBEARBEARBEARBEMT/kD91tWukUb8OYwAAAABJRU5ErkJggg==" />
          </Box>
          <Box onClick={handleWhereToBuy} w="70px" display={"flex"} alignItems={"center"} justifyContent={"space-evenly"} bgColor="rgb(33, 150, 243)" h="35px" borderRadius={"2xl"}>
            <FiShoppingCart color='#fff' /><Text color="#fff">Buy</Text>
          </Box>
        </Box>




        <Box
          pos={{ base: "absolute", md: null, lg: "relative" }}
          display={{ base: isOpen ? 'block' : 'none', md: 'block' }}
          w={{ base: "100%", md: "80%" }} right={{ base: "0%", md: "0%" }} h={{ base: "100vh", md: "70px" }} bgColor="#fff"
        // transition={"1s ease"} 
        // border={"2px solid green"}
        >


          <Box
            // border={"3px solid yellow"}
            bg="#fff"
            zIndex="9999"
            position={isOpen ? "fixed" : "absolute"}

            w={{ base: "100%", md: "80%" }} h={{ base: "80vh", md: "auto" }} justifyContent={"space-evenly"} display={"flex"} alignContent={"center"} alignItems={"center"} flexDirection={{ base: "column", md: "row" }} >

            <CloseIcon pos={{ base: "relative" }} right={"45%"} display={{ base: isOpen ? 'block' : 'none', md: 'block' }} onClick={handleCloseNav} />
            <Box
              //  border={"1px solid red"} 
              _hover={{ cursor: "pointer" }} w="55px" h={{ base: "55px", md: "55px" }} display={"flex"} alignContent={"center"} alignItems={"center"} >
              <Image onClick={handleHome} w="100%" h="100%"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pn
            y7AAAAaVBMVEX///8VFRUAAAALCwvLy8s8PDxpaWnj4+P7+/sSEhJ8fHzIyMj09PRsbGwG
            BgYzMzNxcXHd3d3X19fr6+tZWVlKSkqFhYVSUlKWlpZERETAwMCMjIysrKy5ubkuLi4nJyei
            oqIgICBhYWHAKhIRAAAG90lEQVR4nO2b63qqOhCGIUEJSEHEAyIIeP8XuSSJtXuvfKGSuqHP
            nvdnKWGSzCkz0fMIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgnAmXMdmdnNLN
            oGOmdnnc0s2gRXzTbBLMrdkr5OY5xKxem7JJrAxTyZdbeaWbAIx0LKPYm7JJpClZi27zC3YBM
            I+Mk2G97/RZGpunAw7/MYo8wFMZv0bHfMBmMxxbskmsLlyo8m0zdySTeBiNpn0HM4t2QTWwGR
            ucws2gfBkNhlezi3ZBBqzyUT9b3TMJTObTDa3YBNItijKzC3ZAyGSIgzz3UAA2Cg12h3AZFQu
            k4O31csCDf4zjjDZ1Zfter/fnw6Hw3lgBbh28oXanJj5TGbMIs6ML2cfeiXMYx9+IkQ16+zac3
            niTdOUcRtMLW5p3hjee8IbXJ15EKZcXZemxqdnd+fR+IzxKDKv9F8G7svMq0AmE6shM3N20Afy8
            e1d9ib2zBzKzbB4WHkvWBmjjM+UtBewb1f5tABZXep6EAoz83fhZCr5WoOO//Jpgs6gW/m4Aln
            d1fG4XZxem0vEZBUpASbDTnLUHRiVKQOHWZ3b2SE5pi+omJRWeqtwD6Tt5LBNb1z6h6t7U1YHc
            hLLZEq5ekEEpLW6OqZMZmc2GZ93TnMJwRpBImUyogZFpla5OmQy6thWt0ZtiHy3Omj9TX/8lP
            Yqlx4auHJ1MDv4jqubClrBv4l0GNIlMeQCtYFX5hw0YnKqIyFqKkjzh2UCJfFOypMjaZWidEDa
            vfrqGYSoymUuCfjonTTtdkUi/mZ4Twgordw3uPQqB63NK+GrfZtKCGNMxKzpawIdszKZFpRt5L
            4JYDLM7SAUgCX6VAhEgdZWKUoFpFWuLkSJmdNxW4BoMAxszyuAtGmmXB2KMrGczKa1hqiJJBYt
            s6vvEUmrTAYpoXJ1IERxR5PBWnayv9kDd9Tpcc2VDp3VoZVwS/9B4vuUClGgc5ndZHRWZz9uTw
            WnMnZfhhRFt2UFWnqd1aEQFXoOeibM2jB8NrMPi2ziKKVNruCxNatjK6f0P8Abc7RPBq1tJ5+GK
            AdVrg71QS5O9g9ilz+aV+zsbVm09Gupu4UPnIdbXQbmZZzbTQZFcN2WRYdMlR2gENU7pf8Jdsxr
            e7P4bD2sQCWUS48C9dg3R7A5Zqv6FuajFW+VbwVKqBudAt3psH9zDJDZDmsYWF+sfXM14qQUBS
            mhzg5QUcetLmOu0g2fXdnVF+X3qvDqIces0kigD46lzNy8vs81RCTmCB75SlqYHShvheoy9m+O0
            cEz5oj6ogKeyphHsgMPBOqR/GkMmMtEI1EGFPDYQS0BOqxsZYDPwb61bidmULoaVd8EKYpyzIXZ
            FKNUV//t+zaRHbb/rVV9AxBlfOWOKnCdJhtMRuAQ5ZSYoVbR6MCo5tWqx2jfVPov7FndVGCUGX
            EsATqNqPJ+YW6nf1b/33LZLgF2KkeuErM7E6LYIb+hAy1qp2u/jU46NyfHnEP7H4LmpW6qzb+o
            mqbuti2YC089La3ZZK5qrqj653ZzqIL2fycFxcw70GsocVCjQzde8qvZZBwv23Uw/k9Dn7NrVE
            VSJgOyOu7Yli1f6WJ+Yy6qmoNO/z5XS4+yur1TxuyVL/bLxiajAjjqZESRNHBQp4tSx8t23at9
            Gftcbio0wYr4WT4OVuDmkONNhpe7fzYe1xxgG07HxNK8gunK8Rb0qz1m+1ykRQjUYnq4B4FMZq
            R8Og64X/U6EeP6yIC6MvfZyuc5qnQ4X7a7L9NPKBpn6ePujoBFBR2EUHaQut+XSeIrY+lkPxBF
            fIit7f7ySN4L4MrG2um8d57LneZ4yyIc7MfoV/vtpXlU2ASSdShlPtqyZn7mfqrIN/d8qyzLyzG
            Ot5IPzfqTx18+5PM4Ph7vL5RdXTeb/KsXanAZTtlEeFwbuf3kLWghRJIUmhDz+JdEd2n/MYYXmN
            uY/rMDnaCB3cL/G6hAbW/YmNMv+2VAebWcKOrFLb2NzYnhuThWxP9b8vLu4i0OXvfLFkfylaLIq/
            p4GHwrnsk9iviBS3fvfaxX8oJw1vbP8DQWdB2LSO/jMYE05d/NHHi20B854h4oJFroxghUJ7Lx
            E5eu3wNovNg2pu/mFhqAbjLZNua2SCXzYOPFNpd2sT8+e/We7d36l2owngB3/yF8pM87J4G5YY6
            3hS80wgyUL82Fs9Vy9wX2KsG2tPFibd/DV96MU4nW9VJ9suS7JdAhBf2ol7wt3tDKHLUZlUofym
            rhUxka5uNkt0sd5ItWMMluf82+IH+GeD4cTqfbehsfL2VdbfIwLEAzdGGIBPL8iQBBEARBEARBEA
            RBEARBEARBEARBEARBEMT/kD91tWukUb8OYwAAAABJRU5ErkJggg==" />
            </Box>




            <Text _hover={{ cursor: "pointer" }} textAlign={"left"} onClick={handleCameraDrone} fontWeight={{ base: "500", md: "400", lg: "400" }} fontSize={{ base: "16px", md: "14.5px" }} color="#4d4d4d" ml={{ base: "0px", md: "25px" }} mr={{ base: "0px", md: "10px" }}  >
              Camera Drones
            </Text>
            <Text _hover={{ cursor: "pointer" }} onClick={handleHandHeld} fontWeight={{ base: "500", md: "400", lg: "400" }} fontSize={{ base: "16px", md: "14.5px" }} color="#4d4d4d" ml={{ base: "0px", md: "10px" }} mr={{ base: "0px", md: "10px" }} mt={{ basE: "15px", md: "0px" }} mb={{ base: "15px", md: "0px" }}  >
              Handheld
            </Text>
            <Text _hover={{ cursor: "pointer" }} onClick={handleWhereToBuy} fontWeight={{ base: "500", md: "400", lg: "400" }} fontSize={{ base: "16px", md: "14.5px" }} color="#4d4d4d" ml={{ base: "0px", md: "10px" }} mr={{ base: "0px", md: "10px" }} mt={{ basE: "15px", md: "0px" }} mb={{ base: "15px", md: "0px" }} >
              Where to buy
            </Text>
            <Text _hover={{ cursor: "pointer" }} fontWeight={{ base: "500", md: "400", lg: "400" }} fontSize={{ base: "16px", md: "14.5px" }} color="#4d4d4d" ml={{ base: "0px", md: "10px" }} mr={{ base: "0px", md: "10px" }} mt={{ basE: "15px", md: "0px" }} mb={{ base: "15px", md: "0px" }}  >
              Specialize
            </Text>
            <Text _hover={{ cursor: "pointer" }}  fontWeight={{ base: "500", md: "400", lg: "400" }} fontSize={{ base: "16px", md: "14.5px" }} color="#4d4d4d" ml={{ base: "0px", md: "10px" }} mr={{ base: "0px", md: "10px" }} mt={{ basE: "15px", md: "0px" }} mb={{ base: "15px", md: "0px" }}  >
              Support
            </Text>
            <Center w="70px" h="30px" flexDirection={"row"} justifyContent={"space-evenly"} alignItems={"center"} alignContent={"center"}>
              <Text onClick={handleCart}  _hover={{ cursor: "pointer" }} fontWeight={{ base: "500", md: "400", lg: "400" }} fontSize={{ base: "16px", md: "14.5px" }} color="#4d4d4d" ml={{ base: "0px", md: "10px" }} mr={{ base: "0px", md: "10px" }} mt={{ base: "15px", md: "0px" }} mb={{ base: "15px", md: "0px" }} >
                Cart
              </Text>
              <FiShoppingCart display={{ base: isOpen ? 'none' : 'none', md: 'block' }} size={"20px"} />
            </Center>
            <Text onClick={handleSignup} display={{ base: isOpen ? 'block' : 'none', md: 'none' }} _hover={{ cursor: "pointer" }} fontWeight={{ base: "500", md: "400", lg: "400" }} fontSize={{ base: "16px", md: "14.5px" }} color="#4d4d4d" ml={{ base: "0px", md: "10px" }} mr={{ base: "0px", md: "10px" }} mt={{ base: "15px", md: "0px" }} mb={{ base: "15px", md: "0px" }} >
                Signup
              </Text>
              <Text onClick={isAuth !== null ? handleLogout : handleLogin} display={{ base: isOpen ? 'block' : 'none', md: 'none' }} _hover={{ cursor: "pointer" }} fontWeight={{ base: "500", md: "400", lg: "400" }} fontSize={{ base: "16px", md: "14.5px" }} color="#4d4d4d" ml={{ base: "0px", md: "10px" }} mr={{ base: "0px", md: "10px" }} mt={{ base: "15px", md: "0px" }} mb={{ base: "15px", md: "0px" }} >
              {isAuth == null ? "Login" : "Logout"}
              </Text>
           
            {/* <Box w={{base:"0px",md:"15%"}}   h="auto" border={"1px solid green"}>

        </Box> */}

          </Box>


        </Box>
        <Box display={{ base: "none", md: "flex" }} alignItems={"center"} justifyContent={"space-evenly"} w={{ base: "0%", md: "10%" }} h="55px" >
          <Box w="70px" display={"flex"} alignItems={"center"} justifyContent={"space-evenly"} h="35px" borderRadius={"2xl"}>
            <FiSearch style={{ fontSize: '20px', strokeWidth: '1.4px' }} />
            <FiUser style={{ fontSize: '20px', strokeWidth: '1.4px' }}
              position="relative"
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            />
            {showDropdown && (
              <VStack
                position="absolute"
                top="35px"
                right="18%"
                bg="white"
                shadow="md"
                borderRadius="md"
                p="2"
                spacing="2"
                zIndex="1"
                onMouseEnter={() => setShowDropdown(true)}
                onMouseLeave={() => setShowDropdown(false)}
              >
                <Button w="full" onClick={handleSignup} size="sm" backgroundColor={"#fff"} _hover={{ bgColor: "#fff", textColor: "blue.500" }}>Signup</Button>
                <Button w="full" onClick={isAuth !== null ? handleLogout : handleLogin} backgroundColor={"#fff"} _hover={{ bgColor: "#fff", textColor: "blue.500" }} size="sm">{isAuth == null ? "Login" : "Logout"}</Button>
              </VStack>
            )}
          </Box>
        </Box>
        <Box onClick={handleWhereToBuy} _hover={{ cursor: "pointer" }} display={{ base: "none", md: "flex" }} alignItems={"center"} justifyContent={"space-evenly"} w={{ base: "0%", md: "10%" }} h="55px" >
          <Box w="70px" display={"flex"} alignItems={"center"} justifyContent={"space-evenly"} bgColor="rgb(33, 150, 243)" h="35px" borderRadius={"2xl"}>
            <FiShoppingCart color='#fff' /><Text color="#fff">Buy</Text>
          </Box>
        </Box>
      </Flex>
    </Box>

  );
};

export default Navbar;
