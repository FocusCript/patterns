class Subject{
    constructor() {
        this.subscrribers = []
    }
    subscribe(observer){
        this.subscrribers.push(observer)
    }
    emit(message){
        this.subscrribers.forEach((obs)=>{
            obs.onmessage(message)
        })
    }
}

class Observer{
    constructor(name) {
        this.name = name
    }
    onmessage(msg){
        console.log(`msg to ${this.name} ----> ${msg}` )
    }
}

const simpleStream = new Subject()
const user1 = new Observer('Focus')
const user2 = new Observer('Shakh')

simpleStream.subscribe(user1)
simpleStream.subscribe(user2)

simpleStream.emit('hi guys!')