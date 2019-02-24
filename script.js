// Урок 4

// Задание 1 Число в объект.
function getObjectNumber(number) {
    var objectNumber = {};
    if (isNaN(number)) {
        console.log('Вы ввели не число!\n' + objectNumber);

    } else if (number > 999 || number < 0) {
        console.log('Введите число в правильном диапазоне\n' + objectNumber);
    } else {
        objectNumber.unit = (number % 10);
        number = (number - objectNumber.unit) / 10;
        objectNumber.dozens = (number % 10);
        number = (number - objectNumber.dozens) / 10;
        objectNumber.hundred = (number % 10);
        return objectNumber;
    }

}
var number;
console.log('Задание 1:')
console.log(getObjectNumber(prompt('Введите число от 0 до 999:')));

// Задание 2 Корзина в объекте
function getTotalCart(cart) {
    var total = 0;
    for (i = 0; i < cart.length; i++) {
        total += cart[i].price * cart[i].count;
    }
    return total;
}

var cart = [
    {
        name: 'Мяч',
        price: 300,
        count: 2
    },
    {
        name: 'Бита',
        price: 1000,
        count: 2
    },
    {
        name: 'Кепка',
        price: 800,
        count: 2
    }
];
console.log('Задание 2:\nСумма стоимости товаров в корзине равна: ' + getTotalCart(cart));

// 3. Например объект товара должен включать в себя все возможные параметры.
var article00123 = {
    name: '',
    price: '',
    color: '',
    size: '',
    length: '',
    width: '',
    heith: '',
    mass: '',
    // и т.п.
};
