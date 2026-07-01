const express=require("express")
const users=require("../P0/MOCK_DATA.json")
const app=express()
const PORT=8000




app.get("/users",(req,res)=>{
    const html=`
      <ul>${users.map((user) =>`<li>${user.first_name}</li>` ).join("")}
       </ul
   
    `
    res.send(html)
})

//Routes

   //Browser
app.get("/api/users",(req,res)=>{
    res.json(users)
})

//this for mobile


// app.get("/api/users/:id",(req,res)=>{
//     const id=Number(req.params.id)
//     const user=users.find((user)=>{ return user.id === id})
//      return res.json(user)
// })


// app.post("/api/users/:id",(req,res)=>{
//     res.json({status:"Pendding"})
// })

//  app.patch("/api/users/:id",(req,res)=>{
//     res.json({status:"Pendding"})
// })


// app.delete("/api/users/:id",(req,res)=>{
//     res.json({status:"Pendding"})
// })


//in above  some routes  we can do this like also like Gruop


app
.route("/api/users/:id")
.get((req,res)=>{
    const id=Number(req.params.id)
    const user=users.find((user)=>{ return user.id === id})
     return res.json(user)
})
.post((req,res)=>{
    res.json({status:"Pendding"})
})
.patch((req,res)=>{
    res.json({status:"Pendding"})
})
.delete((req,res)=>{
    res.json({status:"Pendding"})
})



app.listen(PORT,console.log(`Server Start at :${PORT}`))