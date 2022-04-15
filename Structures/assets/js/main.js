
/*
    for navbar toggle button
*/
const navbarToggle = document.getElementById('navbar-toggle');
const navList = document.getElementById('nav-list');


navbarToggle.addEventListener('click', () =>{
    navList.classList.toggle('nav-active');
    navbarToggle.classList.toggle("change");
})

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
