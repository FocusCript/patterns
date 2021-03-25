class Iphone{
   info(){
       console.log('info about Iphone')
   }
   accept(visitor){
       visitor(this)
   }
}

class Samsung{
    info(){
        console.log('info about Samsung')
    }
    accept(visitor){
        visitor(this)
    }
}

class Mi{
    info(){
        console.log('info about Mi')
    }
    accept(visitor){
        visitor(this)
    }
}

function  exportVisitor(mod){
    if(mod instanceof Iphone){
        mod.export = `Exported data ${mod.info()}`
    }
    if(mod instanceof Samsung){
        mod.export = `Exported data ${mod.info()}`
    }
    if(mod instanceof Mi){
        mod.export = `Exported data ${mod.info()}`
    }
}

const i = new Iphone()
const s = new Samsung()
const m = new Mi()

console.log(i.accept(exportVisitor))
console.log(s.accept(exportVisitor))
console.log(m.accept(exportVisitor))