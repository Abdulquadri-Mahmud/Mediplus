import { Box, Button } from '@chakra-ui/react'
import React from 'react'
import { IoIosArrowUp } from 'react-icons/io'
import { Link } from 'react-router-dom'

export default function SwipeUp() {
  return (
    <Box position={'fixed'} bottom={10} right={10} zIndex={100}>
        <Link to={'#'}>
            <Button bg={'blue.500'} _hover={{bg: 'blue.400'}} color={'white'} boxSize={45}><IoIosArrowUp className='text-2xl'/></Button>
        </Link>
    </Box>
  )
}
