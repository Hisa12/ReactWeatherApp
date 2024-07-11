import React from 'react';
import  'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import "bootstrap/dist/css/bootstrap.min.css"

import {
  Flex,
  Text,
  Center,
  Box,
  Heading,
} from "@chakra-ui/react";

import DailyData from './DailyAPI';
import "./DailyWeather.css"

export default function DailyWeather(){

  return(
    <div>
      <Flex
        display={"flex"} 
        height="80vh" 
        justifyContent="center" 
        alignItems="center">
      
        <Box  paddingTop={{ base: "85px", md: "90px" }} 
              paddingBottom={{ base: "50px", md: "60px" }}
              width={{ base: "90%", md: "70%" }} mt="3" >
          <Box w="100">
              <Box w="70%"> 
                  <Heading fontSize={{ base: "30px", md: "40px" }} >
                      Daily Weather
                  </Heading>   
                  <Text fontSize={{ base: "25px", md: "35px" }} >
                      Brisbane, AU
                  </Text> 
              </Box> 
          </Box>
              <Center>
                <DailyData/>
              </Center>
          </Box>
        </Flex>
    </div>
    
  )
};