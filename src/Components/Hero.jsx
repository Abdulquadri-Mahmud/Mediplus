import React from 'react'

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';

import bg1 from '/img/slider1.jpg';
import bg2 from '/img/slider2.jpg';
import bg3 from '/img/slider3.jpg';

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div className={className}
        style={{ ...style, display: "block", background: "rgb(59, 130, 246)",
            height: '40px', width:'40px', top: '35vh', borderRadius: '50%',padding: '10px', right: '5vh'}}
        onClick={onClick}
      />
    );
}
  
function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div className={className}
        style={{ ...style, display: "block", background: "rgb(59, 130, 246)",
            height: '40px', width:'40px', top: '35vh', borderRadius: '50%',padding: '10px',
         left: '5vh', zIndex: '1'}}
        onClick={onClick}/>
    );
}

export default function Hero() {
    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
  return (
    <Box height={{'2xl':'80vh', xl: '90vh', md: '100vh', base: '100vh'}}>
        <Slider {...settings}>
            <Flex justifyContent={'center'} alignItems={'center'} bgImg={`url(${bg1})`} height={{'2xl':'80vh', xl: '90vh', md: '100vh', base: '100vh'}} bgPos={'right'} bgSize={'cover'} bgRepeat={'no-repeat'} className='blendmode'>
                <Box width={{md: '60%', base: '100%'}} pl={{md: '20vh', base: 3}} pt={40}>
                    <Heading  textAlign={{md: 'left', base: 'center'}} fontWeight={500} fontSize={{md: 40, base: 30}} color={'black'}>We Provide <span className="text-blue-500">Medical</span> Services That <br /> You Can <span className="text-blue-500">Trust!</span></Heading>
                    <Text  mt={5} textAlign={{md: 'left', base: 'center'}} fontWeight={500} color={'black'}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui, cupiditate obcaecati vero officiis impedit doloremque, nihil commodi consequatur quasi alias voluptas suscipit esse. Excepturi recusandae assumenda provident tenetur eum laudantium?</Text>
                    <Flex gap={6} mt={5}>
                        <Button rounded={3} _hover={{bg: 'blue.500', color:'white'}} bg={'blue.500'} color={'white'} py={6}>Get Appointment</Button>
                        <Button rounded={3} _hover={{bg: 'blue.500', color:'white'}} bg={'gray.800'} color={'white'} py={6}>Learn More</Button>
                    </Flex>
                </Box>
            </Flex>
            <Flex bgImg={`url(${bg2})`} height={{'2xl':'80vh', xl: '90vh', md: '100vh', base: '100vh'}} bgPos={'right'} bgSize={'cover'} bgRepeat={'no-repeat'} className='blendmode'>
                <Box width={{md: '60%', base: '100%'}} pl={{md: '20vh', base: 3}} pt={40}>
                    <Heading  textAlign={{md: 'left', base: 'center'}} fontWeight={500} fontSize={{md: 40, base: 30}} color={'black'}>We Provide <span className="text-blue-500">Medical</span> Services That <br /> You Can <span className="text-blue-500">Trust!</span></Heading>
                    <Text mt={5} textAlign={{md: 'left', base: 'center'}} fontWeight={500} color={'black'}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui, cupiditate obcaecati vero officiis impedit doloremque, nihil commodi consequatur quasi alias voluptas suscipit esse. Excepturi recusandae assumenda provident tenetur eum laudantium?</Text>
                    <Flex gap={6} mt={5}>
                        <Button rounded={3} _hover={{bg: 'blue.500', color:'white'}} bg={'blue.500'} color={'white'} py={6}>Get Appointment</Button>
                        <Button rounded={3} _hover={{bg: 'blue.500', color:'white'}} bg={'gray.800'} color={'white'} py={6}>About Us</Button>
                    </Flex>
                </Box>
            </Flex>
            <Flex bgImg={`url(${bg3})`} height={{'2xl':'80vh', xl: '90vh', md: '100vh', base: '100vh'}} bgPos={'right'} bgSize={'cover'} bgRepeat={'no-repeat'} className='blendmode'>
                <Box width={{md: '60%', base: '100%'}} pl={{md: '20vh', base: 3}} pt={40}>
                    <Heading  textAlign={{md: 'left', base: 'center'}} fontWeight={500} fontSize={{md: 40, base: 30}} color={'black'}>We Provide <span className="text-blue-500">Medical</span> Services That <br /> You Can <span className="text-blue-500">Trust!</span></Heading>
                    <Text mt={5} textAlign={{md: 'left', base: 'center'}} fontWeight={500} color={'black'}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui, cupiditate obcaecati vero officiis impedit doloremque, nihil commodi consequatur quasi alias voluptas suscipit esse. Excepturi recusandae assumenda provident tenetur eum laudantium?</Text>
                    <Flex gap={6} mt={5}>
                        <Button rounded={3} _hover={{bg: 'blue.500', color:'white'}} bg={'blue.500'} color={'white'} py={6}>Get Appointment</Button>
                        <Button rounded={3} _hover={{bg: 'blue.500', color:'white'}} bg={'gray.800'} color={'white'} py={6}>Contact Now</Button>
                    </Flex>
                </Box>
            </Flex>
        </Slider>
    </Box>
  )
}
