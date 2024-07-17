import { Box, Flex, Heading, Stack, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaRegSmile } from "react-icons/fa";
import { VscTable } from "react-icons/vsc";

import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger';

export default function Funfacts() {
    const [countOn, setCountOn] = useState(false);

  return (
    <Box py={'10vh'} color={'white'}>
        <ScrollTrigger onEnter={() => setCountOn(true)} onExit={() => setCountOn(false)}>
            <Box height={{md: '45vh', base: '100%'}}  bgImage={'/img/fun-bg.jpg'} bgBlendMode={'multiply'} bgPos={'bottom'} bgSize={'cover'} className='blendmode2'>
                <Flex width={{md: '50%', base: '100%'}} mx={'auto'} height={'100%'} justifyContent={'space-around'} alignItems={'center'} flexWrap={'wrap'} p={4} gap={0}>
                    <Flex justifyContent={'center'} alignItems={'center'} flexDir={'column'} gap={1} width={{md: '25%', base: '100%'}}>
                        <Flex justifyContent={'center'} alignItems={'center'} width={'70px'} height={'70px'} rounded={'full'} borderWidth={1} borderColor={'white'}>
                            <FaHome className='text-2xl'/>
                        </Flex>
                        <Heading>
                            {
                                countOn && <CountUp start={0} end={3468} duration={2} delay={0}/>
                            }
                        </Heading>
                        <Text>Hospital Rooms</Text>
                    </Flex>
                    <Flex justifyContent={'center'} alignItems={'center'} flexDir={'column'} gap={1} width={{md: '25%', base: '100%'}}>
                        <Flex justifyContent={'center'} alignItems={'center'} width={'70px'} height={'70px'} rounded={'full'} borderWidth={1} borderColor={'white'}>
                            <FaUser className='text-2xl'/>
                        </Flex>
                        <Heading>
                            {
                                countOn && <CountUp start={0} end={557} duration={2} delay={0}/>
                            }
                        </Heading>
                        <Text>Special Doctors</Text>
                    </Flex>
                    <Flex justifyContent={'center'} alignItems={'center'} flexDir={'column'} gap={1} width={{md: '25%', base: '100%'}}>
                        <Flex justifyContent={'center'} alignItems={'center'} width={'70px'} height={'70px'} rounded={'full'} borderWidth={1} borderColor={'white'}>
                            <FaRegSmile className='text-2xl'/>
                        </Flex>
                        <Heading>
                            {
                                countOn && <CountUp start={0} end={4379} duration={2} delay={0}/>
                            }
                        </Heading>
                        <Text>Happy Client</Text>
                    </Flex>
                    <Flex justifyContent={'center'} alignItems={'center'} flexDir={'column'} gap={1} width={{md: '25%', base: '100%'}}>
                        <Flex justifyContent={'center'} alignItems={'center'} width={'70px'} height={'70px'} rounded={'full'} borderWidth={1} borderColor={'white'}>
                            <VscTable className='text-2xl'/>
                        </Flex>
                        <Heading>
                            {
                                countOn && <CountUp start={0} end={32} duration={2} delay={0}/>
                            }
                        </Heading>
                        <Text>Years of Experience</Text>
                    </Flex>
                </Flex>
            </Box>
        </ScrollTrigger>
    </Box>
  )
}
