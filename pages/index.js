
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import MeetupList from '../components/meetups/MeetupList'


const DUMMY_MEETUPS =[
  {
    id:'m1',
    title:'Paasha',
    image:'https://media-cdn.tripadvisor.com/media/photo-s/09/42/95/53/paasha.jpg',
    address:'Senapati Bapat Road JW Marriott Hotel, Pune 411053 India',
    description:'Vegetarian Friendly, Vegan Options, Gluten Free Options'
  },
  {
    id:'m2',
    title:'Elephant & Co. India',
    image:'https://media-cdn.tripadvisor.com/media/photo-s/26/89/39/29/outdoor.jpg',
    address:'D 10, Central Ave Opp. Gaurishankar Kalyani Bunglow, Nilanjali Society, Kalyani Nagar, Pune 411006 India',
    description:'Vegetarian Friendly, Vegan Options'
  }
]


export default function Home() {
  return (
    <><MeetupList meetups={DUMMY_MEETUPS}/></>
    
  )
}
