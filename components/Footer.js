import React from "react";
import { Box, Text } from '@chakra-ui/react'
import {BsCameraReelsFill } from "react-icons/bs"


export default function Footer(){
  return(
  <div className="h-[200px] w-[100%] bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 flex justify-center  ">
     <Box className='flex items-center justify center flex-row ml-[5px]'>
            <BsCameraReelsFill className='text-[white] text-[40px] mr-[5px]' />
            <Text className='text-white text-[30px] font-[600]'>Cinematic View</Text>
        </Box>
  </div>
)}