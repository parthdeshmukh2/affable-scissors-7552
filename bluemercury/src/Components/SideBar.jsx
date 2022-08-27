import React, { useEffect, useState } from "react";
import {
  Box,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Checkbox,
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../Redux/AppReducer/action";

const SideBar = ({handleChange}) => {

  const dispatch = useDispatch()
  const product = useSelector((store) => store.AppReducer.productData);
  
  // console.log(product)

  useEffect(()=>{
    dispatch(getData())
  },[])




 
  return (
    <Box w="100%" pl="4" pr="4" mt={{ md: "", lg: "75px" }}>
      <Box display="flex" mt="4" flexDirection="column">
        <Box w="100%" h="20%" borderBottom="0.5px solid gray">
          <Text
            fontSize={{ md: "xsm", lg: "md" }}
            fontWeight="500"
            color="rgb(18,40,76)"
          >
            NEW ARRIVALS CATEGORY
          </Text>
        </Box>
        <Box display="flex" flexDirection="column" mt="2">
          <Text color="gray" fontSize="15px" cursor="pointer">
            Make Up
          </Text>
          <Text color="gray" fontSize="15px" cursor="pointer">
            Bath & Body
          </Text>
          <Text color="gray" fontSize="15px" cursor="pointer">
            Fragrance
          </Text>
          <Text color="gray" fontSize="15px" cursor="pointer">
            Hair Care
          </Text>
          <Text color="gray" fontSize="15px" cursor="pointer">
            Skin Care
          </Text>
        </Box>
      </Box>
      <Box mt="8">
        <Text fontSize="lg" fontWeight="500" color="rgb(18,40,76)">
          Filters
        </Text>
      </Box>
      <Box mt="8">
        <Accordion allowMultiple>
          <AccordionItem>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      Brand
                    </Box>
                    {isExpanded ? (
                      <Text fontSize="2xl">-</Text>
                    ) : (
                      <Text fontSize="2xl">+</Text>
                    )}
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} >
                  <Box display="flex" flexDirection="column">
                   
                  <RadioGroup>
  <Stack>
    <Radio value='' onChange={handleChange}>ALL</Radio>
    <Radio value='BalmLabs' onChange={handleChange}>BalmLabs</Radio>
    <Radio value='Hum Nutrition' onChange={handleChange}>Hum Nutrition</Radio>
    <Radio value='Oribe' onChange={handleChange}>Oribe</Radio>
    <Radio value='Sana Jardin' onChange={handleChange}>Sana Jardin</Radio>
    <Radio value='R+Co' onChange={handleChange}>R+Co</Radio>
    <Radio value='EltaMD' onChange={handleChange}>EltaMD</Radio>
    <Radio value='Lune+Aster' onChange={handleChange}>Lune+Aster</Radio>
  </Stack>
         </RadioGroup>

                    {/* <Text value="BalmLabs" onClick={e=>handleChange("BalmLabs")}>BalmLabs</Text>
                    <Checkbox defaultChecked={category.includes("BalmLabs")} value="BalmLabs" onChange={handleGenreChange}>BalmLabs</Checkbox>
                    <Text defaultChecked={category.includes("Hum Nutrition")} value="Hum Nutrition" onChange={handleGenreChange}>Hum Nutrition</Text>
                    <Text defaultChecked={category.includes("Oribe")} value="Oribe" onChange={handleGenreChange}>Oribe</Text>
                    <Text defaultChecked={category.includes("Sana Jardin")} value="Sana Jardin" onChange={handleGenreChange}>Sana Jardin</Text>
                    <Text defaultChecked={category.includes("R+Co")} value="R+Co" onChange={handleGenreChange}>R+Co</Text>
                    <Text defaultChecked={category.includes("EltaMD")} value="EltaMD" onChange={handleGenreChange}>EltaMD</Text>
                    <Text defaultChecked={category.includes("Lune+Aster")} value="Lune+Aster" onChange={handleGenreChange}>Lune+Aster</Text> */}
                  </Box> 
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
        </Accordion>

        <Accordion allowMultiple>
          <AccordionItem>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      Type
                    </Box>
                    {isExpanded ? (
                      <Text fontSize="2xl">-</Text>
                    ) : (
                      <Text fontSize="2xl">+</Text>
                    )}
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Box display="flex" flexDirection="column">
                    <Checkbox>BalmLabs</Checkbox>
                    <Checkbox>Hum Nutrition</Checkbox>
                    <Checkbox>Oribe</Checkbox>
                    <Checkbox>Sana Jardin</Checkbox>
                    <Checkbox>R+Co</Checkbox>
                    <Checkbox>EltMD</Checkbox>
                    <Checkbox>Lune+Aster</Checkbox>
                  </Box>
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
        </Accordion>

        <Accordion allowMultiple>
          <AccordionItem>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      Benefits
                    </Box>
                    {isExpanded ? (
                      <Text fontSize="2xl">-</Text>
                    ) : (
                      <Text fontSize="2xl">+</Text>
                    )}
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Box display="flex" flexDirection="column">
                    <Checkbox>BalmLabs</Checkbox>
                    <Checkbox>Hum Nutrition</Checkbox>
                    <Checkbox>Oribe</Checkbox>
                    <Checkbox>Sana Jardin</Checkbox>
                    <Checkbox>R+Co</Checkbox>
                    <Checkbox>EltMD</Checkbox>
                    <Checkbox>Lune+Aster</Checkbox>
                  </Box>
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
        </Accordion>

        <Accordion allowMultiple>
          <AccordionItem>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      Size
                    </Box>
                    {isExpanded ? (
                      <Text fontSize="2xl">-</Text>
                    ) : (
                      <Text fontSize="2xl">+</Text>
                    )}
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Box display="flex" flexDirection="column">
                    <Checkbox>BalmLabs</Checkbox>
                    <Checkbox>Hum Nutrition</Checkbox>
                    <Checkbox>Oribe</Checkbox>
                    <Checkbox>Sana Jardin</Checkbox>
                    <Checkbox>R+Co</Checkbox>
                    <Checkbox>EltMD</Checkbox>
                    <Checkbox>Lune+Aster</Checkbox>
                  </Box>
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
        </Accordion>

        <Accordion allowMultiple>
          <AccordionItem>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      Concern
                    </Box>
                    {isExpanded ? (
                      <Text fontSize="2xl">-</Text>
                    ) : (
                      <Text fontSize="2xl">+</Text>
                    )}
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Box display="flex" flexDirection="column">
                    <Checkbox>BalmLabs</Checkbox>
                    <Checkbox>Hum Nutrition</Checkbox>
                    <Checkbox>Oribe</Checkbox>
                    <Checkbox>Sana Jardin</Checkbox>
                    <Checkbox>R+Co</Checkbox>
                    <Checkbox>EltMD</Checkbox>
                    <Checkbox>Lune+Aster</Checkbox>
                  </Box>
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
        </Accordion>
      </Box>
    </Box>
  );
};

export default SideBar;
