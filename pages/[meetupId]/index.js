import RestoDetail from "@/components/meetups/RestorantDetails";
import { MongoClient,ObjectId } from "mongodb";
const RestaurantDetails = (props) => {
  return (
    <>
      <RestoDetail
        image={props.RestoData.image}
        title={props.RestoData.title}
        address={props.RestoData.address}
        description={props.RestoData.description}
      />
    </>
  );
};

export default RestaurantDetails;

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://webUser:hp%4012345@cluster0.ab4boej.mongodb.net/?retryWrites=true&w=majority"
  );
  const db = client.db();
  const RestorantCollections = db.collection("Restos");
  const restorantResult = await RestorantCollections.find(
    {},
    { _id: 1 }
  ).toArray();
  client.close();

  return {
    fallback: false,
    paths: restorantResult.map((resto) => ({
      params: { meetupId: resto._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  const client = await MongoClient.connect(
    "mongodb+srv://webUser:hp%4012345@cluster0.ab4boej.mongodb.net/?retryWrites=true&w=majority"
  );
  const db = client.db();
  const RestorantCollections = db.collection("Restos");
  const restorantResult = await RestorantCollections.findOne({_id:new ObjectId(meetupId)});
  console.log(restorantResult);
  client.close();

  const restos = {
    title: restorantResult.title,
    address: restorantResult.address,
    image:restorantResult.image,
    description: restorantResult.description,
    id: restorantResult._id.toString(),
  };

  return {
    props: {
      RestoData: restos,
    },
  };
}
