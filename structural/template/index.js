class Builder{
    build() {
        this.addTag()
        this.addLink()
        this.addCaption()
    }
}

class MessageBuilder extends Builder{
    addTag(){
        console.log('added Tag')
    }
    addLink(){
        console.log('added Link')
    }
    addCaption(){
        console.log('added Caption')
    }
}

class PostBuilder extends Builder{
    addTag(){
        console.log('added Tag')
    }
    addLink(){
        console.log('added Link')
    }
    addCaption(){
        console.log('added Caption')
    }
}

const msg = new MessageBuilder()
const post = new PostBuilder()
msg.build()
post.build()