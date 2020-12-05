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


