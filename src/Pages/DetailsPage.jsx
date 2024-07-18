import React from 'react'
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Details from '../Components/Details';

export default function DetailsPage() {
  return (
    <Box>
         <Flex justifyContent={'center'} alignItems={'center'} height={'40vh'} px={3} py={14}  bgImage={'/img/bread-bg.jpg'} bgBlendMode={'multiply'} bgPos={'center'} bgSize={'cover'} className='blendmode2'>
            <Flex justifyContent={'center'} flexWrap={'wrap'} color={'white'} fontWeight={500} fontSize={17} gap={3}>
                <Box width={'100%'}>
                    <Heading textAlign={'center'}>Portfolio Details</Heading>
                </Box>
                <Text textDecor={'underline'}><Link to={'/'}>Home</Link></Text> | 
                <Text textDecor={'underline'}><Link to={'/contact'}>Portfolio Details</Link></Text>
            </Flex>
        </Flex>
        <Details/>
    </Box>
  )
}
