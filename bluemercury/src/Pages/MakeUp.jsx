import { Box, Text, Select, Grid, Button, Spinner } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../Components/Footer";

import MainNavbar from "../Components/MainNavbar";
import ProductCard from "../Components/ProductCard";
import SideBar from "../Components/SideBar";
// import { Link } from "react-router-dom";
import { getData } from "../Redux/AppReducer/action";

const MakeUp = () => {
  const dispatch = useDispatch();

  const [data , setData] = useState([])

 
const [name, setName ] = useState("Make Up")

  const product = useSelector((store) => store.AppReducer.productData);
  const [brand , setBrand] = useState("")
 
 
  // console.log("store",store)
  useEffect(()=>{
    
      dispatch(getData("https://bluemercury-backend.vercel.app/makeup"))
    // setData(product)
  },[])
  useEffect(()=>{
    

  setData(product)
},[product])





  const handleChange=(e)=>{
    setBrand(e.target.value)
    // console.log(brand)
   
    }
   

    const handleSorting=(e)=>{
      if(e.target.value=="asc")
      {
        console.log(e.target.value)
       let sort= [...data].sort((a,b)=>a.Price-b.Price)
       setData(sort)
      }
      else if(e.target.value=="dsc")
      {
        let sort= [...data].sort((a,b)=>b.Price-a.Price)
       setData(sort)
      }
    }
    
    console.log(data,"brand")
  // console.log(product);


  useEffect(() => {
   
      dispatch(getData());
    
   
  }, []);


  return (
    <Box>
      <Box>
        <MainNavbar />
      </Box>
      <Box
        display="flex"
        width="100%"
        flexDirection="column"
        height="500px"
        position="absolute"
        mt={{ base: "4", lg: "32" }}
      >
        <Box
          w="100%"
          h="8%"
          bg="rgb(215,235,242)"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Text fontSize="xs" color="gray" fontWeight="400">
            Free Samples With All Orders
          </Text>
        </Box>

        <Box w={{ base: "100%", md: "95%" }} h="95%" m="auto" display="flex">
          <Box display={{ base: "none", md: "block" }} w="25%" h="100%">

            <SideBar handleChange={handleChange}/>

            <SideBar  />

          </Box>

          <Box w={{ base: "100%", md: "75%" }}>
            <Box
              display="flex"
              h={{ base: "50px ", lg: "100px" }}
              w="100%"
              borderBottom="1px solid gray"
              justifyContent="space-between"
              alignItems="center"
              flexWrap="wrap"
            >
              <Box>
                <Text
                  ml="4"
                  fontSize={{ base: "md", lg: "3xl" }}
                  fontWeight="400"
                  color="rgb(18,40,76)"
                >
                  {name}
                </Text>
              </Box>
              <Box
                display="flex"
                justifyContent="space-between"
                w={{ base: "60%", lg: "35%" }}
                p="2"
                h="100%"
                alignItems="center"
              >
                <Text
                  fontSize={{ base: "12px", md: "md  " }}
                  fontWeight="600"
                  color="rgb(18,40,76)"
                >
                  Sort By
                </Text>
                <Select placeholder="SORTING" w="80%" border="1px solid gray" onChange={handleSorting}>
                  {/* <Button>Low To High</Button> */}
                  <option value="asc">Low To High</option>
                  <option value="dsc">High To Low</option>
                </Select>
              </Box>
            </Box>


            {
              product.length> 0 && 
              <Grid
              templateColumns={{
                base: "repeat(1,1fr)",
                md: "repeat(2,1fr)",
                lg: "repeat(4,1fr)",
              }}
              w="95%"
              m="auto"
              mt="8"
              gap="4"
            >
           
              
               {brand!==""?data.filter(item=>item.Brand==brand).map((elem) => (
               <ProductCard key={elem._id} {...elem} />
              ))
             : data.map((elem) => (
                <ProductCard key={elem._id} {...elem} />
              ))} 
      
            </Grid>
            }

{/* 
            <Grid
              templateColumns={{
                base: "repeat(1,1fr)",
                md: "repeat(2,1fr)",
                lg: "repeat(4,1fr)",
              }}
              w="95%"
              m="auto"
              mt="8"
              gap="4"
            >
           
              
               {brand!==""?data.filter(item=>item.Brand==brand).map((elem) => (
               <ProductCard key={elem._id} {...elem} />
              ))
             : data.map((elem) => (
                <ProductCard key={elem._id} {...elem} />
              ))} 
      
            </Grid> */}
          </Box>
        </Box>
      </Box>

      <Box position='absolute' mt='1800px' w='100%'> 
          <Footer/>
      </Box>
    </Box>
  );
};

export default MakeUp;
