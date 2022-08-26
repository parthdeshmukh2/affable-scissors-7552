import { Box, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import React from "react";

const TripleThreat = () => {
  return (
    <Box w="90%" h={{ lg: "600px" }} m="auto" mt={10}>
      <Grid
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
        h="100%"
        gap="8"
      >
        <GridItem display="flex" flexDirection="column" h="90%">
          <Image
            w="100%"
            h="80%"
            src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/r_co_side_by_side_2_640x.jpg?v=1661281657"
          />
          <Text fontSize="2xl" fontFamily="Montserrat Light,sans-serif" mt="3">
            Triple Threat
          </Text>
          <Text fontSize="md" color="gray">
            {" "}
            Get touchable, texturized hair right out of the shower. The
            Labyrinth 3-in-1 Texturizing Shampoo + Conditioner + Styler from
            R+Co features plumping polymers that gently bond to your strands.
          </Text>
          <Text
            color="rgb(18,40,76)"
            textDecoration="underline"
            mt="3"
            fontWeight="500"
            fontSize="lg"
          >
            SHOP NOW
          </Text>
        </GridItem>
        <GridItem display="flex" flexDirection="column" h="90%">
          <Image
            w="100%"
            h="80%"
            src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/serums_side_by_side_640x.jpg?v=1661281128"
          />
          <Text fontSize="2xl" fontFamily="Montserrat Light,sans-serif" mt="3">
            Serums, Anyone?
          </Text>
          <Text fontSize="md" color="gray">
            {" "}
            A must-have step in any truly advanced skincare routine, serums
            deliver high doses of active ingredients to treat dark spots,
            dryness and so much more!
          </Text>
          <Text
            color="rgb(18,40,76)"
            textDecoration="underline"
            mt="3"
            fontWeight="500"
            fontSize="lg"
          >
            SHOP TREATMENTS & SERUMS
          </Text>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default TripleThreat;
