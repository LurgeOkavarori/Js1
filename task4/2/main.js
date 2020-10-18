
function sumPrices(busket) {

    let sum = 0;
    for (let itemPrice of Object.values(busket)) {
        sum += itemPrice;
    }

    return sum;
}

let busket = {
    item1: 500,
    item2: 600,
    item3: 800,
    item4: 300,
};

alert(sumPrices(busket));
