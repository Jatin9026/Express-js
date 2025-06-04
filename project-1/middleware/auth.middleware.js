import { validateToken } from "../utils/token-utils.js";

const authmiddleware=(req,res,next)=>{
const token = req.headers['authorization'];
if(token && validateToken(token)){
    req.user={name:"jatin",id:1};
    next();
}
else{
    res.status(401).send("unauthorized")
}
}
export default authmiddleware;