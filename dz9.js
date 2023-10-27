/* ДЗ1 Тусувати масив
Ми знаємо як відсортувати масив. А ось спробуйте його перемішати!

Приклад масиву: arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

Напишіть функцію myBlend(arr), яка перемішуватиме переданий їй масив.

 */
/*function myBlend(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        // Генеруємо випадковий індекс від 0 до i
        const j = Math.floor(Math.random() * (i + 1));

        // Обмін значень arr[i] і arr[j]
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
myBlend(arr);
console.log(arr); // Виведе перемішаний масив

 */


//2. ДЗ2 BigBoss
const company = {
    name: 'Велика Компанія',
    type: 'Головна компанія',
    platform: 'Платформа для продажу квитків',
    sellsSolution: 'Рішення для продажу квитків',
    clients: [
        {
            name: 'Клієнт 1',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків',
            partners: [
                {
                    name: 'Клієнт 1.1',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                },
                {
                    name: 'Клієнт 1.2',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                    partners: [
                        {
                            name: 'Клієнт 1.2.3',
                            type: 'subSubCompany',
                            uses: 'Рішення для продажу квитків',
                            sells: 'Рішення для продажу квитків',
                        }
                    ]
                }
            ]
        },
        {
            name: 'Клієнт 2',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків'
        }
    ]
};

function findValueByKey(companyName, companyObj) {
    if (companyObj.name === companyName) {
        return companyObj;
    }

    if (companyObj.clients) {
        for (const client of companyObj.clients) {
            const result = findValueByKey(companyName, client);
            if (result) {
                return result;
            }
        }
    }

    return null;
}

const companyNameToFind = 'Клієнт 2';
const subCompanyInfo = findValueByKey(companyNameToFind, company);

if (subCompanyInfo) {
    console.log("Знайдено інформацію про subCompany:", subCompanyInfo);
} else {
    console.log("subCompany з назвою", companyNameToFind, "не знайдено.");
}

