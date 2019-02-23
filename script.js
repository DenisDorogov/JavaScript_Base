// Функция вывода на страницу
function outPutInBlock(id, outTask) {
    var outTask;
    var divTask = document.getElementById(id);
    var taskResult = document.createElement('p');
    taskResult.innerHTML = '<h2>Задание ' + taskNumber + ':</h2>Ответ: <b>' + outTask + '</b>';
    divTask.appendChild(taskResult);
    taskNumber++;
}

// 1. Вывод простых чисел до 100
taskNumber = 1;
console.log('Задание 1: Простые числа');
var i = 3;
var arrSimple = [2]; //Добавляем первое простое число, т.к. этот алгоритм его не заметит.
while( i < 100) {
    for (var j = 2; j < i; j++ ) {
        if ( i % j == 0 ) {
            break;
        }
        if ( j == i - 1) {
            arrSimple.push(i); 
        }
    }
    i++;
}
console.log(arrSimple);
outPutInBlock('task1', arrSimple);

// Второй вариант решения первой задачи.
    //var i = 2;
    //var arrSimple = [];
    //while( i < 100) {
    //    var countDiv = 0;
    //    for (var j = 1; j < i; j++ ) {
    //        if ( i % j == 0 ) {
    //            countDiv++; // Считаем количество целых делителей. 
    //        }
    //    }
    //    if ( countDiv == 1) { //До деления на себя цикл не дойдет, по этому сравниваем с единицей.
    //            arrSimple.push(i); 
    //    }
    //    i++;
    //}
    //console.log(arrSimple);
    //outPutInBlock('task1', arrSimple);






// 2-3 Задание.
function countBasketPrice(cart) {
    cartSum = 0;
    for ( var i = 0; i < cart.length; i++) {
        var cartSum = cartSum + cart[i][1];
    }
    return cartSum;
}

var cart = [];
var items = [
    ['Мяч', 300, 0],
    ['Бита', 1000, 0],
    ['Кепка', 800, 0],
];
// Добавляем в корзину
var i = 0;
while(true) {
    var item = +prompt('Задание 2-3.\nЧто вы хотите купить? Введите номер товара \n1: Мяч - 300 рублей\n2: Бита - 1000 рублей\n3: Кепка - 800 рублей\n0: Завершение покупок');
    if ( item == 0) {
        break;
    }
    switch(item) {
        case 1: 
            cart[i] = items[item-1];
            break;
        case 2: 
            cart[i] = items[item-1];
            break;

        case 3: 
            cart[i] = items[item-1];
            break;
    }
    i++;
}
alert('Сумма Ваших покупок составляет: ' + countBasketPrice(cart));

// 4. Вывести от 0 до 9 используя только for.
console.log('Задание 4:');
for (var i = 0; i <= 9; console.log(i++)) {}

// 5. Нарисовать пирамиду
console.log('Задание 5:');
var x = '';
for (var i = 1; i <= 20; i++) {
    x += 'x';
    console.log(x);
}




