/*
    By using this function, we're not duplicating code, relying on prototypes or inheritance. 
    We have the ability to change these types pretty easily. 
    A good rule of thumb is object literals for one, and factories for many.
*/
const createUser = (character) => ({
    ...character,
    type: 'human'
})

const tyler = createUser({
    hair: 'brown',
    height: '6 foot'
})

const sally = createUser({
    hair: 'blonde',
     height: '5 foot 4'
})

console.log(tyler.type) 
