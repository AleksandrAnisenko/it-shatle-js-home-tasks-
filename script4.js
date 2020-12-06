// Task 1
let but1 = document.querySelector('#but1');
but1.addEventListener('click',function(){
    alert('Привет!');
});


// Task 2
let but2 = document.querySelector('#but2');
but2.addEventListener('mouseover',function(){
    alert('Привет!');
});


// Task 3
let but3 = document.querySelector('#but3');
but3.addEventListener('dblclick',function(){
    alert('Привет!');
});


// Task 4
let div4 = document.querySelector('.task4');
div4.addEventListener('mouseout',function(){
    alert('Привет!');
});


// Task 5
let but5 = document.querySelector('#but5');
but5.addEventListener('click',function(){
    let value5 = document.getElementById('inp5');
    alert(value5.value);
});


// Task 6
let but6 = document.querySelector('#but6');
but6.addEventListener('click',function(){
    let value6 = document.getElementById('inp6');
    value6.value = 'Ой я поменял свой текст!';
});


// Task 7
let but7 = document.querySelector('#but7');
but7.addEventListener('click',function(){
    let img7 = document.getElementById('img7');
    img7.src = 'https://i.pinimg.com/736x/7c/13/a8/7c13a8c9f5f2c28a7538bb8c7708f38e.jpg';
});


// Task 8
let inp8 = document.querySelector('#inp8');
inp8.addEventListener('click',function(){
    alert(inp8.value)
});


// Task 9
let inp9 = document.querySelector('#inp9');
inp9.addEventListener('focus',function(){
    this.value = 'Ой, я поменял текст!';
});


// Task 10
let inp10 = document.querySelector('#inp10');
inp10.addEventListener('focus',function(){
    this.value = 'Ой, я поменял текст!';
});
inp10.addEventListener('blur',function(){
    this.value = 'Ой, а теперь еще раз поменял!';
});


// Task 11
let inp11 = document.querySelector('#inp11');
inp11.addEventListener('click',function(){
    this.value = 'Ky-Ky!';
});


// Task 12
let inp12 = document.querySelector('#inp12');
inp12.addEventListener('click',function(){
    this.value = 'О, теперь на меня больше не нажать!';
    this.disabled = true;
});


// Task 13
let img13 = document.querySelector('#img13');
img13.addEventListener('mouseover',function(){
    this.src = 'https://i.pinimg.com/736x/7c/13/a8/7c13a8c9f5f2c28a7538bb8c7708f38e.jpg';
});
img13.addEventListener('mouseout',function(){
    this.src = 'https://sun9-24.userapi.com/c856124/v856124855/617a5/18UhaNJGM94.jpg';
});


// Task 14
let but14 = document.querySelector('#but14');
but14.addEventListener('click',function(){
    let inp14 = document.getElementById('inp14');
    inp14.style.color = 'red';
    inp14.style.width = '300px';
});


// Task 15
let inp15 = document.getElementById('inp15');
let but15_1 = document.querySelector('#but15_1');
but15_1.addEventListener('click',function(){
    inp15.style.display = 'none';
});
let but15_2 = document.querySelector('#but15_2');
but15_2.addEventListener('click',function(){  
    inp15.style.display = 'inline-block';
});


// Task 16
let but16 = document.querySelector('#but16');
but16.addEventListener('click',function(){
    let inp16 = document.getElementById('inp16');
    inp16.value = 'Ой, я поменял свой текст и css!';
    inp16.style.color = 'red';
    inp16.style.width = '300px';
    inp16.style.height = '50px';
    inp16.style.borderRadius = '10px';
});


// Task 17
let inp17vis = document.querySelector('#inp17vis');
let inp17unvis = document.querySelector('#inp17unvis');
inp17unvis.style.display = 'none';
inp17vis.addEventListener('click',function(){
    this.value = 'О, теперь на меня больше не нажать!';
    this.disabled = true;
    inp17unvis.style.display = 'block';
});
inp17unvis.addEventListener('click',function(){
    this.style.display = 'none';
    inp17vis.value = 'О, на меня снова можно нажимать!';
    inp17vis.disabled = false;
});


