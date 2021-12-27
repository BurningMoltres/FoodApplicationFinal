//creating  a backend api for application vv
const express=require('express');
const connectionCode=require('./config/dbConfig');
const routeActions=require('./routes/allRoutes');

const app=express();
app.use(express.json());


connectionCode();
app.use("/foodDetails",routeActions);


app.listen(4321,(error)=>{
    app.get("/",(req,res)=>
    {
        res.send("hello from backend");
    })

    if(error)
    {
        console.log(error.message);
    }
    else
    {
        console.log("Server is up and running");
    }
})