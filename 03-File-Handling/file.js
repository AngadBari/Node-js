const fs=require("fs")

//Create File
    
   //1.Sync
     fs.writeFileSync("./text.txt","Hello Nodejs")

   //2.Async
     fs.writeFile("./text.txt","Hello Nodejs From Async",(err)=>{})


// Read File

         //1.Sync
            const result= fs.readFileSync("./info.txt","utf8")
            console.log(result)

//    //2.Async
     fs.readFile("./info.txt","utf8",(err,result)=>{
        if(err)
        {
            console.log(err)
        }
        else
        {
            console.log(result)
        }
     })


//Append data

 fs.appendFileSync("./text.txt","Hey i am appending data..\n")


  fs.appendFile("./text.txt","Hey i am appending data..\n",(err)=>{})


  