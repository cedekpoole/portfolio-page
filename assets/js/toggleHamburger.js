const toggleButton = document.getElementById('toggle-hamburger');
const navLinks = document.querySelector('.nav-links');
const link = document.querySelectorAll('.nav-links li');


// when hamburger menu is pressed, show navigation links
toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('show-nav-links')
});


// when each navigation link is pressed, close hamburger menu
link.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.toggle('show-nav-links')
    })
})

