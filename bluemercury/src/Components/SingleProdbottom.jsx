import React from "react";

import {
  Box,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const SingleProdbottom = ({ currprod }) => {
  const dispatch = useDispatch();
  const product = useSelector((store) => store.AppReducer.productData);
  console.log(product, dispatch);
  const { Ingredients, HowToUse } = currprod;

  // const [showproduct, setShowproduct] = useState(false);
  // const [showuse, setShowuse] = useState(false);
  // const [showingredient, setShowingredient] = useState(false);

  return (
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
                  How To Use
                </Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Text color="gray" fontSize="lg">
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
                  Reviews
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
    </Box>
  );
};

export default SingleProdbottom;
