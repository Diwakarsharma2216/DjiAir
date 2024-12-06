import React, { useState,useEffect } from 'react'
import axios from 'axios';
import { Button,Box } from '@chakra-ui/react';
const Clint = () => {
    const [file, setFile] = useState(null);
    const [imgData,setImgData] = useState(null)

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };
   

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!file) {
            alert("Please select a file first.");
            return;
        }

        const formData = new FormData();
        formData.append('image', file);

        try {
            const res = await axios.post('http://192.168.93.120:4000/api/images/upload', formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
            console.log(res.data);
            
        } catch (err) {
            console.error(err);
        }
    };
    useEffect(()=>{

    },[])
    return (
        <>
            <div>
                <h1>Multer Cloudnary Test</h1>
                <form onSubmit={handleSubmit} action="/stats" encType="multipart/form-data" method="post" >
                    <input type="file" onChange={handleFileChange} />
                    <Button type="submit">Upload</Button>
                </form>

               
            </div>
        </>
    )
}

export default Clint
