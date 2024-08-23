// ___________________ меню бургер ___________________

const iconMenu = document.querySelector('.menu-icon');
if (iconMenu) {
    const menuBody = document.querySelector('.mobile-nav');
    const fadeBackground = document.querySelector('.mobile-nav-fade');
    const menuLinks = document.querySelectorAll('.mobile-nav-list a');
    const firstMenuItem = document.querySelector('.mobile-nav-link-select');

    // Обработчик клика на иконке меню
    iconMenu.addEventListener("click", function () {
        document.body.classList.toggle('lock');
        iconMenu.classList.toggle('active');
        menuBody.classList.toggle('active');
        fadeBackground.classList.toggle('active'); // Показать/скрыть подложку
    });

    // Обработчик клика на подложке
    fadeBackground.addEventListener("click", function () {
        document.body.classList.remove('lock');
        iconMenu.classList.remove('active');
        menuBody.classList.remove('active');
        fadeBackground.classList.remove('active');
    });

    // Обработчики клика на пунктах меню
    menuLinks.forEach(link => {
        link.addEventListener("click", function () {
            document.body.classList.remove('lock');
            iconMenu.classList.remove('active');
            menuBody.classList.remove('active');
            fadeBackground.classList.remove('active');
        });
    });
    
    // Обработчик клика на первом неактивном пункте меню
    firstMenuItem.addEventListener("click", function () {
        document.body.classList.remove('lock');
        iconMenu.classList.remove('active');
        menuBody.classList.remove('active');
        fadeBackground.classList.remove('active');
    });
}