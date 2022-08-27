import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { RiHeartAddLine } from "react-icons/ri";
import { AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

const ProductCard = (elem) => {
  const { Title } = elem;
  const [active, setActive] = useState(false);
  const handleWishListItem = () => {
    setActive(true);
  };
  // console.log(Iamges[0]);

  return (
    <Box h="350px" boxShadow="xl" borderRadius="4">
      <Box
        display="flex"
        h="10%"
        justifyContent="space-between"
        alignItems="center"
      >
        <Text color="gray" fontWeight="500" fontSize="sm">
          New
        </Text>
        <Box h="100%" w="20%" cursor="pointer" onClick={handleWishListItem}>
          {active ? (
            <AiFillHeart style={{ width: "80%", height: "80%" }} />
          ) : (
            <RiHeartAddLine style={{ width: "80%", height: "80%" }} />
          )}
        </Box>
      </Box>
      <Link to={`/product/${elem._id}`}>
        <Box w="100%" h="65%" display="flex" justifyContent="center">
          <Image w="70%" h="80%" src={elem.Image} />
        </Box>
        <Box
          display="flex"
          h="20%"
          justifyContent="center"
          flexDirection="column"
          mt="-2"
        >
          <Text fontSize="md" textAlign="center" fontWeight="400" color="gray">
            {elem.Brand}
          </Text>
          <Text fontSize="md" textAlign="center" fontWeight="400" color="gray">
            {elem.Title}
          </Text>
          <Text fontSize="md" textAlign="center" fontWeight="400" color="gray">
            $ {elem.Price}
          </Text>
        </Box>
      </Link>
    </Box>
  );
};

export default ProductCard;
