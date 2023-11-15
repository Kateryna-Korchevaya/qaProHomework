function payFine() {
 // Отримати значення з полів вводу
 let enteredFineNumber = fineNumber.value;
 let enteredPassport = passport.value;
 let enteredCreditCardNumber = creditCardNumber.value;
 let enteredCVV = cvv.value;
 let enteredAmount = amount.value;

 // Знайти відповідний штраф в DB за введеним номером
 let matchingFine = DB.find(fine => fine.номер === enteredFineNumber);

 // Перевірка на відповідність номеру та суми
 if (!matchingFine || matchingFine.сума !== enteredAmount) {
  alert("Номер не співпадає або сума не співпадає");
  return;
 }

 // Перевірка паспортних даних
 let passportPattern = /^[А-Я]{2}\d{6}$/; // Формат "дві літери + 6 цифр"
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
 } else {
  alert("Помилка: не вдалося видалити штраф з бази даних.");
 }

 // Очищаємо поля вводу після оплати
 fineNumber.value = "";
 passport.value = "";
 creditCardNumber.value = "";
 cvv.value = "";
 amount.value = "";
}

return;
 }

 // Якщо валідація пройшла успішно, видаляємо штраф з DB
 let indexToRemove = DB.indexOf(matchingFine);
 if (indexToRemove !== -1) {
  DB.splice(indexToRemove, 1);
  alert("Штраф оплачено та видалено з бази даних.");
 } else {
  alert("Помилка: не вдалося видалити штраф з бази даних.");
 }

 // Очищаємо поля вводу після оплати
 fineNumber.value = "";
 passport.value = "";
 creditCardNumber.value = "";
 cvv.value = "";
 amount.value = "";
}
