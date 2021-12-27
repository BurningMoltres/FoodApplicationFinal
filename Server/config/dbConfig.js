const mongoose=require('mongoose');

const connectDB=async ()=>
{
    try{
        //connecting db and placing the mongo url
        //async await request to handle promises
        await mongoose.connect("mongodb+srv://omkar:alpha123@notescollectiondata.4ytgk.mongodb.net/FoodApplication?retryWrites=true&w=majority");
        console.log("Connection to FoodApplication database is initiated and sucessfull");
    }
    catch(error)
    {
        console.log(error.message);
        process.exit(1);
    }

}

module.exports=connectDB;