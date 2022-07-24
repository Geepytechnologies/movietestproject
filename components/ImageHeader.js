import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import styles from '../styles/ImageHeader.module.css'

export default function ImageHeader() {
  return (
    <Box className={styles.container} >
        <Text className={styles.text}>Watch something incredible</Text>
    </Box>
  )
}
