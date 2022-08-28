import React, { useState } from "react";
import styles from "../Styles/SingleProduct.module.css";
import { Box, Flex, Text, Button } from "@chakra-ui/react";
import { BsCartPlus } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { RiHeartAddLine } from "react-icons/ri";
import { RiHeartFill } from "react-icons/ri";
import { VscAdd } from "react-icons/vsc";
// import { modify, addtowish } from "../Redux/AppReducer/action";

const ProductInfo = ({ currprod }) => {
  const [wish, setWish] = useState(false);
  const [data,setData]=useState("");

  const [price, setPrice] = useState(0);
  console.log("price", price);

  const [quantity, setQuantity] = useState(1);
  const increment = () => {
    setQuantity(quantity + 1);
    setPrice(currprod.Price * (quantity + 1));
    //setTotalPrice(price * (quantity + 1));
  };

  const decrement = () => {
    setQuantity(quantity - 1);
    setPrice(currprod.Price * (quantity - 1));
  };

  const style = { width: "50px", height: "30px", marginTop: "13px" };
  const btn = {
    cursor: "pointer",
    color: "black",
    marginTop: "18px",
    marginLeft: "15px",
  };

  return (
    // <div>
    //   <Box
    //     backgroundColor="white"
    //     w={[400,500,700]}
    //   >
    //     <Box className={styles.hum}>
    //       <Text fontSize={"20px"}>{currprod.Brand}</Text>
    //       <Box marginRight={"90px"} className={styles.star}>
    //         <Flex marginTop={"5px"} marginRight={"5px"}>
    //           <AiFillStar />
    //           <AiFillStar />
    //           <AiFillStar />
    //           <AiFillStar />
    //           <AiOutlineStar />
    //         </Flex>
    //         <Text>46 reviews</Text>
    //       </Box>
    //     </Box>
    //     <Flex className={styles.clean}>
    //       <Text fontSize={"30px"} color="gray">
    //         {currprod.Title}
    //       </Text>
    //     </Flex>
    //     <Box>
    //       <Flex
    //         border={"1px solid red"}
    //         width={"48%"}
    //         fontWeight={"bold"}
    //         marginTop={"6px"}
    //         fontSize="15px"
    //         justifyContent="space-between"
    //       >
    //         <Text>NEW</Text>
    //         <Text>BEST SELLER</Text>
    //         <Text>CONSCIOUS BEAUTY</Text>
    //       </Flex>
    //     </Box>
    //     <Box>
    //       <Box marginTop={"10px"}>
    //         <Flex>
    //           <Text
    //             color={"black"}
    //             fontWeight={"bold"}
    //             fontSize={"20px"}
    //             marginRight={"5px"}
    //           >
    //             {`$${currprod.Price}`}
    //           </Text>
    //           <Text fontSize={"14px"}>
    //             4 interest-free payments of $6.50 with <span>klarna</span> Learn
    //             more
    //           </Text>
    //         </Flex>
    //       </Box>
    //     </Box>
    //     <Box width={"70%"} marginTop="20px" color={"gray"} fontSize={"17px"}>
    //       <Text>{currprod.Description}</Text>
    //     </Box>
    //     <div className={styles.free}>
    //       <div>
    //         <img
    //           src="https://cdn.shopify.com/s/files/1/0283/0185/2747/products/variant_images-title-defaulttitle-817237011910-1_64x.jpg?v=1659640904"
    //           alt=""
    //         />
    //       </div>
    //       <Box>
    //         <Box>
    //           <Text>Free Gift with purchase</Text>
    //           <Text>PowerGlow@ Peel Packette</Text>
    //           <Text>Free with any purchase</Text>
    //         </Box>
    //       </Box>
    //     </div>
    //     <Flex marginBottom={"30px"} marginTop={"20px"}>
    //       <Text fontWeight={"bold"}>Size: </Text> 60 count
    //     </Flex>
    //     <Box width={"80%"} padding="14px" backgroundColor="hsl(0,0%,97%)">
    //       <Flex justifyContent={"space-between"}>
    //         <Box
    //          w={[100,250,350]}
    //          h={[30,50,70]}
    //          fontSize={[10,13,16]}
    //           backgroundColor={"rgb(18,40,76)"}
    //           padding="10px"
    //           marginBottom={"10px"}
    //           onClick={() => modify(currprod, price, quantity,data,setData)}
    //           cursor="pointer"
    //         >
    //           <Flex justifyContent={"space-between"}>
    //             <Box marginTop={"5px"}>
    //               <Flex color="white">
    //                 <BsCartPlus />
    //                 <Text marginLeft={"7px"}>ADD TO BAG</Text>
    //               </Flex>
    //             </Box>
    //             <Box color="white" marginTop={"5px"}>{`${
    //               currprod.Price * quantity
    //             }$`}</Box>
    //           </Flex>
    //         </Box>
    //         <Box border={"1px solid gray"} marginBottom={"10px"}>
    //           <Flex>
    //             <Box
    //               width="50px"
    //               _disabled={true}
    //               borderRight={"1px solid gray"}
    //             >
    //               <Button disabled={quantity <= 1} onClick={decrement}>
    //                 {/* <GrSubtract  style={btn} /> */}-
    //               </Button>
    //             </Box>
    //             <Box
    //               margin={["0px", "15px", "0px", "15px"]}
    //               backgroundColor="white"
    //             >
    //               {quantity}
    //             </Box>
    //             <Box width="50px" borderLeft={"1px solid gray"}>
    //               <VscAdd onClick={increment} style={btn} />
    //             </Box>
    //           </Flex>
    //         </Box>
    //         <Box
    //           onClick={() => setWish(!wish)}
    //           marginBottom={"10px"}
    //           width={"50px"}
    //         >
    //           {/* {wish ? (
    //             <RiHeartFill style={style} />
    //           ) : (
    //             <RiHeartAddLine
    //               onClick={() => addtowish(currprod)}
    //               style={style}
    //             />
    //           )} */}
    //         </Box>
    //       </Flex>
    //       <Flex
    //         border={"1px solid gray"}
    //         backgroundColor="white"
    //         justifyContent={"space-between"}
    //         padding={"8px"}
    //       >
    //         <Text>Shipping & Returns</Text>
    //         <Box border={"1px solid gray"} borderRadius="50%" width={"30px"}>
    //           i
    //         </Box>
    //       </Flex>
    //     </Box>
    //   </Box>
    // </div>
    <></>
  );
};

export default ProductInfo;
