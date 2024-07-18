import { Box, Button, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react';
import { FaComments } from "react-icons/fa6";
import { ImEye } from "react-icons/im";
import { FiClock } from "react-icons/fi";

import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { VscTable } from "react-icons/vsc";
import { FaReply } from "react-icons/fa";

import { FaUser } from "react-icons/fa";
import { IoIosSend, IoMdMail } from "react-icons/io";
import { TfiWrite } from "react-icons/tfi";
import { AiOutlineMessage } from "react-icons/ai";

import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function Blog() {
  return (
    <Flex maxW={{'2xl': '70%', xl: '80%', md: '80%', base: '100%'}} justifyContent={'space-around'} flexWrap={'wrap'} gap={8} mx={'auto'} mt={16}>
        <Box width={{xl: '60%', base: '100%'}}>
            <Box p={{md: 10, base: 3}}  shadow={'xl'} rounded={'10'}>
                <Box>
                    <Image w={'100%'} src='/img/blog1.jpg'/>
                </Box>
                <Heading my={6} fontWeight={500} fontSize={35}>More than 80 clinical trials launch to test of the coronavirus .</Heading>
                <Flex justifyContent={'space-between'} flexWrap={'wrap'} borderColor={'gray.300'} borderTopWidth={1} borderBottomWidth={1} p={2}>
                    <Flex alignItems={'center'} gap={2}>
                        <Image boxSize={35} rounded={'full'} src='/img/author1.jpg'/>
                        <Flex alignItems={'center'} gap={2}>
                            <Text fontSize={14}>Naimur Rahman</Text>
                            <Text className='flex items-center gap-1 text-sm'><FiClock className='text-sm text-blue-500'/> 03 Feb 2019</Text>
                        </Flex>
                    </Flex>
                    <Flex alignItems={'center'} gap={3}>
                        <Text className='flex items-center gap-3 text-sm'><FaComments className='text-sm text-blue-500'/> 05 comments</Text>
                        <Text className='flex items-center gap-3 text-sm'><ImEye className='text-sm text-blue-500'/> 33K Views</Text>
                    </Flex>
                    </Flex>
                    <Box mt={5}>
                        <Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse facilisis ultricies tortor, nec sollicitudin lorem sagittis vitae. Curabitur rhoncus commodo rutrum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam nec lacus pulvinar, laoreet dolor quis, pellentesque ante. Cras nulla orci, pharetra at dictum consequat, pretium pretium nulla. Suspendisse porttitor nunc a sodales tempor. Mauris sed felis maximus, interdum metus vel, tincidunt diam.
                        </Text>
                        <Text mt={6}>
                            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam nec lacus pulvinar, laoreet dolor quis, pellentesque ante. Cras nulla orci, pharetra at dictum consequat, pretium pretium nulla. Suspendisse porttitor nunc a sodales tempor. Mauris sed felis maximus, interdum metus vel, tincidunt diam. Nam ac risus vitae sem vehicula egestas. Sed velit nulla, viverra non commod
                        </Text>
                    </Box>
                    <Flex justifyContent={'center'} gap={5} mt={8}>
                        <Box>
                            <Image maxW={'100%'} src='/img/blog2.jpg'/>
                        </Box>
                        <Box>
                            <Image maxW={'100%'} src='/img/blog3.jpg'/>
                        </Box>
                    </Flex>
                    <Text mt={6}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse facilisis ultricies tortor, nec sollicitudin lorem sagittis vitae. Curabitur rhoncus commodo rutrum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam nec lacus pulvinar, laoreet dolor quis, pellentesque ante. Cras nulla orci, pharetra at dictum consequat, pretium pretium nulla. Suspendisse porttitor nunc a sodales tempor. Mauris sed felis maximus, interdum metus vel, tincidunt diam.
                    </Text>
                    <Box p={{md: 7, base: 4}} rounded={4} bg={'blue.500'} color={'white'} my={7}>
                        <Text>
                            Aliquam nec lacus pulvinar, laoreet dolor quis, pellentesque ante. Cras nulla orci, pharetra at dictum consequat, pretium pretium nulla. Suspendisse porttitor nunc a sodales tempor. Mauris sed felis maximus, interdum metus vel, tincidunt diam. Nam ac risus vitae sem vehicula egestas. Sed velit nulla, viverra non commodo et, sodales
                        </Text>
                    </Box>
                    <Box mt={6}>
                        <Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse facilisis ultricies tortor, nec sollicitudin lorem sagittis vitae. Curabitur rhoncus commodo rutrum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam nec lacus pulvinar, laoreet dolor quis, pellentesque ante. Cras nulla orci, pharetra at dictum consequat, pretium pretium nulla. Suspendisse porttitor nunc a sodales tempor. Mauris sed felis maximus, interdum metus vel, tincidunt diam. Nam ac risus vitae sem vehicula egestas. Sed velit nulla, viverra non commodo et, sodales id dui.
                        </Text>
                        <Text mt={6}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse facilisis ultricies tortor, nec sollicitudin lorem sagittis vitae. Curabitur rhoncus commodo rutrum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam nec lacus pulvinar, laoreet dolor quis, pellentesque ante. Cras nulla orci, pharetra at dictum consequat, pretium pretium nulla. Suspendisse
                        </Text>
                    </Box>
                    <Flex mt={6}>
                        <Flex justifyContent={'center'} alignItems={'center'} gap={1} color={'white'} width={'130px'} py={3} px={2} bg={'blue.300'}>
                            <FaFacebookF/>
                            <Text fontWeight={500}>Facebook</Text>
                        </Flex>
                        <Flex justifyContent={'center'} alignItems={'center'} gap={1} color={'white'}width={'110px'} py={3} px={2} bg={'teal.400'}>
                            <FaTwitter/>
                            <Text fontWeight={500}>Twitter</Text>
                        </Flex>
                        <Flex justifyContent={'center'} alignItems={'center'} gap={1} color={'white'}width={'80px'}  py={3} px={2} bg={'red.500'}>
                            <FaGooglePlusG className='text-xl'/>
                            <Text fontWeight={500}></Text>
                        </Flex>
                        <Flex justifyContent={'center'} alignItems={'center'} gap={1} color={'white'}width={'60px'} py={3} px={2} bg={'blue.500'}>
                            <FaLinkedinIn/>
                            <Text fontWeight={500}></Text>
                        </Flex>
                        <Flex justifyContent={'center'} alignItems={'center'} gap={1} color={'white'}width={'60px'} py={3} px={2} bg={'red.600'}>
                            <FaPinterest/>
                            <Text fontWeight={500}></Text>
                        </Flex>
                    </Flex>
                </Box>
                {/* all Comments */}
                <Box p={{md: 10, base: 3}}  shadow={'xl'} rounded={'10'} mt={10}>
                    <Heading fontWeight={500} fontSize={20}>All Comments</Heading>
                    <Box my={8} borderBottomWidth={1} borderColor={'gray.300'} pb={8}>
                        <Flex gap={3}>
                            <Image boxSize={75} rounded={'full'} src='/img/author1.jpg'/>
                            <Flex flexDir={'column'} gap={2}>
                                <Text fontSize={16} fontWeight={500}>Naimur Rahman</Text>
                                <Text className='flex items-center gap-1 text-sm'><VscTable className='text-sm text-blue-500'/> March 05, 2019 <FiClock className='text-sm text-blue-500'/>03:38 AM</Text>
                                <Text>Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas</Text>
                                <Button _hover={{bg: 'blue.400'}} width={'120px'} color={'white'} bg={'blue.500'} className='text-sm text-blue-500 gap-2'><FaReply/>Reply</Button>
                            </Flex>
                        </Flex>
                    </Box>
                    <Box my={8} pl={{md: 36, base: 0}} borderBottomWidth={1} borderColor={'gray.300'} pb={8}>
                        <Flex gap={3}>
                            <Image boxSize={75} rounded={'full'} src='/img/author2.jpg'/>
                            <Flex flexDir={'column'} gap={2}>
                                <Text fontSize={16} fontWeight={500}>Afsana Mimi</Text>
                                <Text className='flex items-center gap-1 text-sm'><VscTable className='text-sm text-blue-500'/> March 05, 2019 <FiClock className='text-sm text-blue-500'/>03:38 AM</Text>
                                <Text>Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas</Text>
                                <Button _hover={{bg: 'blue.400'}} width={'120px'} color={'white'} bg={'blue.500'} className='text-sm text-blue-500 gap-2'><FaReply/>Reply</Button>
                            </Flex>
                        </Flex>
                    </Box>
                    <Box my={8} borderBottomWidth={1} borderColor={'gray.300'} pb={8}>
                        <Flex gap={3}>
                            <Image boxSize={75} rounded={'full'} src='/img/author3.jpg'/>
                            <Flex flexDir={'column'} gap={2}>
                                <Text fontSize={16} fontWeight={500}>Suraya Molharta</Text>
                                <Text className='flex items-center gap-1 text-sm'><VscTable className='text-sm text-blue-500'/> March 05, 2019 <FiClock className='text-sm text-blue-500'/>03:38 AM</Text>
                                <Text>Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas</Text>
                                <Button _hover={{bg: 'blue.400'}} width={'120px'} color={'white'} bg={'blue.500'} className='text-sm text-blue-500 gap-2'><FaReply/>Reply</Button>
                            </Flex>
                        </Flex>
                    </Box>
                </Box>
                {/* Leave comments */}
                <Box p={{md: 10, base: 3}}  shadow={'xl'} rounded={'10'} mt={10}>
                    <Heading fontWeight={500} fontSize={20}>Leave Comments</Heading>
                    <form className='mt-8'>
                        <Box className='grid md:grid-cols-3 grid-cols-1 md:place-items-center gap-3'>
                            <Box position={'relative'}>
                                <input type="text" placeholder='First name' className='p-3 pl-10 border-slate-200 border rounded-md outline-none w-full'/>
                                <FaUser className='absolute top-4 left-3 text-blue-500'/>
                            </Box>
                            <Box my={6} position={'relative'}>
                                <input type="text" placeholder='Last name' className='p-3 pl-10 border-slate-200 border rounded-md outline-none w-full'/>
                                <IoMdMail className='absolute top-4 left-3 text-blue-500'/>
                            </Box>
                            <Box position={'relative'}>
                                <input type="email" placeholder='Your Email' className='p-3 pl-10 border-slate-200 border rounded-md outline-none w-full'/>
                                <IoMdMail className='absolute top-4 left-3 text-blue-500'/>
                            </Box>
                        </Box>
                        <Box position={'relative'}>
                            <textarea name="" id="" className='w-[100%] h-[200px] p-3 pl-10 border-slate-200 border rounded-md outline-none w-full mt-6' placeholder='Type Your Messahe Here'></textarea>
                            <TfiWrite className='absolute top-11 left-3 text-blue-500'/>
                        </Box>
                        <Box mt={5}>
                            <Button bg={'blue.500'} _hover={{bg: 'blue.400'}} color={'white'} rounded={3} py={'23px'} className='flex items-center gap-1'><IoIosSend className='text-2xl'/>Submit Comment</Button>
                        </Box>
                    </form>
                </Box>
            </Box>
        <Box width={{md: '30%', base: '97%'}}>
            <Flex justifyContent={'center'} alignItems={'center'} p={{md: 10, base: 3}} height={'150px'} bg={'blue.500'} shadow={'xl'} rounded={{md: '10', base: 5}} width={'100%'}>
                <form className='flex justify-center w-full'>
                    <input type="email" placeholder='Search Here' className='p-3 md:w-[75%] w-[280px] border-slate-200 border outline-none text-black font-medium'/>
                    <button className='uppercase p-3 w-[60px] bg-slate-700 text-white font-medium flex justify-center items-center'><FaSearch className='text-xl'/></button>
                </form>
            </Flex>
            <Box p={{md: 10, base: 3}}  shadow={'xl'} rounded={'10'} mt={10} >
                <Heading fontWeight={500} fontSize={20} borderLeftWidth={4} borderColor={'blue.500'} pl={2}>Blog Categories</Heading>
                <Stack mt={8}>
                    <Link to={'/'} className=' font-normal'>Men's Apparel</Link>
                    <Link to={'/'} className=' font-normal'>Women's Apparel</Link>
                    <Link to={'/'} className=' font-normal'>Bags Collection</Link>
                    <Link to={'/'} className=' font-normal'>Accessories</Link>
                    <Link to={'/'} className=' font-normal'>Sun Glasses</Link>
                </Stack>
            </Box>
            <Box p={{md: 10, base: 3}}  shadow={'xl'} rounded={'10'} mt={10}>
                <Heading fontWeight={500} fontSize={20} borderLeftWidth={4} borderColor={'blue.500'} pl={2}>Recent Post</Heading>
                <Box my={8} borderBottomWidth={1} borderColor={'gray.300'} pb={8}>
                    <Flex gap={3}>
                        <Image boxSize={75} rounded={'full'} src='/img/blog-sidebar1.jpg'/>
                        <Flex flexDir={'column'} gap={2}>
                            <Text fontSize={16} fontWeight={500}>We have annnocuced our new product.</Text>
                            <Text className='flex items-center gap-1 text-sm'><VscTable className='text-sm text-blue-500'/> Jan 11, 2020 <AiOutlineMessage className='text-sm text-blue-500'/>03:38 AM</Text>
                        </Flex>
                    </Flex>
                </Box>
                <Box my={8} borderBottomWidth={1} borderColor={'gray.300'} pb={8}>
                    <Flex gap={3}>
                        <Image boxSize={75} rounded={'full'} src='/img/blog-sidebar2.jpg'/>
                        <Flex flexDir={'column'} gap={2}>
                            <Text fontSize={16} fontWeight={500}>Top five way for solving teeth problems.</Text>
                            <Text className='flex items-center gap-1 text-sm'><VscTable className='text-sm text-blue-500'/> Jan 11, 2020 <AiOutlineMessage className='text-sm text-blue-500'/>03:38 AM</Text>
                        </Flex>
                    </Flex>
                </Box>
                <Box my={8} borderBottomWidth={1} borderColor={'gray.300'} pb={8}>
                    <Flex gap={3}>
                        <Image boxSize={75} rounded={'full'} src='/img/blog-sidebar3.jpg'/>
                        <Flex flexDir={'column'} gap={2}>
                            <Text fontSize={16} fontWeight={500}>We provide highly business soliutions.</Text>
                            <Text className='flex items-center gap-1 text-sm'><VscTable className='text-sm text-blue-500'/> Jan 11, 2020 <AiOutlineMessage className='text-sm text-blue-500'/>03:38 AM</Text>
                        </Flex>
                    </Flex>
                </Box>
            </Box>
            <Box py={{md: 10, base: 5}} px={{md: 10, base: 3}} shadow={'xl'} rounded={'10'} my={10}>
                <Heading fontWeight={500} fontSize={20} borderLeftWidth={4} borderColor={'blue.500'} pl={2}>Tags</Heading>
                <Flex flexWrap={'wrap'} gap={2} mt={5}>
                    <Button _hover={{bg: 'blue.500', color: 'white'}}>Business</Button>
                    <Button _hover={{bg: 'blue.500', color: 'white'}}>Wordpress</Button>
                    <Button _hover={{bg: 'blue.500', color: 'white'}}>Html</Button>
                    <Button _hover={{bg: 'blue.500', color: 'white'}}>Multipurpose</Button>
                    <Button _hover={{bg: 'blue.500', color: 'white'}}>Education</Button>
                    <Button _hover={{bg: 'blue.500', color: 'white'}}>Template</Button>
                    <Button _hover={{bg: 'blue.500', color: 'white'}}>Ecommerce</Button>
                </Flex>
            </Box>
        </Box>
    </Flex>
  )
}
