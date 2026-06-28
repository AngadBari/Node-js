
const fs=require("fs")
// Read File

         //1.Sync / Blocking

         console.log('1')
            const result= fs.readFileSync("./info.txt","utf8")
            console.log(result)//That time give result

             console.log('2')

          // 2.Async / No-Blocking

     console.log('1')
     fs.readFile("./info.txt","utf8",(err,result)=>{
        if(err)
        {
            console.log(err)
        }
        else
        {
            console.log(result) //when worker work done that time give result
        }
     })


      console.log('2')