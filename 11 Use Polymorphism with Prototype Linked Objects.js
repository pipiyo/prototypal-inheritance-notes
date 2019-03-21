'use strict'

//const foo = {
//    name: 'tyler'
//}
//Object.defineProperty(foo, 'name',
//{
//    value: 'tyler',
//    writeable: false
//})

const foo = {
    set name(name){
        this.currentName = name
    }
}

const bar = {
    lastName: 'clark'
}

Object.setPrototypeOf(bar, foo)

bar.name = 'james'

console.log(bar.name)

console.log(bar)