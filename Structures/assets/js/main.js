
/*
    for navbar toggle button
*/
const navbarToggle = document.getElementById('navbar-toggle');

const navList = document.getElementById('nav-list');

navbarToggle.addEventListener('click', () =>{
    navList.classList.toggle('nav-active');

})

