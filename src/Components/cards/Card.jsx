import { Box, Button, Flex, Heading, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Card() {
  return (
    <Flex justifyContent={'center'} gap={7} flexWrap={'wrap'}  mx={'auto'} maxW={{'2xl': '80%',xl: '80%',md: '100%', base: '100%'}}>
        <Box p={4} width={{md: '30%', base: '100%'}} rounded={6} bg={'blue.500'} height={'240px'} className='shadows '>
            <Text color={'white'}>Lorem Amet</Text>
            <Heading color={'white'} fontWeight={500} mt={3} fontSize={25}>Emmergency Cases</Heading>
            <Text color={'white'} fontWeight={500} mt={3}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime architecto error ab harum.</Text>
            <Box mt={2}>
                <Link className='font-medium text-white'>Learn More</Link>
            </Box>
        </Box>
        <Box p={4} width={{md: '30%', base: '100%'}} rounded={6} bg={'blue.500'} height={'240px'} className='shadows '>
            <Text color={'white'}>Fusce Porttitor</Text>
            <Heading color={'white'} fontWeight={500} mt={3} fontSize={25}>Doctors Timetable</Heading>
            <Text color={'white'} fontWeight={500} mt={3}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime architecto error ab harum.</Text>
            <Box mt={2}>
                <Link className='font-medium text-white'>Learn More</Link>
            </Box>
        </Box>
        <Box p={4} width={{md: '30%', base: '100%'}} rounded={6} bg={'blue.500'} height={'240px'} className='shadows '>
            <Text fontWeight={400} color={'white'}>Donec Iuctus</Text>
            <Heading color={'white'} mt={1} fontWeight={500} fontSize={25}>Opening Hours</Heading>
            <Flex mt={2} jwhiteyContent={'space-between'} alignItems={'center'}>
                <Text fontWeight={400} color={'white'}>Monday-Friday</Text>
                <Text fontWeight={400} color={'white'}>8.00-20.00</Text>
            </Flex>
            <Flex mt={2} justifyContent={'space-between'} alignItems={'center'}>
                <Text fontWeight={400} color={'white'}>Saturday</Text>
                <Text fontWeight={400} color={'white'}>9.00-18.30</Text>
            </Flex>
            <Flex mt={2} justifyContent={'space-between'} alignItems={'center'}>
                <Text fontWeight={400} color={'white'}>Monday-Thursday</Text>
                <Text fontWeight={400} color={'white'}>9.00-15.00</Text>
            </Flex>
            <Box mt={2}>
                <Link className='font-medium text-white'>Learn More</Link>
            </Box>
        </Box>
    </Flex>
  )
}
