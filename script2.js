// Task 1

console.log('%cTask 1', 'color:green;');

console.log(true + false);  // (true == 1) + (false == 0) = 1
console.log(12 / '6');  // 12 / ('6' == 6) == 2
console.log('number' + 15 + 3);  // ('number' + 15 ='number15') + 3 == 'number153'
console.log(15 + 3 + 'number');  // (15 + 3 == 18) + 'number' == 18number'
console.log([1] > null);  // ([1] == 1) > (null == 0) ----- true; 
console.log('foo' + +'bar');  // 'foo' + (+'bar' == NaN) == 'fooNaN';
console.log('true' == true);  // ('true' == NaN) == (true == 1) ----- false;
console.log(false == 'false');  // (false == 0) == ('false' == NaN) ----- false;
console.log(null == '');  // (null == 0) == ('' == 0) ----- false , т.к. null == null/indefined
console.log(!!'false' == !!'true');  // (!!'false' == 1) ==  (!!'true' == 1) ----- true
console.log(['x'] == 'x');  // (['x'] == 'x') == 'x' ----- true
console.log([] + null + 1);  // (([] == '') + null == 'null') + 1 == 'null1'
console.log(0 || "0" && {});  // ((0 == false || '0' == true) ----- true) && ({} == true) == {}
console.log([1,2,3] == [1,2,3]);  // 2 разных массива/объекта ----- false


// Task 2

console.log('%cTask 2 -----', 'color:green;');

let i2 = 3;

while (i2) {
  alert( i2-- );  // (1), т.к. i1-- уменьшает i1 на 1 после срабатывания alert()
}                // и при проверке условия в следующей итерации i1 == 0, а 0 это false 


// Task 3

console.log('%cTask 3', 'color:green;');

let i3 = 30;

while (i3 <= 61) {
  console.log(i3);
  i3++
}   


// Task 4

console.log('%cTask 4', 'color:green;');

let i4 = 12;

while (i4 <= 670) {
    if (i4 % 10 == 0) {
        console.log(i4);
    }
    i4++;
} 


// Task 5

console.log('%cTask 5', 'color:green;');

for (let i5 = 10; i5 <= 100; i5++) {
    console.log(i5);
}


// Task 6

console.log('%cTask 6', 'color:green;');

const arr6 = [1, 6, 8, 14, 0, 4];

for (let i6 = 0; i6 < arr6.length; i6++) {
    if (arr6[i6] > 3 && arr6[i6] < 10) {
        console.log(arr6[i6]);
    }
}


// Task 7

console.log('%cTask 7', 'color:green;');

const arr7 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let str7 = '-';

for (let i7 = 0; i7 < arr7.length; i7++) {
    str7+= arr7[i7] + '-';
}

 console.log(str7);


// Task 8

console.log('%cTask 8', 'color:green;');

const arr8 = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

for (let i8 = 0; i8 < arr8.length; i8++) {
    if (arr8[i8] == 'Sunday' || arr8[i8] == 'Saturday') {
        console.log('%c%s','font-weight: bold;', arr8[i8]);
    } else {
        console.log(arr8[i8]);
    }
 }


 // Task 9

console.log('%cTask 9', 'color:green;');

const arr9 = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let date = new Date();
let day = date.getDay();

for (let i9 = 0; i9 < arr9.length; i9++) {
    if (arr9[i9] == arr9[day]) {
        formatDate(date)
        console.log('%c%s','font-style: italic;', formatDate());
    } else {
        console.log(arr9[i9]);
    }
 }

 function formatDate(date) {
    let a = moment().format("DD MM YY");
    return a;
 }

  // Task 10

console.log('%cTask 10', 'color:green;');

const n = 1000;
let newN = n;
let num = 0;
for (let i10 = 0; newN >= 50; i10++) {
    newN = newN / 2;
    ++num;
}
console.log(newN);
console.log(num);