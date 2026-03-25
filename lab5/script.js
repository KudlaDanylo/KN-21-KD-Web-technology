const chekButton = document.getElementById('chekButton');
const editButton = document.getElementById('editButton');
const vievText = document.getElementById('myText');
const mouseButton = document.getElementById('mouseButton');
const addElement =  document.getElementById('addElement');
const container = document.getElementById('container');
const delElement = document.getElementById('delElement');

// Додаткова кнопка
let counter = 15;
chekButton.addEventListener('click', function() {
    if (counter > 0) {
        counter --;
        if (counter > 0) {
            chekButton.textContent = `Натисніть ${counter} разів`;
        } else {
            chekButton.textContent = 'Готово!';
            alert('Danylo Kudla, варіант 15');
        }
    }
});

// Зміна тексту
editButton.addEventListener('click', function() {
    vievText.textContent = 'Текст змінено';
});

// Наведення курсора
mouseButton.addEventListener('mouseover', function() {
    this.style.backgroundColor = 'red';
});

mouseButton.addEventListener('mouseleave', function() {
    this.style.backgroundColor = '#f1f1f1';
});

// Додавання елементів
addElement.addEventListener('click', function() {
    let newElement = document.createElement('p');
    newElement.textContent = "Це новий введений елемент.";
    newElement.classList.add('element');
    container.appendChild(newElement);
});

// Видалення елементів
delElement.addEventListener('click', function(){
    let listElement = container.lastElementChild;
    if (listElement) {
        container.lastChild.remove();
    } else {
        alert('Нічого видалити');
    }

});