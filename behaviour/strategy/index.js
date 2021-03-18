    function simpleStrategy (amount){
        return amount
    }
    function premiumStrategy (amount){
        return amount * 0.85
    }
    function platiniumStrategy (amount){
        return amount * 0.65
    }

    class AutoCart{
        constructor(discount, amount) {
            this.discount = discount
            this.amount = amount
        }
        checkout(){
            return this.discount(this.amount)
        }
    }

    const user1 = new AutoCart(simpleStrategy, 3000)
    const user2 = new AutoCart(premiumStrategy, 3000)
    const user3 = new AutoCart(platiniumStrategy, 3000)

    console.log(user1.checkout())
    console.log(user2.checkout())
    console.log(user3.checkout())