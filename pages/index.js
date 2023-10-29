import { Inter } from "next/font/google";
import Head from "next/head";
const inter = Inter({ subsets: ["latin"] });
import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";
import HomePageBody from "@/components/HomePage/HomePageBody";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "Paasha",
    image:
      "https://media-cdn.tripadvisor.com/media/photo-s/09/42/95/53/paasha.jpg",
    address: "Senapati Bapat Road JW Marriott Hotel, Pune 411053 India",
    description: "Vegetarian Friendly, Vegan Options, Gluten Free Options",
  },
  {
    id: "m2",
    title: "Elephant & Co. India",
    image:
      "https://media-cdn.tripadvisor.com/media/photo-s/26/89/39/29/outdoor.jpg",
    address:
      "D 10, Central Ave Opp. Gaurishankar Kalyani Bunglow, Nilanjali Society, Kalyani Nagar, Pune 411006 India",
    description: "Vegetarian Friendly, Vegan Options",
  },
];

export default function Home(props) {
  return (
    <div>
    <Head>
      <title>Restaurant Booking</title>
      <meta name='description' />
    </Head>
      <HomePageBody/>
    </div>
  );
}

export async function getStaticProps() {
  //fetch data from API

  const client = await MongoClient.connect(
    "mongodb+srv://webUser:hp%4012345@cluster0.ab4boej.mongodb.net/?retryWrites=true&w=majority"
  );
  const db = client.db();
  const RestorantCollections = db.collection("Restos");
  const restorantResult = await RestorantCollections.find().toArray();
  client.close();
  const restos = restorantResult.map((resto) => ({
    title: resto.title,
    address: resto.address,
    image:resto.image,
    description: resto.description,
    id: resto._id.toString(),
  }));

  return {
    props: { restos: restos },
    revalidate: 1,
  };
}

// export async function getServerSideProps(context){

//   const req = context.req;
//   const res= context.res;
//   return {
//     props:{restos:DUMMY_MEETUPS}
//   }
// }
