const button = document.getElementById('btn');
const h1 = document.getElementById('hello');

button.addEventListener('keydown', fun);
function fun() {
    h1.style.color = 'red';
    h1.style.fontSize = '50px';
}