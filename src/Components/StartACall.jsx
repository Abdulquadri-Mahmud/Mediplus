import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function StartACall() {
  return (
    <Box pt={'10vh'}>
        <Flex justifyContent={'center'} alignItems={'center'} height={{md: '45vh', base: '100%'}} px={3} py={14}  bgImage={'/img/call-bg.jpg'} bgBlendMode={'multiply'} bgPos={'center'} bgSize={'cover'} className='blendmode2'>
            <Box>
                <Heading fontWeight={500} textAlign={'center'} color={'white'} fontSize={{md: 30, base: 25}}>Do you need Emergency Medical Care? <br /> Call @23447594667</Heading>
                <Text mt={5} color={'white'} mb={5} textAlign={'center'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque porttitor dictum turpis nec gravida.</Text>
                <Flex justifyContent={'center'} gap={6}>
                    <Button bg={'white'} py={'22px'} _hover={{bg: 'blue.500', color: 'white'}} className='duration-200'>
                        <Link to={'/'}>Contact Now</Link>
                    </Button>
                    <Button bg={'transparent'} py={'22px'} color={'white'} borderWidth={1} borderColor={'white'}
                    _hover={{bg: 'white', color: 'black', borderWidth: 0}} className='duration-200'>
                        <Link to={'/'} >Learn More</Link>
                    </Button>
                </Flex>
            </Box>
        </Flex>
    </Box>
  )
}
