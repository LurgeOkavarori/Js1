const arr = [300, 500, 800, 900, 350]

let countBasketPrice = arr.reduce(function (sum, price) {
    return sum + price;
});

alert(countBasketPrice); 