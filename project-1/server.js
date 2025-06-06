//*important note on middle ware
// 🔹 1. Middleware — like Bodyguard or Filter
// Middleware check karta hai:
// 	•	User login hai ya nahi
// 	•	Kya user ka data valid hai
// 	•	Request aage jaa sakti hai ya nahi
// 🧠 Tu soch — bina checking ke koi bhi tera backend access kare?
// ➡️ Security, Logging, Data Validation — sab middleware handle karta hai.
// 🔹 Router: Routes ko alag-alag files me manage karne ka tareeka hai.
// 🔹 Middleware: Har request ke bich me aane wala filter ya checker hota hai.
import express from "express";
import publicrouter from "./routes/public.routes.js"
import privaterouter from "./routes/private.route.js"
import fs from "fs"//node js ka build in
import path  from "path"
import { fileURLToPath } from "url";
import logmiddleware from "./middleware/log.middleware.js"
const app=express();
const port=8080;
//log name ka folder banayenge
const __filename=fileURLToPath(import.meta.url)//ye file path batata hai
const __dirname=path.dirname(__filename);//ye folder ka path 
if(!fs.existsSync(path.join(__dirname,"logs"))){//if current folder me logs ka nam nahi mila to 
    fs.mkdirSync(path.join(__dirname,"logs"))//logs nam ka folder bana do
}

//&Inbuilt Middleware--Incoming requests me agar JSON body ho to usse parse karke req.body me daal deta hai.
app.use(express.json());
//!global custom middleware
app.use(logmiddleware)
//*middleware to routes
app.use("/public",publicrouter);//agar request /public se aayi to publicrouter ko use karna 
app.use("/private",privaterouter);//agar request /private se aayi to privetae ko 







//This line start express server
app.listen(port,()=>{
    console.log(`server is running on ${port}`);
})
