//// Урок 7

var catalogue = [
    {
        name: 'Мяч',
        price: 300,
        count: 1,
        src: 'img/item1cat.jpg'
    },
    {
        name: 'Бита',
        price: 1000,
        count: 1,
        src: 'img/item2cat.jpg'
    },
    {
        name: 'Кепка',
        price: 800,
        count: 1,
        src: 'img/item3cat.jpg'
    },
    {
        name: 'Перчатка',
        price: 1500,
        count: 1,
        src: 'img/item4cat.jpg'
    },
    {
        name: 'Шлем',
        price: 2000,
        count: 1,
        src: 'img/item5cat.jpg'
    },
    {
        name: 'Сумка',
        price: 1200,
        count: 1,
        src: 'img/item6cat.jpg'
    }
];
var cart = [];
var $cart = document.getElementById('cart');
var $catalogue = document.getElementById('catalogue');
var itemNum = '';
var totalCart = 0;

$catalogue.addEventListener('click', handleAddClick); // Наблюдение за кликами в каталоге.
$cart.addEventListener('click', handleRemoveClick); // Наблюдение за кликами в корзине.


function handleAddClick(event) { // Функция реагирования на событие.
    if (event.target.className === 'button-buy') { //Проверяем, был ли клик по кнопке.
        var itemId = event.target.id; // Извлекаем id элемента по которому кликнули.
        var catChildren = $catalogue.children; //Извлекаем массив элементов каталога.

        for (var i = 0; i < $catalogue.children.length; i++) {
            if (itemId == catChildren[i].id) { // Выявляем какую кнопку кликнули.
                itemNum = i; // Получаем номер элемента, в массиве каталога товаров.
            }
        }
        var repeatItem = false;
        for (j = 0; j <= cart.length; j++) {
            if (cart[j] == catalogue[itemNum]) {
                cart[j].count = cart[j].count + 1;
                repeatItem = true;
            }
        }
        if (!repeatItem) cart.push(catalogue[itemNum]);
        buildCart(cart);
        getTotalCart(cart);
    }
}
getTotalCart(cart);
// Удаляем товары из корзины по клику.
function handleRemoveClick(event) {
    if (event.target.className === 'cart-clear') {
        cart = [];
        buildCart(cart);
        getTotalCart(cart);
        catalogCountsClear();
    }
    if (event.target.className === 'cart-item-clear') {
        for ( i = 0; i < cart.length; i++) {
            if (event.target.id == 'cart-item-clear' + i) {
                cart[i].count = 1;
                cart.splice(i, 1);
            }
        }
        buildCart(cart);
        getTotalCart(cart);
    }
}
// Обнуляем обекты каталога
function catalogCountsClear() {
    for (i = 0; i < catalogue.length; i++) catalogue[i].count = 1;
}

// Вычисляем стоимость корзины.
function getTotalCart(cart) {
    var totalCart = 0;
    if (cart.length == 0) {
        createElement('cart', 'div', 'total', 'total', '', 'Корзина пуста.');
    } else {
        for (i = 0; i < cart.length; i++) {
            totalCart += cart[i].price * cart[i].count;
        }
        createElement('cart', 'div', 'total', 'total', '', 'Сумма товара: ' + totalCart);
    }
    createElement('total', 'button', 'cart-clear', '', '', 'Очистить корзину');

}
// Формируем корзину.
function buildCart(cart) {
    $cart.innerHTML = '';
    for (var i = 0; i < cart.length; i++) {
        createElement('cart', 'div', 'cart-item', 'cart-item' + i, '', '');
        createElement('cart-item' + i, 'img', 'cart-item-img', '', cart[i].src, '');
        createElement('cart-item' + i, 'div', 'cart-item-about', '', '', 'Наименование товара: ' + cart[i].name + '<br>Цена товара: ' + cart[i].price + '<br>Количество: ' + cart[i].count);
        createElement('cart-item' + i, 'button', 'cart-item-clear', 'cart-item-clear' + i, '', 'Удалить');
    }
}
// Функция создания DOM элемента.
function createElement(parentID, type, elemClass, elemId, src, content) { 
    var $parent = document.getElementById(parentID);
    var $putIn = document.createElement(type);
    $putIn.classList.toggle(elemClass);
    $putIn.id = elemId;
    $putIn.src = src;
    $putIn.innerHTML = content;
    $parent.appendChild($putIn);
}
