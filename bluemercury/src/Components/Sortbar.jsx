import React from "react";
import { Flex, Spacer, Select, Text, Square, Box } from "@chakra-ui/react";
const Sortbar = () => {
  return (
    <Flex border={"1px solid red"} h={"130px"}>
      <Box p="4">
        <Flex direction={"column"} pt={"30px"} border={"1px solid red"}>
          <Box fontFamily={"Montserrat Medium,sans-serif"}>
            Home &gt; New Arrivals
          </Box>

          <Box fontFamily={"Montserrat Medium,sans-serif"} pt={"30px"}>
            NEW ARRIVALS CATEGORY{" "}
          </Box>
        </Flex>
      </Box>
      <Spacer />
      <Box
        p="4"
        fontSize={"26px"}
        letterSpacing={".76px"}
        textAlign={"center"}
        mt={"40px"}
        fontFamily={"Montserrat Regular,sans-serif"}
      >
        NEW ARRIVALS
      </Box>
      <Spacer />
      <Flex border={"1px solid red"} pt={"40px"}>
        <Box p="4" fontFamily={"Montserrat Medium,sans-serif"}>
          SORTBY
        </Box>
        <Select
          placeholder="Featured"
          cursor={"pointer"}
          p={"10px"}
          fontFamily={"Montserrat Medium,sans-serif"}
        >
          <option value="option1">Featured</option>
          <option value="option2">New Arrivals</option>
          <option value="option3">Best Sellers</option>
          <option value="option2">Price Low to High</option>
          <option value="option3">Price High to Low</option>
        </Select>
      </Flex>
    </Flex>
  );
};

export default Sortbar;
