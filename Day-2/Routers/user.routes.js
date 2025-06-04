import { Router } from "express";
const userRouter=Router()

userRouter.get("//home",(req,res)=>{
    res.send("home page")
})
userRouter.get("/",(req,res)=>{
    res.send("hello world")
})
userRouter.get('/hello', (req, res) => {
    res.send('Hello Jatin!');
  });


  export default userRouter;