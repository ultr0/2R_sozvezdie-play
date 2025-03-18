const menuBtn = document.querySelector('.menu-btn')
const main = document.querySelector('#main')

menuBtn.addEventListener('click', ()=>{
    main.classList.toggle('menu--active')
}) 
