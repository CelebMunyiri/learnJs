'use strict';

///////////////////////////////////////
// Modal window
/*
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
*/
console.log(document.documentElement);
console.log(document.head)
console.log(document.body)
const header=document.querySelector('.header');
const allSeletion=document.querySelectorAll('.section');
console.log(allSeletion)
document.getElementById('section--1')
const allButton=document.getElementsByTagName('button');
console.log(allButton)
console.log(document.getElementsByClassName('btn'))
//creating and inserting elements

const message=document.createElement('div');
message.classList.add('cookie-message')
//message.textContent='we use cookies for improved functionality and analytics';
message.innerHTML='we use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it</button>';
//header.prepend(message)//puts the created class element at the top of the header class af first element
header.append(message)//puts the created class class as last elemt in the class
//header.append(message.cloneNode(true));//allows the div to appear in both places
header.before(message);//inserts created dib before header class
header.after(message)//inserts the created div after header class

//Delete elements
document.querySelector('.btn--close-cookie').addEventListener('click',()=>{
  message.remove()
});

//Styles
message.style.backgroundColor='#37383d';
message.style.width='120%';
console.log(message.style.backgroundColor);
console.log(getComputedStyle(message).height);
message.style.height=Number.parseFloat(getComputedStyle(message).height,10) +48+'px';

//using css custom properties
document.documentElement.style.setProperty('--color-primary','orangered');


//ATTRIBUTES
const logo=document.querySelector('.nav__logo');
console.log(logo.alt ,)
console.log(logo.src);
console.log(logo.className)
//non-stardand
logo.alt='Beautiful minimalist logo';
console.log(logo.alt);


