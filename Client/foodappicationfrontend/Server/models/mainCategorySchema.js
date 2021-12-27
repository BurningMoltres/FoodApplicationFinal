const mongoose=require('mongoose');

//preparing our main category schema

const mainSchema=new mongoose.Schema({

    name:{
        type:String,
        requried:true
        
    },
    image:
    {
        type:String,
        required:true
    }

})

module.exports=mongoose.model("mainSchema",mainSchema);