import React, { useEffect } from 'react';
import{useState}from "react";
import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  Box,
  Avatar,
  FormControl,
} from "@chakra-ui/react";
import {validation} from './Validation';

function Login(){
  
  const [values,setValues]=useState({
    email:'',passwprd:''
  });
  const [errors,setErrors]=useState({})

  function handleChange(e){
    setValues({...values,[e.target.name]:e.target.value})
  }

  function handleSubmit(e){
    e.preventDefault();
    setErrors(validation(values));
    
  }
  const isDisabled = Object.keys(errors).length > 0

  useEffect(()=>{
    const newErrors=validation(values)
    setErrors(newErrors)
  },[values]);
  
  return(
    <Flex flexDirection="column" width="100wh" height="100wh" justifyContent="center" alignItems="center">
      <Stack flexDirection="column" p="6%" justifyContent="center" alignItems="center" marginBottom="2" >

        <Avatar src='https://bit.ly/broken-link'></Avatar>
        <Heading>Welcome Back!</Heading>
        <Box bg={"white"} minW={{ base: "90%", md: "468px" }}>
          <form onSubmit={handleSubmit}>
            <Stack spacing={3} p="1rem" boxShadow="md">
              <FormControl>
                <InputGroup>
                 <Input
                    type="email" name="email"  defaultValue ={values.email} onChange={handleChange} 
                    placeholder="Email" 
                  />
                </InputGroup>
                {errors.email && <p style={{color:"red", fontSize:"13px"}}>{errors.email}</p>}
              </FormControl>
              <FormControl>
                <InputGroup>
                 <Input
                    type="password" name="password"  defaultValue ={values.password} onChange={handleChange} 
                    placeholder="Password" 
                  />
                </InputGroup>
                {errors.password && <p style={{color:"red", fontSize:"13px"}}>{errors.password}</p>}
              </FormControl>
              <Button
                borderRadius={4} type="submit" variant="solid" colorScheme="teal" width="full" isDisabled={isDisabled}
              >
                Login
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>

    </Flex>
  )

}

export default Login;