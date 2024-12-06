
import React, { useState, useContext } from 'react';
import axios from "axios";
import { Box, Image, Input, Text, IconButton, InputGroup, InputRightElement, Checkbox, Button, useToast } from "@chakra-ui/react";
import { HiEye, HiEyeOff } from 'react-icons/hi';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from "../Contexts/AuthContextProvider"

function Login() {
  const { login, isAuth } = useContext(AuthContext)
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const toast = useToast()
  // console.log(isAuth)
  const loginrData = {
    email: email,
    password: password
  }
  const handleEMAILChange = (e) => {
    setEmail(e.target.value.toLowerCase())
  }
  const handlePASSChange = (e) => {
    setPassword(e.target.value)
  }

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {

    e.preventDefault();
    // console.log(loginrData)
    try {

      const response = await axios.post('https://drone-site-be2k24.onrender.com/users/login', loginrData);

      console.log({ msg: "login success" }, { status: response.status });
      // saving jwt token in local storage..
      const { token, user } = response.data;
      localStorage.setItem("USER_TOKEN", token,);
      localStorage.setItem("USER_ID", user.userId);
      localStorage.setItem("USER_CART", user.cart);
      localStorage.setItem("USER_EMAIL", user.email);


      if (response.status == 200) {
        toast({
          title: 'Login successfull.',
          description: "Welcome to DJI.com",
          status: 'success',
          duration: 3000,
          isClosable: true,

        })
        setTimeout(
          () => {
            login(token)
            navigate(`/`)
          }, 1500)
      }
    } catch (error) {
      console.error('Error in login :', error);
      // alert('Login failed. Wrong email or password.');
      setTimeout(() => {
        toast({
          title: error.message === "Request failed with status code 400" ? "Wrong email or password...😬" : "We are enable to login your account...😥",
          description: `${error.message}`,
          status: 'error',
          duration: 5000,
          isClosable: true,
        })
      }, 500);
    }
  }
  // console.log(isAuth)
  return (
    <>
      <Box
        w="100%" h="100vh"
        bg={`url("https://dji-official-fe.djicdn.com/cms/uploads/81b484ebfa1d073281c2e2ee6eca7cd1.jpg")`}
        bgSize="cover"
        bgPosition="center"
        position={"relative"}
      >

        <Box position={"absolute"}
          w={{ base: "98%", md: "31%" }} h={{ base: "80vh", md: "95vh" }} bg="rgba(225,225,225,0.6)" top={{ base: "10%", md: "2.5%" }} left={{ base: "1%", md: "33.9%" }}
        >

          <Box w="100%" h="100%" p={"30px"}>
            <Box w="55px" h={{ base: "55px", md: "55px" }}>
              <Image
                w="100%"
                h="100%"
                src="data:image/png;base64,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"
                style={{ mixBlendMode: 'color-burn' }}
              />
            </Box>
            <Text mt="10px" color="#000" fontSize={{ base: "xl", md: "22px" }} fontWeight={"500"}>Log in to your DJI account</Text>
            <Text mt="10px" color="#111" fontSize={{ base: "12px", md: "12px" }} fontWeight={"400"}>Please enter your email address</Text>
            <Input mt="10px" textColor={"#fff"} type='text' border={"0.5px solid #dadada"} onChange={handleEMAILChange} />
            <Text mt="30px" color="#111" fontSize={{ base: "12px", md: "12px" }} fontWeight={"400"}>password</Text>
            <InputGroup mt="10px">
              <Input
                type={showPassword ? 'text' : 'password'}
                border={"0.5px solid #dadada"}
                textColor={"#fff"} onChange={handlePASSChange}
              />
              <InputRightElement>
                <IconButton
                  variant="ghost"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                  icon={showPassword ? <HiEye /> : <HiEyeOff />}
                  onClick={handleTogglePassword}
                />
              </InputRightElement>
            </InputGroup>
            <Text mt="10px" color="#fff" fontSize={{ base: "12px", md: "12px" }} fontWeight={"400"}>If you forget your password</Text>
            <Text color="#000" mt="20px" fontSize={{ base: "12px", md: "12px" }} >Check it to receive exclusive benefites, latest updates and offers from DJI.</Text><Checkbox mt="5px"></Checkbox>

            <Box mt="30px"><Button onClick={handleSubmit} _hover={{ bg: '#000' }} w="100%" bg="#212121" h="40px"><Text fontWeight={"400"} color={"#fff"}>Login</Text></Button></Box>
            <Link to="/signup"><Text mt="40px" color={"#000"} align={"center"} fontSize={{ base: "12px", md: "12px" }}>Are you a new user? <span style={{ color: "#fff", fontSize: "12px", fontWeight: "300" }}>Create a new account</span></Text></Link>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Login;
