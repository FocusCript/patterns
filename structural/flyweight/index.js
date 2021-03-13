class CarFactory{
    constructor() {
        this.cache = {}
    }

    create(name){
        const car = this.cache[name]
        if(car) return car
        this.cache[name] = name
        return this.cache[name]
    }
}

const bmw = new CarFactory().create('BMW')
console.log(bmw)
