function Samsung(){
    this.name =  'samsung'
    this.cost = `500$`
}

function Iphone(){
    this.name = 'iphone'
    this.cost = `1000$`
}

function Nokia(){
    this.name = 'nokia'
    this.cost = `300$`
}

function phoneFactory(name){
    this.nokia = new Nokia()
    this.samsung = new Samsung()
    this.iphone = new Iphone()
    switch (name){
        case 'nokia':
            return this.nokia
        case 'samsung':
            return this.samsung
        case 'iphone':
            return this.iphone
        default:
            return null
    }
}
console.log(phoneFactory('samsung'))


