document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('[data-collapse-toggle="navbar-default"]');
    const navbar = document.getElementById('navbar-default');
    
    toggleButton.addEventListener('click', function() {
        navbar.classList.toggle('hidden');
    });

    const translateButton = document.getElementById('google_element');
    const translateElement = document.getElementById('google_translate_element');
    
    translateButton.addEventListener('click', function(event) {
        event.preventDefault();
        if (translateElement.style.display === 'none' || translateElement.style.display === '') {
            translateElement.style.display = 'block';
            translateElement.style.top = `${translateButton.offsetTop + translateButton.offsetHeight}px`;
            translateElement.style.left = `${translateButton.offsetLeft}px`;
            if (typeof google !== 'undefined' && google.translate.TranslateElement) {
                new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
            } else {
                console.error('Google Translate API not loaded');
            }
        } else {
            translateElement.style.display = 'none';
        }
    });

    AOS.init(); // If using AOS library for animations
});
