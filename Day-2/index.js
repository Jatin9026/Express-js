
import express from "express"
const app=express()

app.get("/user",sayhiimidleware,(req,res)=>{
    res.send("user page")
})

app.listen(3000,()=>{
    console.log("server is running on port 3000")
})