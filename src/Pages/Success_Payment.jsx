import React, { useEffect, useState } from 'react';
import {
    Box,
    Center,
    Flex,
    Heading,
    Text,
    Image,
    Button,
    Spinner,
    useToast,
} from '@chakra-ui/react';
import { useSearchParams } from "react-router-dom";
import { ArrowBackIcon } from '@chakra-ui/icons';
import axios from 'axios';

const Success_Payment = () => {
    const BASE_URL = "https://drone-site-be2k24.onrender.com/"
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const searchQuerry = useSearchParams()[0];
    const toast = useToast()
    const reff_id = searchQuerry.get("reference");

    const sendMail = async () => {
        const email = localStorage.getItem("USER_EMAIL")
        try {
            setLoading(true)
            if (reff_id !== null && email !== "") {
                const res = await axios.post(`${BASE_URL}api/sendPaymentMail`, { email: email, reff_id: reff_id });

                const examplePromise = new Promise((resolve, reject) => {
                    if (res.status === 200) {
                        setTimeout(() => resolve(200), 4000);
                        setLoading(false)
                    } else {
                        reject(new Error('Failed to send email'));
                    }
                });

                toast.promise(examplePromise, {
                    success: { title: 'Confirmation mail', description: 'Email has been sent to your provided address.' },
                    error: { title: 'Sending email rejected!', description: 'Something went wrong or email is incorrect...' },
                    loading: { title: 'Sending email...', description: 'Get your order details from there...' },
                });

                examplePromise.then(() => {
                    setLoading(false)
                    window.location.href = '/'
                }).catch((error) => {
                    console.error("An error occurred: failed to resolve promise of sending email...", error);
                });
            }
        } catch (error) {
            console.log("we need a reff_code....first", error)
        }
    }


    useEffect(() => {
        // reff_id !== null || "" ? sendMail() : null
        const localData = localStorage.getItem("cart-items")
        const parsedData = JSON.parse(localData);
        const cart = parsedData.state.cart;
        if (localData) {
            const cartItems = Object.keys(cart).map(id => ({
                id,
                quantity: cart[id]
            }));
            cartItems.forEach(item => {
                const { id, quantity } = item;
                setData({
                    ID: id,
                    Quantity: quantity,
                    reff_code: reff_id
                });
            });
        }
        // console.log(data)
    }, [])




    useEffect(() => {
        // console.log(data)
    }, [data])




    const CreateShopHistory = async () => {
        const user_id = localStorage.getItem("USER_ID")
        // console.log(user_id)
        try {
            setLoading(true)
            const res = await axios.post(`${BASE_URL}users/shophistory`, {
                id: user_id,
                payload: data
            })
            if (res.status == 200) {
                console.log("data send to server...inside user's shop history")
                setLoading(false)
                localStorage.removeItem("cart-items");
                sendMail();
            } else {
                console.log("failed to send  shop history data ...inside user's collection")
                setLoading(true)
            }
        } catch (error) {
            console.error("An error occurred:", error);
            setLoading(false)
        }
    }



    return (
        <>
            {loading ? (
                <Center w="100%" h="100vh">
                    <Spinner size='lg'/>
                </Center>
            ) : (
                <Box background="#fff" minH="100vh">
                    <Center flexDirection="column" mb={10}>
                        <Heading as="h1" size="2xl" color="blue.500" mb={5}>Payment Success!</Heading>
                        <Text fontSize="lg">Reference Code.: <Text as="span" color={"green.500"} fontWeight="bold">{reff_id}</Text></Text>
                    </Center>

                    <Box flexDirection={"column"} m="auto" w={{ base: "100%", md: "50%" }} spacing={5} justifyContent={"center"} boxShadow={"sm"}>
                        <Image
                            m="auto"
                            my="10"
                            boxSize={"150px"}
                            src="data:image/png;base64,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"
                            alt="Success Image 1"
                            borderRadius="md"

                        />
                        <Flex justifyContent={{ base: "center", md: "left" }} alignItems={{ base: "center", md: "left" }} direction={"column"} h="auto">
                            <Text my={2} fontSize={{ base: "md", md: "xl" }}>
                                Thankyou for purchasing products from
                                <Heading fontSize="md" as={"span"} color="red.500"> DJI </Heading>🙏
                            </Text>
                            <Text fontWeight={"bold"} my={2}> Product id : <Heading fontSize="md" as={"span"} color="green.500">{data ? data.ID : null}</Heading></Text>
                            <Text fontWeight={"bold"} my={2}> quantity : <Heading fontSize="md" as={"span"} color="red.300">{data ? data.Quantity : null}</Heading></Text>
                        </Flex>

                    </Box>

                    <Button
                        leftIcon={<ArrowBackIcon />}
                        colorScheme="teal"
                        variant="solid"
                        position="fixed"
                        bottom={5}
                        left={5}
                        isDisabled={loading ? true : false}
                        onClick={CreateShopHistory}
                    >
                        Back to Home
                    </Button>
                </Box>
            )}
        </>




    );
};

export default Success_Payment;
