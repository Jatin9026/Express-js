import express from 'express'
import authmiddleware from '../middleware/auth.middleware.js'
const router=express.Router()
router.get("/dashbord",authmiddleware,(req,res)=>{
    res.status(200).send({
        message:`welcome to the dashbord ${req.user.name}`,
    })
})
export default router;