
/*
    for navbar toggle button
*/
const navbarToggle = document.getElementById('navbar-toggle');
const navList = document.getElementById('nav-list');

navbarToggle.addEventListener('click', () =>{
    navList.classList.toggle('nav-active');
    navbarToggle.classList.toggle("change");
})

window.onload = function (){
    autoSlide()
}

function sendSuggestionMail() {
    const name = document.getElementById('name-input').value;
    const suggestion = document.getElementById('suggestion-input').value;
    const text_suggestion = "%0D%0AHello! I\'m " + name +
                            "%0D%0A%0D%0A" + suggestion +
                            "%0D%0A%0D%0A" + "Best Regards,%0D%0A" + name + "%0D%0A%0D%0A";
    window.open('mailto:kadek0086@gmail.com?subject=Yicambalii Suggestion&body=' + text_suggestion);
}

function sendEmail()
{
    window.location = "mailto:kadek0086@gmail.com?subject=Yicambalii Order&body=Hello! I want to order Equipments/Services";
}

var i = 0;
function slide(){
    if(i > 2)
        i=0;
    document.getElementById('cont'+(i%3)).innerHTML = "Lorem Ipsum Dolor Sit Amet";
    document.getElementById('cont'+(i%3)).href = "TipsTricks.html";
    document.getElementById('cont'+((i+1)%3)).innerHTML = "Get a Good Camera Bag";
    document.getElementById('cont'+((i+1)%3)).href = "TipsTricks.html#GGcb";
    document.getElementById('cont'+((i+2)%3)).innerHTML = "Take The Batteries Out";
    document.getElementById('cont'+((i+2)%3)).href = "TipsTricks.html#TTbo";
    i++;
}

function autoSlide() {
    slide();
    setTimeout(autoSlide,3000);
}
