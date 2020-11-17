//1

let num = 3;
console.log (`Task 1: num = ${num}`);


//2

let a = 10;
let b = 2;
console.log (`Task 2.1: a + b = ${a+b}`);
console.log (`Task 2.2: a - b = ${a-b}`);
console.log (`Task 2.3: a * b = ${a*b}`);
console.log (`Task 2.4: a / b = ${a/b}`);


//3

let c = 15;
let d = 2;
let result = c+d
console.log (`Task 3: result = ${result}`);


//4

a = 10;
b = 2;
c = 5;
console.log (`Task 4: a + b + c = ${a+b+c}`);


//5

a = 17;
b = 10;
c = a-b;
d = 7;
result = c+d;
console.log (`Task 5: c + d = ${c+d}`);


//6

let str = 'Привет, Мир!';
console.log (`Task 6: ${str}`);


//7

let str1 = 'Привет,';
let str2 = 'Мир!';
console.log ('Task' + ' ' + '7:' + ' ' + str1 + ' ' + str2);


//8

let name = 'Дриго';
console.log (`Task 8: Привет ${name}!`);


//9

let age = 24000;
console.log (`Task 9: Мне ${age} лет!`);


//10

a = 10;
b = 3;
console.log (`Task 10: Остаток от деления a на b = a%b = ${a%b}`);


//11

let a1 = prompt ('Введите значение a');
let b1 = prompt ('Введите значение b');

if (a1 % b1 == 0) {
    console.log (`Task 11.1: a делится на b без остатка`);
} else {
    console.log (`Task 11.1: a делится на b с остатком (остаток = ${a1%b1})`);
}

(a1 % b1 == 0) ? console.log (`Task 11.2: a делится на b без остатка`) : console.log (`Task 11.2: a делится на b с остатком (остаток = ${a1%b1})`);



//12
let st = Math.pow (2, 10); 
console.log (`Task 12: 2 в 10 степени = ${st}`);
