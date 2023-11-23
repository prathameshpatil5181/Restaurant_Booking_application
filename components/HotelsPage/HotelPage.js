import React from 'react'
// import Image from 'next/image'
import classes from './HotelPage.module.css';
import CityCard from '../ui/CityCard';
import HotelCard from '../ui/HotelCard';
const CITIS = [
  { image: 'paris.jpg', name: 'paris' },
  { image: 'nyc.jpg', name: 'new york' },
  { image: 'rio.jpg', name: 'rio' },
  { image: 'tokyo.jpg', name: 'tokyo' },
  { image: 'dubai.jpg', name: 'dubai' },
  { image: 'london.jpg', name: 'london' }
];

const HotelPage = () => {
  return (
    <div className={classes.main} >
      <div className={classes.grid}>
      {CITIS.map(item=>( <CityCard src={item.image} height={200} width={500} name={item.name} blur='1.5' fontsize='50px' opacity='0.95'/>))} 
      </div>
      <div>
        <HotelCard/>
      </div>
    </div>
  )
}

export default HotelPage
