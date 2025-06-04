import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"
//*handle es module __dirname and __filename
const  __filename=fileURLToPath(import.meta.url)
const __dirname=path.dirname(__filename)
//*middleware to log all request
const logmiddleware=(req,res,next)=>{
    const log=`[${new Date().toISOString()}]${req.method} ${req.url}\n`
    const logfile=path.join(__dirname,"../logs/request.log");
    fs.appendFile(logfile,log,(err)=>{
        if(err) console.error(`failed to log req `,err);
    })
    next();
}
export default logmiddleware;