
// busket.reduce((result, cur) => {
//     return result + cur.price
// }, 0)
// const div = document.querySelector('div')
// const basket = [
//     { name: 'item1', price: 500 },
//     { name: 'item2', price: 600 },
//     { name: 'item3', price: 800 },
//     { name: 'item4', price: 300 },
// ];
// // basket = ['Item 1', 'Item 2', 'Item 3', 'Item 4']
// basket.forEach(item123 => {
//     const item = document.createElement('div')
//     item.innerText = item123
//     item.innerHTML = `<h1>${item123.name}</h1><p>${item123.price}</p>`
//     // Не понимаю как мне сделать так, чтоб оно подсасывало не 1ин индекс с элемента, а каждый со своего?
//     item.classList.add('item')
//     div.appendChild(item)
// })
const hva = document.querySelector('main')
hva.classList.add('hva')

class Cart {
    cart = [];

    constructor(text) {
        this.text = text;
        this.render()
    }
    calcTotalPrice() {
        return this.cart.reduce((result, cur) => {
            return result + cur.price
        }, 0)
    }
    addItem(item) {
        this.cart.push(item)
    }
    render() {
        const elem = document.createElement('div');
        // elem.innerHTML = '<h1>${item.name}</h1><p>${item.price}</p>'
        elem.classList.add('basket')

        const place = document.querySelector('main')
        place.appendChild(elem)

        // Array.prototype.forEach.call(this.cart, pro => {
        this.cart.forEach(pro => {
            const product = document.createElement('div')
            product.innerText = pro
            product.innerHTML = `<h1>${pro.name}</h1><p>${pro.price}</p>`
            product.classList.add('product')
            this.cart.appendChild(product)
            console.log(pro)

        })
        // не понимаю как мне отрендерить итемы в корзине, совсем никак, функция не работает



    }
}
class Item {
    name = ''
    price = 0

    get price() {
        return this.price
    }

    set name(n) {
        this.name = n
    }

    constructor(name, price) {
        this.name = name
        this.price = price
    }
}
const basket = new Cart()
basket.addItem(new Item('item1', 500))
basket.addItem(new Item('item2', 600))
basket.addItem(new Item('item3', 800))
basket.addItem(new Item('item4', 300))


const newHeader = document.createElement('h1')
newHeader.innerText = 'Корзина'
newHeader.classList.add('newHeader')
hva.insertBefore(newHeader, hva.children[0])

const div = document.querySelector('div')

const how = basket.calcTotalPrice()
const totalPrice = document.createElement('div')
totalPrice.innerHTML = `<p> Итоговая цена: ${how} р.</p>`
totalPrice.classList.add('totalPrice')
hva.appendChild(totalPrice)

// Array.prototype.forEach.call(basket, product123 => {
//     // basket.forEach(product123 => {
//     const product = document.createElement('div')
//     product.innerText = product123
//     product.innerHTML = `<h1>${product123.name}</h1><p>${product123.price}</p>`
//     product.classList.add('product')
//     // console.log(product123)
//     basket.appendChild(product)
// })