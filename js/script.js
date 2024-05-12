// Toggle class active
const navbarNav = document.querySelector ('.navbar-nav');

//ketika menu di klik
document.querySelector('#menu-socmed'). onclick = () => {
    navbarNav.classList.toggle('active');
};

// Klik diluar sidebar untuk menghilangkan nav
const menu = document.querySelector('#menu-socmed');

document.addEventListener('click', function (e) {
    if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {       
        navbarNav.classList.remove('active');
    }
});