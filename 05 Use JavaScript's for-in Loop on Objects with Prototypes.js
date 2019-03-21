const obj = {
    firstName: 'Tyler',
    lastName: 'Clark'
}

const protoObj = {
    lastName: 'Brown'
}

Object.setPrototypeOf(obj, protoObj)

let n = 0
for (let property in obj) {
    if(obj.hasOwnProperty(property)){
        n++
    } 
}
console.log(n) 
