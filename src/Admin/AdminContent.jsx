import React, { useState } from 'react'
import { Container, Input, Text, Button, Box, Image, Divider, Select, Grid, useDisclosure, Spinner } from '@chakra-ui/react'
import AdminAlert from './AdminAlert.jsx'
import axios from "axios"
const defaultImage = "data:image/png;base64,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"



const AdminContent = () => {

    const [customAlert, setCustomAlert] = useState("")
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [values, setValues] = React.useState({
        cover_img: '',
        background_img: '',
        discription: '',
        background_title: '',
        price: 0,
        category: '',
        video_url: '',
        images: [],
        drone_category: '',
        imageUrl: '',

    });

    const handleImageUrlChange = (event) => {
        const { name, value } = event.target;
        setValues(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const addImageUrl = () => {
        const { images, imageUrl } = values;
        if (imageUrl.trim() !== '') {
            setValues(prevState => ({
                ...prevState,
                images: [...images, imageUrl],
                imageUrl: '' // Clear input after adding URL
            }));
        }
    };
    const handleChange = (event) => {
        const { name, value } = event.target;
        setValues({
            ...values,
            [name]: value
        });
    };

    const handleSubmit = async () => {
        if (values.cover_img === "") {
            setCustomAlert("Please give a valid cover image url😥")
            onOpen()
        } else if (values.background_img === "") {
            setCustomAlert("Please give a valid background image url😥")
            onOpen()
        } else if (values.discription === "") {
            setCustomAlert("Discription required😥...")
            onOpen()
        } else if (values.background_title === "") {
            setCustomAlert("Discription required for background image😥....")
            onOpen()
        } else if (values.price === "" || values.price <= 0) {
            setCustomAlert("Invalid Product Price...😥")
            onOpen()
        }
        else if (values.category === "") {
            setCustomAlert("Please choose a category which you want to add...😃")
            onOpen()
        } else if (values.images.length < 2) {
            setCustomAlert("Minimum two images required😥...")
            onOpen()
        } else {
            try {
                const base_url = "https://drone-site-be2k24.onrender.com/"
                const response = await axios.post(`${base_url}admin/add/product`, values);

                console.log({ msg: "add success" }, { status: response.status });
                if (response.status === 200) {
                    setCustomAlert('Product added to data base successfully...🥳😇')
                    onOpen()
                    setValues({
                        cover_img: '',
                        background_img: '',
                        discription: '',
                        background_title: '',
                        price: 0,
                        category: '',
                        video_url: '',
                        images: [],
                        drone_category: '',
                        imageUrl: '', // Reset the imageUrl field too
                    });
                    console.log(values)
                } else {
                    setCustomAlert('Product failed to add in data base...😓😔')
                    onOpen()
                }


            } catch (error) {

                console.log("post denied!!!")
            }
        }




    }
    const selectCSS = {
        color: "#eee",
        backgroundColor: "rgba(0,0,0,0.5)",
    }


    return (
        <>
            <Container maxW={"8xl"}   >




                <Box w="100%" h="auto"
                // border="1px solid red"
                >

                    <Box mb="10px" w="100%" h="auto"
                        display={"flex"} justifyContent={"space-between"}
                    // border={"1px solid yellow"}

                    >
                        <Box
                            //  border="1px solid cyan"
                            w={{ base: "20%", md: "10%" }} h={{ base: "100%", md: "100%" }}>
                            <Image w="100%" h="100%" src={values.cover_img || defaultImage} alt="input.png" />
                        </Box>
                        <Box w={{ base: "70%", md: "80%" }}

                            h="100%" >
                            <Box
                                //  border={"1px solid lime"}
                                w="100%" h="auto">
                                <Text color="#eee" fontSize={{ base: "12px", md: "15px" }} mb="10px" fontFamily={"inherit"}>Cover URL:- <span style={{ color: "#2ccce4", fontSize: "12px" }}>{values.cover_img}</span></Text>
                                <Input
                                    name='cover_img'
                                    value={values.cover_img}
                                    onChange={handleChange}
                                    placeholder='Product url here...'
                                    size='20px'
                                    fontSize={{ base: "12px", md: "15px" }}
                                    variant={"unstyled"}
                                    color={"#fff"}
                                />
                                <Divider />
                            </Box>
                        </Box>
                    </Box>





                    <Box mb="10px" w="100%" h="auto"
                        display={"flex"} justifyContent={"space-between"}
                    // border={"1px solid yellow"}

                    >
                        <Box
                            //  border="1px solid cyan"
                            w={{ base: "20%", md: "10%" }} h={{ base: "100%", md: "100%" }}>
                            <Image w="100%" h="100%" src={values.background_img || defaultImage} alt="input.png" />
                        </Box>
                        <Box w={{ base: "70%", md: "80%" }}

                            h="100%" >
                            <Box
                                //  border={"1px solid lime"}
                                w="100%" h="auto">
                                <Text color="#eee" fontSize={{ base: "12px", md: "15px" }} mb="10px" fontFamily={"inherit"}>Background URL:- <span style={{ color: "#2ccce4", fontSize: "12px" }}>{values.background_img}</span></Text>
                                <Input
                                    name='background_img'
                                    value={values.background_img}
                                    onChange={handleChange}
                                    placeholder='Background url here...'
                                    size='20px'
                                    fontSize={{ base: "12px", md: "15px" }}
                                    variant={"unstyled"}
                                    color={"#fff"}
                                />
                                <Divider />
                            </Box>
                        </Box>
                    </Box>






                    <Box mb="10px" w="100%" display={"flex"} h="auto" >
                        <Box w={{ base: "40%", md: "35%" }} h="auto">
                            <Text color="#eee" fontSize={{ base: "12px", md: "15px" }} mb="10px" fontFamily={"inherit"}>Discription :- <span style={{ color: "#2ccce4", fontSize: "12px" }}>{values.discription}</span></Text>

                        </Box>
                        <Box w={{ base: "60%", md: "65%" }} h="auto">
                            <Input
                                name='discription'
                                value={values.discription}
                                onChange={handleChange}
                                placeholder='Enter discription...'
                                size='20px'
                                fontSize={{ base: "12px", md: "15px" }}
                                variant={"unstyled"}
                                color={"#fff"}
                            />
                            <Divider />
                        </Box>

                    </Box>



                    <Box mb="10px" w="100%" display={"flex"} h="auto" >
                        <Box w={{ base: "40%", md: "35%" }} h="auto">
                            <Text color="#eee" fontSize={{ base: "12px", md: "15px" }} mb="10px" fontFamily={"inherit"}>Background Dis :- <span style={{ color: "#2ccce4", fontSize: "12px" }}>{values.background_title}</span></Text>

                        </Box>
                        <Box w={{ base: "60%", md: "65%" }} h="auto">
                            <Input
                                name='background_title'
                                value={values.background_title}
                                onChange={handleChange}
                                placeholder='Enter background discriptin...'
                                size='20px'
                                fontSize={{ base: "12px", md: "15px" }}
                                variant={"unstyled"}
                                color={"#fff"}
                            />
                            <Divider />
                        </Box>

                    </Box>




                    <Box mb="10px" w="100%" display={"flex"} h="auto" >
                        <Box w={{ base: "40%", md: "35%" }} h="auto">
                            <Text color="#eee" fontSize={{ base: "12px", md: "15px" }} mb="10px" fontFamily={"inherit"}> Price :- $<span style={{ color: "#2ccce4", fontSize: "12px" }}> {values.price}</span></Text>

                        </Box>
                        <Box w={{ base: "60%", md: "65%" }} h="auto">
                            <Input
                                name='price'
                                value={values.price}
                                type="number"
                                onChange={handleChange}
                                placeholder='Enter product price here...'
                                size='20px'
                                fontSize={{ base: "12px", md: "15px" }}
                                variant={"unstyled"}
                                color={"#fff"}
                            />
                            <Divider />
                        </Box>

                    </Box>





                    <Box mb="10px" w="100%" display={"flex"} h="auto" justifyContent={"space-between"}>
                        <Box border={"0.5px solid grey"} p={2} borderRadius={"md"} w={{ base: "58%", md: "35%" }} h="auto" display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} alignContent={"center"}>
                            <Text color="#eee" fontSize={{ base: "12px", md: "15px" }} mb="10px" fontFamily={"inherit"}> Category :- </Text>
                            <Text fontSize={{ base: "12px", md: "15px" }} fontWeight={{ base: "350", md: "500" }} color="#2ccce4"> {values.category}</Text>

                        </Box>
                        <Box w={{ base: "40%", md: "64%" }} h="auto" border={"0.5px solid grey"} p={2} borderRadius={"md"}>

                            <Select name="category" value={values.category} style={selectCSS} variant={"unstyled"} onChange={handleChange} color="#fdd635" placeholder='DJI Mavic' size='xs'>
                                <option value="DJI Mavic 3 Pro" style={selectCSS}>DJI Mavic 3 Pro</option>
                                <option value="DJI Mavic 3 Classic" style={selectCSS}>DJI Mavic 3 Classic</option>
                                <option value="DJI Mavic 3" style={selectCSS}>DJI Mavic 3</option>
                                <option value="DJI Mavic 2" style={selectCSS}>DJI Mavic 2</option>
                                <option value="DJI Mavic Pro" style={selectCSS}>DJI Mavic Pro</option>
                            </Select>

                            <Select name="category" value={values.category} style={selectCSS} onChange={handleChange} variant={"unstyled"} color="#fdd635" placeholder='DJI Air' size='xs'>
                                <option value="DJI Air 3" style={selectCSS}>DJI Air 3</option>
                                <option value="DJI Air 2S" style={selectCSS}>DJI Air 2S</option>
                                <option value="Mavic Air 2" style={selectCSS}>Mavic Air 2</option>
                                <option value="Mavic Air" style={selectCSS}>Mavic Air</option>
                            </Select>

                            <Select name="category" value={values.category} style={selectCSS} onChange={handleChange} variant={"unstyled"} color="#fdd635" placeholder='DJI Mini' size='xs'>
                                <option value="DJI Mini 4 Pro" style={selectCSS}>DJI Mini 4 Pro</option>
                                <option value="DJI Mini 3 Pro" style={selectCSS}>DJI Mini 3 Pro</option>
                                <option value="DJI Mini 3" style={selectCSS}>DJI Mini 3</option>
                                <option value="DJI Mini 2 SE" style={selectCSS}>DJI Mini 2 SE</option>
                                <option value="DJI Mini 2" style={selectCSS}>DJI Mini 2</option>
                                <option value="DJI Mini SE" style={selectCSS}>DJI Mini SE</option>
                                <option value="Mavic Mini" style={selectCSS}>Mavic Mini</option>
                            </Select>

                            <Select name="category" value={values.category} style={selectCSS} onChange={handleChange} variant={"unstyled"} color="#fdd635" placeholder='DJI Avata' size='xs'>
                                <option value="DJI Avata 2" style={selectCSS}>DJI Avata 2</option>
                                <option value="DJI Avata" style={selectCSS}>DJI Avata</option>
                            </Select>

                            <Select name="category" value={values.category} style={selectCSS} onChange={handleChange} variant={"unstyled"} color="#fdd635" placeholder='DJI FPV' size='xs'>
                                <option value="DJI FPV" style={selectCSS}>DJI FPV</option>
                                <option value="DJI Digital FPV System" style={selectCSS}>DJI Digital FPV System</option>
                                <option value="DJI 03 Air Unit" style={selectCSS}>DJI 03 Air Unit</option>
                            </Select>

                            <Select name="category" value={values.category} style={selectCSS} onChange={handleChange} variant={"unstyled"} color="#fdd635" placeholder='Inspire' size='xs'>
                                <option value="DJI Inspire 3" style={selectCSS}>DJI Inspire 3</option>
                                <option value="Inspire 2" style={selectCSS}>Inspire 2</option>
                            </Select>

                            <Select name="category" value={values.category} style={selectCSS} onChange={handleChange} variant={"unstyled"} color="#fdd635" placeholder='Phantom' size='xs'>
                                <option value="Phantom 4 series" style={selectCSS}>Phantom 4 Series</option>
                            </Select>




                        </Box>

                    </Box>













                    <Box mb="10px" w="100%" display={"flex"} h="auto" >
                        <Box w={{ base: "40%", md: "35%" }} h="auto">
                            <Text color="#eee" fontSize={{ base: "12px", md: "15px" }} mb="10px" fontFamily={"inherit"}>Video URL :- <span style={{ color: "#2ccce4", fontSize: "12px" }}>{values.video_url}</span></Text>

                        </Box>
                        <Box w={{ base: "60%", md: "65%" }} h="auto">
                            <Input
                                name='video_url'
                                value={values.video_url}
                                onChange={handleChange}
                                placeholder='video url here(optional)...'
                                size='20px'
                                fontSize={{ base: "12px", md: "15px" }}
                                variant={"unstyled"}
                                color={"#fff"}
                            />
                            <Divider />
                        </Box>

                    </Box>



                    <Box mb="10px" w="100%" h="auto" >

                        <Box w="100%" h="auto" display={"flex"}>
                            <Box w={{ base: "70%", md: "92%" }} h="auto">
                                <Input
                                    name='imageUrl'
                                    value={values.imageUrl || ''}
                                    type="text"
                                    onChange={handleImageUrlChange}
                                    placeholder='More product image URLs(optionsal)...'
                                    size='20px'
                                    fontSize={{ base: "12px", md: "15px" }}
                                    variant={"unstyled"}
                                    color={"#fff"}
                                />
                                <Divider />
                            </Box>
                            <Box w={{ base: "30%", md: "8%" }} h="auto"
                            // border={"1px solid red"}
                            >
                                <Button _hover={{ bgColor: "#3a9be6" }} bgColor={"#3d6be6"} w={{ base: "100%", md: "100%" }} h="90%" textColor={"#fff"} textAlign={"center"} fontSize={{ base: "10px", md: "12px" }} onClick={addImageUrl}>Add Images...</Button>
                            </Box>

                        </Box>


                        <Box mt={{ base: "25px", md: "30px" }} w="100%" h="auto" border={"0.5px solid grey"} borderRadius={"md"}>
                            <Text textAlign={"center"} mb={{ base: "25px", md: "30px" }} mt={{ base: "25px", md: "30px" }} fontSize={{ base: "12px", md: "20px" }} color={"#eee"}>Total images count :- <span style={{ color: "#2ccce4", fontSize: "15px" }}>{values.images.length}</span></Text>

                            <Grid p={{ base: "2", md: "5" }} gap={5} w="100%" h="auto" gridTemplateColumns={{ base: "repeat(4,1fr)", md: "repeat(4,1fr)" }}>
                                {values.images.map((el, i) => (
                                    <Box m="auto" borderRadius={"lg"} key={i} w={{ base: "auto", md: "150px" }} h={{ base: "auto", md: "150px" }} border={"1px solid lime"}>
                                        <Image borderRadius={"lg"} w="100%" h="100%" src={el} alt={i} />
                                    </Box>
                                ))}
                            </Grid>

                        </Box>

                    </Box>








                </Box>




                <Box p={{ base: "2", md: "5" }} mt="20px" w="100%" h="auto"
                // border={"0.5px solid lime"}
                >
                    <Text textAlign={{ base: "justify", md: "center" }} fontSize={{ base: "13px", md: "15px" }} color={"#56b9f1"}>Are you shure want to add above detailes? Please check it once again before adding to it in Data Base....</Text>

                </Box>
                <Box m="auto" w="50%" h="auto" p={5}
                    // border={"1px solid coral"} 
                    display={"flex"} justifyContent={"center"} alignContent={"center"} alignItems={"center"}>
                    <Button textColor={"#fff"} _hover={{ bgColor: "#3a9be6" }} bgColor={"#3d6be6"} w={{ base: "" }} h={{ base: "30px", md: "25px" }} onClick={handleSubmit}>Add</Button>

                </Box>

                <AdminAlert isOpen={isOpen} alert_msg={customAlert} onClose={onClose} />
            </Container>
        </>
    )
}

export default AdminContent
