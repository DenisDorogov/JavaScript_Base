//// Урок 6

var catalogue = [
    {
        name: 'Мяч',
        price: 300,
        count: 0,
        src: 'img/item1cat.jpg'
    },
    {
        name: 'Бита',
        price: 1000,
        count: 0,
        src: 'img/item2cat.jpg'
    },
    {
        name: 'Кепка',
        price: 800,
        count: 0,
        src: 'img/item3cat.jpg'
    },
    {
        name: 'Перчатка',
        price: 1500,
        count: 0,
        src: 'img/item4cat.jpg'
    },
    {
        name: 'Шлем',
        price: 2000,
        count: 0,
        src: 'img/item5cat.jpg'
    },
    {
        name: 'Сумка',
        price: 1200,
        count: 0,
        src: 'img/item6cat.jpg'
    }
];
var cart = [];
var $cart = document.getElementById('cart');
var $catalogue = document.getElementById('catalogue');
var itemNum = '';
var totalCart = 0;

$catalogue.addEventListener('click', handleAddClick);

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
            if ( cart[j] == catalogue[itemNum] ) {
                cart[j].count = cart[j].count + 1;
                repeatItem = true;
            } 
        }
        if (!repeatItem) cart.push(catalogue[itemNum]);
        console.log(cart);
        buildCart(cart);
        getTotalCart(cart);
    }
}

function getTotalCart(cart) {
    totalCart = totalCart + cart[cart.length - 1].price;
    var $totalCart = document.createElement('div');
    $totalCart.classList.toggle('total');
    if (cart.length == 0) {
        $totalCart.innerHTML = 'Корзина пуста.';
    } else {
        $totalCart.innerHTML = 'Сумма товара: ' + totalCart;
    }
    $cart.appendChild($totalCart);

}

function buildCart(cart) {
    $cart.innerHTML = '';
    for (var i = 0; i < cart.length; i++) {
        var $cartItem = document.createElement('div');
        $cartItem.classList.toggle('cart-item');
        $cartItem.id = 'cart-item' + i;
        $cart.appendChild($cartItem);
        var $cartImg = document.createElement('img');
        $cartImg.src = cart[i].src;
        $cartImg.classList.toggle('cart-item-img');
        $cartItem.appendChild($cartImg);
        var $cartAbout = document.createElement('div');
        $cartAbout.classList.toggle('cart-item-about');
        $cartAbout.innerHTML = 'Наименование товара: ' + cart[i].name + '<br>Цена товара: ' + cart[i].price + '<br>Количество: ' + cart[i].count;
        $cartItem.appendChild($cartAbout);
    }
}




//
//function createElement(parent, elemClass, content) {
//    
//    var putIn = document.createElement('div');
//    putIn.classList.toggle(elemClass);
//    putIn.innerHTML = content;
//    parent.appendChild(putIn);
//}
//
//var size = 8;
//var id = 'deskJS';
//var parent = document.getElementById(id);
//var iVL = size;
//var iVR = size;
//var iHT = 0;
//var iHB = 0;
//var letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'K', 'L', 'M', 'N', 'O', 'P'];
//var iFields = 0;
//
//for (var i = 1; i <= (size + 2) ** 2; i++) {
//    if (i == 1 || i == size + 2 || i == (size + 2) ** 2 - size - 1 || i == (size + 2) ** 2) {
//        createElement(parent, 'corner', '');
//    } else if (i > 1 && i <= size + 1) {
//        createElement(parent, 'edgeVL', iVL);
//        iVL--;
//    } else if (i > (size + 2) ** 2 - size - 1 && i <= (size + 2) ** 2) {
//        createElement(parent, 'edgeVR', iVR);
//        iVR--;
//    } else if (i % (size + 2) == 1) {
//        createElement(parent, 'edgeHT', letters[iHT]);
//        iHT++;
//    } else if (i % (size + 2) == 0) {
//        createElement(parent, 'edgeHB', letters[iHB]);
//        iHB++;
//        iFields++;
//    } else if (i % (size + 2) >= 2 && i % (size + 2) <= 9) {
//        if (iFields % 2 == 0) {
//            createElement(parent, 'field-white', '');
//            iFields++;
//        } else {
//            createElement(parent, 'field-black', '');
//            iFields++;
//        }
//    }
//}
//
//// Задание 2
//
//function getTotalCart(cart) {
//    var total = 0;
//    for (i = 0; i < cart.length; i++) {
//        total += cart[i].price * cart[i].count;
//    }
//    return total;
//}
//function createElementCart(id, elemClass, elemID, content) {
//    var desk = document.getElementById(id);
//    var putIn = document.createElement('div');
//    putIn.classList.toggle(elemClass);
//    putIn.id = elemID;
//    putIn.innerHTML = content;
//    desk.appendChild(putIn);
//}
//
//var cart = [
//    {
//        name: 'Мяч',
//        price: 300,
//        count: 3
//    },
//    {
//        name: 'Бита',
//        price: 1000,
//        count: 1
//    },
//    {
//        name: 'Кепка',
//        price: 800,
//        count: 1
//    }
//];
//var countItems = 0;
//for ( i = 0; i < cart.length; i++) {
//    createElementCart('cart', 'item', 'item' + i,'');
//    createElementCart('item' + i, 'cartImage', 'cartImage' + i, '');
//    createElementCart('item' + i, 'cartAbout', '', 'Название: ' + cart[i].name + '<br>Цена: ' + cart[i].price + '<br>Количество: ' + cart[i].count);
//    countItems += cart[i].count; 
//    
//}
//if ( countItems > 0) {
//    createElementCart('cart', 'total', '', 'Товаров ' + countItems + ' на сумму ' + getTotalCart(cart) + ' рублей.');
//} else createElementCart('cart', 'total', '', 'Корзина пуста.');
