import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import { FaFacebook, FaGoogle, FaTwitter } from 'react-icons/fa';

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <Box top={{md: '35vh', base: '12vh'}} className={className}
        style={{ ...style, display: "block", background: "rgb(59, 130, 246)",
            height: '50px', width:'50px', borderRadius: '50%',
            padding: '15px', right: '2vh'}}
        onClick={onClick}
      />
    );
}
  
function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <Box top={{md: '35vh', base: '12vh'}} className={className}
        style={{ ...style, display: "block", background: "rgb(59, 130, 246)",
            height: '50px', width:'50px', borderRadius: '50%',padding: '15px',
         left: '2vh', zIndex: '1'}}
        onClick={onClick}/>
    );
}

export default function Details() {
    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

  return (
    <Box maxW={{md: '90%', base: '100%'}} mx={'auto'} px={{md: 0, base: 3}} my={'10vh'}>
         <Box position={'relative'} shadow={'xl'} p={0} rounded={10}>
            <Slider {...settings}>
                <Box>
                    <Image src='/img/call-bg.jpg' maxW={'100%'}/>
                </Box>
                <Box>
                    <Image src='/img/call-bg.jpg' maxW={'100%'}/>
                </Box>
            </Slider>
            <Flex justifyContent={'space-evenly'} alignItems={'center'} gap={2} flexWrap={'wrap'} p={5} 
            bg={'blue.500'} color={'black'} width={'100%'} >
                <Box width={{md: '20%', base: '100%'}} bg={'white'} p={1} px={3} rounded={4} textAlign={{md: 'center', base:'start'}}>
                    <Text fontWeight={500}>Category: April 20, 2019</Text>
                </Box>
                <Box width={{md: '20%', base: '100%'}} bg={'white'} p={1} px={3} rounded={4} textAlign={{md: 'center', base:'start'}}>
                    <Text fontWeight={500}>Date: Heat Surgery</Text>
                </Box>
                <Box width={{md: '20%', base: '100%'}} bg={'white'} p={1} px={3} rounded={4} textAlign={{md: 'center', base:'start'}}>
                    <Text fontWeight={500}>Client: Suke Agency</Text>
                </Box>
                <Box width={{md: '20%', base: '100%'}} bg={'white'} p={1} px={3} rounded={4} textAlign={{md: 'center', base:'start'}}>
                    <Text fontWeight={500}>Ags: Typo</Text>
                </Box>
            </Flex>
        </Box>
        <Box color={'gray.700'} fontSize={14} mt={8}>
            <Heading fontWeight={500} fontSize={28}>Here is the name of this project here</Heading>
            <Text mt={5}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor a ti incididunt ut labore et dolore to in magna aliqua. Ut enim ad minim veniam, quis to the in nostrud.abore et dolore magna aliqua uis nostrud.Lorem ipsum dolor sit amet, in a in to in a consectetur.ncididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis to the in nostrud.abore et dolore magna in a aliqua uis nostrud.Lorem ipsum dolor sit amet, in aed do eiusmod
            </Text>
            <Text my={5}>
                ncididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis to the in nostrud.abore et dolore magna to in aliqua uis nostrud.Lorem ipsum dolor sit amet, in aed do eiusmod.ncididunt ut labore et dolore magna aliqua.
            </Text>
            <Text>
                ncididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis to the in nostrud.abore et dolore magna a aliqua uis nostrud.Lorem ipsum dolor sit amet, in aed do eiusmod.ncididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis to the in nostrud.abore et dolore magna aliqua uis nostrud.Lorem ipsum dolor sit amet, in aed do eiusmod. dolor sit amet, in aed do eiusmod.ncididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis to the in nostrud.abore et dolore magna aliqua uis nostrud.
            </Text>
        </Box>
        <Flex alignItems={'center'} fontWeight={500} gap={3} mt={10}>
            <Box>
                <Link to={'/'}>Share Now - </Link>
            </Box>
            <Flex flexWrap={'wrap'} gap={3}>
                <Flex justifyContent={'center'} alignItems={'center'} boxSize={35} borderWidth={1} borderColor={'gray.400'} _hover={{bd: 'blue.500'}} rounded={'full'} color={'gray.600'}>
                    <FaFacebook/>
                </Flex>
                <Flex justifyContent={'center'} alignItems={'center'} boxSize={35} borderWidth={1} borderColor={'gray.400'} _hover={{bd: 'blue.500'}} rounded={'full'} color={'gray.600'}>
                    <FaGoogle/> 
                </Flex>
                <Flex justifyContent={'center'} alignItems={'center'} boxSize={35} borderWidth={1} borderColor={'gray.400'} _hover={{bd: 'blue.500'}} rounded={'full'} color={'gray.600'}>
                    <FaTwitter/>
                </Flex>
            </Flex>
        </Flex>
    </Box>
  )
}
