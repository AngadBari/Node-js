const http=require('http')
const fs=require('fs')


const Server=http.createServer((req,res)=>{
    const log=` ${Date.now()} :New Request at this tme \n`;
     fs.appendFile("log.txt" ,log,(err,data)=>{
          res.end("Hello From Server.")
     })
    
})


Server.listen(8000,()=>{ console.log("Server run Succesfully...")})