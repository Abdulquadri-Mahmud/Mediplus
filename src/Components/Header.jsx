import { Box, Button, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { FaEnvelope, FaPhone } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import logo from '/img/favicon.png';
import Sidemenu from './Sidemenu';

export default function Header() {
  return (
    <>
        <Box>
            <Flex p={2} justifyContent={'space-around'} gap={{md: 0, base: 1}} alignItems={'center'} flexDirection={{md: 'row', base:'column'}}
            className='' bg={'white'}>
                <Flex alignItems={'center'} gap={3}>
                    <Link to={'/'} className='font-medium text-sm text-black'>About</Link>
                    <Link to={'/'} className='font-medium text-sm text-black'>Doctors</Link>
                    <Link to={'/contact'} className='font-medium text-sm text-black'>Contact</Link>
                    <Link to={'/'} className='font-medium text-sm text-black'>FAQ</Link>
                </Flex>
                <Flex gap={10} alignItems={'center'}>
                    <Link to={'tel:+23447594667'} className='flex items-center gap-1 font-medium text-sm text-black'><FaPhone/>+234 4759 4667</Link>
                    <Link to={'mailto:support@yourmail.com'} className='flex items-center gap-1 font-medium text-sm text-black'><FaEnvelope/>support@yourmail.com</Link>
                </Flex>
            </Flex>
        </Box>
        <Box top={0} position={'sticky'} zIndex={100} bg={'blue.500'} shadow={'md'}>
            <Flex justifyContent={{md: 'space-evenly', base: 'space-between'}} alignItems={'center'} p={3} px={6}>
                <Flex alignItems={'center'} gap={1}>
                    <Box bg={'white'} width={35}>
                        <Image src={logo} boxSize={35}/>
                    </Box>
                    <Text fontWeight={500} fontSize={27} color={'white'} className='flex items-center'>Medi <span className="">Plus</span></Text>
                </Flex>
                <Box display={{md: 'block', base: 'none'}} className='menu' position={'relative'}>
                    <Link to={'/'} className='font-normal text-md text-white px-2'>Home</Link>
                    <Link to={'/'} className='font-normal text-md text-white px-2'>About</Link>
                    <Link to={'/'} className='font-normal text-md text-white px-2'>Doctors</Link>
                    <Link to={'/'} className='font-normal text-md text-white px-2'>Services</Link>
                    <Link to={'/blog'} className='font-normal text-md text-white px-2'>Blogs</Link>
                    <Link to={'/Contact'} className='font-normal text-md text-white px-2'>Contact</Link>
                </Box>
                <Box display={{md: 'block', base: 'none'}}>
                    <Button bg={'white'} color={'black'}  _hover={{bg: 'blue.500', color:'white'}} rounded={3} height={12} width={'160px'}>Book Appointment</Button>
                </Box>
                <Box display={{md: 'none', base: 'block'}}>
                    <Sidemenu/>
                </Box>
            </Flex>
        </Box>
    </>
  )
}
