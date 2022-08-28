import React from "react";
import styles from "../Styles/SingleProduct.module.css";
import { Box, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";



const ProductReviews = ({ currprod }) => {
  const dispatch = useDispatch();
  const product = useSelector((store) => store.AppReducer.productData);
  console.log(product, dispatch);
  

  const [showrating, setShowrating] = useState(false);
  return (
    <div>
      <Flex justifyContent="space-between" padding="10px">
        
       
      </Flex>
      
        <Box>
          <Flex marginLeft={"15px"}>
            <Text fontSize={"25px"} fontWeight="bold">
              4.7{" "}
            </Text>
            <Text marginTop={"15px"}>out of 5 star</Text>
          </Flex>

          <Flex marginTop={"20px"} >
            <Box width={"40%"} marginLeft={"15px"} >
              <Flex>crj37.08/22/18</Flex>
              <Flex>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiOutlineStar />
              </Flex>
              <Flex>Would you recommend this product?</Flex>
              <Flex>Was this useful?</Flex>
              <Flex justifyContent={"space-between"} width={"60%"}>
                <Text>YES</Text>
                <Text>NO</Text>
                <Text>REPORT</Text>
              </Flex>
            </Box>
            <Box width={"50%"}>
              <Flex>So far so good- breakout free</Flex>
              <Flex width={"90%"}>
                At 48, I'm now dealing with cystic acne (as in 1-2 per week) and
                was at the end of my rope. I tried products with sulphur, acne
                dots, etc. I learned about Hum products from..
              </Flex>
            </Box>
          </Flex>
          <Flex marginTop={"20px"} >
            <Box width={"40%"} marginLeft={"15px"} >
              <Flex>leahf.08/22/19</Flex>
              <Flex>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiOutlineStar />
              </Flex>
              <Flex>Would you recommend this product?</Flex>
              <Flex>Was this useful?</Flex>
              <Flex justifyContent={"space-between"} width={"60%"}>
                <Text>YES</Text>
                <Text>NO</Text>
                <Text>REPORT</Text>
              </Flex>
            </Box>
            <Box width={"50%"}>
              <Flex>So far so good!</Flex>
              <Flex>
                I jumped at the opportunity to try these vitamins complimentary
                from Hum Nutrition. Love that they are vegan, as many formulated
                for skin and “clean” are not. A lot of my skin
              </Flex>
            </Box>
          </Flex>
          <Flex marginTop={"20px"} >
            <Box width={"40%"} marginLeft={"15px"} >
              <Flex>drj78.12/22/20</Flex>
              <Flex>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiOutlineStar />
              </Flex>
              <Flex>Would you recommend this product?</Flex>
              <Flex>Was this useful?</Flex>
              <Flex justifyContent={"space-between"} width={"60%"}>
                <Text>YES</Text>
                <Text>NO</Text>
                <Text>REPORT</Text>
              </Flex>
            </Box>
            <Box width={"50%"}>
              <Flex>Loving it!</Flex>
              <Flex>
                I am loving this product so far! I definitely feel like my skin
                is looking better and better each day I take it! I feel like my
                digestion as been a lot better as well! I would
              </Flex>
            </Box>
          </Flex>
        </Box>
      
    </div>
  );
};

export default ProductReviews;
