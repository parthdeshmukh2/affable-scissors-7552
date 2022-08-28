import { Flex, Box, Image, Text, Input } from "@chakra-ui/react";
import { Checkbox, CheckboxGroup, Button } from "@chakra-ui/react";
import React from "react";

const Checkout = () => {
  return (
    <Box width={"9xl"} color={"rgb(98,98,98)"}>
      <Flex flexDirection={["column", "column", "row"]}>
        <Flex
          width={["100%", "100%", "70%"]}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"flex-end"}
          mr={["0px", "0px", "50px"]}
        >
          <Box
            w={["98%", "100%", "65%"]}
            display={"flex"}
            flexDirection="column"
            justifyContent={"flex-start"}
            textAlign={"left"}
            pt="30px"
          >
            <Image
              width={["100%", "100%", "100%"]}
              h={["200px", "auto", "auto"]}
              src={"https://i.ibb.co/NghxBLb/image-3-5.png"}
            ></Image>
            <Text fontSize="xl">Contact information</Text>

            <Box
              border={"2px solid rgb(98,98,98)"}
              w="60%"
              p="0px 8px"
              borderRadius={"5px"}
              m="15px 0px"
            >
              <Text fontSize={"13px"}>EMAIL</Text>
              <input type="text" style={{ width: "102%", border: "none" }} />
            </Box>

            <Checkbox colorScheme="green" fontSize={"10px"} mb="25px">
              Email me with news and offers
            </Checkbox>

            <Text fontSize="lg">Shipping address</Text>
            <Flex w="100%" justifyContent={"space-between"} m="10px 0px">
              <Input w="47%" placeholder="First Name"></Input>
              <Input w="49%" placeholder="Last Name"></Input>
            </Flex>
            <Input w="100%" placeholder="Address" mb="10px"></Input>
            <Input
              w="100%"
              placeholder="Apartment, suite, etc. (Optional)"
              mb="10px"
            ></Input>
            <Flex w="100%" justifyContent={"space-between"}>
              <Input w="33%" m="auto" placeholder="City" mb="10px"></Input>
              <Input w="33%" m="auto" placeholder="State" mb="10px"></Input>
              <Input w="33%" m="auto" placeholder="Zipcode" mb="10px"></Input>
            </Flex>
            <Checkbox
              colorScheme="green"
              fontSize={"10px"}
              defaultChecked
              mb="25px"
            >
              Save this information for next time{" "}
            </Checkbox>
            <Text>
              By continuing, you agree to Bluemercury's{" "}
              <b> Privacy Practices.</b>
            </Text>
            <Flex w="100%" justifyContent={"flex-end"} m="20px 0px">
              <Button
                bg="rgb(18,40,76)"
                color={"white"}
                letterSpacing="0.5px"
                borderRadius="0"
                p="10px 30px"
              >
                CONTINUE TO SHIPPING METHOD
              </Button>
            </Flex>

            <hr />
            <Text m="10px 0px" fontSize={"14px"} letterSpacing="0.9px">
              All rights reserved bluemercury{" "}
            </Text>
          </Box>
        </Flex>

        <Box
          width={["100%", "100%", "50%"]}
          bg={"rgb(248,248,248)"}
          pt="50px"
          mb={["100px", "0px", "0px"]}
        >
          <Flex
            width={["80%", "100%", "70%"]}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"flex-start"}
            ml="50px"
          >
            <Box w="80%" m="auto">
              {" "}
              Iteme
            </Box>
            <Flex alignItems={"center"} w="100%">
              <Box
                w="80%"
                border={"2px solid rgb(98,98,98)"}
                
                p="0px 8px"
                borderRadius={"5px"}
                m="15px 0px"
              >
                <Text fontSize={"10px"} w="100%" textAlign="left">
                  GIFT CARD OR DISCOUNT CODE
                </Text>
                <input
                  type="text"
                  w="100%"
                  placeholder="GIFT CARD/PROMO CODE"
                  style={{
                    width: "102%",
                    border: "none",
                    background: "rgb(248,248,248)",
                    fontSize: "12px",
                  }}
                />
              </Box>
              <Button
                w="40%"
                bg="rgb(18,40,76)"
                color={"white"}
                letterSpacing="0.5px"
                borderRadius="0"
                p="10px 30px"
              >
                APPLY
              </Button>
            </Flex>
            <Box border={"1px solid rgb(222,222,222)"} w="100%" />
            <Flex
              w="100%"
              justifyContent={"space-between"}
              m="20px auto 10px auto"
            >
              <Text fontSize={"15px"}>Subtotal</Text>
              <Text>$118.00</Text>
            </Flex>
            <Flex w="100%" justifyContent={"space-between"} mb="20px">
              <Text fontSize={"15px"}>Shipping </Text>
              <Text fontSize={"11px"}>Calculated at next step</Text>
            </Flex>

            <Box border={"1px solid rgb(222,222,222)"} w="100%" />

            <Flex
              w="100%"
              justifyContent={"space-between"}
              m="20px auto 10px auto"
            >
              <Text fontSize={"16px"}>
                {" "}
                <b> Total </b>
              </Text>
              <Text fontSize={"16px"}>
                USD <b> $118.00</b>
              </Text>
            </Flex>
            {/* Subtotal	$118.00
Shipping	Calculated at next step
Total	USD $118.00*/}
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Checkout;
