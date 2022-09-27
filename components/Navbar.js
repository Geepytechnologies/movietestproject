import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import styles from '../styles/Navbar.module.css'
import {BsCameraReelsFill } from "react-icons/bs"

export default function Navbar() {
  return (
    <>
     <Box className="h-[110px] border border-white flex items-center bg-gradient-to-r from-[#292929] to-[#1e83b3] ">
       <Box className='flex flex-row items-center justify-between w-[100%]'>
        <Box className='flex items-center justify center flex-row ml-[5px]'>
            <BsCameraReelsFill className='text-[white] text-[40px] mr-[5px]' />
            <Text className='text-white text-[30px] font-[600]'>Cinematic View</Text>
        </Box>
        <Box className='bg-[#350905] mr-[5px] cursor-pointer p-[10px] border border-white rounded-lg'>
          <Text className='text-white font-[600]'>Get Your tickets now</Text>
        </Box>
        </Box>
     </Box>
    </>
  )
}
