
class Car{
    constructor() {
        this.autopilot = false
        this.signaling = false
        this.parktronic = false
    }
}

class CarBuilder{
    constructor() {
        this.car = new Car()
    }

    addAutopilot(value){
        this.car.autopilot = value
        return this
    }

    addSignaling(value){
        this.car.signaling = value
        return this
    }

    addParktonic(value){
        this.car.parktronic = value
        return this
    }

    upgradeEngine(engine){
        this.car.engine = engine
        return this
    }

    build(){
        return this.car
    }
}

const car = new CarBuilder()
                        .addAutopilot(true)
                        .addParktonic(true)
                        .addSignaling(false)
                        .upgradeEngine('V8')
                        .build()


console.log(car)