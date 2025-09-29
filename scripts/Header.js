// ========================================
// ФУНКЦИИ ХЕДЕРА - ОБЩИЕ ФУНКЦИИ
// Относится к: все страницы - header.html
// ========================================
function initHeaderSearch() {
    const searchBtn = document.getElementById('search-button');
    const navBtns = document.getElementById('nav-buttons');
    const searchInput = document.getElementById('search-input-container');
    const closeBtn = document.getElementById('close-search');
    const humBtn = document.getElementById('hum');
    const headerSecond = document.querySelector('.header-second');

    if (!searchBtn || !navBtns || !searchInput || !headerSecond) {
        console.error('Не все элементы для поиска найдены');
        return;
    }

    const searchField = searchInput.querySelector('.tex');
    if (!searchField) {
        console.error('Поле поиска (.tex) не найдено');
        return;
    }

    searchBtn.addEventListener('click', () => {
        navBtns.style.display = 'none';
        searchBtn.style.display = 'none';
        searchInput.style.display = 'flex';
        searchField.focus();
        headerSecond.classList.add('align-left');
    });

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            navBtns.style.display = '';
            searchBtn.style.display = '';
            searchInput.style.display = 'none';
            searchField.value = '';
            headerSecond.classList.remove('align-left');
        });
    }

    if (humBtn) {
        humBtn.addEventListener('click', () => {
            navBtns.style.display = '';
            searchBtn.style.display = '';
            searchInput.style.display = 'none';
            searchField.value = '';
            headerSecond.classList.remove('align-left');
        });
    }
}

// Инициализация hamburger меню
function initHamburgerMenu() {
    const hamburgerIcon = document.querySelector('.hamburger img');
    const hamburgerNav = document.querySelector('.hamburger-nav');

    if (!hamburgerIcon || !hamburgerNav) {
        console.error('Hamburger elements not found');
        return;
    }

    function toggleHamburgerMenu() {
        console.log('Toggling hamburger menu'); // Лог для отладки
        hamburgerNav.classList.toggle('active');
        hamburgerIcon.classList.toggle('active'); // Добавляем/удаляем класс active для иконки
    }

    // Обработчики для click и touchstart
    ['click', 'touchstart'].forEach(event => {
        hamburgerIcon.addEventListener(event, (e) => {
            console.log(`${event} event triggered on hamburger icon`); // Лог для отладки
            toggleHamburgerMenu();
        });
    });

    // Закрытие меню при клике вне его
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.hamburger') && !e.target.closest('.hamburger-nav')) {
            console.log('Click outside hamburger, closing menu'); // Лог для отладки
            hamburgerNav.classList.remove('active');
            hamburgerIcon.classList.remove('active');
        }
    });

    // Закрытие меню при клике на ссылки внутри меню
    const navLinks = hamburgerNav.querySelectorAll('.nav-button');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            console.log('Nav link clicked, closing menu'); // Лог для отладки
            hamburgerNav.classList.remove('active');
            hamburgerIcon.classList.remove('active');
        });
    });

    console.log('Hamburger menu initialized successfully');
}

// Инициализация после загрузки DOM
document.addEventListener('DOMContentLoaded', () => {
    initHeaderSearch();
    initHamburgerMenu();
});

function includeHTML(id, url, callback) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
            if (typeof callback === 'function') {
                callback();
            }
        })
        .catch(error => {
            console.error('Ошибка загрузки HTML:', error);
        });
}