//getting subitems 
//which will be passed to the main array
const mongoose=require('mongoose');

//preparing our schema
const foodItemSchema=new mongoose.Schema({

   category:
   {
       type:String,
       requried:true
   },
    name:{
        type:String,
        required:true,
        unique:true
    },
    price:
    {
        type:Number,
        required:true
    },
    imageUrl:
    {
        type:String,
        required:true
    },
    description:
    {
        type:String,
        required:true
    }
})

//last step is to export our schema
module.exports=mongoose.model("subitemsschema",foodItemSchema);