class BasicServer{
    constructor(ip, port, secure) {
        this.ip = ip
        this.port = port
        this.secure = secure
    }
    get url(){
        return `http${this.secure ? 's' : ''}://${this.ip}:${this.port}`
    }
}

function decorator(target){
    target.id = `${Date.now()}`
    target.owner = 'Mr.X'
    return target
}

const server = decorator(new BasicServer('88.88.77.99', 8080,true))
console.log(server)