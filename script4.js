// Task 1
let but1 = document.querySelector('but1');
console.log(but1);
but1.addEventListener('click',function(){
    alert('Привет!');
});


// Task 1
let but2 = document.getElementById('but');
but2.addEventListener('mouseover',function(){
    alert('Привет!');
});

// Task 5
function valueAlert5() {
    let value5 = document.getElementById('task5');
    alert(value5.value);
}

// Task 6
function changeValue6() {
    let value6 = document.getElementById('task6');
    value6.value = 'Ой я поменял свой текст!';
}

// Task 7
function changeImg7() {
    let img7 = document.getElementById('task7');
    img7.src = 'https://i.pinimg.com/736x/7c/13/a8/7c13a8c9f5f2c28a7538bb8c7708f38e.jpg';
}



