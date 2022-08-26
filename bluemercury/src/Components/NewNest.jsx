import React from "react";
import { Box, Grid, GridItem, Image, Text } from "@chakra-ui/react";

const NewNest = () => {
  return (
    <Box w="100%" bg="#dad0dc">
      <Box display="flex" justifyContent="center" p="4">
        <Text
          fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
          textAlign="center"
          fontFamily="Montserrat Regular,sans-serif"
        >
          NEW! FROM NEST NEW YORK
        </Text>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        m="auto"
        p="4"
        w={{ base: "90%", md: "80%", lg: "50%" }}
      >
        <Text
          color="gray"
          textAlign="center"
          fontSize={{ base: "xsm", lg: "md" }}
          fontFamily="Montserrat Light,sans-serif"
        >
          This fall candle captures the sweet, woody aroma of freshly fallen
          autumn leaves with wild plum and cinnamon wrapped in the warmth of
          patchouli leaf and cashmere wood.
        </Text>
      </Box>
      <Box
        display="flex"
        m="auto"
        h={{ lg: "500px" }}
        w={{ base: "90%", md: "70%", lg: "60%" }}
        mt="4"
      >
        <Grid
          templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
          gap="8"
          w="100%"
          h={{ lg: "100%" }}
        >
          <GridItem>
            <Image
              w="100%"
              h="90%"
              src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/TABBED_-_nest_pumpkin_and_plum_600x.progressive.jpg?v=1661282031"
            />
          </GridItem>
          <GridItem>
            <Image
              w="100%"
              h="90%"
              src="https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-840732116392-1_235x235_crop_center.jpg?v=1660249871"
            />
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
};

export default NewNest;
