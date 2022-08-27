import { Box, Text, Select, Grid } from "@chakra-ui/react";
import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MainNavbar from "../Components/MainNavbar";
import ProductCard from "../Components/ProductCard";
import SideBar from "../Components/SideBar";
// import { Link } from "react-router-dom";
import { getData } from "../Redux/AppReducer/action";

const NewArrival = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("NEW ARRIVALS");

  const product = useSelector((store) => store.AppReducer.productData);

  useEffect(() => {
    dispatch(getData());
  }, []);

  console.log(product);
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
            <SideBar />
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
                <Select placeholder="Featured" w="80%" border="1px solid gray">
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </Select>
              </Box>
            </Box>

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
              {product.map((elem) => (
                <ProductCard key={elem._id} {...elem} />
              ))}
            </Grid>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default NewArrival;
