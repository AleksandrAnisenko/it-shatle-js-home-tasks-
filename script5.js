// Task 1


async function getTasks() {
    let result = await fetch('https://test-todoist.herokuapp.com/api/tasks').then(response =>
        response.json());
        result.forEach(element => {
            console.log(`Name: ${element.description}`)
        });
}
getTasks();


// Task 2

let names = ['AleksandrAnisenko', 'alexandvotinov', 'mojombo']
async function getUsers(names) {
    let result = [];
    for (i = 0; i < names.length; i++) {
        response = await fetch(`https://api.github.com/users/${names[i]}`).then(response => response.json())
                let name = response;
                result.push(name); 
        };
    console.log(result)
}
getUsers(names);


// Task 3
let newCategorie = {
        id:666,
        name:"MASTER!!!"
}
let addCategorie = document.querySelector('#add-categorie');
let categoriesList = document.querySelector('#categories-list');
addCategorie.addEventListener('click', async function(){
    let result = await fetch('https://test-todoist.herokuapp.com/api/categories', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(newCategorie)
    }).then(response => console.log(response.json()));
    getCategories();
});

async function getCategories() {
    let result = await fetch('https://test-todoist.herokuapp.com/api/categories').then(response =>
        response.json());
        categoriesList.innerHTML = '';
        for (i = 0; i < result.length; i++) {
            let div = document.createElement('div');
            div.innerHTML = result[i].name;
            categoriesList.appendChild(div);
        }
}
getCategories();