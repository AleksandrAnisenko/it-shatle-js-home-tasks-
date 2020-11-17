//1

const numForTask1 = 3;
console.log (`Task 1: ${numForTask1}`);


//2

const firstNumForTask2 = 10;
const secondNumForTask2 = 2;
const sumForTask2 = firstNumForTask2 + secondNumForTask2;
const differenceForTask2 = firstNumForTask2 - secondNumForTask2;
const multiplicationForTask2 = firstNumForTask2 * secondNumForTask2;
const divisionForTask2 = firstNumForTask2 / secondNumForTask2;
console.log (`Task 2.1: ${sumForTask2}`);
console.log (`Task 2.2: ${differenceForTask2}`);
console.log (`Task 2.3: ${multiplicationForTask2}`);
console.log (`Task 2.4: ${divisionForTask2}`);


//3

const firstNumForTask3 = 15;
const secondNumForTask3 = 2;
const resultForTask3 = firstNumForTask3 + secondNumForTask3;
console.log (`Task 3: ${resultForTask3}`);


//4

const firstNumForTask4 = 10;
const secondNumForTask4 = 2;
const thirdNumForTask4 = 5;
const sumForTask4 = firstNumForTask4 + secondNumForTask4 + thirdNumForTask4;
console.log (`Task 4: ${sumForTask4}`);


//5

const firstNumForTask5 = 17;
const secondNumForTask5 = 10;
const thirdNumForTask5 = firstNumForTask5 - secondNumForTask5;
const forthNumForTask5 = 7;
const resultForTask5 = thirdNumForTask5 + forthNumForTask5;
console.log (`Task 5: ${resultForTask5}`);


//6

const strForTask6 = 'Привет, Мир!';
console.log (`Task 6: ${strForTask6}`);


//7

const str1Fortask6 = 'Привет,';
const str2Fortask6 = 'Мир!';
const resultForTask6 = str1Fortask6 + str2Fortask6;
console.log (`Task 7: ${resultForTask6}`);


//8

const myName = 'Дриго';
console.log (`Task 8: Привет ${myName}!`);


//9

const myAge = 24000;
console.log (`Task 9: Мне ${myAge} лет!`);


//10

const firstNumForTask10 = 10;
const secondNumForTask10 = 3;
const resultForTask10 = 10 % 3;
console.log (`Task 10: ${resultForTask10}`);


//11

const firstNumForTask11 = prompt ('Введите первое значение');
const secondNumForTask11 = prompt ('Введите второе значение');
const resultForTask11 = firstNumForTask11 % secondNumForTask11;
if (resultForTask11 == 0) {
    console.log (`Task 11.1: делится без остатка`);
} else {
    console.log (`Task 11.1: делится с остатком (остаток = ${resultForTask11})`);
}

(resultForTask11 == 0) ? console.log (`Task 11.1: делится без остатка`) : console.log (`Task 11.1: делится с остатком (остаток = ${resultForTask11})`);



//12
const st = 2 ** 10; 
console.log (`Task 12: ${st}`);
