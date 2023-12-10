import React from 'react'
// import Image from 'next/image'
import classes from './HotelPage.module.css';
import CityCard from '../ui/CityCard';
import HotelCard from '../ui/HotelCard';
import Link from 'next/link';
import SearchBar from '../ui/SearchBar';
import Pagination from '../ui/Pagination';
import { useState } from 'react';
const CITIS = [
  { image: 'paris.jpg', name: 'paris' },
  { image: 'nyc.jpg', name: 'new york' },
  { image: 'rio.jpg', name: 'rio' },
  { image: 'tokyo.jpg', name: 'tokyo' },
  { image: 'dubai.jpg', name: 'dubai' },
  { image: 'london.jpg', name: 'london' }
];

const HotelPage = () => {

  const [page,setPage] = useState(1);

 const changePageHandler =(page)=>{
  setPage(page);
 }

  return (
    <div className={classes.main} >
      <div className={classes.grid}>
      {CITIS.map((item,index)=>( <CityCard key={index} src={item.image} height={15} width={500} name={item.name} blur='1.5' fontsize='2vw' opacity='0.95'/>))} 
      </div>
      <div>
        <SearchBar/>
      </div>
      <div>
        <HotelCard/>
        <HotelCard/>
        <HotelCard/>
        <HotelCard/>
        <HotelCard/>
        <HotelCard/>
      </div>
      <div className='m-2'>
        <Pagination pages={5} active={page} onClick={changePageHandler}/>
      </div>
      
    </div>
  )
}

export default HotelPage
