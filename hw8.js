/*var myObject = {
    name: "Albert",
    age: 30,
    city: "Odesa",

    getInfo: function() {
        for (var key in this) {
            if (typeof this[key] !== 'function') {
                console.log(key + ':', this[key]);
            }
        }
    }
};

// Виведемо інформацію про об'єкт
myObject.getInfo();

// Додаємо нову властивість до об'єкта
myObject.location = "New York";

// Виведемо інформацію про об'єкт зі щойно доданою властивістю
myObject.getInfo();

 */

var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн"
};

// Додавання послуги
services['Розбити скло'] = "200 грн";

services.price = function() {
    let totalPrice = 0;
    for (const service in this) {
        if (typeof this[service] === 'string' ) {
            totalPrice += parseFloat(this[service]);
        }
    }
    return totalPrice;
};

services.minPrice = function() {
    let minPrice = Infinity;
    for (const service in this) {
        if (typeof this[service] === 'string' ) {
            minPrice = Math.min(minPrice, parseFloat(this[service]));
        }
    }
    return minPrice === Infinity ? 0 : minPrice;
};

services.maxPrice = function() {
    let maxPrice = 0;
    for (const service in this) {
        if (typeof this[service] === 'string') {
            maxPrice = Math.max(maxPrice, parseFloat(this[service]));
        }
    }
    return maxPrice;
};

// Виводимо загальну вартість, мінімальну та максимальну ціни
console.log("Загальна вартість послуг: " + services.price() + " грн");
console.log("Мінімальна ціна послуги: " + services.minPrice() + " грн");
console.log("Максимальна ціна послуги: " + services.maxPrice() + " грн");

