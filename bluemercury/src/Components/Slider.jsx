import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {Text, Image, Spinner} from "@chakra-ui/react"
import { Link, useNavigate } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../Styles/styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";
import { Box } from "@chakra-ui/react";



export const Slider= (dataArr)=>{
  const {data, isLoading} = dataArr;
  console.log(isLoading)
  const navigate = useNavigate();
  
 const handleClick = (id)=>{
navigate(`/product/${id}`)
 }
  return (
    <Box m='auto' mt='8' w='80%' >
     
      <Swiper
      color="black"
        // slidesPerView={3}
        spaceBetween={30}
        // slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        // pagination={{
        //   clickable: true,
        // }}
        breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            "@0.75": {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            "@1.00": {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            "@1.50": {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
      

    {data.map((elem)=> {
      return (
        
        <SwiperSlide key={elem._id} onClick={(id)=>handleClick(id)}>
          <Box display='flex' flexDirection='column' 
          /* boxShadow='2xl' */
          p='4' h='350px' mb='8' borderRadius='xl' cursor='pointer'>
            <Box h='70%'>
            <Image  src={elem.Image} />
            </Box>
          <Text mt='2' fontSize='md'>{elem.Brand}</Text>
           <Text fontSize='md' color='gray'>{elem.Title}</Text>
           <Text fontSize='md' color='gray'> $ {elem.Price}</Text>

          </Box>
         
        </SwiperSlide>
       

      )
    })}
      
       
      </Swiper>
    </Box>
  );
}
