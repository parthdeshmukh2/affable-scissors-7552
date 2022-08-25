import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";

const Filtering = () => {
  return (
    <Box width="20%" border="1px solid red">
      <Box
        
        p={"12px"}
        fontFamily={"Montserrat Light,sans-serif"}
        color={"#a6afbc"}
        textAlign={"left"}
      >
        <Text fontFamily={"Montserrat Light,sans-serif"}>Bath & Body</Text>
        <Text>Fragrance</Text>
        <Text>Hair Care</Text>
        <Text>MakeUp</Text>
        <Text>Skin Care</Text>
        <Text>Tools & Accesories</Text>
      </Box>

      <Box  fontSize={"20px"}>
        <Flex justifyContent={"space-between"} p={"10px"}>
          <Box>Type</Box>
          <Box>+</Box>
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

export default Filtering;
