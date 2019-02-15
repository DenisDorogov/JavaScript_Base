var tempC = prompt("Введите температуру в градусах Цельсия");
var tempF = (9 / 5) * tempC + 32;
alert("Это равно: " + Math.round(tempF*10)/10 + " градусов по Фаренгейту" );

var name = "Василий";
var admin = name;
document.write("Выводим значение переменной 'admin' для третьего пункта задания: <b>" + admin + "</b>");

var example = 1000 + "108";
document.write("<br><br><br>Выражение 1000 + '108' будет записано как строчное значение: " + example);