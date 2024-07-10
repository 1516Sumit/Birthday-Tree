document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('[data-collapse-toggle="navbar-default"]');
    const navbar = document.getElementById('navbar-default');
    
    toggleButton.addEventListener('click', function() {
        navbar.classList.toggle('hidden');
    });

    // const translateButton = document.getElementById('google_element');
    // const translateElement = document.getElementById('google_translate_element');
    
    // translateButton.addEventListener('click', function(event) {
    //     event.preventDefault();
    //     if (translateElement.style.display === 'none' || translateElement.style.display === '') {
    //         translateElement.style.display = 'block';
    //         translateElement.style.top = `${translateButton.offsetTop + translateButton.offsetHeight}px`;
    //         translateElement.style.left = `${translateButton.offsetLeft}px`;
    //         if (typeof google !== 'undefined' && google.translate.TranslateElement) {
    //             new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
    //         } else {
    //             console.error('Google Translate API not loaded');
    //         }
    //     } else {
    //         translateElement.style.display = 'none';
    //     }
    // });

    const translateButton = document.getElementById('translate_button');
    let isHindiVisible = false;

    translateButton.addEventListener('click', function() {
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

    const navbarHeight = document.querySelector('nav').offsetHeight;
    const processButton = document.getElementById('process-button');
    const processSection = document.getElementById('process');

    processButton.addEventListener('click', function(event) {
        event.preventDefault();
        const sectionTop = processSection.offsetTop;
        window.scrollTo({
            top: sectionTop - navbarHeight,
            behavior: 'smooth'
        });
    });

    AOS.init(); // If using AOS library for animations
});
