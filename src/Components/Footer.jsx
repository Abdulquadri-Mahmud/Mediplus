import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { FaFacebook, FaGoogle, FaPinterest, FaTwitter } from 'react-icons/fa'
import { FaVimeo } from 'react-icons/fa6';
import { FaCaretRight } from "react-icons/fa6";
import { IoIosSend } from "react-icons/io";
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <Box fontWeight={500} mt={{md: '10vh', base: '0vh'}} pt={20}
    px={{xl: 10,md: 20, base: 5}} bg={'blue.500'} color={'white'} className='grid grid-cols-1 md:grid-cols-4 gap-4'>
        <Box>
            <Box>
                <Heading fontWeight={500} fontSize={25}>About Us</Heading>
                <Box width={'60px'} height={'3px'} bg={'white'} mt={4}></Box>
            </Box>
            <Box mt={4}>
                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, ipsum doloribus.</Text>
                <Flex flexWrap={'wrap'} mt={6} gap={3}>
                    <Flex justifyContent={'center'} alignItems={'center'} boxSize={35} rounded={'full'} bg={'white'} color={'blue.500'}>
                        <FaFacebook/>
                    </Flex>
                    <Flex justifyContent={'center'} alignItems={'center'} boxSize={35} rounded={'full'} bg={'white'} color={'blue.500'}>
                       <FaGoogle/> 
                    </Flex>
                    <Flex justifyContent={'center'} alignItems={'center'} boxSize={35} rounded={'full'} bg={'white'} color={'blue.500'}>
                        <FaTwitter/>
                    </Flex>
                    <Flex justifyContent={'center'} alignItems={'center'} boxSize={35} rounded={'full'} bg={'white'} color={'blue.500'}>
                       <FaVimeo/>
                    </Flex>
                    <Flex justifyContent={'center'} alignItems={'center'} boxSize={35} rounded={'full'} bg={'white'} color={'blue.500'}>
                        <FaPinterest/>
                    </Flex>
                </Flex>
            </Box>
        </Box>
        <Box>
            <Box>
                <Heading fontWeight={500} fontSize={25}>Quick Links</Heading>
                <Box width={'60px'} height={'3px'} bg={'white'} mt={4}></Box>
            </Box>
            <Box mt={4} gap={4}>
                <Flex justifyContent={'space-between'}>
                    <Box width={{md: '45%', base: '100%'}}>
                        <Box my={2}>
                            <Flex alignItems={'center'}><FaCaretRight/> <Link to={'/'}>Home</Link></Flex>
                        </Box>
                        <Box my={2}>
                            <Flex alignItems={'center'}><FaCaretRight/> <Link to={'/'}>About Us</Link></Flex>
                        </Box>
                        <Box my={2}>
                            <Flex alignItems={'center'}><FaCaretRight/> <Link to={'/'}>Services</Link></Flex>
                        </Box>
                        <Box my={2}>
                            <Flex alignItems={'center'}><FaCaretRight/> <Link to={'/'}>Our Cases</Link></Flex>
                        </Box>
                        <Box my={2}>
                            <Flex alignItems={'center'}><FaCaretRight/> <Link to={'/'}>Other Links</Link></Flex>
                        </Box>
                    </Box>
                    <Box width={{md: '45%', base: '100%'}}>
                        <Box my={2}>
                            <Flex alignItems={'center'}><FaCaretRight/> <Link to={'/'}>Consuling</Link></Flex>
                        </Box>
                        <Box my={2}>
                            <Flex alignItems={'center'}><FaCaretRight/> <Link to={'/'}>Finance</Link></Flex>
                        </Box>
                        <Box my={2}>
                            <Flex alignItems={'center'}><FaCaretRight/> <Link to={'/'}>Testimonials</Link></Flex>
                        </Box>
                        <Box my={2}>
                            <Flex alignItems={'center'}><FaCaretRight/> <Link to={'/'}>FAQ</Link></Flex>
                        </Box>
                        <Box my={1}>
                            <Flex alignItems={'center'}><FaCaretRight/> <Link to={'/'}>Contact Us</Link></Flex>
                        </Box>
                    </Box>
                </Flex>
            </Box>
        </Box>
        <Box>
            <Box>
                <Heading fontWeight={500} fontSize={25}>Open Hours</Heading>
                <Box width={'60px'} height={'3px'} bg={'white'} mt={4}></Box>
            </Box>
            <Box mt={4}>
                <Text>Lorem ipsum dolor sit ame consectetur adipisicing elit do eiusmod tempor incididunt.</Text>
                <Flex mt={4} justifyContent={'space-between'} alignItems={'center'}>
                    <Text fontWeight={500} color={'white'}>Monday-Friday</Text>
                    <Text fontWeight={500} color={'white'}>8.00-20.00</Text>
                </Flex>
                <Flex mt={2} justifyContent={'space-between'} alignItems={'center'}>
                    <Text fontWeight={500} color={'white'}>Saturday</Text>
                    <Text fontWeight={500} color={'white'}>9.00-18.30</Text>
                </Flex>
                <Flex mt={2} justifyContent={'space-between'} alignItems={'center'}>
                    <Text fontWeight={500} color={'white'}>Monday-Thursday</Text>
                    <Text fontWeight={500} color={'white'}>9.00-15.00</Text>
                </Flex>
            </Box>
        </Box>
        <Box>
            <Box>
                <Heading fontWeight={500} fontSize={25}>Newsletter</Heading>
                <Box width={'60px'} height={'3px'} bg={'white'} mt={4}></Box>
            </Box>
            <Box mt={4}>
                <Text>subscribe to our newsletter to get allour news in your inbox.. Lorem ipsum dolor sit amet, consectetur adipisicing elit,</Text>
                <Box mt={4}>
                    <form className='flex justify-center'>
                        <input type="email" placeholder='Your Email Address' className='p-3 md:w-[75%] w-[280px] border-blue-500 outline-none text-black font-medium'/>
                        <button className='uppercase p-3 w-[60px] bg-blue-500 text-white font-medium'><IoIosSend className='text-3xl'/></button>
                    </form>
                </Box>
            </Box>
        </Box>
        <Box mt={5} className='grid-cols-4'>
            <Text textAlign={'center'} fontWeight={400} fontSize={14}>&copy;Copyright | All Rights reserve by Adeyemicodes</Text>
        </Box>
    </Box>
  )
}
