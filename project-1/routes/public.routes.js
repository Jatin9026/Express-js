import express from 'express'
import {generateToken} from "../utils/token-utils.js"
const router=express.Router()

//Genrate token
router.get("/generate-token",(req,res)=>{
    const token=generateToken()
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