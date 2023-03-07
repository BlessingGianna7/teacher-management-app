const mongoose= require('mongoose');

const   teacherSchema= new mongoose.Schema(
    {
        names:{
            type: String,
            required: true,
           
        },
        
        course:{
            type: String,
            required: true
           
    
        },
    }
 ); 
 const Teachers= mongoose.model("teachers", teacherSchema)
  exports.Teachers= Teachers