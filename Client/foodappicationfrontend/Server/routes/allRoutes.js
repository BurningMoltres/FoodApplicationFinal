const express=require('express');
const router=express.Router();

//we will import our  subitems schema
const subItemsSchema=require('../models/fooditemsSchema');
let result=[];
let finalResult=[];
let subItemsArray=[];
//we will import our main items schema
const mainItemsSchema=require('../models/mainCategorySchema');

//creating routes for our main schema and sub items schema

router.post('/mainItems/add',async(req,res)=>{

    try{
        const{name,image}=req.body;
        console.log(name);
        console.log(image);
        const schemaInstance=new mainItemsSchema({name,image});
        //we will save our instance with a await
        await schemaInstance.save();
        //res that item is added
        res.json("Item added successfully");
    }
    catch(error)
    {
        console.log(error.message);
    }
})

router.post('/subItems/add',async(req,res)=>{

    try{
        const{category,name,price,imageUrl,description}=req.body;
        console.log(name);
        console.log(category);
        console.log(imageUrl);
        console.log(price);
        console.log(description);

        const schemaInstance=new subItemsSchema({category,name,imageUrl,price,description});
        //we will save our instance with a await
        await schemaInstance.save();
        //res that item is added
        res.json("Item added successfully");
    }
    catch(error)
    {
        console.log(error.message);
    }
})

//now as a bundled api we have to get the details from two different schema and return as onne
//using two for loops first to get my main schema details and add them in array
//finally destructure and return the result

router.get('/completeDetails/get',async(req,res)=>
{
    try{
       
        const mainItems=await mainItemsSchema.find();

        for(let i=0;i<mainItemsSchema.length;i++)
        {
            let mainItemsName=await mainItems[i].name;
           
            let mainImage=await mainItems[i].image;
            let categorySearch= await mainItems[i].name;


            const subItems=await subItemsSchema.find({"category":categorySearch})         
           
                   result.push(
                    {
                        
                        "name":mainItemsName,
                        "image":mainImage,
                        
                    }
                   )
        }
        for(let i=0;i<result.length;i++)
        {
        let search=await result[i].name;
        const subItems=await subItemsSchema.find({"category":search});
        finalResult.push({
            "name":await result[i].name,
            "image":await result[i].image,
            "subItemsData":{
                "subItems":await[...subItems]
            }
        });      
    }
    //was facing the problem of items getting added to response again and again so i had to empty the array
    result=[];
    subItemsArray=[];
        res.json(finalResult); 
            finalResult=[];
        }

      
        
    catch(error)
    {
        console.log(error);
    }



}
)



module.exports=router;