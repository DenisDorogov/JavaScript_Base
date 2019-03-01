// Урок 5

function createElement(id, elemClass, content) {
    var desk = document.getElementById(id);
    var putIn = document.createElement('div');
    putIn.classList.toggle(elemClass);
    putIn.innerHTML = content;
    desk.appendChild(putIn);
}

var size = 8;
var id = 'deskJS';
var iVL = size;
var iVR = size;
var iHT = 0;
var iHB = 0;
var letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'K', 'L', 'M', 'N', 'O', 'P'];
var iFields = 0;

for (var i = 1; i <= (size + 2) ** 2; i++) {
    if (i == 1 || i == size + 2 || i == (size + 2) ** 2 - size - 1 || i == (size + 2) ** 2) {
        createElement(id, 'corner', '');
    } else if (i > 1 && i <= size + 1) {
        createElement(id, 'edgeVL', iVL);
        iVL--;
    } else if (i > (size + 2) ** 2 - size - 1 && i <= (size + 2) ** 2) {
        createElement(id, 'edgeVR', iVR);
        iVR--;
    } else if (i % (size + 2) == 1) {
        createElement(id, 'edgeHT', letters[iHT]);
        iHT++;
    } else if (i % (size + 2) == 0) {
        createElement(id, 'edgeHB', letters[iHB]);
        iHB++;
        iFields++;
    } else if (i % (size + 2) >= 2 && i % (size + 2) <= 9) {
        if (iFields % 2 == 0) {
            createElement(id, 'field-white', '');
            iFields++;
        } else {
            createElement(id, 'field-black', '');
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
