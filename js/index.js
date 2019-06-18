const navbar = document.querySelector('.content-destination');
window.addEventListener('load', () => {
    navbar.style.background = 'papayawhip';
});

const floatingNav = document.querySelector('.main-navigation');
floatingNav.addEventListener('reset', () => {
    floatingNav.preventDefault();
});

const signUpBtn = document.querySelector('.btn');
signUpBtn.addEventListener('click', () => {
    alert("Sign Up today!");
});

const background = document.querySelector('body');
background.addEventListener('keydown', () => {
    background.style.fontSize = '2rem';
});
background.addEventListener('keyup', () => {
    background.style.fontSize = '1.5rem';
});

const welcome = document.querySelector('.intro h2');
welcome.addEventListener('mouseover', () => {
    welcome.style.color = 'turquoise';
});

const letsGo = document.querySelector('.content-section h2');
letsGo.addEventListener('mouseover', () => {
    letsGo.style.color = 'lightpink';
});

const adventureAwaits = document.querySelector('.content-section p');
adventureAwaits.addEventListener('click', () => {
    adventureAwaits.style.color = 'orange';
});

const textHeader = document.querySelector('.text-content h2');
textHeader.addEventListener('dblclick', () => {
    textHeader.style.color = 'red';
});

const img = document.querySelector('img');
img.addEventListener('click', () => {
    img.style.display = 'none';
});

const footer = document.querySelector('footer');
footer.addEventListener('click', () => {
    alert("Copyright Fun Bus 2018");
});








