const menuBar = document.querySelector(".bar");
const menu = document.querySelector(".mobile-menu");
const menuIcon = document.querySelector(".menu-bar")


loadAllEventListeners();

function loadAllEventListeners(){
    menuBar.addEventListener('click',mobileMenu);
}

function mobileMenu(){
    menu.classList.toggle('show-menu');
    menuIcon.classList.toggle('fa-x');
    menuIcon.classList.toggle('fa-bars');
}