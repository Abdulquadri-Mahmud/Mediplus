import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { FaPrescriptionBottleMedical } from "react-icons/fa6";
import { FaTooth } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaAssistiveListeningSystems } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { MdBloodtype } from "react-icons/md";

export default function Offer() {
  return (
    <Box maxW={{md: '70%', base: '100%'}} mx={'auto'} pb={'10vh'} p={3}>
       <Flex justifyContent={'center'} alignItems={'center'} flexDir={'column'} gap={3} mt={10}>
            <Heading textAlign={'center'} fontWeight={500} fontSize={{md: 35, base: 25}}>We Offer Different Services To Improve <br /> Your Health</Heading>
            <Image mt={4} src='/img/section-img.png'/>
            <Text mt={4} textAlign={'center'} fontWeight={400}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam dolor, tenetur eligendi.</Text>
        </Flex>
        <Flex justifyContent={'space-around'} flexWrap={'wrap'} mt={16} gap={8}>
          <Box width={{md: '30%', base: '100%'}}>
            <Flex gap={3} alignItems={'center'}>
              <FaPrescriptionBottleMedical className='text-2xl text-blue-500'/>
              <Heading _hover={{color: 'blue.500'}} fontWeight={500} fontSize={25}>General Treatment</Heading>
            </Flex>
            <Text color={'gray.600'} fontWeight={500} fontSize={14} mt={4}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus dictum eros ut imperdiet.</Text>
          </Box>
          <Box width={{md: '30%', base: '100%'}}>
            <Flex gap={3} alignItems={'center'}>
              <FaTooth className='text-2xl text-blue-500'/>
              <Heading _hover={{color: 'blue.500'}} fontWeight={500} fontSize={25}>Teeth Whitening</Heading>
            </Flex>
            <Text color={'gray.600'} fontWeight={500} fontSize={14} mt={4}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus dictum eros ut imperdiet.</Text>
          </Box>
          <Box width={{md: '30%', base: '100%'}}>
            <Flex gap={3} alignItems={'center'}>
              <FaHeart className='text-2xl text-blue-500'/>
              <Heading _hover={{color: 'blue.500'}} fontWeight={500} fontSize={25}>Heart Surgery</Heading>
            </Flex>
            <Text color={'gray.600'} fontWeight={500} fontSize={14} mt={4}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus dictum eros ut imperdiet.</Text>
          </Box>
          <Box width={{md: '30%', base: '100%'}}>
            <Flex gap={3} alignItems={'center'}>
              <FaAssistiveListeningSystems className='text-2xl text-blue-500'/>
              <Heading _hover={{color: 'blue.500'}} fontWeight={500} fontSize={25}>Ear Treatment</Heading>
            </Flex>
            <Text color={'gray.600'} fontWeight={500} fontSize={14} mt={4}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus dictum eros ut imperdiet.</Text>
          </Box>
          <Box width={{md: '30%', base: '100%'}}>
            <Flex gap={3} alignItems={'center'}>
              <FaEye className='text-2xl text-blue-500'/>
              <Heading _hover={{color: 'blue.500'}} fontWeight={500} fontSize={25}>Vision Problems</Heading>
            </Flex>
            <Text color={'gray.600'} fontWeight={500} fontSize={14} mt={4}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus dictum eros ut imperdiet.</Text>
          </Box>
          <Box width={{md: '30%', base: '100%'}}>
            <Flex>
              <MdBloodtype className='text-2xl text-blue-500'/>
              <Heading _hover={{color: 'blue.500'}} fontWeight={500} fontSize={25}>Blood Transfusion</Heading>
            </Flex>
            <Text color={'gray.600'} fontWeight={500} fontSize={14} mt={4}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus dictum eros ut imperdiet.</Text>
          </Box>
        </Flex>
    </Box>
  )
}
