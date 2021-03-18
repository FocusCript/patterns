class Example{
    constructor() {
        this.state = null
    }

    setState(state, callback){
        this.state = state
        if(callback){
            callback(this.state)
        }
    }
    doSomething(){
        if(this.state){
            return `Your current state ${this.state}!`
        }else{
            return `Your current state Empty!`
        }
    }
}

const foo = new Example()
const cb = (val)=>{
    console.log(val)
}
foo.setState('bar', cb)
console.log(foo.doSomething())