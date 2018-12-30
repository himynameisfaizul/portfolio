//Navigation menu
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');

let showMenu = false;
menuBtn.addEventListener('click', toggleMenu);

function toggleMenu(){
    if(!showMenu){
        menuBtn.classList.add('close');
        menuNav.classList.add('show');
        menu.classList.add('show');
        menuBranding.classList.add('show');
        navItems.forEach(item =>  item.classList.add('show'));

        showMenu = true;
    }else{
        menuBtn.classList.remove('close');
        menuNav.classList.remove('show');
        menu.classList.remove('show');
        menuBranding.classList.remove('show');
        navItems.forEach(item =>  item.classList.remove('show'));

        showMenu = false;
    }
}


//portfolio bg img
var image = document.querySelectorAll('div.shadow > img');

//function utk check slide event
function checkSlide(e){
    
    var wScroll = window.scrollY
    console.log(wScroll);

    switch(true){
        case (wScroll < 50):
            image[0].classList.add('opaque');
            image[1].classList.remove('opaque');
            image[2].classList.remove('opaque');
        break;
        case (wScroll >= 50 && wScroll < 100):
            image[0].classList.remove('opaque');
            image[1].classList.add('opaque');
            image[2].classList.remove('opaque');
        break;
        case (wScroll >= 100 && wScroll < 120):
            image[0].classList.remove('opaque');
            image[1].classList.remove('opaque');
            image[2].classList.add('opaque');
        break;
        default:
            image[0].classList.add('opaque');
            image[1].classList.remove('opaque');
            image[2].classList.remove('opaque');
        break;
    }
    //if menuNav.classList.add('show');
}

//initiate scroll event
window.addEventListener('scroll', checkSlide);