function myBlend(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        // Генеруємо випадковий індекс від 0 до i
        const j = Math.floor(Math.random() * (i + 1));

        // Міняємо елементи з індексами i та j
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Викликаємо функцію для перемішування масиву arr
myBlend(arr);

// Виводимо перемішаний масив
console.log(arr);
