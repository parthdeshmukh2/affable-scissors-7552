import React from 'react'
import { Box} from '@chakra-ui/react';
import  {Slider}  from '../Components/Slider';
import Crousel from '../Components/Crousel';
import NewNest from '../Components/NewNest';
import TripleThreat from '../Components/TripleThreat';
import Zitsticka from '../Components/Zitsticka';
import FreeGifts from '../Components/FreeGifts';
import useFetch from '../Hooks/useFetch';
import { Text } from '@chakra-ui/react';
import MainNavbar from '../Components/MainNavbar';
import Footer from '../Components/Footer';


const HomePage = () => {
  const newArrival = useFetch("https://thawing-wildwood-83730.herokuapp.com/newarrival");
  const makeUp = useFetch("https://thawing-wildwood-83730.herokuapp.com/makeup");
  const bestSellers = useFetch("https://thawing-wildwood-83730.herokuapp.com/bestsellers");

  return (
    <Box fontFamily={"Montserrat Light,sans-serif"}>
      <MainNavbar/>
      
      <Crousel/>
     
  
    <Box dispaly='flex' flexDirection='column' w='100%'  mt='12'>
      <Text textAlign='center' fontSize='3xl' color='rgb(18,40,76)' fontWeight='400'>NEW ARRIVALS</Text>
    <Slider {...newArrival}/>
    </Box>
  
    <NewNest/>
    <Box dispaly='flex' flexDirection='column' w='100%'  mt='12'>
      <Text textAlign='center' fontSize='3xl' color='rgb(18,40,76)' fontWeight='400'>Make Up</Text>
    <Slider {...makeUp}/>
    </Box>
    <TripleThreat/>
    <Box dispaly='flex' flexDirection='column' w='100%'  mt='12'>
      <Text textAlign='center' fontSize='3xl' color='rgb(18,40,76)' fontWeight='400'>Best Sellers</Text>
    <Slider {...bestSellers}/>
    </Box>
    <Zitsticka/>
    <FreeGifts/>
    <Footer />
   </Box>
  )
}

export default HomePage
