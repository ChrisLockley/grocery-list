// ingredients(groceries) 
/*[
    {
        "grocery": 'bananas',
        "amount": '6'
    },
    {
        "grocery": 'oranges',
        "amount": '5'
    },
    {
        "grocery": 'grapes',
        "amount": '1'
    },
    {
        "grocery": 'milk',
        "amount": '2'
    },
    {
        "grocery": 'bread',
        "amount": '2'
    },
    {
        "grocery": 'creamer',
        "amount": '2'
    },
    {
        "grocery": 'coffee',
        "amount": '2'
    }
]*/

const form = document.querySelector('form');
const ul = document.querySelector('ul');
let groceryList = window.localStorage.getItem('groceries')

let removeFunc = (e) => {
    let list = document.querySelectorAll('li');
    let toRemove = e.target.closest('li');
    let groLi = groceryList.splice();

    for (let i = 0; i < list.length; i += 1) {
        let current = list[i];
        if (current.innerText === toRemove.innerText) {
            groLi.splice(i, 1);
            break;
        }
    }
    window.localStorage.setItem('groceries', JSON.stringify(groLi));
    toRemove.remove(toRemove);
}

form.addEventListener('submit', (event) => {
    event.preventDefault();

    let grocery = event.target;
    grocery = grocery.children[0].value;

    event.target.children[0].value = '';

    let groceries = JSON.parse(window.localStorage.getItem('groceries'));

    let listItem = document.createElement('li');
    listItem.innerText = grocery;

    let deleteBtn = document.createElement('input');
    deleteBtn.type = 'button';
    deleteBtn.value = 'Delete';
    deleteBtn.onclick = (event) => {removeFunc(event)};
    listItem.append(deleteBtn);

    ul.append(listItem);

    groceries.push(grocery);
    window.localStorage.setItem('groceries', JSON.stringify(groceries));
});

if (!groceryList) {
    groceryList = [];
}
else {
    groceryList = JSON.parse(groceryList)
}

for (let i = 0; i < groceryList.length; i += 1) {
    let listItem = document.createElement('li');
    listItem.innerText = groceryList[i];
    
    let deleteBtn = document.createElement('input');
    deleteBtn.type = 'button';
    deleteBtn.value = 'Delete';
    deleteBtn.onclick = (event) => {removeFunc(event)};
    listItem.append(deleteBtn);
    ul.append(listItem);
}

reset.addEventListener('click', () => {
    localStorage.removeItem('groceries');
    grocery = 0;
    groceries.innerText = grocery;
    localStorage.setItem('grocery', JSON.stringify(grocery));
});