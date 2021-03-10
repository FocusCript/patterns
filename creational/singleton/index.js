class Singleton {
    constructor(name, age) {
        if(Singleton.instance instanceof Singleton){
            return Singleton.instance
        }
        Singleton.instance = this
        this.name = name
        this.age = age
    }

    getName(){
        return this.name
    }
    getAge(){
        return this.age
    }
}

const firstPerson = new Singleton('Focus', 23)
const secondPerson = new Singleton('Shakh', 18)

console.log('equals?' , firstPerson === secondPerson)