// Task 18
let inp18 = document.querySelector('#inp18');
inp18.addEventListener('click',function(){
    this.value = Number(this.value) + 1; 
});


// Task 19
let but19 = document.querySelector('#but19');
but19.addEventListener('click',function(){
    let inp19 = document.getElementById('inp19');
    inp19.style.float = 'right';
    inp19.value = 'Теперь я плаваю справа!'
});


// Task 20
let but20 = document.querySelector('#but20');
but20.addEventListener('click',function(){
    let inp20 = document.getElementById('inp20');
    inp20.value = `Мои css классы: ${inp20.className}`
});


// Task 21
let inp21_1 = document.getElementById('inp21_1');
let inp21_2 = document.getElementById('inp21_2');
let but21 = document.querySelector('#but21');
but21.addEventListener('click',function(){
    let num21 = inp21_1.value;
    inp21_1.value = inp21_2.value;
    inp21_2.value = num21;
});


// Task 22
let inp22_1 = document.getElementById('inp22_1');
let inp22_2 = document.getElementById('inp22_2');
inp22_2.disabled = true; 
let but22 = document.querySelector('#but22');
but22.addEventListener('click',function(){
    inp22_2.value = inp22_1.value ** 2;
});


// Task 23
let inp23_1 = document.getElementById('inp23_1');
let inp23_2 = document.getElementById('inp23_2');
inp23_2.disabled = true; 
let but23 = document.querySelector('#but23');
but23.addEventListener('click',function(){
    isNaN(inp23_1.value) ? alert('Введено не число!') : inp23_2.value = inp23_1.value ** 2;
});


// Task 24
let inp24 = document.querySelector('#inp24');
inp24.addEventListener('click',function(){
    this.disabled = true;
    this.style.cursor = 'not-allowed'; 
});

// Task 25
let inp25 = document.querySelector('#inp25');
let inp25_pl = document.querySelector('#inp25_pl');
let inp25_mi = document.querySelector('#inp25_mi');
let inp25_de = document.querySelector('#inp25_de');
let inp25_um = document.querySelector('#inp25_um');
let inp25_1 = document.querySelector('#inp25_1');
let inp25_2 = document.querySelector('#inp25_2');
let inp25_3 = document.querySelector('#inp25_3');
let inp25_4 = document.querySelector('#inp25_4');
let inp25_5 = document.querySelector('#inp25_5');
let inp25_6 = document.querySelector('#inp25_6');
let inp25_7 = document.querySelector('#inp25_7');
let inp25_8 = document.querySelector('#inp25_8');
let inp25_9 = document.querySelector('#inp25_9');
let inp25_0 = document.querySelector('#inp25_0');

inp25_pl.addEventListener('click',function(){
    inp25.value+= '+';
});
inp25_mi.addEventListener('click',function(){
    inp25.value+= '-';
});
inp25_de.addEventListener('click',function(){
    inp25.value+= '/';
});
inp25_um.addEventListener('click',function(){
    inp25.value+= '*';
});
inp25_1.addEventListener('click',function(){
    inp25.value+= this.value;
});
inp25_2.addEventListener('click',function(){
    inp25.value+= this.value;
});
inp25_3.addEventListener('click',function(){
    inp25.value+= this.value;
});
inp25_4.addEventListener('click',function(){
    inp25.value+= this.value;
});
inp25_5.addEventListener('click',function(){
    inp25.value+= this.value;
});
inp25_6.addEventListener('click',function(){
    inp25.value+= this.value;
});
inp25_7.addEventListener('click',function(){
    inp25.value+= this.value;
});
inp25_8.addEventListener('click',function(){
    inp25.value+= this.value;
});
inp25_9.addEventListener('click',function(){
    inp25.value+= this.value;
});
inp25_0.addEventListener('click',function(){
    inp25.value+= this.value;
});


// Task new

