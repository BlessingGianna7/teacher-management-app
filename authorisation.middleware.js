const jwt=  require('jsonwebtoken')
module.exports = function(req,res,next){
    try{
        const token = req.header('Auth')
        if(!token) return res.status(404).send("Please provide a token")
    
        const object = jwt.verify(token,process.env.JWT)
        req.user= object
        next()
        
    }catch(err){
        return res.status(400).send(err.message)
    }
}