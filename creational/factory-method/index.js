function Developer(name, type){
    function code(){
        console.log( name + 'is coding')
    }
    return {
        name,
        type,
        talk: function (){
            console.log(`i am ${type} developer`)
        }
    }
}

const dev = new Developer('Focus', 'web')
dev.talk()
dev.code() // Error (code is private method!)