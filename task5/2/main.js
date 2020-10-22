
// busket.reduce((result, cur) => {
//     return result + cur.price
// }, 0)
const div = document.querySelector('div')
const basket = [
    { name: 'item1', price: 500 },
    { name: 'item2', price: 600 },
    { name: 'item3', price: 800 },
    { name: 'item4', price: 300 },
];
// basket = ['Item 1', 'Item 2', 'Item 3', 'Item 4']
basket.forEach(item123 => {
    const item = document.createElement('div')
    item.innerText = item123
    item.innerHTML = `<h1>${basket[0].name}</h1><p>${basket[0].price}</p>`
    // Не понимаю как мне сделать так, чтоб оно подсасывало не 1ин индекс с элемента, а каждый со своего?
    item.classList.add('item')
    div.appendChild(item)
})

const hva = document.querySelector('main')
hva.classList.add('hva')
const newHeader = document.createElement('h1')
newHeader.innerText = 'Корзина'
newHeader.classList.add('newHeader')
hva.insertBefore(newHeader, hva.children[0])

const totalPrice = document.createElement('div')
totalPrice.innerText = 'Итоговая цена: 2200р'
totalPrice.classList.add('totalPrice')
hva.appendChild(totalPrice)