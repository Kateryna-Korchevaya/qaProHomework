"use strict";
/**
Перед вами список полів. Це можна сказати пряме посилання на кожне із полів форми.
Якщо ви додасте до змінної .value (fineNumber.value) то отримаєте значення
яке зберігається в цьому полі.
 */
let fineNumber = document.getElementById("fineNumber");
let passport = document.getElementById("passport");
let creditCardNumber = document.getElementById("creditCardNumber");
let cvv = document.getElementById("cvv");
let amount = document.getElementById("amount");
let buttonSubmit = document.getElementById("payFine");

//Ця зміна містить всі дані які в нас зберігаються у файлі data
let DB = data.finesData;


/**
Вам необхідно реалізувати наступний функціонал.
Зробити валідацію до всіх полів
1. Номер та сума повинні бути однакові як в існуючого штрафу - якщо ні видавати
alert "Номер не співпадає" або "Сума не співпадає"

2. Паспортні дані у форматі - перші дві літери укр алфавіту, та 6 цифр.
Якщо не співпадає то видавати alert "Не вірний паспортний номер"

3. Номер кредитної карки 16 цифр -
якщо не співпадає то видавати alert "Не вірна кредитна картка"

4. cvv 3 цифри - якщо не співпадає то видавати alert "Не вірний cvv".

Якщо валідація проходить успішно, то виконати оплату,
 тобто вам потрібно видалити обєкт з DB
 */
// Отримати значення з полів вводу
let enteredFineNumber = fineNumber.value;
let enteredPassport = passport.value;
let enteredCreditCardNumber = creditCardNumber.value;
let enteredCVV = cvv.value;
let enteredAmount = amount.value;

// Знайти відповідний штраф в DB за введеним номером
let matchingFine = DB.find(fine => fine.номер === enteredFineNumber);

// Перевірка на відповідність номеру та суми
if (!matchingFine || matchingFine.сума !== Number(enteredAmount)) {
 alert("Номер не співпадає або сума не співпадає");
 return;
}

// Перевірка паспортних даних
let passportPattern = /^[А-Яа-я]{2}\d{6}$/; // Формат "дві літери + 6 цифр"
if (!passportPattern.test(enteredPassport)) {
 alert("Не вірний паспортний номер");
 return;
}

// Перевірка номеру кредитної картки
let creditCardPattern = /^\d{16}$/; // 16 цифр
if (!creditCardPattern.test(enteredCreditCardNumber)) {
 alert("Не вірна кредитна картка");
 return;
}

// Перевірка CVV
let cvvPattern = /^\d{3}$/; // 3 цифри
if (!cvvPattern.test(enteredCVV)) {
 alert("Не вірний CVV");
 return;
}

// Якщо валідація пройшла успішно, видаляємо штраф з DB
let indexToRemove = DB.indexOf(matchingFine);
if (indexToRemove !== -1) {
 DB.splice(indexToRemove, 1);
 alert("Штраф оплачено та видалено з бази даних.");
 clearInputFields(); // Очищаємо поля вводу після оплати
} else {
 alert("Помилка: не вдалося видалити штраф з бази даних.");
}

function clearInputFields() {
 fineNumber.value = "";
 passport.value = "";
 creditCardNumber.value = "";
 cvv.value = "";
 amount.value = "";
}

buttonSubmit.addEventListener('click',payFine);
function payFine(){

}