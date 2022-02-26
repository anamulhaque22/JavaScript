function loadData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(res => res.json())
        .then(data => console.log(data))
}


function loadUser() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(respons => respons.json())
        .then(data => showInUI(data))
}
const ul = document.querySelector('#userName');
function showInUI(data) {
    for (const user of data) {
        const li = document.createElement('li');
        li.innerText = user.name;
        ul.appendChild(li);
    }
}

/* function loadPhoto() {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => response.json())
        .then(data => displayPhoto(data));
}

function displayPhoto(data) {
    const photoSection = document.querySelector('.photo');
    console.log(data);
    for (const image of data) {
        const img = document.createElement('img');
        img.setAttribute('src', image.thumbnailUrl);
        photoSection.appendChild(img);
    }
} */

function loadUser5() {
    fetch('https://randomuser.me/api/?results=5')
        .then(res => res.json())
        .then(data => console.log(data));
}

window.onload = () => {
    loadUser5();
}