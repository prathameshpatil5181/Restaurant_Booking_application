import { MongoClient } from "mongodb";

export default async function handler(req,res){
    if(req.method==='POST'){
        const data = req.body;

        const {title,image,address,description} = data;
        const client = await MongoClient.connect("mongodb+srv://webUser:hp%4012345@cluster0.ab4boej.mongodb.net/restos?retryWrites=true&w=majority");
        const db = client.db();
        console.log('db '+ db);
        const RestorantCollections = db.collection('Restos');
        const result = await RestorantCollections.insertOne(data);
        console.log("result" + result);
        client.close();

        res.status(result.status).json({msg:'Data Inserted'});
    }
}