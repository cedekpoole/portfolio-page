// add class navbarDark on navbar scroll
const header = document.querySelector('header');

window.onscroll = () => {
    const screenTop = window.scrollY;
    screenTop >= 100 ? 
    header.classList.add('navbar-darkmode') : 
    header.classList.remove('navbar-darkmode');
}