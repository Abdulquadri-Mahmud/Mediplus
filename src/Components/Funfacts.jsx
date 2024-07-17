import { Box, Flex, Heading, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaRegSmile } from "react-icons/fa";
import { VscTable } from "react-icons/vsc";

export default function Funfacts() {
  return (
    <Box py={'10vh'} color={'white'}>
        <Box height={{md: '45vh', base: '100%'}}  bgImage={'/img/fun-bg.jpg'} bgBlendMode={'multiply'} bgPos={'bottom'} bgSize={'cover'} className='blendmode2'>
            <Flex height={'100%'} justifyContent={'space-around'} alignItems={'center'} flexWrap={'wrap'} p={4} gap={0}>
                <Flex justifyContent={'center'} alignItems={'center'} flexDir={'column'} gap={1} width={{md: '25%', base: '100%'}}>
                    <Flex justifyContent={'center'} alignItems={'center'} width={'70px'} height={'70px'} rounded={'full'} borderWidth={1} borderColor={'white'}>
                        <FaHome className='text-2xl'/>
                    </Flex>
                    <Heading>3468</Heading>
                    <Text>Hospital Rooms</Text>
                </Flex>
                <Flex justifyContent={'center'} alignItems={'center'} flexDir={'column'} gap={1} width={{md: '25%', base: '100%'}}>
                    <Flex justifyContent={'center'} alignItems={'center'} width={'70px'} height={'70px'} rounded={'full'} borderWidth={1} borderColor={'white'}>
                        <FaUser className='text-2xl'/>
                    </Flex>
                    <Heading>557</Heading>
                    <Text>Special Doctors</Text>
                </Flex>
                <Flex justifyContent={'center'} alignItems={'center'} flexDir={'column'} gap={1} width={{md: '25%', base: '100%'}}>
                    <Flex justifyContent={'center'} alignItems={'center'} width={'70px'} height={'70px'} rounded={'full'} borderWidth={1} borderColor={'white'}>
                        <FaRegSmile className='text-2xl'/>
                    </Flex>
                    <Heading>4379</Heading>
                    <Text>Happy Client</Text>
                </Flex>
                <Flex justifyContent={'center'} alignItems={'center'} flexDir={'column'} gap={1} width={{md: '25%', base: '100%'}}>
                    <Flex justifyContent={'center'} alignItems={'center'} width={'70px'} height={'70px'} rounded={'full'} borderWidth={1} borderColor={'white'}>
                        <VscTable className='text-2xl'/>
                    </Flex>
                    <Heading>32</Heading>
                    <Text>Years of Experience</Text>
                </Flex>
            </Flex>
        </Box>
    </Box>
  )
}
