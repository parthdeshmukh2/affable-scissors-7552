import React from "react";
import { Box, Flex } from "@chakra-ui/react";

const Filtering = () => {
  return (
    <Box width="20%"  border="1px solid red" fontSize={"20px"}>
      <Flex justifyContent={"space-between"} p={"10px"}>
        <Box>Type</Box>
        <Box>+</Box>
      </Flex>
      <Flex justifyContent={"space-between"}  p={"10px"}>
        <Box>Brand</Box>
        <Box>+</Box>
      </Flex>
      <Flex justifyContent={"space-between"}  p={"10px"}>
        <Box>Benefit</Box>
        <Box>+</Box>
      </Flex>
      <Flex justifyContent={"space-between"}  p={"10px"}>
        <Box>Concern</Box>
        <Box>+</Box>
      </Flex>
      <Flex justifyContent={"space-between"}  p={"10px"}>
        <Box>Ingredient Preference</Box>
        <Box>+</Box>
      </Flex>
      <Flex justifyContent={"space-between"}  p={"10px"}>
        <Box>Size</Box>
        <Box>+</Box>
      </Flex>
      <Flex justifyContent={"space-between"}  p={"10px"}>
        <Box>More ways to shop</Box>
        <Box>+</Box>
      </Flex>
      <Flex justifyContent={"space-between"}  p={"10px"}>
        <Box>Price</Box>
        <Box>+</Box>
      </Flex>
    </Box>
  );
};

export default Filtering;
