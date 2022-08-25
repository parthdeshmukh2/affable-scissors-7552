import React, { useState } from "react";
import styles from "../Styles/SingleProduct.module.css";
import { Box, Flex, Text, Button } from "@chakra-ui/react";

import { BsCartPlus } from "react-icons/bs";
import { BsHeart } from "react-icons/bs";
import { AiOutlineStar } from "react-icons/ai";
import { RiHeartAddLine } from "react-icons/ri";
import { RiHeartFill } from "react-icons/ri";
import { VscAdd } from "react-icons/vsc";
import { GrSubtract } from "react-icons/gr";

const SingleProduct = () => {
  const [showproduct, setShowproduct] = useState(false);
  //const [disable, setDisable] = useState(false);
  const [wish, setWish] = useState(false);
  const style = { width: "50px", height: "30px", marginTop: "13px" };
  const btn = {
    cursor: "pointer",
    color: "black",
    marginTop: "18px",
    marginLeft: "15px",
  };
  const price = 26;
  const [Totalprice, setTotalPrice] = useState(price);
  const [quantity, setQuantity] = useState(1);
  const increment = () => {
    setQuantity(quantity + 1);
    console.log("inside", quantity);
    setTotalPrice(price * (quantity + 1));
  };

  console.log("outside", quantity);

  const decrement = () => {
    setQuantity(quantity - 1);
    setTotalPrice(price * (quantity - 1));
  };

  const wishprod = () => {
    setWish(!wish);
  };

  const showproducts = () => {
    setShowproduct(!showproduct);
    console.log("hii");
  };

  return (
    <>
      <Box border={"1px solid red"} backgroundColor="hsl(0,0%,97%)">
        <Box marginTop={"20px"} marginBottom={"20px"} marginLeft={"40px"}>
          <Flex fontSize={"13px"}>
            <Text marginRight={"10px"}>Shop {">"}</Text>
            <Text fontWeight={"bold"}>
              Daily Cleanse® Clear Skin and Acne Supplement
            </Text>
          </Flex>
        </Box>
        <Box backgroundColor="hsl(0,0%,97%)" className={styles.parent}>
          <Flex>
            <Box className={styles.smallimg}>
              <img
                className={styles.img}
                src="https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-855514005030-1_75x.jpg?v=1660838903"
                alt=""
              />
              <img
                className={styles.img}
                src="https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-855514005030-2_75x.jpg?v=1660838904"
                alt=""
              />
              <img
                className={styles.img}
                src="https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-855514005030-3_75x.jpg?v=1660838904"
                alt=""
              />
              <img
                className={styles.img}
                src="https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-855514005030-4_75x.jpg?v=1660838905"
                alt=""
              />
              <img
                className={styles.img}
                src="https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-855514005030-5_75x.jpg?v=1660838906"
                alt=""
              />
            </Box >
            <Box backgroundColor="white" className={styles.bigchild}>
              <img
                src="https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-855514005030-1_825x.jpg?v=1660838903"
                alt=""
              />
            </Box>
          </Flex>
          <Box backgroundColor="white" className={styles.child2}>
            <Box className={styles.hum}>
              <Text fontSize={"20px"}>Hum Nutrition</Text>
              <Box marginRight={"90px"} className={styles.star}>
                <Flex marginTop={"5px"} marginRight={"5px"}>
                  <AiOutlineStar />
                  <AiOutlineStar />
                  <AiOutlineStar />
                  <AiOutlineStar />
                  <AiOutlineStar />
                </Flex>
                <Text>46 reviews</Text>
              </Box>
            </Box>
            <Flex className={styles.clean}>
              <Text fontSize={"30px"} color="gray">
                Daily Cleanse Clear Skin and Acne Supplement
              </Text>
            </Flex>
            <Box>
              <Flex
                border={"1px solid red"}
                width={"38%"}
                fontWeight={"bold"}
                marginTop={"6px"}
                fontSize="15px"
                justifyContent="space-between"
              >
                <Text>NEW</Text>
                <Text>BEST SELLER</Text>
                <Text>CONSCIOUS BEAUTY</Text>
              </Flex>
            </Box>
            <Box>
              <Box marginTop={"10px"}>
                <Flex>
                  <Text
                    color={"black"}
                    fontWeight={"bold"}
                    fontSize={"20px"}
                    marginRight={"5px"}
                  >
                    $26
                  </Text>
                  <Text fontSize={"14px"}>
                    4 interest-free payments of $6.50 with <span>klarna</span>{" "}
                    Learn more
                  </Text>
                </Flex>
              </Box>
            </Box>
            <Box
              width={"70%"}
              marginTop="20px"
              color={"gray"}
              fontSize={"17px"}
            >
              <Text>
                A powerful vegan and vegetarian formula of organic algae and 14
                detoxifying herbs and minerals to help clear your skin.
              </Text>
            </Box>
            <div className={styles.free}>
              <div>
                <img
                  src="https://cdn.shopify.com/s/files/1/0283/0185/2747/products/variant_images-title-defaulttitle-817237011910-1_64x.jpg?v=1659640904"
                  alt=""
                />
              </div>
              <Box>
                <Box>
                  <Text>Free Gift with purchase</Text>
                  <Text>PowerGlow@ Peel Packette</Text>
                  <Text>Free with any purchase</Text>
                </Box>
              </Box>
            </div>
            <Flex marginBottom={"30px"} marginTop={"20px"}>
              <Text fontWeight={"bold"}>Size: </Text> 60 count
            </Flex>
            <Box width={"80%"} padding="14px" backgroundColor="hsl(0,0%,97%)">
              <Flex justifyContent={"space-between"}>
                <Box
                  width="65%"
                  backgroundColor={"rgb(18,40,76)"}
                  padding="10px"
                  marginBottom={"10px"}
                >
                  <Flex justifyContent={"space-between"}>
                    <Box marginTop={"5px"}>
                      <Flex color="white">
                        <BsCartPlus />
                        <Text marginLeft={"7px"}>ADD TO BAG</Text>
                      </Flex>
                    </Box>
                    <Box
                      color="white"
                      marginTop={"5px"}
                    >{`${Totalprice}$`}</Box>
                  </Flex>
                </Box>
                <Box border={"1px solid gray"} marginBottom={"10px"}>
                  <Flex>
                    <Box
                      width="50px"
                      _disabled={true}
                      borderRight={"1px solid gray"}
                    >
                      <Button disabled={quantity<=1} onClick={decrement}>
                      {/* <GrSubtract  style={btn} /> */}
                      -
                      </Button>
                     
                    </Box>
                    <Box
                      margin={["0px", "15px", "0px", "15px"]}
                      backgroundColor="white"
                    >
                      {quantity}
                    </Box>
                    <Box width="50px" borderLeft={"1px solid gray"}>
                      <VscAdd onClick={increment} style={btn} />
                    </Box>
                  </Flex>
                </Box>
                <Box onClick={wishprod} marginBottom={"10px"} width={"50px"}>
                  {wish ? (
                    <RiHeartFill style={style} />
                  ) : (
                    <RiHeartAddLine style={style} />
                  )}
                </Box>
              </Flex>
              <Flex
                border={"1px solid gray"}
                backgroundColor="white"
                justifyContent={"space-between"}
                padding={"8px"}
              >
                <Text>Shipping & Returns</Text>
                <Box
                  border={"1px solid gray"}
                  borderRadius="50%"
                  width={"30px"}
                >
                  i
                </Box>
              </Flex>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box border="1px solid black" margin="auto" width="50%" marginTop="20px">
        <Flex justifyContent="space-between" padding="10px">
          <Text fontSize={"25px"} color={"hsl(217,14%,59%)"}>
            Product Information
          </Text>
          <Text cursor={"pointer"} onClick={showproducts}>
            {showproduct ? "-" : "+"}
          </Text>
        </Flex>
        {showproduct && (
          <Text>
            Hii My anme is snaidp Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Est perspiciatis ex et dolores at sit nam
            consequatur in quaerat esse officia neque vel expedita blanditiis
            nihil consequuntur repudiandae corrupti optio, quis non voluptatem
            voluptatibus officiis fuga.{" "}
          </Text>
        )}
        <Box borderBottom={"1px solid gray"}></Box>
        <Flex justifyContent="space-between" padding="10px">
          <Text fontSize={"25px"} color={"hsl(217,14%,59%)"}>Ingredients</Text>
          <Text>+</Text>
        </Flex>

        <Flex justifyContent="space-between" padding="10px">
          <Text fontSize={"25px"} color={"hsl(217,14%,59%)"}>How to use</Text>
          <Text>+</Text>
        </Flex>

        <Flex justifyContent="space-between" padding="10px">
          <Text fontSize={"25px"} color={"hsl(217,14%,59%)"}>Reviews</Text>
          <Text>+</Text>
        </Flex>
      </Box>

      <Box border="1px solid black" margin="auto" width="50%" marginTop="20px">
        <Text>About the brand</Text>
        <Flex>
          <h3>R+co</h3>
          <Text>
            R+Co is a collective of some of the most renowned hairstylists that
            have come together to create a line of award-winning vegan products
            that are treatment-oriented with the health of the hair and scalp
            top-of-mind. We use unique ingredients and complexes to make sure
            each product delivers immediate results and true benefits, with all
            our formulas color-safe, heat and UV protective, vegan,
            cruelty-free, and gluten-free, without harmful ingredients such as
            parabens, sulfates (SLS or SLES), mineral oil and petroleum.
          </Text>
        </Flex>
      </Box>
    </>
  );
};

export default SingleProduct;
