"use strict";
window.fineList = {
    searchFines : searchFines
}

//Ця зміна містить всі дані які в нас зберігаються у файлі data
let DB = data.finesData;

function isNumber(n) { return !isNaN(parseFloat(n)) && !isNaN(n - 0) }

function searchFines(searchKey) {
    // Створіть змінну для збереження результатів пошуку
    let searchResults = [];

    // Перевірте, чи searchKey не є пустим
    if (searchKey) {
        // Пошук за номером
        if (isNumber(searchKey)) {

            // Знайдіть штраф за введеним номером
            const foundFine = DB.find(fine => fine.номер === searchKey);

            // Якщо штраф знайдено, додайте його до результатів
            if (foundFine) {
                searchResults.push(foundFine);
            }
        }
        // Пошук за типом штрафу
        else {
            // Знайдіть всі штрафи з введеним типом
            const finesByType = DB.filter(function(item){return searchKey.includes(item.тип)});

            // Якщо штраф знайдено, додайте його до результатів
            if (finesByType) {
                searchResults = finesByType;
            }
        }
    }

    // Поверніть результати пошуку
    return searchResults;
}
