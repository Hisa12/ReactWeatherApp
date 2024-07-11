import React from 'react';
import { format } from 'date-fns'

import {
  Flex,
  Heading,
  Spacer,
  Center,
  AbsoluteCenter,
  SimpleGrid,
  Text,
  Box,
} from "@chakra-ui/react";

import useData from '../Search/WeatherAPI';

export const todayDate=(today)=>{
  const formatDate=format(today, 'E d MMM')
    
  return formatDate
}

export default function Brisbane(){
  const{loading,weather,error}=useData("Brisbane");

  if(loading){
    return (
        <Center>
            <Text>Loading...</Text>
        </Center>
    )
  }

  if(error){ 
    return (
         <Center>
            <Text>Something wrong...{error.message}</Text>
        </Center>
    )
  }

  return(
    <Flex display={"flex"} height="80vh" justifyContent="center" alignItems="center">
        <Box  width={{ base: "90%", md: "55%" }}   m="2" >
            <SimpleGrid rounded='lg'>
              <Box h={{ sm: '500px', md: '500' }} boxShadow='base' p='6' rounded='lg' bg='white'>
                    {(typeof weather.main !="undefined")?(
                  <div>

                    <Flex h='10%'>
                        <Box w="70%"> 
                            <Text fontSize={{ base: "40px", md: "40px", lg:"50px" }} >
                                {weather.name}, {weather.sys.country}
                            </Text>     
                        <Text fontSize={{ base: "20px", md: "30px" }}>{todayDate(new Date())}</Text>
                        </Box>
                    </Flex>

                      <Flex  
                        flex='1' 
                        flexShrink={0} 
                        justifyContent="center" 
                        alignItems="center">
                          <Box  w="50%" h="100%">
                      
                              <Center h="40%">
                                  <img 
                                      id="wicon" 
                                      src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
                                      alt="weather icon">
                                  </img>
                              </Center>
              
                          </Box>  
              
                          <Box w="50%" h="100%">
                              <Center h="70%" fontSize={{ base: "50px", md: "40px" }} >{Math.round(weather.main.temp)}°C</Center>
                              <Center h="30%" fontSize={{ base: "20px", md: "25px" }}>{Math.round(weather.main.temp_max)}°C / {Math.round(weather.main.temp_min)}°C</Center>
                          </Box> 
                      </Flex>

                      <Flex 
                        flex='1' 
                        w="100%"
                        mt={{ base: 4, md: 0 }} 
                        ml={{ md: 6 }} 
                        
                        justifyContent="center" 
                        alignItems="center">
                      
                        <Box w="33%" >
                          <Center fontSize={{ base: "20px", md: "30px" }} >{weather.weather[0].main}</Center>
                          <Center fontSize={{ base: "15px", md: "20px" }} >Condition</Center>
                        </Box>
                        <Spacer />
                        <Box w="33%" >
                          <Center fontSize={{ base: "20px", md: "26px" }}>{weather.wind.speed}km/h</Center>
                          <Center fontSize={{ base: "15px", md: "20px" }} >Wind</Center>
                        </Box>
                        <Spacer />
                        <Box w="33%">
                          <Center fontSize={{ base: "20px", md: "30px" }} >{weather.main.humidity}%</Center>
                          <Center fontSize={{ base: "15px", md: "20px" }} >Humidity</Center>
                        </Box>
                      </Flex>
                  </div>
                  ):(
                    <Box h='400px' position='relative'>
                      <AbsoluteCenter textAlign="center">
                        <Box mb="3" color="red">
                          <Heading>Error occurs. <br/>Retry please. </Heading>
                        </Box>            
                      </AbsoluteCenter>
                    </Box>
                  )}
              </Box>
            </SimpleGrid>
        </Box>
    </Flex>    
  )
}

