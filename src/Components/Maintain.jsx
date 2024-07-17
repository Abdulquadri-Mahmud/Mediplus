import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div className={className}
        style={{ ...style, display: "none", background: "rgb(59, 130, 246)",
            height: '35px', width:'35px', top: '38vh', padding: '7px', right: '5vh'}}
        onClick={onClick}
      />
    );
}
  
function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div className={className}
        style={{ ...style, display: "none", background: "rgb(59, 130, 246)",
            height: '35px', width:'35px', top: '38vh', padding: '7px',
         left: '5vh', zIndex: '1'}}
        onClick={onClick}/>
    );
}

export default function Maintain() {
    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2500,
        autoplaySpeed: 2500,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
        ]
    };
  return (
    <Box py={'10vh'}>
        <Flex justifyContent={'center'} alignItems={'center'} flexDir={'column'} gap={3}>
            <Heading textAlign={'center'} fontWeight={500} fontSize={{md: 30, base: 25}}>We Maintain Cleanliness Rules Inside <br /> Our Hospital</Heading>
            <Image src='/img/section-img.png'/>
            <Text textAlign={'center'} fontWeight={400}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam dolor, tenetur eligendi.</Text>
        </Flex>
        <Box mt={7} maxW={{'2xl': '70%'}} mx={'auto'}>
            <Slider {...settings}>
                <Box position={'relative'} className='view-detailst-cont'>
                    <Box p={{'2xl': 0, xl: 2, md: 2, base: 2}}>
                        <Image rounded={5} src='/img/pf1.jpg'/>
                    </Box>
                    <Box position={'absolute'} top={'50%'} left={'50%'} display={'none'} className='view-details translate-x-[-50%] translate-y-[-50%]'>
                        <Button py={'22px'} bg={'white'} color={'black'} _hover={{bg: 'blue.500', color:'white'}}>
                            <Link to={'/view-details'}>View Details</Link>
                        </Button>
                    </Box>
                </Box>
                <Box position={'relative'} className='view-detailst-cont'>
                    <Box p={{'2xl': 0, xl: 2, md: 2, base: 2}}>
                        <Image rounded={5} src='/img/pf2.jpg'/>
                    </Box>
                    <Box position={'absolute'} top={'50%'} left={'50%'} display={'none'} className='view-details translate-x-[-50%] translate-y-[-50%]'>
                        <Button py={'22px'} bg={'white'} color={'black'} _hover={{bg: 'blue.500', color:'white'}}>
                            <Link to={'/view-details'}>View Details</Link>
                        </Button>
                    </Box>
                </Box>
                <Box position={'relative'} className='view-detailst-cont'>
                    <Box p={{'2xl': 0, xl: 2, md: 2, base: 2}}>
                        <Image rounded={5} src='/img/pf3.jpg'/>
                    </Box>
                    <Box position={'absolute'} top={'50%'} left={'50%'} display={'none'} className='view-details translate-x-[-50%] translate-y-[-50%]'>
                        <Button py={'22px'} bg={'white'} color={'black'} _hover={{bg: 'blue.500', color:'white'}}>
                            <Link to={'/view-details'}>View Details</Link>
                        </Button>
                    </Box>
                </Box>
                <Box position={'relative'} className='view-detailst-cont'>
                    <Box p={{'2xl': 0, xl: 2, md: 2, base: 2}}>
                        <Image rounded={5} src='/img/pf4.jpg'/>
                    </Box>
                    <Box position={'absolute'} top={'50%'} left={'50%'} display={'none'} className='view-details translate-x-[-50%] translate-y-[-50%]'>
                        <Button py={'22px'} bg={'white'} color={'black'} _hover={{bg: 'blue.500', color:'white'}}>
                            <Link to={'/view-details'}>View Details</Link>
                        </Button>
                    </Box>
                </Box>
            </Slider>
        </Box>
    </Box>
  )
}
