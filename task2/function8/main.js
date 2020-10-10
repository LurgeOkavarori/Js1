
function power(val, pow) {
    if (pow == 1) {
        return val;
    } else {
        return val * power(val, pow - 1);
    }
}
const a = +prompt('Ваше число?');
const b = +prompt('Степень?');
alert(power(a, b));