import React,{useState} from 'react'
import { Box, Text } from '@chakra-ui/react'
import styles from '../styles/Search.module.css'

export default function Search() {
  const [search, setSearch] = useState('');
  const handleChange = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  }
  return (
    <Box className={styles.parent}>
        <Box className={styles.container}>
            <Text className={styles.text}>Search</Text>
            <input type="text" placeholder="" onChange={handleChange} className={styles.input} />
        </Box>
    </Box>
  )
}
