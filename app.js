const filter = document.querySelector('.filter-container');
const filterbtn = document.querySelector('.filter-btn1');
const filterimg = document.querySelector('.filter-container__titel__img')
const accordion1 = document.querySelector('.filter-container__item1__category');
const accordion2 = document.querySelector('.filter-container__item2__category');
const accordion3 = document.querySelector('.filter-container__item3__category');
const accordion4 = document.querySelector('.filter-container__item4__category');
const display1 = document.querySelector('.dis-none1');
const display2 = document.querySelector('.dis-none2');
const display3 = document.querySelector('.dis-none3');
const display4 = document.querySelector('.dis-none4');

const rotate = document.querySelectorAll('.deg');
const color = document.querySelectorAll('.color');



filterbtn.addEventListener('click' , function(){
    filter.classList.toggle('dis-none')
});
filterimg.addEventListener('click' , function(){
    filter.classList.toggle('dis-none')
})

accordion1.addEventListener('click' , ()=>{
    display1.classList.toggle('dis-none');
    rotate[0].classList.toggle('rotate');
    color[0].classList.toggle('color-red');
});
accordion2.addEventListener('click' , ()=>{
    display2.classList.toggle('dis-none');
    rotate[1].classList.toggle('rotate');
    color[1].classList.toggle('color-red');
});
accordion3.addEventListener('click' , ()=>{
    display3.classList.toggle('dis-none');
    rotate[2].classList.toggle('rotate');
    color[2].classList.toggle('color-red');
});
accordion4.addEventListener('click' , ()=>{
    display4.classList.toggle('dis-none');
    rotate[3].classList.toggle('rotate');
    color[3].classList.toggle('color-red');
});