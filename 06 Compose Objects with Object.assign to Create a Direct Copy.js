const parent = {
    hair: 'brown',
    heightInInches(){
        return this.height*12
    }
}

//const child = Object.create(parent)
const child = Object.assign({ height: 6}, parent)

//child.height = 6;

console.log(child.heightInInches())

parent.heightInInches = () => true

console.log(child.heightInInches()) 
