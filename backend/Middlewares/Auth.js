const jwt = require('jsonwebtoken');
const ensureAuthonticated = (req,res,next)=>{
    const auth = req.headers['authorization']
    if(!auth){
        return res.status(403)
        .json({message:'unauthorized, jwt token is require'});
    }
    try{
        const decoded =jwt.verify(auth,process.env.JWT_SECRET);
        req.user = decoded;
        next();
    }catch(err){
        return res.status(403)
        .json({message:'unauthorized, jwt token is expired'});

    }
}
module.exports = ensureAuthonticated;