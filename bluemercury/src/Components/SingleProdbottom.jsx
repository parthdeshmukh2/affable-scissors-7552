import React from "react";
import styles from "../Styles/SingleProduct.module.css";
import { Box, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductReviews from "./ProductReviews";



const SingleProdbottom = ({ currprod }) => {
  const dispatch = useDispatch();
  const product = useSelector((store) => store.AppReducer.productData);
  console.log(product, dispatch);
  const {  Ingredients, HowToUse } = currprod;

  const [showproduct, setShowproduct] = useState(false);
  const [showuse, setShowuse] = useState(false);
  const [showingredient, setShowingredient] = useState(false);


  return (
    <div>
      <Box border="1px solid black" margin="auto" width="60%" marginTop="20px">
        <Flex justifyContent="space-between" padding="10px">
          <Text fontSize={"25px"} color={"hsl(217,14%,59%)"}>
            Product Information
          </Text>
          <Text cursor={"pointer"} onClick={() => setShowproduct(!showproduct)}>
            {showproduct ? "-" : "+"}
          </Text>
        </Flex>
        {showproduct && <Text>{currprod.ProductInfo}</Text>}
        <Box borderBottom={"1px solid gray"}></Box>
        <Flex justifyContent="space-between" padding="10px">
          <Text fontSize={"25px"} color={"hsl(217,14%,59%)"}>
            Ingredients
          </Text>
          <Text
            cursor={"pointer"}
            onClick={() => setShowingredient(!showingredient)}
          >
            {showingredient ? "-" : "+"}
          </Text>
        </Flex>
        {showingredient && Ingredients.map((el) => <Text>{el}</Text>)}
        <Box borderBottom={"1px solid gray"}></Box>

        <Flex justifyContent="space-between" padding="10px">
          <Text fontSize={"25px"} color={"hsl(217,14%,59%)"}>
            How to use
          </Text>
          <Text cursor={"pointer"} onClick={() => setShowuse(!showuse)}>
            {showuse ? "-" : "+"}
          </Text>
        </Flex>
        {showuse && HowToUse.map((el) => <Text>{currprod.HowToUse}</Text>)}
        <Box borderBottom={"1px solid gray"}></Box>

        <ProductReviews currprod={currprod} />
      </Box>

      <Box
        border="1px solid black"
        paddingLeft={"15px"}
        margin="auto"
        width="60%"
        marginTop="50px"
      >
        <Flex fontSize={"20px"} marginBottom={"20px"}>
          About the brand
        </Flex>
        <Flex>
          <Box
            width={"40%"}
            padding={"10px"}
            fontWeight={"bold"}
            fontSize={"20px"}
            border={"1px solid red"}
          >
            {currprod.Brand}
          </Box>
          <Text>
            Our mission is to help you look and feel your absolute best with
            clean, clinically-proven nutrients for skin, hair, body and mood. We
            are inspired by nature and guided by science, using carefully
            sourced, triple-tested ingredients standardized to clinical potency.
          </Text>
        </Flex>
      </Box>
    </div>
  );
};

export default SingleProdbottom;
