//1.Напишіть регулярний вираз,який допоможе знайти принаймні шість символів і не містяти літери А (великої або малої)
/*
var re = /^(?!.*[Aa]).{6,}$/;
var str = "Example123";
if (re.test(str)) {
    console.log("Збіг знайдений.");
} else {
    console.log("Збіг не знайдений.");
}

 */

//2.В нас є масив обєктів в яких міститься email.За допомогою регулярного виразу створіть масив з адресами, гідними довіри. 
var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru"
    },
];

// Регулярний вираз для валідації email-адреси
var emailRegex = /^[A-Za-z0-9]+(\.[A-Za-z0-9]+)*@(gmail\.com|yahoo\.com)$/;

// Фільтруємо масив, залишаючи тільки валідні email-адреси
var trustedEmails = arr.filter(function (item) {
    return emailRegex.test(item.email);
});

console.log(trustedEmails);



