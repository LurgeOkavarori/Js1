
const hva = document.querySelector('main')
hva.classList.add('hva')

class List {
    items = []

    constructor(items = []) {
        this.items = items
    }
    findItem(main) {
        return this.items.filter(item => item.name === main.name)[0]

    }
    addItem(item) {
        const exists = this.findItem(item)
        if (exists) {
            exists.inc()
        } else {
            this.items.push(item)
        }
        this.render()

    }
    removeItem(item) {
        const exists = this.findItem(item)
        if (!exists) {
            return
        }

        if (exists.count > 1) {
            exists.dec()
        } else {
            this.items = this.items.filter(main => item.name !== main.name)
        }
        this.render()
    }
    render() {

    }
}

class MainList extends List {
    list = []

    constructor(items) {
        super(items)
    }
    render() {
        const RenderSpace = document.querySelector('.Items_list')
        if (!RenderSpace) {
            return
        }
        RenderSpace.innerHTML = ''

        this.items.forEach(item => {
            const template = item.MainTemplate()
            RenderSpace.appendChild(template)
        })
    }


}

class Cart extends List {

    constructor(items) {
        if (Cart.instance) {
            return Cart.instance
        }
        super(items)
        this.show()

        Cart.instance = this
    }

    show() {
        const myBasket = document.createElement('div');
        myBasket.classList.add('basket')
        const cartHead = document.createElement('div')
        cartHead.innerHTML = 'Корзина:'
        cartHead.classList.add('Cart_header')
        const RenderSpace = document.querySelector('main')
        if (RenderSpace) {
            RenderSpace.appendChild(cartHead)
            RenderSpace.appendChild(myBasket)

        }
    }
    render() {
        const RenderSpace = document.querySelector('.basket')
        if (!RenderSpace) {
            return
        }
        RenderSpace.innerHTML = ''
        this.items.forEach(item => {
            const template = item.BasketTemplate()
            RenderSpace.appendChild(template)
        })
        RenderSpace.appendChild(this.calcTotalPrice())
    }

    calcTotalPrice() {
        const how = this.items.reduce((result, cur) => {
            return result + cur.price * cur.count
        }, 0)
        const totalPrice = document.createElement('div')
        totalPrice.innerHTML = `<p> Итоговая цена: ${how} р.</p>`
        totalPrice.classList.add('totalPrice')
        return totalPrice
    }
}

class Item {
    name = ''
    price = 0
    count = 1

    constructor(name, price) {
        this.name = name
        this.price = price
    }
    inc() {
        this.count++
    }

    dec() {
        this.count--
    }
    MainTemplate() {
        const { name, price } = this
        const product = document.createElement('div')
        product.innerHTML = `<h1>${name}</h1><p>${price}</p>`
        product.classList.add('product')

        product.appendChild(this.inCartButton())

        return product
    }
    BasketTemplate() {
        const { name, price, count } = this
        const product = document.createElement('div')
        product.innerHTML = `<h1>${name}</h1><p>${price} x ${count} = ${price * count}</p>`
        product.classList.add('basket_product')
        product.appendChild(this.minusButton())

        return product
    }
    inCartButton() {
        const btn = document.createElement('div')
        btn.classList.add('btn')
        btn.innerHTML = 'Купить'
        btn.addEventListener('click', () => {
            const basket = new Cart()
            basket.addItem(this)
        })
        return btn
    }
    minusButton() {
        const btn = document.createElement('div')
        btn.classList.add('btn')
        btn.innerHTML = ' - '
        btn.addEventListener('click', () => {
            const basket = new Cart()
            basket.removeItem(this)
        })
        return btn
    }
}



const basket = new Cart()
// basket.addItem(new Item('item1', 500))
// basket.addItem(new Item('item2', 600))
// basket.addItem(new Item('item3', 800))
// basket.addItem(new Item('item4', 300))

const myList = new MainList()
myList.addItem(new Item('item1', 500))
myList.addItem(new Item('item2', 600))
myList.addItem(new Item('item3', 800))
myList.addItem(new Item('item4', 300))
myList.render()
