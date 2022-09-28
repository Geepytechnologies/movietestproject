import React,{useEffect,useState} from 'react'
import { Box, Text, Image } from '@chakra-ui/react'
import styles from '../styles/Search.module.css'
import {BsSearch } from "react-icons/bs"


export default function Movies() {
  const [search, setSearch] = useState('');
  const [data,setData] = useState([]);
  const [data1,setData1] = useState([]);
  const [data2,setData2] = useState([]);
  const [data3,setData3] = useState([]);
  const [data4,setData4] = useState([]);
  const [data5,setData5] = useState([]);
  const [data6,setData6] = useState([]);
  const [data7,setData7] = useState([]);
  const [movies,setMovies] = useState([]);
  const [movies1,setMovies1] = useState([]);
  const [title, setTitle] = useState([]);
  const [title1, setTitle1] = useState([]);
 
  
  const fetchinfo = async ()=>{
    const response = await fetch('https://www.omdbapi.com?apikey=4e3b54c8&t=movie&y=2009');
    const data = await response.json();
    setData(data);
    const response1 = await fetch('https://www.omdbapi.com?apikey=4e3b54c8&t=movie&y=2010');
    const data1 = await response1.json();
    setData1(data1);
    const response2 = await fetch('https://www.omdbapi.com?apikey=4e3b54c8&t=movie&y=2011');
    const data2 = await response2.json();
    setData2(data2);
    const response3 = await fetch('https://www.omdbapi.com?apikey=4e3b54c8&t=movie&y=2012');
    const data3 = await response3.json();
    setData3(data3);
    setMovies([data,data1,data2,data3]);
    const response4 = await fetch('https://www.omdbapi.com?apikey=4e3b54c8&t=series&y=2010');
    const data4 = await response4.json();
    setData4(data4);
    const response5 = await fetch('https://www.omdbapi.com?apikey=4e3b54c8&t=series&y=2011');
    const data5 = await response5.json();
    setData5(data5);
    const response6 = await fetch('https://www.omdbapi.com?apikey=4e3b54c8&t=series&y=2012');
    const data6 = await response6.json();
    setData6(data6);
    const response7 = await fetch('https://www.omdbapi.com?apikey=4e3b54c8&t=series&y=2013');
    const data7 = await response7.json();
    setData7(data7);
    setMovies1([data4,data5,data6,data7]);
  }  
  const handleChange = (e) => {
    setSearch(e.target.value.toLowerCase());
  }
  useEffect(() => {
    fetchinfo();
  },[])
 
  return (
    <Box className="">
      <Box className={styles.parent}>
          <Box className="w-[90%]">
            <Box className='flex flex-row items-center'>
              <Text className="text-[25px] mr-[5px] font-[600] ">Search</Text>
              <BsSearch className='text-[20px]' />
            </Box>
              <input type="text" placeholder="" onChange={handleChange} className="border border-[black] w-[100%] h-[40px] rounded-lg " />
          </Box>
      </Box>
     <Box className='mb-[40px] m-[10px]'>
       <Box className='mb-[8px] mt-[48px]'>
          <Text className="text-[30px] font-[700] md:text-[24px] font-[400] font-['DM Sans']">Movies</Text>
        </Box>
       <Box className='grid bg-[#350905] w-[100%] justify-items-center py-[20px] gap-[10px] grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
          {movies.filter(movie=>movie.Title.toLowerCase().includes(search)).map((movie,index)=>{
            return(
            <Box key={index} className='flex shadow-2xl border-2 border-white w-[270px] sm:w-[300px] h-[auto] sm:h-[300px] relative items-center justify-center'>
              <Image src={movie.Poster} className=' w-[100%] h-[100%] ' alt='img' objectFit='cover'  />
              <Box className='absolute h-[100%] w-[100%] top-0 bg-[rgba(0,0,0,0.4)]  '></Box>
              <Box className='absolute h-[100%] z-40 top-0 flex items-center justify-center'><Text className=' text-center text-white font-[400] text-[18px] md:text-[24px]'>{movie.Title}</Text></Box>
            </Box>
            )
          })}
       </Box>
       <Box className='mb-[18px] mt-[48px]'></Box>
       <Box className='grid bg-[#350905] w-[100%] justify-items-center py-[20px] gap-[10px] grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
          {movies1.filter(movie=>movie.Title.toLowerCase().includes(search)).map((movie,index)=>{
            return(
            <Box key={index} className='flex shadow-2xl border-2 border-white w-[270px] sm:w-[300px] h-[auto] sm:h-[300px] relative items-center justify-center'>
              <Image src={movie.Poster} className='w-[100%] h-[100%]' alt='img' objectFit='cover' />
              <Box className='absolute h-[100%] w-[100%] top-0 bg-[rgba(0,0,0,0.4)]'></Box>
              <Box className='absolute h-[100%] z-40 top-0 flex items-center justify-center'><Text className=' text-center text-white font-[400] text-[18px] md:text-[24px]'>{movie.Title}</Text></Box>
            </Box>
            )
          })}
       </Box>
    </Box>
    </Box>
  )
}
