//1. global Middleware
// 2.specific route middleware
//3.inbuilt middleware

import express from "express"
const app=express()
//*1.globla middleware-->(aap.use(sayhiimidlewere))
function sayhiimidleware( req , res , next){
    console.log("hai from midleware");
    next();
}          
// app.use(sayhiimidleware)//ye method midleware ko call karta hai globaly kise bhi route pe jaohe to (hai from midleware hikha milega pur jub ye nahi use karoge to jis route me call karo ge vahi pe sirf ye likha milega jo ki specific middleware me aata hai
//* 2.specific middleware-->particular route pe use func use karna
// app.get("/jatin/abhilash",sayhiimidleware,(req,res)=>{
//     res.send("jatin")
// })
app.get("/user",sayhiimidleware,(req,res)=>{
    res.send("user page")
})
app.get("//home",(req,res)=>{
    res.send("home page")
})
app.get("/",(req,res)=>{
    res.send("hello world")
})
app.get('/hello', (req, res) => {
    res.send('Hello Jatin!');
  });

  
app.listen(3000,()=>{
    console.log("server is running on port 3000")
})