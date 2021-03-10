class NewMusicConverter{
        toMP3(music){
            return `${music} converted to mp3`
        }
        toWAV(music){
            return `${music} converted to wav`
        }
        toAAC(music){
            return `${music} converted to aac`
        }
}

class OldMusicConverter{
   convert(music, toType){
       switch (toType){
           case 'mp3': return `${music} converted to ${toType}`
           case 'wav': return `${music} converted to ${toType}`
           case 'aac': return `${music} converted to ${toType}`
           default: return 'Error! type not found'
       }
   }
}

class convAdapter{
    constructor() {
        this.newConv = new NewMusicConverter()
    }
    convert(music, toType){
        switch (toType){
            case 'mp3': return this.newConv.toMP3(music)
            case 'wav': return this.newConv.toWAV(music)
            case 'aac': return this.newConv.toAAC(music)
            default: return 'Error! type not found'
        }
    }
}

const adapter = new convAdapter()

console.log(adapter.convert('Black Surprise', 'wav'))