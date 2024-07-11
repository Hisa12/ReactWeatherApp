import React from 'react';
import {
  Box,
  Stack,
  Text,
  Container,
} from '@chakra-ui/react';
import './Footer.css'


function Footer(){

    return (
        <Box boxShadow='md'   
            bg='teal.50' 

            borderColor='teal.200' 
            className='footer-box'>
            <Container 
                as={Stack}
                maxW={'6xl'}
                py={1}
                direction={{ base: 'column', md: 'low' }}
                spacing={3}
                justify={{ base: 'center', md: 'center' }}
                align={{ base: 'center', md: 'center' }}
                >
                <Text  
                    fontSize={'sm'}>
                    © 2023 W&W All rights reserved.
                </Text>
            </Container>
        </Box>

    )

} 
export default Footer;