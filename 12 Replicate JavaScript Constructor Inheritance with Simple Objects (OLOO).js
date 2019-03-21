const house = {
    set houseColor(color){
        this.color = color
    }
}

const myHouse = Object.create(house)

console.log(myHouse.houseColor = 'white')  // white
console.log(myHouse)
