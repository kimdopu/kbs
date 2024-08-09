const mainMenuEl = document.querySelector('.main-menu');
const menuBgEl = document.querySelector('.menu-bg');

console.log(mainMenuEl);
console.log(menuBgEl);

mainMenuEl.addEventListener('mouseover',function(){
    menuBgEl.classList.add('on');
});
mainMenuEl.addEventListener('mouseout',function(){
    menuBgEl.classList.remove('on');
});
menuBgEl.addEventListener('mouseover',function(){
    menuBgEl.classList.add('on');
    mainMenuEl.classList.add('on');
});
menuBgEl.addEventListener('mouseout',function(){
    menuBgEl.classList.remove('on');
    mainMenuEl.classList.remove('on');
});
const mobileMenuEl = document.querySelector('.mobile-menu');
const mobileboxEl = document.querySelector('.mobile-box');
const mobileCloseEl = document.querySelector('.close')

mobileMenuEl.addEventListener('click',function(){
    mobileboxEl.classList.add('show');
});
mobileCloseEl.addEventListener('click',function(){
    mobileboxEl.classList.remove('show');
});