// Функция вывода на страницу
function outPutInBlock(id, outTask) {
    var outTask;
    var divTask = document.getElementById(id);
    var taskResult = document.createElement("p");
    taskResult.innerHTML = "<h2>Задание " + taskNumber + ":</h2>Ответ: <b>" + outTask + "</b>";
    divTask.appendChild( taskResult );
    taskNumber++;
}

// 2. Чему будет равен x в примере ниже? Предварительный ответ х=4;
var a = 2;
var x = 1 + (a *= 2);
var id = "task2";
var taskNumber = 2;
outPutInBlock(id, x);
//var divTask2 = document.getElementById("task2");
//var task2result = document.createElement("p");
//task2result.innerHTML = "<h2>2 Задание:</h2>x = <b>" + x + "</b>, Согласно приоритету операторов.";
//divTask2.appendChild( task2result );

// 3. 
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

// 4.
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





