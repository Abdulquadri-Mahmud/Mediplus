import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'

export default function ContactUs() {
  return (
    <Flex justifyContent={'space-around'} my={10} shadow={'xl'} flexWrap={'wrap'} py={5} maxW={{md: '90%', base: '95%'}} mx={'auto'} rounded={5}>
        <Box width={{md:'45%', base: '100%'}} height={'100%'} px={{md: 0, base: 5}}>
            <iframe width={'100%'} style={{height: '650px'}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.467927614716!2d3.524071474081166!3d6.588611922405158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bee4740bd527b%3A0xb19235da2044f4d9!2s1%20Akin%20Ogunlewe%20Rd%2C%20Ikorodu%2C%20104102%2C%20Lagos!5e0!3m2!1sen!2sng!4v1721227419085!5m2!1sen!2sng" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </Box>
        <Box width={{md:'45%', base: '100%'}} px={{md: 0, base: 5}}>
            <Box gap={3}>
                <Heading fontWeight={500} fontSize={{md: 35, base: 25}}>Contact With Us</Heading>
                <Box width={'60px'} height={'3px'} mt={3} bg={'blue.500'}></Box>
                <Text mt={4} textAlign={'center'} fontWeight={500}>If you have any questions please fell free to contact with us.</Text>
            </Box>
            <form className='mt-6'>
                <input type="text" className='w-[100%] p-3 border-slate-200 border rounded-md font-medium text-black outline-none' placeholder='Name'/>
                <input type="email" className='w-[100%] p-3 mt-5 border-slate-200 border rounded-md font-medium text-black outline-none' placeholder='Example@gmail.com'/>
                <input type="tel" className='w-[100%] p-3 mt-5 border-slate-200 border rounded-md font-medium text-black outline-none' placeholder='Phone'/>
                <input type="text" className='w-[100%] p-3 mt-5 border-slate-200 border rounded-md font-medium text-black outline-none' placeholder='Subject'/>
                <textarea name="" id="" className='w-full p-4 border-slate-200 border rounded-md font-medium text-black outline-none mt-4 h-[160px]' placeholder='Write Your Message Here...'></textarea>
                <Flex justifyContent={{md: 'space-between', base: 'center'}} flexWrap={'wrap'} alignItems={'center'} mt={5}>
                    <Button py={'25px'} width={'100%'} bg={'blue.500'} color={'white'} rounded={3} _hover={{bg: 'blue.400'}}>Send Message</Button>
                </Flex>
            </form>
        </Box>
    </Flex>
  )
}
