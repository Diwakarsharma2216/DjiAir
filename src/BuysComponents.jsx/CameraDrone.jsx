import React, { useContext, } from 'react';
import { Box } from "@chakra-ui/react";
import Navbar from '../Components/Navbar.jsx';
import Footer from "../Components/Footer.jsx"
import FourImg from "../HomeComponents/FourImg.jsx"
import EightImage from '../SubBuyComponents.jsx/EightImage.jsx';
import Aerial_Immersive from '../SubBuyComponents.jsx/Aerial_Immersive.jsx';
import Quiz from "../Pages/Quiz.jsx"
import Hero from '../SubBuyComponents.jsx/Hero.jsx';
import { AuthContext } from '../Contexts/AuthContextProvider.jsx';

function CameraDrone() {

  const { isAuth, token } = useContext(AuthContext)
  console.log(isAuth, token)

  return (
    <>


      <Box w="100%" h="auto" bg="#fff">

        {/* Navbar component rendering here.... */}
        <Navbar />
        {/* ----------------------------------------------- */}

        {/* EigntImage component rendering here.... */}
        <EightImage />
        {/* ----------------------------------------------- */}

        {/* Hero component rendering here.... */}
        <Hero />
        {/* ----------------------------------------------- */}

        {/* four image component importing here...._____>>>>> */}
        <FourImg />
        {/* ----------------------------------------------- */}

        {/* Aerial Imaging || Immersive Flight  system building starts here----------------->>>>>>>>>>>>>>>*/}
        <Aerial_Immersive />
        {/* ----------------------------------------------- */}

        {/* Quiz component importing here..._____>>>>> */}
        <Quiz />
        {/* ----------------------------------------------- */}

        <Footer />


      </Box >



    </>
  );
}

export default CameraDrone;


