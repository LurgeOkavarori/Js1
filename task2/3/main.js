const a = +prompt('Чему равно число "a"?');
const b = +prompt('Чему равно число "b"?');
if ((a >= 1) && (b >= 1)) {
    alert(a - b);
}
else if (isNaN(a) && isNaN(b)) {
    alert("Ты шо удумал? В игрушки со мной играешь?");
}
else if ((a < 0) && (b < 0)) {
    alert(a * b);
}
else {
    alert(a + b);
}