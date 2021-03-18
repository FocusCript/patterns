    class AudioPlayer{
        constructor(album) {
            this.album = album
        }
        play(music){
            if(music){
                this.current = music
                console.log(`playing ${music}`)
            }else{
                this.current = this.album[0]
                console.log(`playing ${this.album[0]}`)
            }
        }
        pause(){
            console.log(`paused ${this.current}`)
        }
        stop(){
            this.current = null
            console.log(`stopped music`)
        }
    }

    class Command{
        constructor(subject) {
            this.subject = subject
            this.executedCommands = []
        }
        execute(command, args){
               if(args){
                   this.subject[command](args)
               }else{
                   this.subject[command]()
               }
               this.executedCommands.push({command, args: args || '', ts: Date.now()})
        }
    }

    const album = ['Lovely - Rihanna', 'Mother earth - Within Temptation', 'Numb - Linkin Park']
    const player = new Command(new AudioPlayer(album))
    player.execute('play', 'Numb -- Linkin Park')
    player.execute('stop')
    setTimeout(()=>{
        player.execute('play')
    }, 100)
    setTimeout(()=>{
        player.execute('stop')
    }, 300)
    setTimeout(()=>{
        player.execute('play', 'Mother earth - Within Temptation')
    }, 500)
    setTimeout(()=>{
        player.execute('pause', 'Mother earth - Within Temptation')
    }, 600)
    setTimeout(()=>{
        console.log(player.executedCommands)
    }, 3000)

