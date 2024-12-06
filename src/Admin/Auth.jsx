import React, { useContext, useEffect, useState } from 'react'
import AdminAlert from './AdminAlert.jsx'
'use client'

import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    useColorModeValue,
    HStack,
    Avatar,
    AvatarBadge,
    IconButton,
    Center,
    Text,
    Spinner,
    useDisclosure,
    useToast
} from '@chakra-ui/react'
import { SmallCloseIcon } from '@chakra-ui/icons'
import axios from 'axios'
import { AuthContext } from "../Contexts/AuthContextProvider.jsx"
import { useNavigate } from 'react-router-dom'


export default function UserProfileEdit() {
    const { login, isAuth } = useContext(AuthContext)
    const [clicked, setClicked] = useState(false);
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [customAlert, setCustomAlert] = useState("")
    const { isOpen, onOpen, onClose } = useDisclosure();
    const navigate = useNavigate()
    const toast = useToast()
    const handleName = (e) => {
        setName(e.target.value)
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }
    const loginData = {
        email: email,
        password: password
    }
    const signupData = {
        admin_name: name,
        email: email,
        password: password
    }
    const BASE_URL = "https://drone-site-be2k24.onrender.com/"
    const handleAuth = async (e) => {
        e.preventDefault();
        if (clicked) {
            //    making post req for Signup here...
            if (signupData.admin_name === "" || null) {
                setCustomAlert("Please provide your name😥")
                onOpen()
            }
            else if (signupData.email === "" || null) {
                setCustomAlert("Please provide correct email address 😥")
                onOpen()
            } else if (signupData.password === "" || null) {
                setCustomAlert("Please enter correct password 😥")
                onOpen()
            } else {
                setLoading(true)
                const res = await axios.post(`${BASE_URL}admin/register`, signupData)
                if (res.status === 200) {
                    setLoading(false)
                    setClicked(!true)
                    setName("");
                    toast({
                        title: 'Signup Success',
                        description: "We have created you account.",
                        status: 'success',
                        duration: 5000,
                        isClosable: true,
                    })
                }
            }


        } else {
            //    making post req for Login here...
            if (loginData.email === "" || null) {
                setCustomAlert("Please provide valid email address 😥")
                onOpen()
            } else if (loginData.password === "" || null) {
                setCustomAlert("Please enter your password 😥")
                onOpen()
            } else {
                setLoading(true)
                try {
                    const res = await axios.post(`${BASE_URL}admin/login`, loginData)
                    if (res.status === 200) {
                        const adminToken = res.data.token;
                        localStorage.setItem("ADMIN_TOKEN", adminToken)
                        setLoading(false)
                        setTimeout(
                            () => {
                                login(adminToken)
                                navigate(`/admin/add/products`)
                            }, 1500)
                    }


                } catch (error) {
                    setLoading(false)
                    console.log("new error in logging Admin ", error)
                }

            }

        }

    }
    const toggleForms = () => {
        clicked ? setClicked(!true) : setClicked(true)
    }
    return (
        <>
            {
                loading ? (
                    <div>
                        <Center w="100%" h="100vh"><Spinner /></Center>
                    </div>
                ) : (

                    <Flex
                        transition={"1s ease"}
                        minH={'100vh'}
                        align={'center'}
                        justify={'center'}
                        bg={useColorModeValue('gray.50', 'gray.800')}>
                        <Stack
                            spacing={4}
                            w={'full'}
                            maxW={'md'}
                            bg={useColorModeValue('white', 'gray.700')}
                            rounded={'xl'}
                            boxShadow={'lg'}
                            p={6}
                            my={12}>
                            <Heading lineHeight={1.1} fontSize={{ base: '2xl', sm: '3xl' }}>
                                Admin {clicked ? "Sign up" : "Login"}
                            </Heading>
                            <FormControl id="userName">
                                <FormLabel></FormLabel>
                                <Stack direction={['column', 'row']} spacing={6}>
                                    <Center>
                                        <Avatar size="xl" src="https://bit.ly/sage-adebayo">
                                            <AvatarBadge
                                                as={IconButton}
                                                size="sm"
                                                rounded="full"
                                                top="-10px"
                                                colorScheme="red"
                                                aria-label="remove Image"
                                                icon={<SmallCloseIcon />}
                                            />
                                        </Avatar>
                                    </Center>

                                </Stack>
                            </FormControl>
                            {clicked ? (
                                <FormControl id="userName" isRequired>
                                    <FormLabel>Admin's name</FormLabel>
                                    <Input
                                        placeholder="your name"
                                        _placeholder={{ color: 'gray.500' }}
                                        type="text"
                                        onChange={handleName}
                                    />
                                </FormControl>
                            ) : (
                                <></>
                            )}

                            <FormControl id="email" isRequired>
                                <FormLabel>Email address</FormLabel>
                                <Input
                                    placeholder="your-email@example.com"
                                    _placeholder={{ color: 'gray.500' }}
                                    type="email"
                                    onChange={handleEmail}
                                />
                            </FormControl>
                            <FormControl id="password" isRequired>
                                <FormLabel>Password</FormLabel>
                                <Input
                                    placeholder="password"
                                    _placeholder={{ color: 'gray.500' }}
                                    type="password"
                                    onChange={handlePassword}
                                />
                            </FormControl>
                            <Text textAlign={"center"} fontSize={{ base: "14px", md: "14px" }}>
                                {clicked ? (
                                    <>
                                        <span>I already have an account</span> <Text as={"span"} _hover={{ cursor: "pointer", color: "blue.500" }} style={{ fontWeight: 'bold', color: "skyblue" }} onClick={toggleForms}>Log in </Text><span>here</span>
                                    </>
                                ) : (
                                    <>
                                        <span>Don't have an account?</span> <Text as={"span"} _hover={{ cursor: "pointer", color: "blue.500" }} style={{ fontWeight: 'bold', color: "skyblue" }} onClick={toggleForms}>Sign up </Text><span>here</span>
                                    </>
                                )}

                            </Text>
                            <Stack spacing={6} direction={['column', 'row']}>

                                <Button
                                    bg={'red.400'}
                                    color={'white'}
                                    w="full"
                                    _hover={{
                                        bg: 'red.500',
                                    }} onClick={handleAuth}
                                    isDisabled={clicked}
                                >
                                    Login
                                </Button>

                                <Button
                                    bg={'blue.400'}
                                    color={'white'}
                                    w="full"
                                    _hover={{
                                        bg: 'blue.500',
                                    }}
                                    onClick={handleAuth}
                                    isDisabled={!clicked}
                                >
                                    Sign Up
                                </Button>
                            </Stack>
                        </Stack>
                        <AdminAlert isOpen={isOpen} alert_msg={customAlert} onClose={onClose} />
                    </Flex >


                )
            }


        </>

    )
}