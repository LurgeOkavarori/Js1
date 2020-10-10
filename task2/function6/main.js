const a = prompt('Что сделать с числами "5" и "8"( + , - , / , * )?');
const arg1 = 5;
const arg2 = 8;
function mathOperation(arg1, arg2, a) {
    switch (a) {
        case '+':
            return arg1 + arg2;
            break;
        case '-':
            return arg1 - arg2
            break;
        case '*':
            return arg1 * arg2
            break;
        case '/':
            return arg1 / arg2
            break;
    }
}
const arg3 = mathOperation(arg1, arg2, a);
alert(arg3)