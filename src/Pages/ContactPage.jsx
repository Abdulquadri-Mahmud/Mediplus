import { Box, Flex, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import ContactUs from '../Components/ContactUs'
import { Link } from 'react-router-dom'
import { FaClock, FaPhone } from 'react-icons/fa'
import { FaLocationPin } from 'react-icons/fa6'

export default function ContactPage() {
  return (
    <Box>
        <Flex justifyContent={'center'} alignItems={'center'} height={'40vh'} px={3} py={14}  bgImage={'/img/bread-bg.jpg'} bgBlendMode={'multiply'} bgPos={'center'} bgSize={'cover'} className='blendmode2'>
            <Flex color={'white'} fontWeight={500} fontSize={17} gap={3}>
                <Text textDecor={'underline'}><Link to={'/'}>Home</Link></Text> | 
                <Text textDecor={'underline'}><Link to={'/contact'}>Contact Us</Link></Text>
            </Flex>
        </Flex>
        <ContactUs/>
        <Flex my={10} flexWrap={'wrap'} gap={5} justifyContent={'center'} maxW={{md: '90%', base: '100%'}} mx={'auto'} px={3}>
            <Flex alignItems={'center'} justifyContent={'center'} bg={'blue.500'} width={{md:'33%', base: '97%'}} color={'white'} rounded={7} p={10} gap={4}>
                <FaPhone className='text-4xl'/>
                <Stack fontWeight={500}>
                    <Link to={'tel:+23447594667'}>(+234)-4759-4667</Link>
                    <Link to={'mailto:info@company.com'}>info@company.com</Link>
                </Stack>
            </Flex>
            <Flex alignItems={'center'} justifyContent={'center'} bg={'blue.500'} width={{md:'33%', base: '97%'}} color={'white'} rounded={7} p={10} gap={4}>
                <FaLocationPin className='text-4xl'/>
                <Box>
                    <Text fontWeight={500} fontSize={20}>1 Akin Ogunlewe Road</Text>
                    <Text fontWeight={400} fontSize={16}>Ikorodu, Lagos, Nigeria</Text>
                </Box>
            </Flex>
            <Flex alignItems={'center'} justifyContent={'center'} bg={'blue.500'} width={{md:'33%', base: '97%'}} color={'white'} rounded={7} p={10} gap={4}>
                <FaClock className='text-4xl'/>
                <Box>
                    <Text fontWeight={500} fontSize={20}>Mon - Sat: 8am - 5pm</Text>
                    <Text fontWeight={400} fontSize={16}>Sunday Closed</Text>
                </Box>
            </Flex>
        </Flex>
    </Box>
  )
}
