import React from "react";
import { Box, Flex, Spacer, Text } from "@chakra-ui/react";
import FilterOptions from "./FilterOptions";
const Sidebar = () => {
  return (
    <Box width="20%" border="1px solid yellow" ml={"15px"}>
      <Box
        fontFamily={"Montserrat Light,sans-serif"}
        color={"#12284c"}
        textAlign={"left"}
        fontWeight={"300"}
        letterSpacing={".2px"}
        fontSize={"14px"}
        lineHeight={"27px"}
        textTransform={"capitalize"}
      >
        <Text>Bath & Body</Text>
        <Text>Fragrance</Text>
        <Text>Hair Care</Text>
        <Text>MakeUp</Text>
        <Text>Skin Care</Text>
        <Text>Tools & Accesories</Text>
      </Box>
      <Spacer />
      <Box>FILTER NEW ARRIVALS BY</Box>
      <Spacer />
      
      <Box
        color={"#12284c"}
        textAlign="left"
        fontFamily={"Montserrat Medium, sans-serif"}
        fontWeight={"400"}
        letterSpacing={".2px"}
        fontSize={"14px"}
        lineHeight={"24px"}
      >
        <Flex justifyContent={"space-between"} p={"10px"}>
        <FilterOptions/>
          <Box>Type</Box>
          <Box >+</Box>
        </Flex>
        <Flex justifyContent={"space-between"} p={"10px"}>
          <Box>Brand</Box>
          <Box>+</Box>
        </Flex>
        <Flex justifyContent={"space-between"} p={"10px"}>
          <Box>Benefit</Box>
          <Box>+</Box>
        </Flex>
        <Flex justifyContent={"space-between"} p={"10px"}>
          <Box>Concern</Box>
          <Box>+</Box>
        </Flex>
        <Flex justifyContent={"space-between"} p={"10px"}>
          <Box>Ingredient Preference</Box>
          <Box>+</Box>
        </Flex>
        <Flex justifyContent={"space-between"} p={"10px"}>
          <Box>Size</Box>
          <Box>+</Box>
        </Flex>
        <Flex justifyContent={"space-between"} p={"10px"}>
          <Box>More ways to shop</Box>
          <Box>+</Box>
        </Flex>
        <Flex justifyContent={"space-between"} p={"10px"}>
          <Box>Price</Box>
          <Box>+</Box>
        </Flex>
      </Box>
    </Box>
  );
};


export default Sidebar;
