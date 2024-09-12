
document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.getElementById('menu-btn');
    const navMenu = document.querySelector('nav ul');

    menuBtn.addEventListener('click', function () {
        navMenu.classList.toggle('active');
    });
});