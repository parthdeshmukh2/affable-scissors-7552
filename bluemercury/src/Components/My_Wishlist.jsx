import React, { useState } from "react";
import { Grid, Box, Text, Image } from "@chakra-ui/react";
import useFetch from "../Hooks/useFetch";

import { AiFillHeart } from "react-icons/ai";
import axios from "axios";
import { useEffect } from "react";

const My_Wishlist = () => {
  const wishListItem = useFetch(
    "https://bluemercury-backend.vercel.app/wishlist"
  );

  const [wishlistData, setWishlistData] = useState(wishListItem.data);
  //console.log(wishlistData.data, "wishlistData");
  const [active, setActive] = useState(true);

  const handleAddToCart = (payload) => {
    payload = { ...payload, Quantity: 1 };

    const token = localStorage.getItem("token");
    axios
      .post("https://bluemercury-backend.vercel.app/cart/create", payload, {
        headers: {
          token: "Bearer " + token,
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
       // console.log(res.data);
        alert("Item Added To Cart");

        //  handleRemoveWishListItem()
      })
      .catch((err) => console.log(err));
  };

  // const handleRemoveWishListItem=(id)=>{
  //   axios.delete(`https://bluemercury-backend.vercel.app/wishlist/delete/${id}`)
  //   .the((res)=> {
  //     console.log("deleted")
  //   alert("Item Removed from the Wishlist")

  //   }
  //      )
  //   .catch((err)=> console.log(err));
  // }

  // const handleRemoveWishListItem=(id)=>{
  //   axios.delete(`https://bluemercury-backend.vercel.app/wishlist/delete/${id}`)
  //   .the((res)=> {
  //     console.log("deleted")
  //   alert("Item Removed from the Wishlist")

  const removetowish = (currprod) => {
    const { _id } = currprod;
    axios
      .delete(`https://bluemercury-backend.vercel.app/wishlist/${_id}/delete`)
      .then((res) => {
        //console.log(res.data);
        alert("Item successfully removed from wishlist");
        getwish();
      })
      .catch((err) => {
        console.log(err);
      });
    setActive(!active);
  };

  useEffect(() => {
    getwish();
  }, []);

  const getwish = () => {
    axios
      .get(`https://bluemercury-backend.vercel.app/wishlist`)
      .then((res) => {
        //console.log(res.data,"Hello from wishlist");
        setWishlistData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    setActive(!active);
  };

  return (
    <Grid
      templateColumns={{
        base: "repeat(1, 1fr)",
        md: "repeat(2, 1fr)",
        lg: "repeat(4,1fr)",
      }}
      m="auto"
      gap="4"
    >
      {wishlistData.length > 0 &&
        wishlistData.map((elem) => {
          return (
            <Box h="370px" key={elem._id} boxShadow="xl" borderRadius="4">
              <Box
                display="flex"
                h="10%"
                justifyContent="space-between"
                alignItems="center"
              >
                <Text color="gray" fontWeight="500" fontSize="sm">
                  New
                </Text>
                <Box h="100%" w="20%" cursor="pointer">
                  <AiFillHeart
                    onClick={() => removetowish(elem)}
                    style={{ width: "80%", height: "80%" }}
                  />

                  {/* <RiHeartAddLine style={{ width: "80%", height: "80%" }} /> */}
                </Box>
              </Box>

              <Box w="100%" h="65%" display="flex" justifyContent="center">
                <Image w="70%" h="75%" src={elem.Image} />
              </Box>
              <Box
                display="flex"
                h="20%"
                justifyContent="center"
                flexDirection="column"
                mt="-2"
              >
                <Text
                  fontSize="md"
                  textAlign="center"
                  fontWeight="400"
                  color="gray"
                >
                  {elem.Brand}
                </Text>
                <Text
                  fontSize="md"
                  textAlign="center"
                  fontWeight="400"
                  color="gray"
                >
                  {elem.Title}
                </Text>
                <Text
                  fontSize="md"
                  textAlign="center"
                  fontWeight="400"
                  color="gray"
                >
                  $ {elem.Price}
                </Text>
              </Box>
              <Text
                mb="4"
                cursor="pointer"
                textAlign="center"
                textDecoration="underline"
                onClick={() => handleAddToCart(elem)}
              >
                Add To Cart
              </Text>
            </Box>
          );
        })}
    </Grid>
  );
};

export default My_Wishlist;
