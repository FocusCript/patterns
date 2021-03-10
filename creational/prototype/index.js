class Car {
    constructor(name, price, color) {
        this.name = name
        this.price = price
        this.color = color
    }
    clone(){
        return new Car(this.name, this.price, this.color)
    }
}

const TeslaCar = new Car('Tesla', '10k', 'black')
TeslaCar.autopilot = true
TeslaCar.color = 'white'

console.log(TeslaCar)