
document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('[data-collapse-toggle="navbar-default"]');
    const navbar = document.getElementById('navbar-default');
    
    toggleButton.addEventListener('click', function() {
        navbar.classList.toggle('hidden');
    });
});
