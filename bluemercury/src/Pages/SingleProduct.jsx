import React, { useState } from "react";
import styles from "../Styles/SingleProduct.module.css";
import { Box, Flex, Text, Button } from "@chakra-ui/react";

import { BsCartPlus } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { RiHeartAddLine } from "react-icons/ri";
import { RiHeartFill } from "react-icons/ri";
import { VscAdd } from "react-icons/vsc";
import { GrSubtract } from "react-icons/gr";
import { extendTheme } from '@chakra-ui/react';


const SingleProduct = () => {
  const [showproduct, setShowproduct] = useState(false);
  const [showrating, setShowrating] = useState(true);
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
        <Box backgroundColor="hsl(0,0%,97%)"  className={styles.parent}>
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
            </Box>
            <Box backgroundColor="white" w={[300,400,500]} className={styles.bigchild}>
              <img
                src="https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-855514005030-1_825x.jpg?v=1660838903"
                alt=""
              />
            </Box>
          </Flex>
          <Box backgroundColor="white" position={{md:"bottom"}} className={styles.child2}>
            <Box className={styles.hum}>
              <Text fontSize={"20px"}>Hum Nutrition</Text>
              <Box marginRight={"90px"} className={styles.star}>
                <Flex marginTop={"5px"} marginRight={"5px"}>
                <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
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
                width={"48%"}
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
                      <Button disabled={quantity <= 1} onClick={decrement}>
                        {/* <GrSubtract  style={btn} /> */}-
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

      <Box border="1px solid black" margin="auto" width="60%" marginTop="20px">
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
          <Text fontSize={"25px"} color={"hsl(217,14%,59%)"}>
            Ingredients
          </Text>
          <Text>+</Text>
        </Flex>
        <Box borderBottom={"1px solid gray"}></Box>

        <Flex justifyContent="space-between" padding="10px">
          <Text fontSize={"25px"} color={"hsl(217,14%,59%)"}>
            How to use
          </Text>
          <Text>+</Text>
        </Flex>
        <Box borderBottom={"1px solid gray"}></Box>

        <Flex justifyContent="space-between" padding="10px">
          <Text fontSize={"25px"} color={"hsl(217,14%,59%)"}>
            Reviews
          </Text>
          <Text cursor={"pointer"} onClick={()=>setShowrating(!showrating)}>{showrating?"-":"+"}</Text>
        </Flex>
        {showrating && (
          <Box >
            <Flex marginLeft={"15px"}><Text fontSize={"25px"} fontWeight="bold">4.7 </Text>
            <Text marginTop={"15px"}>out of 5 star</Text>
            </Flex>
            

            <Flex marginTop={"20px"} border={"1px solid black"}>
              <Box width={"40%"} marginLeft={"15px"} border={"1px solid red"}>
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
                <Flex width={"90%"}>At 48, I'm now dealing with cystic acne (as in 1-2 per week) and was at the end of my rope. I tried products with sulphur, acne dots, etc. I learned about Hum products from..</Flex>
              </Box>
            </Flex>
            <Flex marginTop={"20px"} border={"1px solid black"}>
              <Box width={"40%"} marginLeft={"15px"} border={"1px solid red"}>
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
                <Flex>I jumped at the opportunity to try these vitamins complimentary from Hum Nutrition. Love that they are vegan, as many formulated for skin and “clean” are not. A lot of my skin</Flex>
              </Box>
            </Flex>
            <Flex marginTop={"20px"} border={"1px solid black"}>
              <Box width={"40%"} marginLeft={"15px"} border={"1px solid red"}>
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
                <Flex>I am loving this product so far! I definitely feel like my skin is looking better and better each day I take it! I feel like my digestion as been a lot better as well! I would</Flex>
              </Box>
            </Flex>
          </Box>
        )}
      </Box>

      <Box border="1px solid black" paddingLeft={"15px"} margin="auto" width="60%" marginTop="50px">
        <Flex fontSize={"20px"} marginBottom={"20px"}>About the brand</Flex>
        <Flex>
          <Box width={"40%"} border={"1px solid red"}>R+co</Box>
          <Text>
          Our mission is to help you look and feel your absolute best with clean, clinically-proven nutrients for skin, hair, body and mood. We are inspired by nature and guided by science, using carefully sourced, triple-tested ingredients standardized to clinical potency.
          </Text>
        </Flex>
      </Box>
    </>
  );
};

export default SingleProduct;
