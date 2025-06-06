//cookies -->store small peice of data in client browser 
import cookieParser from "cookie-parser";
import express from "express";
const port=8080;
const app=express();
app.use(cookieParser())
app.get("/",(req,res)=>{
    res.cookie("name","express",{
        maxAge:1000*10
    });
    res.send("hello from server");
})
//  console.log(req.cookies)------->undefined;
//console.log(req.headers.cookie)-->name=express;
app.get("/products",(req,res)=>{
    console.log("cookies",req.header.cookies)
    if(req.cookies.name && req.cookies.name==="express"){
    res.status(200).send({
        id:1,
        name:"item-1",
        price:"409"
    })
}
res.status(403).send("you are not authorize to view this")
})

app.listen(port,()=>{
    console.log(`server is running on ${port}`);
})