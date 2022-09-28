import React from 'react'
import { Box, Button, Text } from '@chakra-ui/react'
import styles from '../styles/Navbar.module.css'
import {BsCameraReelsFill } from "react-icons/bs"
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Input,
  Stack
} from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
    <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Cinematic View</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack spacing={3}>
              <Input variant='filled' placeholder='Name' type='text' size='md' />
              <Input placeholder='Email' type='email' size='md' />
              <Input variant='filled' placeholder='Phone Number' type='tel' size='md' />
            </Stack>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            {/* <Button variant='ghost'>Secondary Action</Button> */}
          </ModalFooter>
        </ModalContent>
      </Modal>
     <Box className="h-[110px] border border-white flex items-center bg-gradient-to-r from-[#292929] to-[#1e83b3] ">
       <Box className='flex flex-row items-center justify-between w-[100%]'>
        <Box className='flex items-center justify center flex-row ml-[5px]'>
            <BsCameraReelsFill className='text-[white] text-[25px] md:text-[40px] mr-[5px]' />
            <Text className='text-white text-[20px] md:text-[30px] font-[600]'>Cinematic View</Text>
        </Box>
        <Box onClick={onOpen} className='bg-[#350905] mr-[5px] cursor-pointer p-[5px] sm:p-[10px] border border-white rounded-lg'>
          <Text className='text-white text-center font-[600]'>Get Your tickets now</Text>
        </Box>
        </Box>
     </Box>
    </>
  )
}
