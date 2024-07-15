import mongoose from 'mongoose';

const DBConnection =async()=>{
    const MONGODB_URI='mongodb://shital:Shital321@ac-seib6bd-shard-00-00.poir52t.mongodb.net:27017,ac-seib6bd-shard-00-01.poir52t.mongodb.net:27017,ac-seib6bd-shard-00-02.poir52t.mongodb.net:27017/?ssl=true&replicaSet=atlas-rg1405-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0';
    try{
      await mongoose.connect(MONGODB_URI,{useNewUrlParser:true});
       console.log('Databases connected successfully');
    }
    catch(error){
        console.log('Error while connecting with the database',error.message);
    }
}
export default DBConnection;