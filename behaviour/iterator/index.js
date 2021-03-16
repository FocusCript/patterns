class Iterator {
    constructor(collection) {
        this.collection = collection
        this.index = 0
    }
    next(){
        if(this.hasNext()){
            return this.collection[this.index++]
        }
    }
    hasNext(){
        return this.index < this.collection.length
    }
}

const iterator = new Iterator(['var', 'const', 'let'])

while(iterator.hasNext()){
    console.log(iterator.next())
}