console.log('%cTask new', 'color:coral;');


// Task 1

console.log('%cTask 1', 'color:coral;');

let elem1 = document.querySelector('#elem1');
elem1.classList.add('www');
console.log(elem1);

// Task 2

console.log('%cTask 2', 'color:coral;');

let elem2 = document.querySelector('#elem2');
elem2.classList.remove('www');
console.log(elem2);

// Task 3

console.log('%cTask 3', 'color:coral;');

let elem3 = document.querySelector('#elem3');
console.log(elem3.classList.contains('www'));

// Task 4

console.log('%cTask 4', 'color:coral;');

let elem4 = document.querySelector('#elem4');
elem4.classList.toggle('www');
console.log(elem4);

// Task 5

console.log('%cTask 5', 'color:coral;');

let elem5 = document.querySelector('#elem5');
let classesCount5 = elem5.classList.length;
console.log(classesCount5);

// Task 6

console.log('%cTask 6', 'color:coral;');

let elem6 = document.querySelector('#elem6');
elem6.classList.forEach(item => console.log(item));

// Task 7

console.log('%cTask 7', 'color:coral;');

let elem7 = document.querySelector('#elem7');
elem7.style.cssText = 'width: 30px; height: 30px; background: red; border: 1px solid black';
console.log(elem7);

// Task 8

console.log('%cTask 8', 'color:coral;');

let elem8 = document.querySelector('#elem8');
elem8.style.cssText = 'width: 30px; height: 30px; background: red; border: 1px solid black';
elem8.addEventListener('click',function(){
    console.log(this.tagName);
});

// Task 9

console.log('%cTask 9', 'color:coral;');

let elem9 = document.querySelector('#elem9');
elem9.style.cssText = 'width: 30px; height: 30px; background: red; border: 1px solid black';
elem9.addEventListener('click',function(){
    console.log(this.tagName.toLowerCase());
});

// Task 10

console.log('%cTask 10', 'color:coral;');

let elems10 = document.querySelectorAll('.www');
elems10.forEach(item => item.innerHTML+= item.tagName.toLocaleLowerCase());

// Task 11

console.log('%cTask 11', 'color:coral;');

let ol11 = document.querySelector('#ol11');
let li11 = document.createElement('li');
li11.innerHTML = ('li');
ol11.appendChild(li11);

// Task 12

console.log('%cTask 12', 'color:coral;');

let arr12 = [1,2,3,4,5];
let ul12 = document.querySelector('#ul12');
for (let i =0; i<arr12.length; i++){
    let li12 = document.createElement('li');
    li12.innerHTML = (`li ${arr12[i]}`);
    ul12.appendChild(li12);
}

// Task 13

console.log('%cTask 13', 'color:coral;');

let arr13 = [1,2,3,4,5];
let ul13 = document.querySelector('#ul13');
for (let i =0; i<arr12.length; i++){
    let li13 = document.createElement('li');
    li13.innerHTML = (`li ${arr13[i]}`);
    ul13.appendChild(li13);
    li13.addEventListener('click', function(){
        console.log(this.innerHTML)
    })
}

// Task 14

console.log('%cTask 14', 'color:coral;');

let ul14 = document.querySelector('#ul14');
let elem14 = document.querySelector('#elem14');
let newli = document.createElement('li');
newli.innerHTML = ('!!!'); 
ul14.insertBefore(newli, elem14);

// Task 15

console.log('%cTask 15', 'color:coral;');

let elem15 = document.querySelector('#elem15');
elem15.insertAdjacentHTML('beforebegin', '<span>!!!</span>');

// Task 16

console.log('%cTask 16', 'color:coral;');

let elem16 = document.querySelector('#elem16');
elem16.insertAdjacentHTML('afterend', '<span>!!!</span>');

// Task 17

console.log('%cTask 17', 'color:coral;');

let elem17 = document.querySelector('#elem17');
elem17.insertAdjacentHTML('afterbegin', '<span>!!!</span>');

// Task 18

