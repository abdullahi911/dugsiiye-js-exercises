const toglebutton = document.querySelector('.toggle-button');
const navbar = document.querySelector('.navbar');
toglebutton.addEventListener('click',function () {
navbar.classList.toggle('active');
});