// Урок 5

function createElement(parent, elemClass, content) {
    
    var putIn = document.createElement('div');
    putIn.classList.toggle(elemClass);
    putIn.innerHTML = content;
    parent.appendChild(putIn);
}

var size = 8;
var id = 'deskJS';
var parent = document.getElementById(id);
var iVL = size;
var iVR = size;
var iHT = 0;
var iHB = 0;
var letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'K', 'L', 'M', 'N', 'O', 'P'];
var iFields = 0;

for (var i = 1; i <= (size + 2) ** 2; i++) {
    if (i == 1 || i == size + 2 || i == (size + 2) ** 2 - size - 1 || i == (size + 2) ** 2) {
        createElement(parent, 'corner', '');
    } else if (i > 1 && i <= size + 1) {
        createElement(parent, 'edgeVL', iVL);
        iVL--;
    } else if (i > (size + 2) ** 2 - size - 1 && i <= (size + 2) ** 2) {
        createElement(parent, 'edgeVR', iVR);
        iVR--;
    } else if (i % (size + 2) == 1) {
        createElement(parent, 'edgeHT', letters[iHT]);
        iHT++;
    } else if (i % (size + 2) == 0) {
        createElement(parent, 'edgeHB', letters[iHB]);
        iHB++;
        iFields++;
    } else if (i % (size + 2) >= 2 && i % (size + 2) <= 9) {
        if (iFields % 2 == 0) {
            createElement(parent, 'field-white', '');
            iFields++;
        } else {
            createElement(parent, 'field-black', '');
            iFields++;
        }
    }
}

// Задание 2

function getTotalCart(cart) {
    var total = 0;
    for (i = 0; i < cart.length; i++) {
        total += cart[i].price * cart[i].count;
    }
    return total;
}
function createElementCart(id, elemClass, elemID, content) {
    var desk = document.getElementById(id);
    var putIn = document.createElement('div');
    putIn.classList.toggle(elemClass);
    putIn.id = elemID;
    putIn.innerHTML = content;
    desk.appendChild(putIn);
}

var cart = [
    {
        name: 'Мяч',
        price: 300,
        count: 3
    },
    {
        name: 'Бита',
        price: 1000,
        count: 1
    },
    {
        name: 'Кепка',
        price: 800,
        count: 1
    }
];
var countItems = 0;
for ( i = 0; i < cart.length; i++) {
    createElementCart('cart', 'item', 'item' + i,'');
    createElementCart('item' + i, 'cartImage', 'cartImage' + i, '');
    createElementCart('item' + i, 'cartAbout', '', 'Название: ' + cart[i].name + '<br>Цена: ' + cart[i].price + '<br>Количество: ' + cart[i].count);
    countItems += cart[i].count; 
    
}
if ( countItems > 0) {
    createElementCart('cart', 'total', '', 'Товаров ' + countItems + ' на сумму ' + getTotalCart(cart) + ' рублей.');
} else createElementCart('cart', 'total', '', 'Корзина пуста.');
