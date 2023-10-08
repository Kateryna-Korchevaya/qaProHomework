var Unit = "км";
var Value = 10; // Кількість одиниць виміру

// Змінна для збереження результату переведення
var result = 0;
var resultUnit = "";

// Виконати переведення відповідно до введених одиниць виміру
switch (Unit) {
    case "км":
        result = Value * 1000; // 1 км = 1000 метрів
        resultUnit = "м";
        break;
    case "г":
        result = Value * 60; // 1 година = 60 хвилин
        resultUnit = "хв";
        break;
    case "кг":
        result = Value * 1000; // 1 кг = 1000 грамів
        resultUnit = "г";
        break;
    default:
        console.log("Не відома одиниця виміру.");
}

// Вивести результат
    console.log(Value + " " + Unit + " це " + result + " " + resultUnit + " ");
