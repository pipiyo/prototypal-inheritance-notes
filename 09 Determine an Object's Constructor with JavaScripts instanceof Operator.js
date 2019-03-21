//function Car(make){
//    this.make = make
//}
//
//function Boat(engine){
//    this.engine = engine
//}

class Car{
    constructor(make){
     this.make = make    
    }
}

class Boat{
    constructor(engine){
     this.engine = engine
    }
}


Object.setPrototypeOf(Boat.prototype, Car.prototype)

const myCar = new Boat('Ford')

console.log(myCar instanceof Car)
