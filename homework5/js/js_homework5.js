// Запитуємо користувача про кількість років
const inputAge = prompt('Скільки тобі років:');

// Перевірка на введення числа та на від'ємне значення
if (!isNaN(inputAge) && inputAge >= 0) {
    const year = Number(inputAge);
    let message;

    // Визначаємо останню цифру числа
    const lastDigit = year % 10;

    // Визначаємо правильний відмінок для числа років
    if (year === 0) {
        message = '0 років';
    } else if (year === 1) {
        message = '1 рік';
    } else if (lastDigit === 1 && year !== 11) {
        message = `${year} рік`;
    } else if ((lastDigit >= 2 && lastDigit <= 4) ){
        message = `${year} роки`;
    } else {
        message = `${year} років`;
    }

    // Виводимо результат
    alert(`Ви ввели: ${message}`);
} else {
    // Повідомлення про помилку, якщо введено некоректне значення
    alert('Будь ласка, введіть число.');
}







