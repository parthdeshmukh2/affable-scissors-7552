import React, { useRef, useState } from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../Styles/styles.css";

import { Pagination, Navigation } from "swiper";
import HeroBanner1 from "../Assets/HeroBanner1.jpg";
import HeroBanner2 from "../Assets/HeroBanner2.jpeg";
import HeroBanner3 from "../Assets/HeroBanner3.jpeg";

const Crousel = () => {
  return (
    <Box border="1px solid transparent" >
      <Box
        h="35px"
        bg="rgb(215,235,242)"
        display="flex"
        alignItems="center"
        justifyContent="center"
        border="none"
        mt={{lg:'32'}}
        textAlign="center"
        // color={"rgb(96,111,135)"}
        color={"black"}
        fontSize="0.3rem" letterSpacing={"1px"}
      >
<div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
    <Text
          fontFamily="Montserrat Medium,sans-serif"
          fontSize="10px"
          color="gray"
          fontWeight="500"
          letterSpacing="-10%"
        >FREE SHIPPING FOR BLUEREWARDS MEMBER</Text> 
    </div>
    <div class="carousel-item" data-bs-interval="2000">
    <Text
          fontFamily="Montserrat Medium,sans-serif"
          fontSize="10px"
          color="gray"
          fontWeight="500"
          letterSpacing="-10%"
        > FREE GIFTS WITH PURCHASE. BROWSE NOW  </Text> 
    </div>
    <div class="carousel-item">
    <Text
          fontFamily="Montserrat Medium,sans-serif"
          fontSize="10px"
          color="gray"
          fontWeight="500"
          letterSpacing="-10%"
        > FREE SAMPLES WITH ALL ORDERS</Text>
    </div>
  </div>
</div>



      </Box>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          {/* {" "} */}
          <Image
            boxSize="150px"
            objectFit="cover"
            // w='80%'
            // h='500px'
            src={HeroBanner3}
            alt="Dan Abramov"
          />
        </SwiperSlide>

        <SwiperSlide>
          {/* {" "} */}
          <Image
            boxSize="150px"
            objectFit="cover"
            // w='80%'
            // h='500px'
            src={HeroBanner2}
            alt="Dan Abramov"
          />
        </SwiperSlide>

        <SwiperSlide>
          {/* {" "} */}
          <Image
            boxSize="150px"
            objectFit="cover"
            // w='80%'
            // h='500px'
            src={HeroBanner1}
            alt="Dan Abramov"
          />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default Crousel;
