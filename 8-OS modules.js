

const OS = require('os')
//info about current user
const hostname = OS.hostname()
//system uptime
const uptime = OS.uptime()
const user = OS.userInfo()

console.log(hostname)
console.log(user)
console.log(`this is my sys uptime:${uptime} bseconds`)

const currentOS = {
    name:OS.type(),
    release:OS.release(),
    totalMemory: OS.totalmem(),
    freeMem:OS.freemem()
}

console.log(currentOS.freeMem)
console.log(currentOS.totalMemory)
console.log(currentOS)