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


const HomePage = () => {
  const newArrival = useFetch("https://stark-lake-19402.herokuapp.com/newarrival");
  const makeUp = useFetch("https://stark-lake-19402.herokuapp.com/makeup");
  const bestSellers = useFetch("https://stark-lake-19402.herokuapp.com/bestsellers");

  return (
    <Box>
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
    <Box>

    </Box>
   </Box>
  )
}

export default HomePage
