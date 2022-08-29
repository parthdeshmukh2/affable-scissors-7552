import React from "react";
import styles from "../Styles/Navbar.module.css";
import { GoLocation } from "react-icons/go";
import { BsHandbag, BsSearch, BsSuitHeart } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import NewHover from "../Components/NewHover";
import EventHover from "../Components/EventsHover";
import BrandsHover from "../Components/BrandsHover";
import BlueRewards from "../Components/BlueRewards";
import axios from "axios";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Image,
  DrawerContent,
  DrawerCloseButton,
  Box,
  Flex,
  Text,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { Link as RLink, Navigate, useNavigate } from "react-router-dom";
import ExploreHover from "../Components/ExploreHover";
import RoutineHover from "../Components/RoutineHover";
import ShopHover from "../Components/ShopHover";
import useFetch from "../Hooks/useFetch";
import { useState } from "react";
import { useEffect } from "react";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const cartDatas = useFetch("https://stark-lake-19402.herokuapp.com/cart");

  const [cartdata, setCartdata] = useState(cartDatas);
  console.log(cartdata,"cartdata")
  const navigate = useNavigate();

  console.log(cartDatas.data, "cartData");

  const goToCart = () => {
    navigate("/cart");
  };
  useEffect(() => {
    getProduct();
  }, []);

  const handleDelete = (id) => {
    return axios
      .delete(`https://stark-lake-19402.herokuapp.com/cart/${id}/delete`)
      .then((r) =>{ console.log(r.data);
      alert("Item successfully removed from cart")
      }
      )
      .catch((e) => console.log(e));
  };

  const manageDelete = (payload) => {
    handleDelete(payload).then(() => getProduct());
  };

  const getProduct = () => {
    return axios
      .get("https://stark-lake-19402.herokuapp.com/cart")
      .then((r) => {
        console.log(r.data);
        setCartdata(r);
      })
      .catch((e) => console.log(e));
  };

  return (
    <div style={{ color: "rgb(96,111,135)", fontWeight: "600" }}>
      <div className={styles.NavbarBox}>
        <div className={styles.NavUpperBox}>
          <div className={styles.NavUpprLeftBox}>
            <Drawer
              isOpen={isOpen}
              placement="right"
              onClose={onClose}
              finalFocusRef={btnRef}
            >
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>YOUR BAG </DrawerHeader>
                <hr />
                <DrawerBody>
                  <Text
                    color="rgb(139,150,167)"
                    fontSize={"13px"}
                    fontWeight="600"
                  >
                    {" "}
                    FREE RETURNS ON ALL ORDERS{" "}
                  </Text>

                  <Box display="flex" flexDirection="column" w="100%" h="100%">
                    {cartdata &&
                      cartdata.data.map((elem, index) => {
                        return (
                          <Box
                            key={index}
                            w="100%"
                            mt="4"
                            display="flex"
                            boxShadow="xl"
                            p="2"
                            cursor="pointer"
                          >
                            <Box w="25%" h="100px">
                              <Image src={elem.Image} w="100%" h="100%" />
                            </Box>
                            <Box ml="2" w="50%">
                              <Text fontWeight="500">{elem.Brand}</Text>
                              <Text fontSize="12px">{elem.Title}</Text>
                            </Box>
                            <Box>
                              <Text>$ {elem.Price}</Text>
                            </Box>
                            <Box>
                              <Button onClick={() => manageDelete(elem._id)}>
                                Remove
                              </Button>
                            </Box>
                          </Box>
                        );
                      })}
                  </Box>
                </DrawerBody>
                <hr />

                <DrawerFooter>
                  {/* <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button> */}
                  <Flex
                    direction={"column"}
                    textAlign={"left"}
                    alignItems="center"
                    onClick={goToCart}
                  >
                    <Text color="rgb(139,150,167)" fontSize={"13px"}>
                      {" "}
                      Shipping, Taxes, Beauty Cards, and additional discounts
                      applied at checkout
                    </Text>
                    <Box w="fit-content" m="10px 0px">
                      <RLink to="/checkout">
                        <Button
                          bg="rgb(18,40,76)"
                          color={"white"}
                          borderRadius="0"
                          p="5px 30px"
                        >
                          VIEW BAG | TOTAL
                        </Button>
                      </RLink>{" "}
                    </Box>
                  </Flex>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>

            <label>
              <GoLocation size={22} color="rgb(33, 31, 31)" />
            </label>
            <label className={styles.SpaChn}>STORE & SPA LOCATOR</label>
          </div>

          <div className={styles.NavUpprRigtBox}>
            <div className={styles.NavUpRigFirst}>
              <div>
                <label>
                  <BsSuitHeart size={22} color="black" />
                </label>
              </div>
              <div onClick={() => navigate("/wishlist")}>
                <RLink to="/account">
                  <label className={styles.WishStyle}>WISHLIST</label>
                </RLink>
              </div>
            </div>

            <div className={styles.NavUpRigFirst}>
              <div>
                <label>
                  <BsSearch size={22} color="black" />
                </label>
              </div>
              <div>
                <label className={styles.WishStyle}>SEARCH</label>
              </div>
            </div>

            <div className={styles.NavUpRigFirst}>
              <div>
                <label>
                  <CgProfile size={22} color="black" />
                </label>
              </div>
              <div>
                <RLink to="/login">
                  <label className={styles.WishStyle}>SIGN IN</label>
                </RLink>
              </div>
            </div>

            <div className={styles.NavUpRigFirst}>
              <div>
                <label>
                  <BsHandbag size={22} color="black" />
                </label>
              </div>
              <div>
                <label
                  className={styles.WishStyle}
                  ref={btnRef}
                  colorScheme="teal"
                  onClick={onOpen}
                >
                  BAG
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.blueLogoImg} onClick={() => navigate("/")}>
          <img
            src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/bluemercury-logo_1216x.png?v=1648743182"
            alt=""
            style={{ width: "100%", height: "100%" }}
          />
        </div>

        <div className={styles.NavbarHoverBox}>
          <div>
            <ShopHover />
          </div>
          <div>
            <NewHover />
          </div>
          <div>
            <BrandsHover />
          </div>
          <div>
            <ExploreHover />
          </div>
          <div>
            <EventHover />
          </div>
          <div>
            <BlueRewards />
          </div>
          <div>
            <RoutineHover />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
