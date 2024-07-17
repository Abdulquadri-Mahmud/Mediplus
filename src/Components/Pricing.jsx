import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react';
import PricingCard from './cards/PricingCard';

export default function Pricing() {
  return (
    <Box maxW={{'2xl': '70%', md: '100%'}} mx={'auto'} mb={'10vh'} p={{md: 10, base: 2}} bg={'gray.100'} shadow={'md'}>
        <Flex justifyContent={'center'} alignItems={'center'} flexDir={'column'} gap={3} mt={10}>
            <Heading textAlign={'center'} fontWeight={500} fontSize={{md: 35, base: 25}}>We Provide You The Best Treatment In <br /> Resonable Price</Heading>
            <Image mt={4} src='/img/section-img.png'/>
            <Text mt={4} textAlign={'center'} fontWeight={400}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam dolor, tenetur eligendi.</Text>
        </Flex>
        <PricingCard/>
    </Box>
  )
}
