let name = document.querySelector('.name');
let password = document.querySelector('.password');
let space = document.querySelector('.space');

function sign() {
space.innerHTML = `Your name is: ${name.value}`;
space.innerHTML += `<br>Your password is: ${password.value}`;
}