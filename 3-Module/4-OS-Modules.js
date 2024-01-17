const os = require("os")

//info about current user
const user = os.userInfo()
console.log(user)

//Method return the system uptime in seconds
console.log(`The system Uptime is ${os.uptime()} seconds`)

const curentOS = {
    name: os.type(),
    release: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(curentOS)
