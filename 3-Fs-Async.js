const {readFile, writeFile} = require ("fs");
console.log("Start:")
// readFile("./Content/first.txt", "utf8", (err, results)=> {
// if (err){
//     console.log(err)
// }
// console.log(results)
// })

readFile("./Content/first.txt", "utf-8", (err, result)=> {
    if (err){
        console.log("Error:", err)
        return
    }
    const first = result;
    readFile("./Content/second.txt", "utf-8", (err, result)=> {
        if (err){
            console.log("Error:", err)
            return
        }
        const second = result
        writeFile(
            "./Content/Results-sync.txt", 
        `Here are the results : ${first}, ${second}`
        , (err) => {
            if(err){
                console.log("Error:",err)
                return;
            }
        console.log("Finished writing")
        }
        )
    })
    })
      console.log("Starting a new Task!")  
  