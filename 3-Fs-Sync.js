const {readFileSync, writeFileSync} = require ("fs");
console.log("Start:")
const first = readFileSync("./Content/first.txt", "utf8")
const second = readFileSync("./Content/second.txt", "utf8")

console.log(first, second)

writeFileSync("./Content/Results-sync.txt", 
`Here are the results : ${first}, ${second} \n`, {flag: "a"}
)

console.log("I am Done with this Task!")
console.log("I am Starting the next one!")