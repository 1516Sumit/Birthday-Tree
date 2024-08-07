document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.querySelector('[data-collapse-toggle="navbar-default"]');
    const navbar = document.getElementById('navbar-default');
    const menuButton = document.getElementById('menuButton');
    const menuIcon = document.getElementById('menuIcon');
    const crossIcon = document.getElementById('crossIcon');
    const translateButton = document.getElementById('translate_button');
    const translateOptions = document.getElementById('translate_options');
    const processButton = document.getElementById('process-button');
    const processSection = document.getElementById('process');

    const languageMap = {
        'English': 'en',
        'Hindi': 'hi',
        'Punjabi': 'pa',
        'Gujarati': 'gu',
        'Marathi': 'mr',
        'Kannada': 'kn',
        'Malayalam': 'ml',
        'Tamil': 'ta',
        'Telugu': 'te',
        'Odia/Oriya': 'or',
        'Bengali': 'be',
        'Assamese': 'as',
        'Sindhi': 'sd'
    };

    // Toggle navbar visibility
    toggleButton.addEventListener('click', function () {
        navbar.classList.toggle('hidden');
    });

    // Toggle menu icon
    menuButton.addEventListener('click', function(event) {
        event.stopPropagation();
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

    // Translate dropdown
    translateButton.addEventListener('click', function(event) {
        event.stopPropagation();
        if (translateOptions.style.display === 'block') {
            translateOptions.style.display = 'none';
        } else {
            translateOptions.style.display = 'block';
        }
    });

    // Close the dropdown if the user clicks outside of it
    window.addEventListener('click', function(event) {
        if (!event.target.matches('#translate_button') && !event.target.closest('#translate_options')) {
            translateOptions.style.display = 'none';
        }
    });

    // Close navbar if clicked outside of navbar
    document.addEventListener('click', function (event) {
        const isClickInside = navbar.contains(event.target) || menuButton.contains(event.target) || toggleButton.contains(event.target) || translateButton.contains(event.target) || translateOptions.contains(event.target);

        if (!isClickInside && !navbar.classList.contains('hidden')) {
            navbar.classList.add('hidden');
            menuButton.setAttribute('aria-expanded', 'false');
            menuIcon.classList.remove('hidden');
            crossIcon.classList.add('hidden');
        }
    });

    // Close navbar when clicking on a link inside it, except for the translate button
    navbar.querySelectorAll('a, button').forEach(link => {
        link.addEventListener('click', function () {
            if (link !== translateButton && !navbar.classList.contains('hidden')) {
                navbar.classList.add('hidden');
                menuButton.setAttribute('aria-expanded', 'false');
                menuIcon.classList.remove('hidden');
                crossIcon.classList.add('hidden');
            }
        });
    });

    // Translate elements and highlight selected language
    translateOptions.addEventListener('click', function(event) {
        event.preventDefault();
        const target = event.target;
        if (target.tagName.toLowerCase() === 'a') {
            // Remove selected class from all options
            translateOptions.querySelectorAll('a').forEach(option => {
                option.classList.remove('selected-language');
            });

            // Add selected class to clicked option
            target.classList.add('selected-language');

            const language = target.textContent.trim();
            const languageCode = languageMap[language];
            
            Object.values(languageMap).forEach(code => {
                const elements = document.querySelectorAll(`[data-translate="${code}"]`);
                elements.forEach(el => {
                    el.style.display = (code === languageCode) ? 'block' : 'none';
                });
            });

            translateOptions.style.display = 'none';
        }
    });

    // Adding offset for scrolling
    const navbarHeight = document.querySelector('nav').offsetHeight;
    if (processButton && processSection) {
        processButton.addEventListener('click', function (event) {
            event.preventDefault();
            const sectionTop = processSection.offsetTop;
            window.scrollTo({
                top: sectionTop - navbarHeight,
                behavior: 'smooth'
            });
        });
    }

    // Initialize AOS
    // AOS.init();
});
