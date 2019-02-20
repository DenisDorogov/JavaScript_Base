// Функция вывода на страницу
function outPutInBlock(id, outTask) {
    var outTask;
    var divTask = document.getElementById(id);
    var taskResult = document.createElement("p");
    taskResult.innerHTML = "<h2>Задание " + taskNumber + ":</h2>Ответ: <b>" + outTask + "</b>";
    divTask.appendChild( taskResult );
    taskNumber++;
}

// 2. Чему будет равен x в примере ниже? Предварительный ответ х=5;
var a = 2;
var x = 1 + (a *= 2);
var id = "task2";
var taskNumber = 2;
outPutInBlock(id, x );


// 3. Сравнить два числа и сделать ссответствующую арифметическую операцию
id = "task3";
//Вводим случайниые числа а и b. Надоело вводить самому :-)
 a = Math.floor(Math.random() * 20 - 10);
var b = Math.floor(Math.random() * 20 - 10);

function operateByCondition(a, b,) {
    if ( a >= 0 && b >= 0) {
        return "а = " + a + " b = " + b +" Разница равна: " + Math.abs(a - b);
        } else if (a < 0 && b < 0) {
            return "а = " + a + " b = " + b +" Произведение равно: " + a * b;
        } else {
            return "а = " + a + " b = " + b +" Сумма равна: " + parseInt(a + b);
        }
}
var taskResult3 = operateByCondition(a, b);
outPutInBlock(id, taskResult3);

// 4. Вывод значений "а" начиная со случайной позиции 
var id = "task4";
function switchNumberA() {
    var a = Math.floor(Math.random() * 15);
    var arrResult = [];
    var i = 0;
    switch (a) {
        case 0:  arrResult.push(0);
        case 1:  arrResult.push(1); 
        case 2:  arrResult.push(2);
        case 3:  arrResult.push(3);
        case 4:  arrResult.push(4);
        case 5:  arrResult.push(5);
        case 6:  arrResult.push(6);
        case 7:  arrResult.push(7);
        case 8:  arrResult.push(8);
        case 9:  arrResult.push(9);
        case 10:  arrResult.push(10);
        case 11:  arrResult.push(11);
        case 12:  arrResult.push(12);
        case 13:  arrResult.push(13);
        case 14:  arrResult.push(14);
        case 15:  arrResult.push(15);
    }
    return arrResult;
}
outPutInBlock(id, switchNumberA());

// 5. Функции арифметических операций
var id = "task5";
function summ(a, b){
    var a = parseInt(a);
    var b = parseInt(b);
    return a + b;
}
function different(a, b){
    var a = parseInt(a);
    var b = parseInt(b);
    return a - b;
}
function multiply(a, b){
    var a = parseInt(a);
    var b = parseInt(b);
    return a * b;
}
function division(a, b){
    var a = parseInt(a);
    var b = parseInt(b);
    return a / b;
}

// 6. Функция выполнения арифметической операции
function mathOperation(arg1, arg2, operationName) {
    var operationName;
    var result;
    switch(operationName) {
        case "Сумма": result = summ(arg1, arg2);
        case "Разность": result = different(arg1, arg2);
        case "Умножение": result = multiply(arg1, arg2);
        case "Деление": result = division(arg1, arg2);
    }
    return result;
}

// 7. Сравнение null и 0;
var id = "task7";
taskNumber = 7;
var nNull = null;
var n0 = 0;
if ( nNull === 0 ){
    outPutInBlock(id, "Равны");
} else {
    outPutInBlock(id, "Не равны, т.к. 0 числовой тип данных, а null в принципе не имеет даже типа.");
}

// 8. Рекурсивная функция по возведению числа в степень.
var val = Math.floor(Math.random() * 10);
var pow = Math.floor(Math.random() * 9);
function power(val, pow) {
    if ( pow > 1 ) {
        return val * power(val, pow-1);
    } else {
        return val;
    }
}
outPutInBlock("task8", val + " в сепени "+ pow + " равны: " + power(val, pow));






