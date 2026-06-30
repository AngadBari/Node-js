const express = require('express')

const app=express()

app.get("/",(req,res)=>{
    return res.send( "Hello Nodejs Master Kid..")
})


app.get("/about",(req,res)=>{
    return res.send( "Hey Master kid"  +  req.query.name)
})


app.listen(8001,()=>{console.log("Server Start..")})