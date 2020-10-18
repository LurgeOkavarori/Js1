
let task1 = {
    number: +prompt('Ваше число от 0 до 999:'),
    edinizi: 0,
    desyatki: 0,
    sotni: 0,
};

if (task1.number <= 999) {
    task1.edinizi = Math.floor(task1.number % 10);
    task1.desyatki = Math.floor(task1.number / 10 % 10);
    task1.sotni = Math.floor(task1.number / 100 % 10);
} else {
    task1 = {};
    console.log('Ну уж нет, мы так не договаривались!');
}
console.log(task1);
