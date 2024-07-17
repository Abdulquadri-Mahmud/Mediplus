import React from 'react'
import StartBlogCard from './cards/StartBlogCard'
import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'

export default function StartBlog() {
  return (
    <Box maxW={{'2xl': '70%', md: '100%'}} mx={'auto'} pb={'10vh'}>
       <Flex justifyContent={'center'} alignItems={'center'} flexDir={'column'} gap={3} mt={10}>
            <Heading textAlign={'center'} fontWeight={500} fontSize={{md: 35, base: 25}}>Keep Up With Our Most Recent Medical <br /> News.</Heading>
            <Image mt={4} src='/img/section-img.png'/>
            <Text mt={4} textAlign={'center'} fontWeight={400}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam dolor, tenetur eligendi.</Text>
        </Flex>
        <StartBlogCard/>
    </Box>
  )
}
