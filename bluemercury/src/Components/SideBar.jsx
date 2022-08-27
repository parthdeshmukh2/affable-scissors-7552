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


                     
                    <Checkbox value = "BalmLabs">BalmLabs</Checkbox>
                    <Checkbox value = "Hum Nutrition">Hum Nutrition</Checkbox>
                    <Checkbox value = "Oribe">Oribe</Checkbox>
                    <Checkbox value = "Sana Jardin">Sana Jardin</Checkbox>
                    <Checkbox value = "R+Co">R+Co</Checkbox>
                    <Checkbox value = "EltMD">EltMD</Checkbox>
                    <Checkbox value = "Lune+Aster">Lune+Aster</Checkbox>
                   
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
