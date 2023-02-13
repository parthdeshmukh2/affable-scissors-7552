import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useState, useEffect } from "react";
import { RiHeartAddLine } from "react-icons/ri";
import { AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import { Spinner } from "@chakra-ui/react";
import useFetch from "../Hooks/useFetch";

const ProductCard = (elem) => {
  const { Title } = elem;
  const [active, setActive] = useState(false);
  const { isLoding } = useFetch(
    "https://bluemercury-backend.vercel.app/newarrival"
  );

  // console.log(Iamges[0]);

  const handleAddToWishList = (payload) => {
    let { _id } = payload;
    //console.log(payload, _id, "payload");
    payload = { ...payload, Quantity: 1 };

    const token = localStorage.getItem("token");

    if (active) {
      //console.log(payload, _id, "payload");
      axios
        .delete(`https://bluemercury-backend.vercel.app/wishlist/${_id}/delete`)
        .then((res) => {
          //console.log(res.data,"res data");
          alert("Item successfully removed from wishlist");
          // getwish();
        })
        .catch((err) => {
          console.log(err);
        });
      setActive(false);
    } else {
      axios
        .post(
          "https://bluemercury-backend.vercel.app/wishlist/create",
          payload,
          {
            headers: {
              token: "Bearer " + token,
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          // console.log(res.data, "added");
          alert("Item Added To WishList");
        })
        .catch((err) => console.log(err));

      setActive(true);
    }
  };

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
        <Box
          h="100%"
          w="20%"
          cursor="pointer"
          onClick={() => handleAddToWishList(elem)}
        >
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
