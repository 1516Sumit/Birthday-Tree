document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.querySelector('[data-collapse-toggle="navbar-default"]');
    const navbar = document.getElementById('navbar-default');
    const menuButton = document.getElementById('menuButton');
    const menuIcon = document.getElementById('menuIcon');
    const crossIcon = document.getElementById('crossIcon');
    const translateButton = document.getElementById('translate_button');
    const processButton = document.getElementById('process-button');
    const processSection = document.getElementById('process');

    // Toggle navbar visibility
    toggleButton.addEventListener('click', function () {
        navbar.classList.toggle('hidden');
    });

    // Toggle menu icon
    menuButton.addEventListener('click', function() {
        const isOpen = menuButton.getAttribute('aria-expanded') === 'true';

        if (isOpen) {
            menuButton.setAttribute('aria-expanded', 'false');
            menuIcon.classList.remove('hidden');
            crossIcon.classList.add('hidden');
        } else {
            menuButton.setAttribute('aria-expanded', 'true');
            menuIcon.classList.add('hidden');
            crossIcon.classList.remove('hidden');
        }
    });

    // Translate button functionality
    let isHindiVisible = false;

    translateButton.addEventListener('click', function () {
        const elementsEn = document.querySelectorAll('[data-translate="en"]');
        const elementsHi = document.querySelectorAll('[data-translate="hi"]');

        if (isHindiVisible) {
            elementsEn.forEach(el => el.style.display = 'block');
            elementsHi.forEach(el => el.style.display = 'none');
        } else {
            elementsEn.forEach(el => el.style.display = 'none');
            elementsHi.forEach(el => el.style.display = 'block');
        }

        isHindiVisible = !isHindiVisible;
    });

    // Scroll to process section
    const navbarHeight = document.querySelector('nav').offsetHeight;

    processButton.addEventListener('click', function (event) {
        event.preventDefault();
        const sectionTop = processSection.offsetTop;
        window.scrollTo({
            top: sectionTop - navbarHeight,
            behavior: 'smooth'
        });
    });

    // Close navbar if clicking outside
    document.addEventListener('click', function (event) {
        const isClickInside = navbar.contains(event.target) || menuButton.contains(event.target) || toggleButton.contains(event.target);

        if (!isClickInside && !navbar.classList.contains('hidden')) {
            navbar.classList.add('hidden');
            menuButton.setAttribute('aria-expanded', 'false');
            menuIcon.classList.remove('hidden');
            crossIcon.classList.add('hidden');
        }
    });

    // Close navbar when clicking on a link inside it
    navbar.querySelectorAll('a,button').forEach(link => {
        link.addEventListener('click', function () {
            if (!navbar.classList.contains('hidden')) {
                navbar.classList.add('hidden');
                menuButton.setAttribute('aria-expanded', 'false');
                menuIcon.classList.remove('hidden');
                crossIcon.classList.add('hidden');
            }
        });
    });

    // Initialize AOS if using the AOS library for animations
    AOS.init();
});