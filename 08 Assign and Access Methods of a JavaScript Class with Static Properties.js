class Food{
    static isHealthy(){
        return true
    }
    static canBeEaten(){
        return this.isHealthy()
    }
}

//function Food(){
//
//}
//
//Food.isHealthy = () => true

console.log(Food.canBeEaten())