console.log('%cTask 18', 'color:coral;');

let elem18 = document.querySelector('#elem18');
elem18.insertAdjacentHTML('beforeend', '<span>!!!</span>');

// Task 19

console.log('%cTask 19', 'color:coral;');

let elem19 = document.querySelector('#elem19');
elem19.firstElementChild.style.color = 'red';

// Task 20

console.log('%cTask 20', 'color:coral;');

let elem20 = document.querySelector('#elem20');
elem20.lastElementChild.style.color = 'red';

// Task 21

console.log('%cTask 21', 'color:coral;');

let elem21 = document.querySelector('#elem21');
let arr21 = elem21.children;
for(let i = 0; i<arr21.length; i++) {
    arr21[i].innerHTML+= '!';
} 

// Task 22

console.log('%cTask 22', 'color:coral;');

let p22 = document.querySelector('#p22');
p22.previousElementSibling.innerHTML+= '!';

// Task 23

console.log('%cTask 23', 'color:coral;');

let p23 = document.querySelector('#p23');
p23.nextElementSibling.innerHTML+= '!';

// Task 24

console.log('%cTask 24', 'color:coral;');

let p24 = document.querySelector('#p24');
p24.nextElementSibling.nextElementSibling.innerHTML+= '!';

// Task 25

console.log('%cTask 25', 'color:coral;');

let p25 = document.querySelector('#p25');
p25.parentElement.style.backgroundColor = 'red';

// Task 26

console.log('%cTask 26', 'color:coral;');

let p26 = document.querySelector('#p26');
p26.parentElement.parentElement.style.backgroundColor = 'red';

// Task 27

console.log('%cTask 26', 'color:coral;');

let parent27 = document.querySelector('#parent27');
let child27 = document.querySelector('#child27');
let but27 = document.querySelector('#but27');
but27.addEventListener('click',function(){
    parent27.removeChild(child27);
});

// Task 28

console.log('%cTask 28', 'color:coral;');

let parent28 = document.querySelector('#parent28');
let but28 = document.querySelector('#but28');
but28.addEventListener('click',function(){
    parent28.removeChild(parent28.lastElementChild);
});

// Task 29

console.log('%cTask 29', 'color:coral;');

let elem29 = document.querySelector('#elem29');
elem29.addEventListener('click',function(){
    this.remove();
});

// Task 30

console.log('%cTask 30', 'color:coral;');

let arr30 = document.querySelectorAll('#parent30 li');
for (i = 0; i < arr30.length; i++) {
    arr30[i].addEventListener('click',function(){
        this.remove();
    });
}

// Task 31

console.log('%cTask 31', 'color:coral;');

let inp31 = document.querySelector('#inp31');
let but31 = document.querySelector('#but31');
but31.addEventListener('click', function() {
    let cloneInp31 = inp31.cloneNode(true);
    but31.parentElement.insertBefore(cloneInp31, but31);
})

// Task 32

console.log('%cTask 32', 'color:coral;');

let arr32 = [1,2,3,4,5];
let ul32 = document.createElement('ul');
arr32.forEach(item => {
    let li32 = document.createElement('li');
    li32.innerHTML = item;
    ul32.appendChild(li32);
})

let body32 = document.querySelector('#body32');
body32.appendChild(ul32);

// Task 33

console.log('%cTask 33', 'color:coral;');

let inp33 = document.querySelector('#inp33');
let but33 = document.querySelector('#but33');
but33.addEventListener('click', function() {
    inp33.insertAdjacentHTML('afterend', '<input>');
})

// Task 34

console.log('%cTask 34', 'color:coral;');

let inp34 = document.querySelector('#inp34');
inp34.addEventListener('blur', function() {
    this.insertAdjacentHTML('afterend', '<input>');
    this.nextElementSibling.value = this.value;
    this.value = '';
})

// Task 35

console.log('%cTask 35', 'color:coral;');

let but35 = document.querySelector('#but35');
but35.addEventListener('click', function() {
    this.parentElement.style.display = 'none';
})