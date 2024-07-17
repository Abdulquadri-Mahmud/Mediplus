import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { FaAmbulance } from "react-icons/fa";
import { FaHandHoldingMedical } from "react-icons/fa6";
import { PiStethoscope } from "react-icons/pi";

export default function Help() {
  return (
    <Box px={3}>
        <Flex justifyContent={'center'} alignItems={'center'} flexDir={'column'} gap={3}>
            <Heading textAlign={'center'} fontWeight={500} fontSize={{md: 30, base: 25}}>We Are Always Ready To Help You & <br /> Your Family</Heading>
            <Image src='/img/section-img.png'/>
            <Text textAlign={'center'} fontWeight={500}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam dolor, tenetur eligendi.</Text>
        </Flex>
        <Flex justifyContent={'center'} color={'white'} alignItems={'center'} flexWrap={'wrap'} mt={8} gap={4}>
            <Flex p={3} rounded={5} justifyContent={'center'} flexDir={'column'} gap={6} alignItems={'center'} width={{md: '300px', base: '97%'}} bg={'blue.500'}>
                <Flex justifyContent={'center'} alignItems={'center'} width={'75px'} height={'75px'} rounded={'full'} shadow={'md'} bg={''}>
                    <FaAmbulance className='text-3xl'/>
                </Flex>
                <Box>
                    <Heading fontWeight={500} fontSize={30}>Emergency Help</Heading>
                </Box>
                <Box>
                    <Text textAlign={'center'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, aspernatur maxime? Dolor non cum in totam voluptas nobis.</Text>
                </Box>
            </Flex>
            <Flex p={3} rounded={5} justifyContent={'center'} flexDir={'column'} gap={6} alignItems={'center'} width={{md: '300px', base: '97%'}} bg={'blue.500'}>
                <Flex justifyContent={'center'} alignItems={'center'} width={'75px'} height={'75px'} rounded={'full'} shadow={'md'} bg={''}>
                    <FaHandHoldingMedical className='text-3xl'/>
                </Flex>
                <Box>
                    <Heading fontWeight={500} fontSize={30}>Enriched Pharmacy</Heading>
                </Box>
                <Box>
                    <Text textAlign={'center'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, aspernatur maxime? Dolor non cum in totam voluptas nobis.</Text>
                </Box>
            </Flex>
            <Flex p={3} rounded={5} justifyContent={'center'} flexDir={'column'} gap={6} alignItems={'center'} width={{md: '300px', base: '97%'}} bg={'blue.500'}>
                <Flex justifyContent={'center'} alignItems={'center'} width={'75px'} height={'75px'} rounded={'full'} shadow={'md'} bg={''}>
                    <PiStethoscope className='text-3xl'/>
                </Flex>
                <Box>
                    <Heading fontWeight={500} fontSize={30}>Medical Treatment</Heading>
                </Box>
                <Box>
                    <Text textAlign={'center'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, aspernatur maxime? Dolor non cum in totam voluptas nobis.</Text>
                </Box>
            </Flex>
        </Flex>
    </Box>
  )
}
