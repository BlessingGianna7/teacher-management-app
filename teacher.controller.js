const {Teacher}= require("../models/teachers.model"); 

exports. createTeacher= async (req,res)=>{
    try{
        const teacher= new Teacher()
            names=req.body.names
            course= req.body.course
            
        
        await teacher.save();
        res.status(200).send(student);
    }
   catch(err){
    res.status(404).send('err');
   }
  
   
};

exports. viewTeacher= async(req,res)=>{
    try{
        const teachers=  await Teacher.find()
        res.status(200).send(teachers)
      
    }catch(err){
        res.staus(404).send('err');
    }
  
};


exports. viewTeacherById= async(req,res)=>{
    try{
        const teacher=  await Teacher.findById(req.params.id)
        if(teacher==null) res.status(404).send('invalid teacher id')
        res.status(200).send(teacher)
      
    }catch(err){
        res.status(500).send(err);
    }
 
  
};
   

exports. updateTeacher= async(req,res)=>{
    try{ 
        const teacher= await Teacher.findById(req.params.id)
        if(teacher==null) res.status(404).send('invalid teacher id')

        
       teacher.names=req.body.names
        teacher.course=req.body.course
 
    
     await teacher.save();
     res.status(200).send(teacher)
}catch(err){
    res.status(500).send(err); 
}
};
 
exports. deleteTeacher= async (req,res)=>{
    try{
await Teacher.findByIdAndDelete(req.params.id)
res.status(200).send('teacher was deleted successfully')

    }catch(err){
        res.status(500).send(err);
    }
}

