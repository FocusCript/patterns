class Pay {
    constructor() {
        this.status = false
        this.payMethod = ''
        this.message = ''
        this.sum = 0
    }
    kiwi(val){
        this.message = `success paid ${val}`
        this.sum = this.sum + val
        this.status = true
        this.payMethod = 'kiwi'
        return this
    }
    paypal(val){
        this.message = `success paid ${val}`
        this.sum = this.sum + val
        this.status = true
        this.payMethod = 'paypal'
        return this
    }
    webmoney(val){
        this.message = `success paid ${val}`
        this.sum = this.sum + val
        this.status = true
        this.payMethod = 'webmoney'
        return this
    }
}

const pay = new Pay()

console.log(pay.kiwi(200).paypal(300).webmoney(500))
