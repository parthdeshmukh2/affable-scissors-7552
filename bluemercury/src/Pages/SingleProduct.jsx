import React, { useState } from "react";
import styles from "../Styles/SingleProduct.module.css";
import { Box, Flex, Text, Image, SimpleGrid } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { getSingleData } from "../Redux/AppReducer/action";
import SingleProdbottom from "../Components/SingleProdbottom";
import ProductInfo from "../Components/ProductInfo";

const SingleProduct = () => {
  const dispatch = useDispatch();
  const product = useSelector((store) => store.AppReducer.productData);
  console.log(product, dispatch);

  const [currprod, setCurrprod] = useState({});
  console.log("currprod", currprod);
  const { Iamges } = currprod;
  // console.log(Iamges);

  const [price, setPrice] = useState(0);
  // console.log("price", price);

  const [quantity, setQuantity] = useState(1);

  const { id } = useParams();
  // console.log("id", id);

  useEffect(() => {
    if (product.length === 0);
    // dispatch(getSingleData());
  }, [product.length, dispatch]);

  useEffect(() => {
    if (id) {
      const currentproduct = product.find((elem) => elem._id === id);
      currentproduct && setCurrprod(currentproduct);
      setPrice(currprod.Price);
    }
  }, [id, product]);

  return (
    <>
      <SimpleGrid
        column={[1, 2, 3]}
        border={"3px solid red"}
        backgroundColor="hsl(0,0%,97%)"
      >
        <Box marginTop={"20px"} marginBottom={"20px"} marginLeft={"40px"}>
          <Flex fontSize={"13px"}>
            <Text marginRight={"10px"}>Shop {">"}</Text>
            <Text fontWeight={"bold"}>{currprod.Title}</Text>
          </Flex>
        </Box>
        <SimpleGrid display={"grid"} columns={[1,1,2]} backgroundColor="hsl(0,0%,97%)">
          <Flex border={"3px solid black"} w={[400,600,700]}>
            <Box>
              {Iamges &&
                Iamges.map((el) => <Image width={"40px"} src={el} />)}
            </Box>
            <Box w={[400,600,400]} backgroundColor="white">
              <Image src={currprod.Image} alt="" />
            </Box>
          </Flex>
          <ProductInfo currprod={currprod} />
        </SimpleGrid>
      </SimpleGrid>
      <SingleProdbottom currprod={currprod} />
    </>
  );
};

export default SingleProduct;
