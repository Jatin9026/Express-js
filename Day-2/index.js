import userRouter from "./Routers/user.routes.js"
import express from "express"
const app=express()
app.use(userRouter)
app.listen(3000,()=>{
    console.log("server is running on port 3000")
})