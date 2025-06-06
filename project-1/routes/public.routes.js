import express from 'express'
import generatetoken from "./private.route"
const router=express.Router()

//Genrate token
router.get("/generate-token",(req,res)=>{
    const token="token"
    res.status(200).send({
        message:"save token for future use",
        token:token
    })
})
//route genrate
router.get("/",(req,res)=>{
    res.status(200).send({
        message:"welcome to the home pagepage🏡"
    })
})
export default router;