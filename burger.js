const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const requestBtn = document.querySelector('.request-btn');

burger.addEventListener('click', () => {
    
    navLinks.classList.toggle('nav-active');
    requestBtn.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
});