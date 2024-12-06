import React from 'react'
import Navbar from '../Components/Navbar.jsx'
import Footer from '../Components/Footer'
import HomeSlide from "../Sliders/HomeSlide.jsx"
import FourImg from '../HomeComponents/FourImg'
import VideoSlider from '../HomeComponents/VideoSlider'
import DJI_Products from '../HomeComponents/DJI_Products'

function Home() {

    return (
        <>
            <Navbar />
            <HomeSlide />
            <FourImg />
            <VideoSlider />
            <DJI_Products />
            <Footer />
        </>
    )
}

export default Home
