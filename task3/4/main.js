const arr = ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x']
let pyramid = arr.reduce(function (sum, cross) {
    console.log(sum);
    return sum + cross;
}, 'x');

