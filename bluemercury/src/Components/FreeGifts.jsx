import { Box, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import React from "react";

const FreeGifts = () => {
  return (
    <Box w="90%" h={{ lg: "600px" }} m="auto" mt="12">
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap="4"
        h="100%"
      >
        <GridItem
          display="flex"
          flexDirection="column"
          w="100%"
          h="90%"
          textAlign="center"
        >
          <Image
            h="80%"
            src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/samples-content_block_705x705.jpg?v=1604551537"
          />

          <Text mt="4" color="#12284c" fontSize="md" fontWeight="600">
            FREE GIFTS WITH PURCHASE
          </Text>
          <Text mt="1" color="gray" fontSize="md">
            Stock up on all your favorite brands, then try something new on us
          </Text>
          <Text
            mt="2"
            color="#12284c"
            fontSize="md"
            fontWeight="600"
            textDecoration="underline"
          >
            BROWSE NOW
          </Text>
        </GridItem>

        <GridItem
          display="flex"
          flexDirection="column"
          w="100%"
          h="90%"
          textAlign="center"
        >
          <Image
            h="80%"
            src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/consultation_promo_nav_1_705x705.jpg?v=1657733426"
          />

          <Text mt="4" color="#12284c" fontSize="md" fontWeight="600">
            COMPLIMENTARY IN-STORE CONSULTATIONS!
          </Text>
          <Text mt="1" color="gray" fontSize="md">
            Our Beauty Experts can show you quick makeup application tricks and
            how to revamp your skincare regimen.
          </Text>
          <Text
            mt="2"
            color="#12284c"
            fontSize="md"
            fontWeight="600"
            textDecoration="underline"
          >
            LEARN MORE
          </Text>
        </GridItem>

        <GridItem
          display="flex"
          flexDirection="column"
          w="100%"
          h="90%"
          textAlign="center"
        >
          <Image
            h="80%"
            src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/spa_menu_photo_705x705.jpg?v=1628018315"
          />

          <Text mt="4" color="#12284c" fontSize="md" fontWeight="600">
            BLUEMERCURY SPA
          </Text>
          <Text mt="1" color="gray" fontSize="md">
            Our luxurious spa services are customizable to your individual needs
          </Text>
          <Text
            mt="2"
            color="#12284c"
            fontSize="md"
            fontWeight="600"
            textDecoration="underline"
          >
            BROWSE THE MENU
          </Text>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default FreeGifts;
