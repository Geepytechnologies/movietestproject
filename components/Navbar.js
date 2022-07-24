import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import styles from '../styles/Navbar.module.css'

export default function Navbar() {
  return (
    <>
     <Box className={styles.navbar}>
        <Box className={styles.titlecon}>
            <Text className={styles.title}>MyTestApp</Text>
        </Box>
     </Box>
    </>
  )
}
