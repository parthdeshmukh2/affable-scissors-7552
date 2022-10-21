import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MainNavbar from "../Components/MainNavbar";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BsFillBagPlusFill } from "react-icons/bs";
import { RiHeartAddLine } from "react-icons/ri";
import { AiFillHeart } from "react-icons/ai";
import axios from "axios";
import {
  Box,
  Text,
  Breadcrumb,
  BreadcrumbItem,
  Image,
  BreadcrumbLink,
  BreadcrumbSeparator,
  Button,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Grid,
  GridItem,
  Slider,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import SingleProdbottom from "../Components/SingleProdbottom";
import ProductReviews from "../Components/ProductReviews";
import Footer from "../Components/Footer";


const SingleProduct = () => {
  const dispatch = useDispatch();
  const [active, setActive] = useState(false);
  const product = useSelector((store) => store.AppReducer.productData);
  const { id } = useParams();
  const [currprod, setCurrprod] = useState({});
  const { Images } = currprod;
  // console.log(Iamges)
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(1);

  // console.log(currprod);

  const handleAddToCart = (payload) => {
    payload = { ...payload, Quantity: quantity };

    const token = localStorage.getItem("token");
    axios
      .post("https://thawing-wildwood-83730.herokuapp.com/cart/create", payload, {
        headers: {
          token: "Bearer " + token,
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

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

  const handleWishListItem = (payload) => {
    const token = localStorage.getItem("token");
    axios
      .post("https://thawing-wildwood-83730.herokuapp.com/wishlist/create", payload, {
        headers: {
          token: "Bearer " + token,
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
    setActive(!active);
  };

  return (
    <>
      <Box>
        <Box>
          <MainNavbar />
        </Box>

        <Box w="100%" position="absolute" mt="32">
          <Box
            w="100%"
            h="40px"
            bg="rgb(215,235,242)"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Text fontSize="12px" fontWeight="400" color="gray">
              Free Samples With All Orders
            </Text>
          </Box>

          {/* BreadBrumbs */}

          <Box ml={{ base: "2", lg: "32" }} mt="5" color="gray">
            <Breadcrumb
              spacing="8px"
              separator={<ChevronRightIcon color="gray.500" />}
            >
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem>
                <BreadcrumbLink href="/newarrival">New Arrival</BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink href="#">{currprod.Title}</BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
          </Box>

          <Grid
            w="90%"
            h={{ base: "200px", md: "400px", lg: "500px" }}
            m="auto"
            mt="8"
            gap="8"
            templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(2, 1fr)" }}
          >
            <GridItem
              w={{ base: "50%", md: "60%", lg: "100%" }}
              m={{ base: "auto", lg: "0" }}
              h={{ base: "200px", md: "400px", lg: "500px" }}
            >
              <Image w="100%" h="100%" src={currprod.Image} />
            </GridItem>

            <GridItem w="100%" h="500px" display="flex" flexDirection="column">
              <Box
                display="flex"
                justifyContent="space-between"
                w="100%"
                p="4"
                h="7%"
                flexWrap="wrap"
                alignItems="center"
              >
                <Text color="gray.800" fontSize={{ base: "sm", lg: "lg" }}>
                  {currprod.Brand}
                </Text>
                <Box display="flex" alignItems="center">
                  <Text mr="4" color="gray">
                    Ratings
                  </Text>
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiOutlineStar />
                </Box>
              </Box>

              <Box pl="4" mt="4">
                <Text fontSize="xl" color="gray.600">
                  {currprod.Title}
                </Text>
              </Box>

              <Box pl="4">
                <Text fontSize="10px" fontWeight="semibold" color="gray.600">
                  NEW LIMITED EDITION
                </Text>
              </Box>

              <Box
                pl="4"
                display="flex"
                w={{ base: "100%", lg: "70%" }}
                h="7%"
                alignItems="center"
              >
                <Text
                  fontSize={{ base: "md", lg: "xl" }}
                  mt="4"
                  fontWeight="semibold"
                  color="gray.600"
                >
                  $ {currprod.Price}
                </Text>
                <Text fontSize="xsm" mt="4" ml="4" color="gray.600">
                  {" "}
                  4 interest-free payments of $12.50 with
                </Text>
                <Text
                  fontSize="xsm"
                  mt="4"
                  ml="1"
                  textDecoration="underline"
                  fontWeight="semibold"
                  color="rgb(18,40,76)"
                >
                  Klarna.
                </Text>
              </Box>

              <Box pl="4" mt="5">
                <Text>{currprod.Description}</Text>
              </Box>

              <Box
                display="flex"
                w="100%"
                h="70px"
                pl="4"
                mt="6 "
                alignItems="center"
              >
                <Box
                  bg="rgb(18,40,76)"
                  h="80%"
                  w="70%"
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  pl="4"
                  pr="4"
                  cursor="pointer"
                  onClick={() => handleAddToCart(currprod)}
                >
                  <Box display="flex">
                    <Box color="white">
                      <BsFillBagPlusFill size="20" />
                    </Box>
                    <Text color="white" ml="4" fontWeight="bold">
                      ADD TO BAG
                    </Text>
                  </Box>
                  <Box>
                    <Text color="white">$ {currprod.Price}</Text>
                  </Box>
                </Box>
                <Box display="flex" alignItems="center" w="20%">
                  <Button
                    ml="4"
                    bg="rgb(18,40,76)"
                    color="white"
                    fontSize="2xl"
                    p="2"
                    disabled={quantity <= 1}
                    onClick={() => setQuantity(quantity - 1)}
                  >
                    -
                  </Button>
                  <Text ml="4" mr="4">
                    {quantity}
                  </Text>
                  <Button
                    bg="rgb(18,40,76)"
                    color="white"
                    fontSize="2xl"
                    p="2"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </Button>
                </Box>

                <Box
                  h="90%"
                  w="20%"
                  display="flex"
                  alignItems="center"
                  cursor="pointer"
                  onClick={() => handleWishListItem(currprod)}
                >
                  {active ? (
                    <AiFillHeart style={{ width: "50%", height: "50%" }} />
                  ) : (
                    <RiHeartAddLine style={{ width: "50%", height: "50%" }} />
                  )}
                </Box>
              </Box>
            </GridItem>
          </Grid>
        </Box>

        <Box
          w="70%"
          position="absolute"
          display="flex"
          ml="15%"
          flexDirection="column "
          mt={{ base: "900px", md: "1000", lg: "800px" }}
        >
          <Accordion allowMultiple>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    <Text fontSize="xl" color="rgb(18,40,76)">
                      {" "}
                      Product Information
                    </Text>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Text color="gray" fontSize="lg">
                  {" "}
                  {currprod.ProductInfo}
                </Text>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>

          <Accordion allowMultiple>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    <Text fontSize="xl" color="rgb(18,40,76)">
                      {" "}
                      Ingredients
                    </Text>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Text color="gray" fontSize="lg">
                  {currprod.Ingredients}
                </Text>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>

          <Accordion allowMultiple>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    <Text fontSize="xl" color="rgb(18,40,76)">
                      {" "}
                      How To Use
                    </Text>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Text color="gray" fontSize="lg">
                  {currprod.HowToUse}
                </Text>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>

          {/* <Accordion allowMultiple>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    <Text fontSize="xl" color="rgb(18,40,76)">
                      {" "}
                      Reviews
                    </Text>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Text color="gray" fontSize="lg">
                  <ProductReviews />
                </Text>
              </AccordionPanel>
            </AccordionItem>
          </Accordion> */}
          <ProductReviews/>
        </Box>
      </Box>
      
      <Box position="absolute" mt="1500px" w="100%">
        <Footer />
      </Box>
    </>
  );
};

export default SingleProduct;

