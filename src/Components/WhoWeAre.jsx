import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { FaPlay } from "react-icons/fa";

export default function WhoWeAre() {
  return (
    <Box py={'0vh'} maxW={{md: '80%', base: '97%'}} mx={'auto'}>
        <Flex justifyContent={'center'} alignItems={'center'} flexDir={'column'} gap={3}>
            <Heading textAlign={'center'} fontWeight={500} fontSize={{md: 30, base: 25}}>We Offer Different Services To Improve <br /> Your Health</Heading>
            <Image src='/img/section-img.png'/>
            <Text textAlign={'center'} fontWeight={400}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam dolor, tenetur eligendi.</Text>
        </Flex>
        <Flex justifyContent={'space-around'} alignItems={'center'} flexWrap={'wrap'} mt={14}>
            <Box width={{md: '45%', base: '97%'}}>
                <Box>
                    <Heading fontWeight={500} fontSize={30}>Who We Are</Heading>
                    <Box width={'70px'} height={'3px'} bg={'blue.500'} mt={4}></Box>
                </Box>
                <Box mt={7}>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pharetra antege vel est lobortis, a commodo magna rhoncus. In quis nisi non emet quam pharetra commodo.</Text>
                    <Text mt={7}>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</Text>
                </Box>
                <Flex justifyContent={'space-between'} flexWrap={'wrap'} mt={7}>
                   <Box width={{md: '45%', base: '100%'}}>
                        <Flex gap={2} mb={3}>
                            <Flex justifyContent={'center'} alignItems={'center'} bg={'blue.500'} boxSize={25} rounded={'full'}><FaPlay className='text-sm text-white'/></Flex>
                            <Text>Maecenas vitae luctus nibh.</Text>
                        </Flex>
                        <Flex gap={2} mb={3}>
                            <Flex justifyContent={'center'} alignItems={'center'} bg={'blue.500'} boxSize={25} rounded={'full'}><FaPlay className='text-sm text-white'/></Flex>
                            <Text>Duis massa massa.</Text>
                        </Flex>
                        <Flex gap={2} mb={3}>
                            <Flex justifyContent={'center'} alignItems={'center'} bg={'blue.500'} boxSize={25} rounded={'full'}><FaPlay className='text-sm text-white'/></Flex>
                            <Text>Aliquam feugiat interdum.</Text>
                        </Flex>
                   </Box>
                    <Box width={{md: '45%', base: '100%'}}>
                        <Flex gap={2} mb={3}>
                            <Flex justifyContent={'center'} alignItems={'center'} bg={'blue.500'} boxSize={25} rounded={'full'}><FaPlay className='text-sm text-white'/></Flex>
                            <Text>Maecenas vitae luctus nibh.</Text>
                        </Flex>
                        <Flex gap={2} mb={3}>
                            <Flex justifyContent={'center'} alignItems={'center'} bg={'blue.500'} boxSize={25} rounded={'full'}><FaPlay className='text-sm text-white'/></Flex>
                            <Text>Duis massa massa.</Text>
                        </Flex>
                        <Flex gap={2} mb={3}>
                            <Flex justifyContent={'center'} alignItems={'center'} bg={'blue.500'} boxSize={25} rounded={'full'}><FaPlay className='text-sm text-white'/></Flex>
                            <Text>Aliquam feugiat interdum.</Text>
                        </Flex>
                    </Box>
                </Flex>
            </Box>
            <Box width={{md: '45%', base: '97%'}} mt={{md: 0, base: 7}} position={'relative'}>
                <Image src='/img/video-bg.jpg' maxW={'100%'}/>
                <Flex justifyContent={'center'} alignItems={'center'} position={'absolute'} top={'50%'} left={'50%'}
                width={'80px'} height={'80px'} rounded={'full'} bg={'white'} className='translate-x-[-50%] translate-y-[-50%]'>
                    <FaPlay className='text-2xl text-blue-500'/>
                </Flex>
            </Box>
        </Flex>
    </Box>
  )
}
