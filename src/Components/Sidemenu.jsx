import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Box,
    useDisclosure,
    Button,
    Input,
    Flex,
    Image,
    Text,
    Stack,
} from '@chakra-ui/react';
import { useRef } from 'react';
import { IoMdMenu } from "react-icons/io";

import logo from '/img/favicon.png';
import { Link } from 'react-router-dom';

export default function Sidemenu() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()

  return (
    <Box>
        <Button ref={btnRef} bg='transparent' _hover={{bg: 'transparent'}} onClick={onOpen}><IoMdMenu className='text-3xl text-white'/></Button>
        <Drawer isOpen={isOpen} placement='right' onClose={onClose} finalFocusRef={btnRef}>
        <DrawerOverlay />
        <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>
                <Flex alignItems={'center'} gap={1}>
                    <Box bg={'white'} width={35}>
                        <Image src={logo} boxSize={35}/>
                    </Box>
                    <Text fontWeight={500} fontSize={27} color={'blue.500'} className='flex items-center'>Medi <span className="">Plus</span></Text>
                </Flex>
            </DrawerHeader>
            <DrawerBody>
                <Stack mt={10}>
                    <Link to={'/'} className='font-medium text-black hover:text-blue-500 duration-150 py-1'>Home</Link>
                    <Link to={'/'} className='font-medium text-black hover:text-blue-500 duration-150 py-1'>About</Link>
                    <Link to={'/'} className='font-medium text-black hover:text-blue-500 duration-150 py-1'>Doctors</Link>
                    <Link to={'/'} className='font-medium text-black hover:text-blue-500 duration-150 py-1'>Services</Link>
                    <Link to={'/contact'} className='font-medium text-black hover:text-blue-500 duration-150 py-1'>Contact</Link>
                    <Link to={'/'} className='font-medium text-black hover:text-blue-500 duration-150 py-1'>FAQ</Link>
                </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  )
}
