// Task 1

console.log('%cTask 1', 'color:yellow;');

let arrStr1 = ['a', 'b', 'c'],
    arrNum1 = [1, 2, 3],
    arrNew1 = [],
    result1 = arrNew1.concat(arrStr1, arrNum1);

console.log(result1);


// Task 2

console.log('%cTask 2', 'color:yellow;');

let arrStr2 = ['a', 'b', 'c'];
arrStr2.push(1,2,3);
console.log(arrStr2);


// Task 3

console.log('%cTask 3', 'color:yellow;');

let arrNum3 = [1, 2, 3];

console.log(arrNum3);
console.log(arrNum3.reverse());


// Task 4

console.log('%cTask 4', 'color:yellow;');

let arrNum4 = [1, 2, 3, 4, 5],
    result4 = arrNum4.slice(0, 3);

console.log(result4);


// Task 5

console.log('%cTask 5', 'color:yellow;');

let arrNum5 = [1, 2, 3, 4, 5],
    result5 = arrNum5.slice(3, 5);

console.log(result5);


// Task 6

console.log('%cTask 6', 'color:yellow;');

let frontEnd = {
    js: 'test',
    jq: 'hello',
    css: 'world'
},
    result6 = Object.keys(frontEnd);

console.log(result6);


// Task 7

console.log('%cTask 7', 'color:yellow;');

let arrNum7 = [1, 2, 3, 4, 5];
console.log(arrNum7);


console.log(customReverse(arrNum7));

function customReverse(arr) {
    let newArr = [];

    arr.forEach(item => {
        newArr.unshift(item);
    });

    return arrNum7 = newArr;
}


// Task 8

console.log('%cTask 8', 'color:yellow;');

let arrNum8 = [[1, 2, 3], [4, 5], [6]];

function sumArr8(array) {
    let sum8 = 0;
    array.forEach((item) => {
        item.forEach((item) => {
            sum8 += item;
        });
    });
    return sum8;
}

console.log(sumArr8(arrNum8));


// Task 9

console.log('%cTask 9', 'color:yellow;');

let arrNum9 = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];

function sumArr9(array) {
    let sum9 = 0;
    array.forEach(item => {
        item.forEach(item => {
            item.forEach(item => {
                sum9 += item;
            });
        });
    });
    return sum9;
}

console.log(sumArr9(arrNum9));


// Task 10

console.log('%cTask 10', 'color:yellow;');

let arrNum10 = [1, 2, 3],
    arrNumber10 = [1, 2, 3],
    arrayNum10 = [1, 3, 5];

function arrComparison(arr1, arr2) {
    if (arr1.length == arr2.length) {
        for (i = 0; i < arr1.length; i++) {
            if (arr1[i] == arr2[i]) {
                if (i == arr1.length - 1) {
                    return true;
                };
                continue;
            } else {
                return false;
            };
        };
    } else {
        return false;
    }
}


console.log(arrComparison(arrNum10, arrNumber10));
console.log(arrComparison(arrNum10, arrayNum10));
console.log(arrComparison(arrNumber10, arrayNum10));


// Task 11

console.log('%cTask 11', 'color:yellow;');

let arrNum11 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    arrNumNew11 = arrNum11.map(item => item ** 2);

console.log(arrNumNew11);


// Task 12

console.log('%cTask 12', 'color:yellow;');

let arrNum12 = [0, -1, 2, -3, 4, -5, 6, -7, 8, -9, 10],
    arrNumNew12 = arrNum12.filter(item => item < 0);

console.log(arrNumNew12);


// Task 13

console.log('%cTask 13', 'color:yellow;');

let arrNum13 = [0, -1, 2, -3, 4, -5, 6, -7, 8, -9, 10],
    result13 = arrNum13.reduce((sum, current) => {
        return sum + current;
    });

console.log(result13);


// Task 14

console.log('%cTask 14', 'color:yellow;');

let city1 = {};
city1.name = 'Город 2';
city1.population = '10 млн.';
let city2 = {
    name: 'Город 1',
    population: 1e6
};

console.log(city1);
console.log(city2);


city1.getName = function () {
    return this.name;
};
city2.getName = function () {
    return this.name;
};

console.log(city1.getName());
console.log(city2.getName());


city1.exportStr = function () {
    return `name = ${this.name} population = ${this.population}`;
};
city2.exportStr = function () {
    return `name = ${this.name} population = ${this.population}`;
};

console.log(city1.exportStr());
console.log(city2.exportStr());

// Task 15

console.log('%cTask 15', 'color:yellow;');

let date15 = new Date();
console.log(formatDate15(date15));

function formatDate15(date) {
    let a = moment().format("YY MM DD");
    return a;
}


// Task 16

console.log('%cTask 16', 'color:yellow;');

let date16 = new Date();
let minutes = (date16.getTime() / 1000 / 60);
console.log(`day: ${date16.getDate()}`);
console.log(`month: ${date16.getMonth()}`);
console.log(`Year: ${date16.getFullYear()}`);
console.log(minutes);



// Task min

console.log('%cTask min', 'color:yellow;');


const firstNum = 4;
const secondNum = -3;
function min(value1, value2) {
    return (value1 < value2) ?  value1 : value2; 
};
console.log(min(firstNum,secondNum));


// Task siEven

console.log('%cTask isEven', 'color:yellow;');

const myNum = 50;

function isEven(a) {
    return a%2 == 0;
}

console.log(isEven(myNum));