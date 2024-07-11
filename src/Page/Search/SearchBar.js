import React from 'react';
import{useState}from "react";
import {
    Input,
    Button,
    Flex,
    Text,
    Box,
    
} from "@chakra-ui/react";

export default function SearchBar(props){
    const [innerSearch,setInnerSearch]=useState("");
    const [error,setError]=useState("");

    return(
        <Box spacing={1} justifyContent="center" alignItems="center">
            <Flex>
                <Box>
                    <Input type="text" variant="flushed" 
                    placeholder="Enter city/town" 
                    size={{ base: "sm", md: "md" }} 
                    value={innerSearch}
                    onChange={(e)=> {
                    if (!/^[A-Za-z]+$/.test(e.target.value)) {
                        setError("Error: Accept only letters.");

                    }else{
                        setError(null);                       
                    }
                    setInnerSearch(e.target.value)}

                    }
                    />
                
                </Box>
                <Box>
                    <Button 
                        isDisabled={!/^[A-Za-z]+$/.test(innerSearch)}
                        size={{ base: "sm", md: "md" }} 
                        colorScheme='teal' 
                        variant="solid" 
                        onClick={()=>props.onSubmit(innerSearch)} 
                        >Search
                    </Button>
                </Box>
            </Flex>
            <Box>
                {error!=null?<Text color={"red"}>{error}</Text>:null}
            </Box>
        </Box>
        
        

    )
  
}

