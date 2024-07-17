import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'

export default function StartBlogCard() {
  return (
    <Flex justifyContent={'center'} mt={14} gap={8} flexWrap={'wrap'}>
        <Box shadow={'md'} width={'350px'} position={'relative'} className='startBlogCard'>
            <Image maxW={'full'} src='/img/blog1.jpg'/>
            <Box padding={6}>
                <Box width={'120px'} p={2} bg={'blue.500'}>
                    <Text color={'white'} fontWeight={500}>22 Aug, 2020</Text>
                </Box>
                <Text mt={5} fontSize={20} fontWeight={500}>We have annnocuced our new product.</Text>
                <Text fontWeight={500} mt={5} fontSize={15} color={'gray.600'}>Lorem Ipsum Dolor A Sit Ameti, Consectetur Adipisicing Elit, Sed Do Eiusmod Tempor Incididunt Sed Do Incididunt Sed.</Text>
            </Box>
            <Box className='blogCard'></Box>
        </Box>
        <Box shadow={'md'} width={'350px'} position={'relative'} className='startBlogCard'>
            <Image maxW={'full'} src='/img/blog2.jpg'/>
            <Box padding={6}>
                <Box width={'120px'} p={2} bg={'blue.500'}>
                    <Text color={'white'} fontWeight={500}>15 Jul, 2020</Text>
                </Box>
                <Text mt={5} fontSize={20} fontWeight={500}>Top five way for solving teeth problems.</Text>
                <Text fontWeight={500} mt={5} fontSize={15} color={'gray.600'}>Lorem Ipsum Dolor A Sit Ameti, Consectetur Adipisicing Elit, Sed Do Eiusmod Tempor Incididunt Sed Do Incididunt Sed.</Text>
            </Box>
            <Box className='blogCard active'></Box>
        </Box>
        <Box shadow={'md'} width={'350px'} position={'relative'} className='startBlogCard'>
            <Image maxW={'full'} src='/img/blog3.jpg'/>
            <Box padding={6}>
                <Box width={'120px'} p={2} bg={'blue.500'}>
                    <Text color={'white'} fontWeight={500}>05 Jan, 2020</Text>
                </Box>
                <Text mt={5} fontSize={20} fontWeight={500}>We provide highly business soliutions.</Text>
                <Text fontWeight={500} mt={5} fontSize={15} color={'gray.600'}>Lorem Ipsum Dolor A Sit Ameti, Consectetur Adipisicing Elit, Sed Do Eiusmod Tempor Incididunt Sed Do Incididunt Sed.</Text>
            </Box>
            <Box className='blogCard' ></Box>
        </Box>
    </Flex>
  )
}
