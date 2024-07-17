import { Box, Button, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react';
import { FaCheckCircle } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import { RiScissors2Line } from "react-icons/ri";
import { FaTooth } from "react-icons/fa";
import { PiHeartbeatFill } from "react-icons/pi";

export default function PricingCard() {
  return (
    <>
        <Flex justifyContent={'center'} gap={8} flexWrap={'wrap'} mt={12}>
            <Box bg={'white'} borderWidth={1} borderColor={'gray.300'} p={8} rounded={5} width={{md: '350px', base: '97%'}}>
                <Flex justifyContent={'center'} mb={5}>
                    <RiScissors2Line className='text-blue-500 text-6xl'/>
                </Flex>
                <Text fontWeight={500} fontSize={25} textAlign={'center'}>Plastic Suggery</Text>
                <Text my={4} fontWeight={500} fontSize={30} color={'blue.500'} textAlign={'center'}>$199<sub className='text-sm text-gray-500'> Per Visit</sub></Text>
                <Flex flexDir={'column'} gap={5}>
                    <Flex justifyContent={'space-between'} alignItems={'center'}>
                        <Text fontWeight={500}>Lorem Ipsum Dolor Sit</Text>
                        <FaCheckCircle className='text-blue-500'/>
                    </Flex>
                    <Flex justifyContent={'space-between'} alignItems={'center'}>
                        <Text fontWeight={500}>Cubitur Sollicitudin Fentum</Text>
                        <FaCheckCircle className='text-blue-500'/>
                    </Flex>
                    <Flex justifyContent={'space-between'} alignItems={'center'}>
                        <Text fontWeight={500}>Nullam Interdum Enim</Text>
                        <IoMdCloseCircle className='text-gray-500 text-xl'/>
                    </Flex>
                    <Flex justifyContent={'space-between'} alignItems={'center'}>
                        <Text fontWeight={500}>Donec Ultricies Metus</Text>
                        <IoMdCloseCircle className='text-gray-500 text-xl'/>
                    </Flex>
                    <Flex justifyContent={'space-between'} alignItems={'center'}>
                        <Text fontWeight={500}>Pellentesque Eget Nibh</Text>
                        <IoMdCloseCircle className='text-gray-500 text-xl'/>
                    </Flex>
                </Flex>
                <Button bg={'blue.500'} _hover={{bg: 'blue.400'}} width={'100%'} color={'white'} py={'23px'} textTransform={'uppercase'} mt={5}>Book Now</Button>
            </Box>
            <Box bg={'white'} borderWidth={1} borderColor={'gray.300'} p={8} rounded={5} width={{md: '350px', base: '97%'}}>
                <Flex justifyContent={'center'} mb={5}>
                    <FaTooth className='text-blue-500 text-5xl'/>
                </Flex>
                <Text fontWeight={500} fontSize={25} textAlign={'center'}>Teeth Whitening</Text>
                <Text my={4} fontWeight={500} fontSize={30} color={'blue.500'} textAlign={'center'}>$299<sub className='text-sm text-gray-500'> Per Visit</sub></Text>
                <Flex flexDir={'column'} gap={5}>
                    <Flex justifyContent={'space-between'} alignItems={'center'}>
                        <Text fontWeight={500}>Lorem Ipsum Dolor Sit</Text>
                        <FaCheckCircle className='text-blue-500'/>
                    </Flex>
                    <Flex justifyContent={'space-between'} alignItems={'center'}>
                        <Text fontWeight={500}>Cubitur Sollicitudin Fentum</Text>
                        <FaCheckCircle className='text-blue-500'/>
                    </Flex>
                    <Flex justifyContent={'space-between'} alignItems={'center'}>
                        <Text fontWeight={500}>Nullam Interdum Enim</Text>
                        <FaCheckCircle className='text-blue-500'/>
                    </Flex>
                    <Flex justifyContent={'space-between'} alignItems={'center'}>
                        <Text fontWeight={500}>Donec Ultricies Metus</Text>
                        <IoMdCloseCircle className='text-gray-500 text-xl'/>
                    </Flex>
                    <Flex justifyContent={'space-between'} alignItems={'center'}>
                        <Text fontWeight={500}>Pellentesque Eget Nibh</Text>
                        <IoMdCloseCircle className='text-gray-500 text-xl'/>
                    </Flex>
                </Flex>
                <Button bg={'blue.500'} _hover={{bg: 'blue.400'}} width={'100%'} color={'white'} py={'23px'} textTransform={'uppercase'} mt={5}>Book Now</Button>
            </Box>
            <Box bg={'white'} borderWidth={1} borderColor={'gray.300'} p={8} rounded={5} width={{md: '350px', base: '97%'}}>
                <Flex justifyContent={'center'} mb={5}>
                    <PiHeartbeatFill className='text-blue-500 text-5xl'/>
                </Flex>
                <Text fontWeight={500} fontSize={25} textAlign={'center'}>Heart Suggery</Text>
                <Text my={4} fontWeight={500} fontSize={30} color={'blue.500'} textAlign={'center'}>$399<sub className='text-sm text-gray-500'> Per Visit</sub></Text>
                <Flex flexDir={'column'} gap={5}>
                    <Flex justifyContent={'space-between'} alignItems={'center'}>
                        <Text fontWeight={500}>Lorem Ipsum Dolor Sit</Text>
                        <FaCheckCircle className='text-blue-500'/>
                    </Flex>
                    <Flex justifyContent={'space-between'} alignItems={'center'}>
                        <Text fontWeight={500}>Cubitur Sollicitudin Fentum</Text>
                        <FaCheckCircle className='text-blue-500'/>
                    </Flex>
                    <Flex justifyContent={'space-between'} alignItems={'center'}>
                        <Text fontWeight={500}>Nullam Interdum Enim</Text>
                        <FaCheckCircle className='text-blue-500'/>
                    </Flex>
                    <Flex justifyContent={'space-between'} alignItems={'center'}>
                        <Text fontWeight={500}>Donec Ultricies Metus</Text>
                        <FaCheckCircle className='text-blue-500'/>
                    </Flex>
                    <Flex justifyContent={'space-between'} alignItems={'center'}>
                        <Text fontWeight={500}>Pellentesque Eget Nibh</Text>
                        <FaCheckCircle className='text-blue-500'/>
                    </Flex>
                </Flex>
                <Button bg={'blue.500'} _hover={{bg: 'blue.400'}} width={'100%'} color={'white'} py={'23px'} textTransform={'uppercase'} mt={5}>Book Now</Button>
            </Box>
        </Flex></>
  )
}
