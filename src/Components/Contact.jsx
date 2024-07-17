import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'

export default function Contact() {
  return (
    <Box maxW={{'2xl': '70%', md: '80%'}} mx={'auto'} p={{md: 0, base: 5}} pb={'10vh'}>
       <Flex justifyContent={'center'} alignItems={'center'} flexDir={'column'} gap={3} mt={10}>
            <Heading textAlign={'center'} fontWeight={500} fontSize={{md: 35, base: 25}}>We Are Always Ready To Help You. Book An Appointment</Heading>
            <Image mt={4} src='/img/section-img.png'/>
            <Text mt={4} textAlign={'center'} fontWeight={400}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam dolor, tenetur eligendi.</Text>
        </Flex>
        <Flex justifyContent={'center'} alignItems={'center'} flexWrap={'wrap'} gap={6} mt={'10'}>
            <Box width={{md:'45%', base: '100%'}}>
                <form>
                    <Flex flexWrap={'wrap'} gap={5}>
                        <input type="text" className='md:w-[47%] w-[100%] p-3 border-slate-200 border rounded-md font-medium text-black outline-none' placeholder='Name'/>
                        <input type="email" className='md:w-[47%] w-[100%] p-3 border-slate-200 border rounded-md font-medium text-black outline-none' placeholder='Example@gmail.com'/>
                    </Flex>
                    <Flex flexWrap={'wrap'} gap={5} mt={8}>
                        <input type="tel" className='md:w-[47%] w-[100%] p-3 border-slate-200 border rounded-md font-medium text-black outline-none' placeholder='Phone'/>
                        <input type="text" className='md:w-[47%] w-[100%] p-3 border-slate-200 border rounded-md font-medium text-black outline-none' placeholder='Department'/>
                    </Flex>
                    <Flex flexWrap={'wrap'} gap={5} mt={8}>
                        <input type="text" className='md:w-[47%] w-[100%] p-3 border-slate-200 border rounded-md font-medium text-black outline-none' placeholder='Name'/>
                        <input type="date" className='md:w-[47%] w-[100%] p-3 border-slate-200 border rounded-md font-medium text-black outline-none' placeholder='Date'/>
                    </Flex>
                    <textarea name="" id="" className='w-full p-4 border-slate-200 border rounded-md font-medium text-black outline-none mt-10 h-[200px]' placeholder='Write Your Message Here...'></textarea>
                    <Flex justifyContent={{md: 'space-between', base: 'center'}} flexWrap={'wrap'} alignItems={'center'} mt={5}>
                        <Button py={'25px'} width={'200px'} bg={'blue.500'} color={'white'} rounded={3} _hover={{bg: 'blue.400'}}>Book An Appointment</Button>
                        <Text color={'gray.500'}>(We will Recieve Your Message)</Text>
                    </Flex>
                </form>
            </Box>
            <Box width={{md:'45%', base: '100%'}}>
                <Image src='/img/contact-img.png'/>
            </Box>
            <Box width={'100%'} px={{md: 5, base: 3}} py={{md: 20, base: 10}} bg={'gray.200'} mt={16}>
                <Flex justifyContent={'center'} alignItems={'center'} maxW={{'2xl': '90%'}} gap={1} color={'black'} mx={'auto'} flexWrap={'wrap'}>
                    <Box width={{md: '45%', base: '100%'}}>
                        <Heading fontSize={35} fontWeight={500} textAlign={{md: 'center', base: 'center'}}>Sign <span className="text-blue-500">Up</span> for <span className="text-blue-500">News</span>letter</Heading>
                        <Text mt={4} fontWeight={500} textAlign={{md: 'center', base: 'center'}}>Cu qui soleat partiendo urbanitas. Eum aperiri indoctum eu,homero alterum.</Text>
                    </Box>
                    <Flex justifyContent={{md: 'space-between', base: 'center'}} width={{md: '45%', base: '100%'}}>
                        <form className='flex flex-wrap justify-center'>
                            <input type="email" placeholder='Your Email Address' className='p-4 md:w-[65%] w-[280px] border-blue-500 outline-none text-black font-medium'/>
                            <button className='uppercase p-4 md:w-[35%] w-[120px] bg-blue-500 text-white font-medium'>Subscribe</button>
                        </form>
                    </Flex>
                </Flex>
            </Box>
        </Flex>
    </Box>
  )
}
