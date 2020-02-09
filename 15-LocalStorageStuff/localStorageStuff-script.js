const form = document.querySelector('form');
const list = document.querySelector('#list');
const nameBox = document.querySelector('.nameBox');
const titleBox = document.querySelector('.titleBox');
let items;

if(localStorage.getItem('items') && !(localStorage.getItem('items') == '')){
    items = JSON.parse(localStorage.getItem('items'));
} else {
    items = [];
}
console.log(items);


for(let i = 0; i < items.length; i++){
    console.log(i);
    let emp = document.createElement('div');
    emp.classList.add('listItem');
    emp.innerHTML = `
    <p class="name">${items[i].name}</p>
    <p class="title">${items[i].title}</p>`;
    list.appendChild(emp);
}




form.addEventListener('submit', (e) => {
    e.preventDefault();
    addEmp();
    saveToLocal();
    form.reset();
});

list.addEventListener('click', (e) => handleClick(e));
function handleClick(e) {
    if(e.target.matches('.title')){
        alert('OIOI MATE you clicked on a title');
    }
}

function addEmp() {
    let emp = document.createElement('div');
    emp.classList.add('listItem');
    emp.innerHTML = `
        <p class="name">${nameBox.value}</p>
        <p class="title">${titleBox.value}</p>`;

    list.appendChild(emp);
    items.push({name:nameBox.value, title:titleBox.value});
}

function saveToLocal() {
    localStorage.setItem('items', JSON.stringify(items));
}

function ri(){  //resetItems
    localStorage.setItem('items', '');
}
